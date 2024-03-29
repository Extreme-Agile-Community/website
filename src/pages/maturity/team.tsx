import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useForm, SubmitHandler } from "react-hook-form";
import Admonition from '@theme/Admonition';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);
enum SCMEnum {
  "no" = 0,
  "branching" = 1,
  "trunk" = 2,
}

enum PeerReviewEnum {
  "no" = 0,
  "pull request" = 1,
  "pair programming" = 2,
}

enum TestingEnum {
  "no" = 0,
  "only unit" = 1,
  "multi level" = 2
}

enum ValidationEnum {
  "local" = 0,
  "pre-production environment" = 1,
  "production environment" = 2
}

enum ReleaseEnum {
  "Manual" = 0,
  "auto pre-production" = 1,
  "auto production" = 2
}

enum EnvironmentsEnum {
  "pre-production" = 1,
  "production only" = 2
}

enum ActivationEnum {
  "deploy" = 1,
  "feature flags" = 2
}

enum HealthEnum {
  "user ticket" = 0,
  "flaky monitoring" = 1,
  "reliable monitoring" = 2
}

interface IFormInput {
  "Source Control Manager": SCMEnum,
  "Peer Review Methodology": PeerReviewEnum,
  "Testing Methodology": TestingEnum,
  "Validation Methodology": ValidationEnum,
  "Release Methodology": ReleaseEnum,
  "Environments": EnvironmentsEnum,
  "Activation Strategy": ActivationEnum,
  "Health Validation": HealthEnum,
}

function MaturityDropdown({register, label, values}: any): JSX.Element {
  return (
      <div>
        <label>{label}</label>
        <select style={{textTransform:"capitalize"}} className="form-select" {...register}>
          {Object.entries(values).filter(([_, value]) => typeof value !== "string").map(([name, value]: any)=>
            <option value={value}>{name}</option>
          )}
        </select>
      </div>)
}

function TeamMaturityForm({onSubmit}: any): JSX.Element {

  const { register, handleSubmit } = useForm<IFormInput>()
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <MaturityDropdown 
        register={register("Source Control Manager")} 
        label="Source Control Manager" 
        values={SCMEnum} />
      <MaturityDropdown 
        register={register("Peer Review Methodology")} 
        label="Peer Review Methodology" 
        values={PeerReviewEnum} />
      <MaturityDropdown 
        register={register("Testing Methodology")} 
        label="Testing Methodology" 
        values={TestingEnum} />
      <MaturityDropdown 
        register={register("Validation Methodology")} 
        label="Validation Methodology" 
        values={ValidationEnum} />
      <MaturityDropdown 
        register={register("Release Methodology")} 
        label="Release Methodology" 
        values={ReleaseEnum} />
      <MaturityDropdown 
        register={register("Environments")} 
        label="Environments" 
        values={EnvironmentsEnum} />
      <MaturityDropdown 
        register={register("Activation Strategy")} 
        label="Activation Strategy" 
        values={ActivationEnum} />
      <MaturityDropdown 
        register={register("Health Validation")} 
        label="Health Validation" 
        values={HealthEnum} />
      <button className='button button--primary' type="submit">Calculate</button>
    </form>
  )
}

export default function TeamMaturityPage(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();

    const [ data, setData ] = useState();
    const [ maturity, setMaturity ] = useState();
    const UpdateGraph = (result) => {
      const data: any = Object.values(result).map(Number);
      const total = data.reduce((acc, num) => num + acc, 0)
      if(data.includes(0))
        setMaturity("Low")
      else if(data.every((value) => value === 2))
        setMaturity("Elite")
      else if(total>13)
        setMaturity("High")
      else
      setMaturity("Average")
      
      setData({
      labels: Object.keys(result),
      datasets: [{
        data
      }]
    })
  }
  const options = {
      scales: {
          r: {
              suggestedMin: 0,
              suggestedMax: 2
          }
      }
  };

    return (
      <Layout
        title={`${siteConfig.title} - Team Maturity Model`}
        description="Agility Content & Maturity Models">
        <main>
          <TeamMaturityForm onSubmit= {(data) => UpdateGraph(data)} />
          {maturity && <Admonition title="Your Tean is performing at" type={
            maturity === "Low"
            ? "danger" 
            : maturity === "Average"
              ? "warning" 
              : maturity === "High"
                ? "info" 
                : "tip"
            }><h3>{maturity} Level</h3></Admonition>}
          {data && <Radar data={data} options={options} /> }
        </main>
      </Layout>
    );
}
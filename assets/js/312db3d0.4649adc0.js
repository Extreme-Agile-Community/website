"use strict";(self.webpackChunkextremeagile=self.webpackChunkextremeagile||[]).push([[206],{4224:(e,t,n)=>{n.r(t),n.d(t,{default:()=>M});var r=n(7462),l=n(7294),o=n(7961),a=n(2263),i=n(7536),u=n(5750),c=n(6495);u.kL.register(u.l7,u.od,u.jn,u.Gu,u.u,u.De);var s=function(e){return e[e.no=0]="no",e[e.branching=1]="branching",e[e.trunk=2]="trunk",e}(s||{}),m=function(e){return e[e.no=0]="no",e[e["pull request"]=1]="pull request",e[e["pair programming"]=2]="pair programming",e}(m||{}),g=function(e){return e[e.no=0]="no",e[e["only unit"]=1]="only unit",e[e["multi level"]=2]="multi level",e}(g||{}),d=function(e){return e[e.local=0]="local",e[e["pre-production environment"]=1]="pre-production environment",e[e["production environment"]=2]="production environment",e}(d||{}),p=function(e){return e[e.Manual=0]="Manual",e[e["auto pre-production"]=1]="auto pre-production",e[e["auto production"]=2]="auto production",e}(p||{}),b=function(e){return e[e["pre-production"]=1]="pre-production",e[e["production only"]=2]="production only",e}(b||{}),v=function(e){return e[e.deploy=1]="deploy",e[e["feature flags"]=2]="feature flags",e}(v||{}),y=function(e){return e[e["user ticket"]=0]="user ticket",e[e["flaky monitoring"]=1]="flaky monitoring",e[e["reliable monitoring"]=2]="reliable monitoring",e}(y||{});function f(e){let{register:t,label:n,values:o}=e;return l.createElement("div",null,l.createElement("label",null,n),l.createElement("select",(0,r.Z)({style:{textTransform:"capitalize"},className:"form-select"},t),Object.entries(o).filter((e=>{let[t,n]=e;return"string"!=typeof n})).map((e=>{let[t,n]=e;return l.createElement("option",{value:n},t)}))))}function E(e){let{onSubmit:t}=e;const{register:n,handleSubmit:r}=(0,i.cI)();return l.createElement("form",{onSubmit:r(t)},l.createElement(f,{register:n("Source Control Manager"),label:"Source Control Manager",values:s}),l.createElement(f,{register:n("Peer Review Methodology"),label:"Peer Review Methodology",values:m}),l.createElement(f,{register:n("Testing Methodology"),label:"Testing Methodology",values:g}),l.createElement(f,{register:n("Validation Methodology"),label:"Validation Methodology",values:d}),l.createElement(f,{register:n("Release Methodology"),label:"Release Methodology",values:p}),l.createElement(f,{register:n("Environments"),label:"Environments",values:b}),l.createElement(f,{register:n("Activation Strategy"),label:"Activation Strategy",values:v}),l.createElement(f,{register:n("Health Validation"),label:"Health Validation",values:y}),l.createElement("button",{className:"button button--primary",type:"submit"},"Calculate"))}function M(){const{siteConfig:e}=(0,a.Z)(),[t,n]=(0,l.useState)(),[r,i]=(0,l.useState)();return l.createElement(o.Z,{title:`${e.title} - Team Maturity Model`,description:"Agility Content & Maturity Models"},l.createElement("main",null,l.createElement(E,{onSubmit:e=>(e=>{const t=Object.values(e).map(Number),r=t.reduce(((e,t)=>t+e),0);t.includes(0)?i("Low"):t.every((e=>2===e))?i("Elite"):i(r>14?"High":"Average"),n({labels:Object.keys(e),datasets:[{data:t}]})})(e)}),r&&l.createElement("label",null,"Your Tean is ",r),t&&l.createElement(c.Fk,{data:t,options:{scales:{r:{suggestedMin:0,suggestedMax:2}}}})))}}}]);
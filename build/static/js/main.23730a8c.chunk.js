(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{253:function(e,t,n){},254:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(155),o=n(101),i=n(160),c=n(111),s=n(161),u=n(159),l=n(72),d=n.n(l),f=n(261),j=n(36),h=function(e){var t=e.jsonData,n=void 0===t?[]:t,r=e.title,l=void 0===r?"Income Forcasting":r,h=e.dataKey,m=void 0===h?"income":h,b=e.color,v=void 0===b?"green":b,p=Object(a.useState)([]),x=Object(o.a)(p,2),g=x[0],O=x[1];Object(a.useEffect)((function(){n.length&&O(n.map((function(e){var t=d()(e.date);return console.log(t.toDate()),{name:t.toDate().toString(),value:[t.format("YYYY/M/D"),e[m]]}})))}),[n]),Object(a.useEffect)((function(){if(g.length){var e=setTimeout((function(){g.push(function(){var e=g[g.length-1],t=d()(e.name).add(1,"months"),n=g.filter((function(e){return e.name.includes(t.format("MMM"))})).map((function(e){return e.value[1]})),a=n.reduce((function(e,t){return e+t}),0)/n.length,r=g.map((function(e){return e.value[1]})).reduce((function(e,t){return e+t}),0)/g.length,o=2,i=(a*o*(Math.random()+1)+r)/(o+1);return{name:t.toDate().toString(),value:[t.format("YYYY/M/D"),Math.round(i)]}}()),O(Object(s.a)(g))}),2e3);return function(){return clearTimeout(e)}}}),[g]);var y,M={title:{text:l,left:"center"},tooltip:{trigger:"axis",show:!0,formatter:function(e){e=e[0];var t=new Date(e.name);return t.getDate()+"/"+(t.getMonth()+1)+"/"+t.getFullYear()+" : "+e.value[1]}},xAxis:{type:"time",splitLine:{show:!1}},yAxis:{type:"value",boundaryGap:[0,"100%"],splitLine:{show:!1}},series:[{name:"Amount",type:"line",showSymbol:!1,data:g,lineStyle:{color:v}}]},S={},w=[],Y=[{title:"Month",dataIndex:"month",key:"month"}],D=Object(c.a)(g);try{for(D.s();!(y=D.n()).done;){var I=y.value,A=d()(I.name),E=A.format("YYYY"),N=A.format("MMMM"),F=I.value[1];S[E]||(S[E]=0),S[E]+=F,Y.filter((function(e){return e.title==E})).length||Y.push({title:E,dataIndex:E,key:E});var R=w.findIndex((function(e){return e.month==N})),T="RM"+Number(F).toLocaleString();R>-1?w[R][E]=T:w.push(Object(i.a)({month:N},E,T))}}catch(k){D.e(k)}finally{D.f()}return Object(j.jsxs)("div",{style:{padding:20},children:[Object(j.jsx)("div",{style:{display:"flex",overflow:"auto",gap:20,justifyContent:"center",width:"100%",paddingBottom:30},children:Object.entries(S).map((function(e,t){var n=Object(o.a)(e,2),a=n[0],r=n[1];return Object(j.jsxs)("div",{style:{border:"1px solid "+v,color:v,padding:10,borderRadius:8,width:200},children:[Object(j.jsxs)("h4",{children:["Total ",l," (",a,")"]}),Object(j.jsxs)("div",{children:["RM",Number(r).toLocaleString()]})]},t)}))}),Object(j.jsx)(u.a,{option:M}),Object(j.jsx)(f.a,{dataSource:w,columns:Y,pagination:!1})]})},m=n(138),b=function(e){var t=e.setData;Object(a.useEffect)((function(){var e=window.localStorage.getItem("xlsx");e&&t(JSON.parse(e))}),[]);return Object(j.jsx)("div",{children:Object(j.jsx)("input",{type:"file",onChange:function(e){if(e.target.files){var n=new FileReader;n.onload=function(e){var n,a=e.target.result,r=m.a(a,{type:"array"}),o=r.SheetNames[0],i=r.Sheets[o],s=m.b.sheet_to_json(i),u=[],l={},f=Object(c.a)(s);try{for(f.s();!(n=f.n()).done;){var j=n.value;if("Month"!=j.Income)for(var h in l){var b=l[h];u.push({date:j.Income+"-"+h,income:j[b[0]],expanditure:j[b[1]]})}else for(var v in j){if("Income"!=v&&"Expenditure"!=v)l[h=j[v]]||(l[h]=[]),l[h].push(v)}}}catch(p){f.e(p)}finally{f.f()}u.sort((function(e,t){return d()(e.date)-d()(t.date)})),window.localStorage.setItem("xlsx",JSON.stringify(u)),t&&t(u)},n.readAsArrayBuffer(e.target.files[0])}}})})},v=(n(253),n(262));function p(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(b,{setData:r}),Object(j.jsxs)(v.a,{defaultActiveKey:"1",children:[Object(j.jsx)(v.a.TabPane,{tab:"Income",children:Object(j.jsx)(h,{jsonData:n,title:"Income Forcasting",dataKey:"income",color:"green"})},"1"),Object(j.jsx)(v.a.TabPane,{tab:"Expenditure",children:Object(j.jsx)(h,{jsonData:n,title:"Expenditure Forcasting",dataKey:"expanditure",color:"red"})},"2")]})]})}var x=document.getElementById("root");Object(r.createRoot)(x).render(Object(j.jsx)(a.StrictMode,{children:Object(j.jsx)(p,{})}))}},[[254,1,2]]]);
//# sourceMappingURL=main.23730a8c.chunk.js.map
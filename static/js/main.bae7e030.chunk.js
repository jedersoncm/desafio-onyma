(this["webpackJsonpdesafio-onyma"]=this["webpackJsonpdesafio-onyma"]||[]).push([[0],{15:function(e,c,s){},24:function(e,c,s){},30:function(e,c,s){"use strict";s.r(c);var a=s(0),t=s(1),n=s(17),i=s.n(n),r=s(8),o=(s(24),s(2)),l=s(10),d=Object(t.createContext)();var m=function(e){var c=e.children,s=Object(t.useState)([]),n=Object(l.a)(s,2),i={clinics:n[0],setClinics:n[1]};return Object(a.jsx)(d.Provider,{value:i,children:c})};s(15);var p=function(){return Object(a.jsx)("div",{className:"header",children:Object(a.jsx)("h1",{children:"Visualizador de Cl\xednicas"})})},u=[{name:"EHS SOLU\xc7\xd5ES INTELIGENTES",address:"Rua Bar\xe3o do Triunfo, 612 / CJ 901",cep:"04602-002",email:"contato@ehsss.com.br",whatsapp:"(11) 93477-9755",services:"Exames Cl\xednicos, Exames Complementares, PPRA, PCMSO"},{name:"SA ASSESSORIA",address:"Rua Joaquim Guarani, 105",cep:"04707-060",email:"selma@saassessoria.com.br",whatsapp:"(11) 95182-8221",services:"Exames Cl\xednicos, PCMSO"},{name:"GEREMED SAUDE E SEGURANCA OCUPACIONAL",address:"Rua do Estilo Barroco, 452",cep:"04709-011",email:"nubia@geremed.com.br",whatsapp:"(11) 95536-9651",services:"Exames Cl\xednicos, PPRA, PCMSO"},{name:"CEMIP SAUDE",address:"AV. ADOLFO PINHEIRO, 2464 / 3\xba ANDAR SALA 31",cep:"04734-902",email:"cemip@cemip.com.br",whatsapp:"(11) 95521-1900",services:"Exames Cl\xednicos, Exames Complementares"},{name:"OCUPACIONAL SS SA\xdaDE E SEGURAN\xc7A DO TRABALHO",address:"Rua Francisco Romeiro Sobrinho, 141",cep:"04710-180",email:"cleiton@ocupacionalss.com.br",whatsapp:"(11) 95181-0102",services:"Exames Cl\xednicos, Exames Complementares, PPRA, PCMSO"},{name:"GBEN - GESTAO DE BENEFICIOS OCUPACIONAIS",address:"Rua Enxovia, 472 / Conj 2009",cep:"04711-030",email:"vanessa@gben.com.br",whatsapp:"(11) 92776-2700",services:"Exames Cl\xednicos, Exames Complementares, PPRA, PCMSO"},{name:"GRUPO MORATTI",address:"Rua Francisco de Morais, 219",cep:"04714-010",email:"",whatsapp:"(11) 93567-8031",services:"Exames Cl\xednicos"},{name:"HEALTH MANAGER",address:"Rua Indiana, 1148 / Conj 02",cep:"04562-002",email:"comercial1@healthmanager.com.br",whatsapp:"(11) 95091-7416",services:"Exames Cl\xednicos, Exames Complementares, PPRA, PCMSO"},{name:"S&MED CONSULTORIA E GESTAO DE SSO",address:"Avenida Engenheiro Luiz Carlos Berrini, 1140",cep:"04571-000",email:"contato@smedgestao.com.br",whatsapp:"(11) 94280-8636",services:"Exames Cl\xednicos"},{name:"MANTRIS",address:"Avenida das Na\xe7\xf5es Unidas, 11633 / 7\xba Andar",cep:"04578-000",email:"credenciamento@mantris.com.br",whatsapp:"(11) 92141-8000",services:"Exames Cl\xednicos, PPRA, PCMSO"}],j=s.p+"static/media/whatsappLogo.d1038eb1.png";var b=function(e){var c=e.info;return Object(a.jsxs)("div",{className:"services-container",children:[Object(a.jsx)("span",{className:"service",style:c.services.includes("Cl\xednicos")?{backgroundColor:"chartreuse"}:{backgroundColor:"white"},children:"EXAME CL\xcdNICO"}),Object(a.jsx)("span",{className:"service",style:c.services.includes("Complementares")?{backgroundColor:"chartreuse"}:{backgroundColor:"white"},children:"COMPLEMENTAR"}),Object(a.jsx)("span",{className:"service",style:c.services.includes("PCMSO")?{backgroundColor:"chartreuse"}:{backgroundColor:"white"},children:"PCMSO"}),Object(a.jsx)("span",{className:"service",style:c.services.includes("PPRA")?{backgroundColor:"chartreuse"}:{backgroundColor:"white"},children:"PPRA"})]})};var h=function(e){var c=e.info,s=c.whatsapp.replace(/([^\d])+/gim,""),t="https://api.whatsapp.com/send?phone=55".concat(s);return Object(a.jsxs)("div",{className:"card-container",children:[Object(a.jsxs)("div",{className:"infos-container",children:[Object(a.jsx)("h3",{children:c.name}),Object(a.jsx)("p",{children:c.address}),Object(a.jsx)("p",{children:c.email})]}),Object(a.jsxs)("div",{className:"right-container",children:[Object(a.jsx)(b,{info:c}),Object(a.jsxs)("a",{className:"contact-container",href:t,children:[Object(a.jsx)("img",{src:j,alt:"logo whatsapp",className:"whats-logo"}),Object(a.jsx)("p",{children:c.whatsapp})]})]})]})};var O=function(){var e=Object(t.useContext)(d),c=e.clinics,s=e.setClinics,n=Object(t.useState)(!1),i=Object(l.a)(n,2),r=i[0],m=i[1],p=Object(o.f)();return Object(t.useEffect)((function(){0===c.length&&s(u)}),[]),Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{type:"button",onClick:function(){var e=c.sort((function(e,c){return e.name>c.name?1:c.name>e.name?-1:0}));m(!0),s(e),console.log(c)},children:"Ordenar"}),Object(a.jsx)("button",{type:"button",onClick:function(){return p.push("/form")},children:"Adicionar clinica"})]}),r?c.map((function(e){return Object(a.jsx)(h,{info:e})})):c.map((function(e){return Object(a.jsx)(h,{info:e})})).sort((function(e,c){return e.name>c.name?1:c.name>e.name?-1:0}))]})};var x=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(p,{}),Object(a.jsx)(O,{})]})};var C=function(){var e=Object(t.useContext)(d),c=e.clinics,s=e.setClinics,n=c,i=Object(o.f)();return Object(a.jsx)("div",{children:Object(a.jsxs)("form",{children:[Object(a.jsxs)("label",{htmlFor:"name",children:["Nome:",Object(a.jsx)("input",{type:"text",id:"name"})]}),Object(a.jsxs)("label",{htmlFor:"cep",children:["CEP:",Object(a.jsx)("input",{type:"text",id:"cep"})]}),Object(a.jsxs)("label",{htmlFor:"address",children:["Endere\xe7o:",Object(a.jsx)("input",{type:"text",id:"address"})]}),Object(a.jsxs)("label",{htmlFor:"email",children:["Email:",Object(a.jsx)("input",{type:"text",id:"email"})]}),Object(a.jsxs)("label",{htmlFor:"whatsapp",children:["Whatsapp:",Object(a.jsx)("input",{type:"text",id:"whatsapp"})]}),Object(a.jsx)("p",{children:"Servi\xe7os disponiveis"}),Object(a.jsx)("input",{type:"checkbox",id:"clinic-input"}),Object(a.jsx)("label",{htmlFor:"clinic-input",children:"Exames Cl\xednicos"}),Object(a.jsx)("input",{type:"checkbox",id:"additional-input"}),Object(a.jsx)("label",{htmlFor:"additional-input",children:"Exames Complementares"}),Object(a.jsx)("input",{type:"checkbox",id:"ppra-input"}),Object(a.jsx)("label",{htmlFor:"ppra-input",children:"PPRA"}),Object(a.jsx)("input",{type:"checkbox",id:"pcmso-input"}),Object(a.jsx)("label",{htmlFor:"pcmso-input",children:"PCMSO"}),Object(a.jsx)("button",{type:"button",onClick:function(){var e=document.querySelector("#name").value,c=document.querySelector("#address").value,a=document.querySelector("#cep").value,t=document.querySelector("#email").value,r=document.querySelector("#whatsapp").value,o=document.querySelector("#clinic-input").checked?"Exames Cl\xednicos, ":"",l=document.querySelector("#additional-input").checked?"Exames Complementares, ":"",d=document.querySelector("#ppra-input").checked?"PPRA, ":"",m=document.querySelector("#pcmso-input").checked?"PCMSO":"",p={name:e,address:c,cep:a,email:t,whatsapp:r,services:"".concat(o).concat(l).concat(d).concat(m)};n.push(p),s(n),i.push("/")},children:"Adicionar Cl\xednica"})]})})};var E=function(){return Object(a.jsx)(m,{children:Object(a.jsxs)(o.c,{children:[Object(a.jsx)(o.a,{exact:!0,path:"/",component:x}),Object(a.jsx)(o.a,{exact:!0,path:"/form",component:C})]})})},v=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,31)).then((function(c){var s=c.getCLS,a=c.getFID,t=c.getFCP,n=c.getLCP,i=c.getTTFB;s(e),a(e),t(e),n(e),i(e)}))};i.a.render(Object(a.jsx)(r.a,{basename:"/desafio-onyma",children:Object(a.jsx)(E,{})}),document.getElementById("root")),v()}},[[30,1,2]]]);
//# sourceMappingURL=main.bae7e030.chunk.js.map
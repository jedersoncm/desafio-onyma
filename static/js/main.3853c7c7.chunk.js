(this["webpackJsonpdesafio-onyma"]=this["webpackJsonpdesafio-onyma"]||[]).push([[0],{17:function(e,c,n){},26:function(e,c,n){},33:function(e,c,n){},34:function(e,c,n){"use strict";n.r(c);var t=n(0),a=n(1),s=n(19),r=n.n(s),i=n(10),o=(n(26),n(2)),l=n(7),d=Object(a.createContext)();var u=function(e){var c=e.children,n=Object(a.useState)([]),s=Object(l.a)(n,2),r={clinics:s[0],setClinics:s[1]};return Object(t.jsx)(d.Provider,{value:r,children:c})};n(17);var m=function(){return Object(t.jsx)("div",{className:"header",children:Object(t.jsx)("h1",{children:"Visualizador de Cl\xednicas"})})},p=[{name:"EHS SOLU\xc7\xd5ES INTELIGENTES",address:"Rua Bar\xe3o do Triunfo, 612 / CJ 901",cep:"04602-002",email:"contato@ehsss.com.br",whatsapp:"(11) 93477-9755",services:"Exames Cl\xednicos, Exames Complementares, PPRA, PCMSO"},{name:"SA ASSESSORIA",address:"Rua Joaquim Guarani, 105",cep:"04707-060",email:"selma@saassessoria.com.br",whatsapp:"(11) 95182-8221",services:"Exames Cl\xednicos, PCMSO"},{name:"GEREMED SAUDE E SEGURANCA OCUPACIONAL",address:"Rua do Estilo Barroco, 452",cep:"04709-011",email:"nubia@geremed.com.br",whatsapp:"(11) 95536-9651",services:"Exames Cl\xednicos, PPRA, PCMSO"},{name:"CEMIP SAUDE",address:"AV. ADOLFO PINHEIRO, 2464 / 3\xba ANDAR SALA 31",cep:"04734-902",email:"cemip@cemip.com.br",whatsapp:"(11) 95521-1900",services:"Exames Cl\xednicos, Exames Complementares"},{name:"OCUPACIONAL SS SA\xdaDE E SEGURAN\xc7A DO TRABALHO",address:"Rua Francisco Romeiro Sobrinho, 141",cep:"04710-180",email:"cleiton@ocupacionalss.com.br",whatsapp:"(11) 95181-0102",services:"Exames Cl\xednicos, Exames Complementares, PPRA, PCMSO"},{name:"GBEN - GESTAO DE BENEFICIOS OCUPACIONAIS",address:"Rua Enxovia, 472 / Conj 2009",cep:"04711-030",email:"vanessa@gben.com.br",whatsapp:"(11) 92776-2700",services:"Exames Cl\xednicos, Exames Complementares, PPRA, PCMSO"},{name:"GRUPO MORATTI",address:"Rua Francisco de Morais, 219",cep:"04714-010",email:"",whatsapp:"(11) 93567-8031",services:"Exames Cl\xednicos"},{name:"HEALTH MANAGER",address:"Rua Indiana, 1148 / Conj 02",cep:"04562-002",email:"comercial1@healthmanager.com.br",whatsapp:"(11) 95091-7416",services:"Exames Cl\xednicos, Exames Complementares, PPRA, PCMSO"},{name:"S&MED CONSULTORIA E GESTAO DE SSO",address:"Avenida Engenheiro Luiz Carlos Berrini, 1140",cep:"04571-000",email:"contato@smedgestao.com.br",whatsapp:"(11) 94280-8636",services:"Exames Cl\xednicos"},{name:"MANTRIS",address:"Avenida das Na\xe7\xf5es Unidas, 11633 / 7\xba Andar",cep:"04578-000",email:"credenciamento@mantris.com.br",whatsapp:"(11) 92141-8000",services:"Exames Cl\xednicos, PPRA, PCMSO"}],j=n.p+"static/media/whatsappLogo.d1038eb1.png";var h=function(e){var c=e.info;return Object(t.jsxs)("div",{className:"services-container",children:[Object(t.jsx)("span",{className:"service",style:c.services.includes("Cl\xednicos")?{backgroundColor:"chartreuse"}:{backgroundColor:"white"},children:"EXAME CL\xcdNICO"}),Object(t.jsx)("span",{className:"service",style:c.services.includes("Complementares")?{backgroundColor:"chartreuse"}:{backgroundColor:"white"},children:"COMPLEMENTAR"}),Object(t.jsx)("span",{className:"service",style:c.services.includes("PCMSO")?{backgroundColor:"chartreuse"}:{backgroundColor:"white"},children:"PCMSO"}),Object(t.jsx)("span",{className:"service",style:c.services.includes("PPRA")?{backgroundColor:"chartreuse"}:{backgroundColor:"white"},children:"PPRA"})]})};var b=function(e){var c=e.info,n=c.whatsapp.replace(/([^\d])+/gim,""),a="https://api.whatsapp.com/send?phone=55".concat(n);return Object(t.jsxs)("div",{className:"card-container",children:[Object(t.jsxs)("div",{className:"infos-container",children:[Object(t.jsx)("h3",{children:c.name}),Object(t.jsx)("p",{children:c.address}),Object(t.jsx)("p",{children:c.email})]}),Object(t.jsxs)("div",{className:"right-container",children:[Object(t.jsx)(h,{info:c}),Object(t.jsxs)("a",{className:"contact-container",href:a,children:[Object(t.jsx)("img",{src:j,alt:"logo whatsapp",className:"whats-logo"}),Object(t.jsx)("p",{children:c.whatsapp})]})]})]})};var O=function(){var e=Object(a.useContext)(d),c=e.clinics,n=e.setClinics,s=Object(a.useState)(!1),r=Object(l.a)(s,2),i=r[0],u=r[1],m=Object(o.f)();return Object(a.useEffect)((function(){0===c.length&&n(p)}),[]),Object(t.jsxs)("div",{className:"body-container",children:[Object(t.jsxs)("div",{className:"buttons-container",children:[Object(t.jsx)("button",{type:"button",onClick:function(){var e=c.sort((function(e,c){return e.name>c.name?1:c.name>e.name?-1:0}));u(!0),n(e)},children:"Ordenar"}),Object(t.jsx)("button",{type:"button",onClick:function(){return m.push("/form")},children:"Adicionar clinica"})]}),i?c.map((function(e){return Object(t.jsx)(b,{info:e})})):c.map((function(e){return Object(t.jsx)(b,{info:e})})).sort((function(e,c){return e.name>c.name?1:c.name>e.name?-1:0}))]})};var x=function(){return Object(t.jsxs)("div",{children:[Object(t.jsx)(m,{}),Object(t.jsx)(O,{})]})},v=n(9),C=n.n(v),f=n(12),E=function(){var e=Object(f.a)(C.a.mark((function e(c){var n,t,a,s;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=c.replace(/\D/g,""),t={method:"GET",mode:"cors",cache:"default"},!/^[0-9]{8}$/.test(n)){e.next=11;break}return e.next=6,fetch("https://viacep.com.br/ws/".concat(n,"/json/"),t);case 6:return a=e.sent,e.next=9,a.json();case 9:return s=e.sent,e.abrupt("return",s.logradouro);case 11:return e.abrupt("return","");case 12:case"end":return e.stop()}}),e)})));return function(c){return e.apply(this,arguments)}}(),S=n.p+"static/media/voltar.317e6a7e.png";n(33);var A=function(){var e=Object(a.useContext)(d),c=e.clinics,n=e.setClinics,s=Object(a.useState)(!1),r=Object(l.a)(s,2),i=r[0],u=r[1],m=Object(a.useState)({}),p=Object(l.a)(m,2),j=p[0],h=p[1],b=c,O=Object(o.f)(),x=function(){var e=document.querySelector("#name").value,c=document.querySelector("#address").value,n=document.querySelector("#cep").value,t=document.querySelector("#email").value,a=document.querySelector("#whatsapp").value,s=document.querySelector("#clinic-input").checked?"Exames Cl\xednicos, ":"",r=document.querySelector("#additional-input").checked?"Exames Complementares, ":"",i=document.querySelector("#ppra-input").checked?"PPRA, ":"",o=document.querySelector("#pcmso-input").checked?"PCMSO":"",l={name:e,address:c,cep:n,email:t,whatsapp:a,services:"".concat(s).concat(r).concat(i).concat(o)};u(function(e){return""!==e.name&&""!==e.address&&""!==e.cep&&""!==e.whatsapp&&""!==e.services}(l)),h(l)},v=function(){var e=Object(f.a)(C.a.mark((function e(){var c,n,t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=document.querySelector("#cep").value,n=c.replace(/([^\d])+/gim,""),e.next=4,E(n);case 4:""!==(t=e.sent)&&void 0!==t&&(document.querySelector("#address").value=t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(t.jsx)("div",{children:Object(t.jsx)("form",{children:Object(t.jsxs)("div",{className:"form-container",children:[Object(t.jsxs)("div",{className:"fild",children:[Object(t.jsx)("label",{htmlFor:"name",children:"Nome:"}),Object(t.jsx)("input",{type:"text",id:"name",onChange:x})]}),Object(t.jsxs)("div",{className:"fild",children:[Object(t.jsx)("label",{htmlFor:"cep",children:"CEP:"}),Object(t.jsx)("input",{type:"text",id:"cep",onChange:x,onBlur:v})]}),Object(t.jsxs)("div",{className:"fild",children:[Object(t.jsx)("label",{htmlFor:"address",children:"Endere\xe7o:"}),Object(t.jsx)("input",{type:"text",id:"address",onChange:x})]}),Object(t.jsxs)("div",{className:"fild",children:[Object(t.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(t.jsx)("input",{type:"text",id:"email",onChange:x})]}),Object(t.jsxs)("div",{className:"fild",children:[Object(t.jsx)("label",{htmlFor:"whatsapp",children:"Whatsapp:"}),Object(t.jsx)("input",{type:"text",id:"whatsapp",onChange:x})]}),Object(t.jsx)("p",{children:"Servi\xe7os disponiveis"}),Object(t.jsxs)("div",{className:"services-group",children:[Object(t.jsxs)("div",{children:[Object(t.jsx)("input",{type:"checkbox",id:"clinic-input",onChange:x}),Object(t.jsx)("label",{htmlFor:"clinic-input",children:"Exames Cl\xednicos"})]}),Object(t.jsxs)("div",{children:[Object(t.jsx)("input",{type:"checkbox",id:"additional-input",onChange:x}),Object(t.jsx)("label",{htmlFor:"additional-input",children:"Exames Complementares"})]}),Object(t.jsxs)("div",{children:[Object(t.jsx)("input",{type:"checkbox",id:"pcmso-input",onChange:x}),Object(t.jsx)("label",{htmlFor:"pcmso-input",children:"PCMSO"})]}),Object(t.jsxs)("div",{children:[Object(t.jsx)("input",{type:"checkbox",id:"ppra-input",onChange:x}),Object(t.jsx)("label",{htmlFor:"ppra-input",children:"PPRA"})]})]}),Object(t.jsx)("button",{type:"submit",onClick:function(){b.push(j),n(b),O.push("/")},disabled:!i,className:"form-button",children:"Adicionar Cl\xednica"}),Object(t.jsx)("div",{onClick:function(){return O.push("/")},children:Object(t.jsx)("img",{src:S,alt:"voltar",width:"100px"})})]})})})};var g=function(){return Object(t.jsx)(u,{children:Object(t.jsxs)(o.c,{children:[Object(t.jsx)(o.a,{exact:!0,path:"/",component:x}),Object(t.jsx)(o.a,{exact:!0,path:"/form",component:A})]})})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(c){var n=c.getCLS,t=c.getFID,a=c.getFCP,s=c.getLCP,r=c.getTTFB;n(e),t(e),a(e),s(e),r(e)}))};r.a.render(Object(t.jsx)(i.a,{basename:"/desafio-onyma",children:Object(t.jsx)(g,{})}),document.getElementById("root")),P()}},[[34,1,2]]]);
//# sourceMappingURL=main.3853c7c7.chunk.js.map
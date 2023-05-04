(function(){"use strict";var e={8983:function(e,t,n){var l=n(9963),o=n(6252);function i(e,t){const n=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(n)}var a=n(3744);const s={},c=(0,a.Z)(s,[["render",i]]);var d=c,r=n(5205);(0,r.z)("/invite-window/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var u=n(2201),p=n.p+"img/cross.dc438d00.svg";const m=e=>((0,o.dD)("data-v-f4031aca"),e=e(),(0,o.Cn)(),e),b={class:"wrapper"},v=m((()=>(0,o._)("div",{class:"wrapper-header"},[(0,o._)("h1",null,"Invite User"),(0,o._)("button",null,[(0,o._)("img",{class:"cross",src:p,alt:"Vector Icon"})])],-1)));function f(e,t,n,l,i,a){const s=(0,o.up)("InviteWindow");return(0,o.wg)(),(0,o.iD)("div",b,[v,(0,o.Wm)(s)])}var g=n(3577),h=n.p+"img/vector.049ee384.svg",_=n.p+"img/triangle.222f7292.svg";const k={class:"invite"},y={class:"main"},w={class:"tab-buttons"},C=["onClick"],U={key:0,class:"comple"},V=(0,o._)("i",{class:"fas fa-check"},null,-1),A=[V],x={key:1},T={key:0},P={class:"main-inputs"},D={class:"form-group"},M=(0,o._)("label",{for:"name"},"First Name",-1),N=["onUpdate:modelValue","disabled"],O={class:"form-group"},I=(0,o._)("label",{for:"lastName"},"Last Name",-1),q=["onUpdate:modelValue","disabled"],S={class:"main-inputs"},j={class:"form-group"},E=(0,o._)("label",{for:"email"},"Email Address",-1),F=["onUpdate:modelValue","disabled"],B={class:"form-group"},W=(0,o._)("label",{for:"phone"},"Phone Number",-1),K=["onUpdate:modelValue","disabled"],z={class:"main-inputs"},H={class:"form-group"},L=(0,o._)("label",{for:"position"},"Position",-1),R=["onUpdate:modelValue","disabled"],Y={class:"form-group"},Z=(0,o._)("label",{for:"select"},"Available in company",-1),$=["onUpdate:modelValue","disabled"],Q=(0,o._)("option",{value:""},"Precoro",-1),G=(0,o._)("option",{value:"evergreen"},"Evergreen",-1),J=(0,o._)("option",{value:"epam"},"Epam",-1),X=[Q,G,J],ee={key:1},te={class:"form-group"},ne=(0,o._)("label",{class:"required",for:"city"},"Main Location",-1),le=["onUpdate:modelValue","disabled"],oe=(0,o.uE)('<option value>Main Precoro US</option><option value="berlin">Main Precoro Berlin</option><option value="venice">Precoro Venice</option><option value="canada">Precoro Canada</option><option value="poland">Main Precoro Poland</option><option value="mexico">Precoro Mexico</option><option value="ukraine">Precoro Ukraine Kyiv</option>',7),ie=[oe],ae={class:"all-locations"},se=["disabled"],ce=(0,o._)("h3",null,"Select All Locations",-1),de={class:"form-group"},re=(0,o._)("div",{class:"lable-available"},"Available Locations",-1),ue={class:"availiable"},pe=["for"],me=["id","value","disabled"],be={key:2,class:"roles"},ve=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th",null,"Access to:"),(0,o._)("th",null,"View only"),(0,o._)("th",null,"Create"),(0,o._)("th",null,"Approve"),(0,o._)("th",null,"Pay")])],-1),fe=["id","onUpdate:modelValue","disabled"],ge=["for"],he=["id","onUpdate:modelValue","disabled"],_e=["for"],ke=["id","onUpdate:modelValue","disabled"],ye=["for"],we={key:0},Ce=["id","onUpdate:modelValue","disabled"],Ue=["for"],Ve={class:"details"},Ae=(0,o._)("div",{class:"details-management"},[(0,o.Uk)(" Management: "),(0,o._)("img",{class:"info",src:h,alt:"Vector Icon"})],-1),xe={class:"roles-management"},Te={class:"roles-management__list"},Pe=["for"],De=["id","value","disabled"],Me={class:"roles-management__triangle"},Ne=["disabled"],Oe=(0,o._)("img",{class:"",src:_,alt:"triangle Icon"},null,-1),Ie=(0,o._)("div",{class:"roles-info"},[(0,o._)("img",{class:"info",src:h,alt:"Vector Icon"}),(0,o._)("p",null,[(0,o.Uk)(" The user becomes a "),(0,o._)("a",{href:""},"Power user"),(0,o.Uk)(" if at least ONE of the following roles is selected: "),(0,o._)("br"),(0,o.Uk)("Approve, View only, Configuration, Suppliers and Items, Budgets, Warehouse manager. ")])],-1),qe={class:"invite-buttons"},Se={key:0,class:"invite-buttons__switch"},je={class:"switch"},Ee=["disabled"],Fe=(0,o._)("span",{class:"slider"},null,-1),Be=(0,o._)("p",null,"Active in all companies",-1),We=(0,o._)("img",{class:"info",src:h,alt:"Vector Icon"},null,-1);function Ke(e,t,n,i,a,s){const c=(0,o.Q2)("mask");return(0,o.wg)(),(0,o.iD)("div",k,[(0,o._)("div",y,[(0,o._)("div",w,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.tabs,((e,t)=>((0,o.wg)(),(0,o.iD)("button",{key:t,onClick:e=>a.activeTab=t,class:(0,g.C_)({active:a.activeTab===t,completed:e.completed})},[e.completed?((0,o.wg)(),(0,o.iD)("span",U,A)):(0,o.kq)("",!0),e.completed?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("span",x,(0,g.zw)(e.number),1)),(0,o.Uk)(" "+(0,g.zw)(e.title),1)],10,C)))),128))]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.tabs,((e,n)=>(0,o.wy)(((0,o.wg)(),(0,o.iD)("div",{class:"invite-content",key:n},[(0,o._)("form",null,["info"===e.type?((0,o.wg)(),(0,o.iD)("div",T,[(0,o._)("div",P,[(0,o._)("div",D,[M,(0,o.wy)((0,o._)("input",{type:"text",id:"name","onUpdate:modelValue":t=>e.name=t,disabled:a.buttonClicked},null,8,N),[[l.nr,e.name]])]),(0,o._)("div",O,[I,(0,o.wy)((0,o._)("input",{type:"text",id:"lastName","onUpdate:modelValue":t=>e.lastName=t,disabled:a.buttonClicked},null,8,q),[[l.nr,e.lastName]])])]),(0,o._)("div",S,[(0,o._)("div",j,[E,(0,o.wy)((0,o._)("input",{type:"email",id:"email","onUpdate:modelValue":t=>e.email=t,disabled:a.buttonClicked},null,8,F),[[l.nr,e.email]])]),(0,o._)("div",B,[W,(0,o.wy)((0,o._)("input",{type:"tel",placeholder:"+38 (___) ___-__-__",id:"phone","onUpdate:modelValue":t=>e.phone=t,disabled:a.buttonClicked},null,8,K),[[c,"+38(###) ###-##-##"],[l.nr,e.phone]])])]),(0,o._)("div",z,[(0,o._)("div",H,[L,(0,o.wy)((0,o._)("input",{type:"text",id:"position","onUpdate:modelValue":t=>e.position=t,disabled:a.buttonClicked},null,8,R),[[l.nr,e.position]])]),(0,o._)("div",Y,[Z,(0,o.wy)((0,o._)("select",{id:"select","onUpdate:modelValue":t=>e.select=t,disabled:a.buttonClicked},X,8,$),[[l.bM,e.select]])])])])):(0,o.kq)("",!0),"locations"===e.type?((0,o.wg)(),(0,o.iD)("div",ee,[(0,o._)("div",te,[ne,(0,o.wy)((0,o._)("select",{id:"selectCity","onUpdate:modelValue":t=>e.city=t,disabled:a.buttonClicked},ie,8,le),[[l.bM,e.city]]),(0,o._)("div",ae,[(0,o.wy)((0,o._)("input",{type:"checkbox",onClick:t[0]||(t[0]=(...e)=>s.toggleSelectAll&&s.toggleSelectAll(...e)),"onUpdate:modelValue":t[1]||(t[1]=e=>a.isChecked=e),disabled:a.buttonClicked},null,8,se),[[l.e8,a.isChecked]]),ce])]),(0,o._)("div",de,[re,(0,o._)("div",ue,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.cities,(e=>((0,o.wg)(),(0,o.iD)("div",{class:"availiable-city",key:e.id,for:e.id},[(0,o.wy)((0,o._)("input",{type:"checkbox",id:e.id,value:e.name,"onUpdate:modelValue":t[2]||(t[2]=e=>a.selectedCities=e),disabled:a.buttonClicked},null,8,me),[[l.e8,a.selectedCities]]),(0,o._)("h3",null,(0,g.zw)(e.name),1)],8,pe)))),128))])])])):(0,o.kq)("",!0),"roles"===e.type?((0,o.wg)(),(0,o.iD)("div",be,[(0,o._)("div",null,[(0,o._)("table",null,[ve,(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.accessTo,((e,t)=>((0,o.wg)(),(0,o.iD)("tr",{key:t},[(0,o._)("td",null,(0,g.zw)(e.name),1),(0,o._)("td",null,[(0,o.wy)((0,o._)("input",{type:"checkbox",class:"management",id:"View only "+t,"onUpdate:modelValue":t=>e.options[0]=t,disabled:a.buttonClicked},null,8,fe),[[l.e8,e.options[0]]]),(0,o._)("label",{for:"View only "+t},null,8,ge)]),(0,o._)("td",null,[(0,o.wy)((0,o._)("input",{type:"checkbox",class:"management",id:"Create "+t,"onUpdate:modelValue":t=>e.options[1]=t,disabled:a.buttonClicked},null,8,he),[[l.e8,e.options[1]]]),(0,o._)("label",{for:"Create "+t},null,8,_e)]),(0,o._)("td",null,[(0,o.wy)((0,o._)("input",{type:"checkbox",class:"management",id:"Approve "+t,"onUpdate:modelValue":t=>e.options[2]=t,disabled:a.buttonClicked},null,8,ke),[[l.e8,e.options[2]]]),(0,o._)("label",{for:"Approve "+t},null,8,ye)]),"Receipts"!==e.name&&"Warehouse requests"!==e.name&&"Request for proposals"!==e.name&&"Purchase orders"!==e.name&&"Purchase requests"!==e.name?((0,o.wg)(),(0,o.iD)("td",we,[(0,o.wy)((0,o._)("input",{type:"checkbox",class:"management",id:"Pay "+t,"onUpdate:modelValue":t=>e.options[3]=t,disabled:a.buttonClicked},null,8,Ce),[[l.e8,e.options[3]]]),(0,o._)("label",{for:"Pay "+t},null,8,Ue)])):(0,o.kq)("",!0)])))),128))])])]),(0,o._)("div",Ve,[Ae,(0,o._)("div",xe,[(0,o._)("div",Te,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.managements,(e=>((0,o.wg)(),(0,o.iD)("div",{class:"list",key:e.id,for:e.id},[(0,o.wy)((0,o._)("input",{class:"management",type:"checkbox",id:e.id,value:e.name,"onUpdate:modelValue":t[3]||(t[3]=e=>a.selectedManagement=e),disabled:a.buttonClicked},null,8,De),[[l.e8,a.selectedManagement]]),(0,o.Uk)(" "+(0,g.zw)(e.name),1)],8,Pe)))),128))]),(0,o._)("div",Me,[(0,o.wy)((0,o._)("input",{type:"checkbox",value:"Admin (Full access)",class:"management","onUpdate:modelValue":t[4]||(t[4]=e=>a.selectedManagement=e),disabled:a.buttonClicked},null,8,Ne),[[l.e8,a.selectedManagement]]),(0,o.Uk)(" Admin (Full access) "),Oe])])]),Ie])):(0,o.kq)("",!0)])])),[[l.F8,a.activeTab===n]]))),128)),(0,o._)("div",qe,[a.activeTab<a.tabs.length-2?((0,o.wg)(),(0,o.iD)("div",Se,[(0,o._)("label",je,[(0,o.wy)((0,o._)("input",{type:"checkbox",class:"sw",onClick:t[5]||(t[5]=(...e)=>s.toggleSelectAll&&s.toggleSelectAll(...e)),"onUpdate:modelValue":t[6]||(t[6]=e=>a.isChecked=e),disabled:a.buttonClicked},null,8,Ee),[[l.e8,a.isChecked]]),Fe]),Be,We])):(0,o.kq)("",!0),a.activeTab<a.tabs.length-1?((0,o.wg)(),(0,o.iD)("button",{key:1,onClick:t[7]||(t[7]=(...e)=>s.handleNextTabClick&&s.handleNextTabClick(...e)),class:"button button-next"},"Next Step")):((0,o.wg)(),(0,o.iD)("button",{key:2,onClick:t[8]||(t[8]=(...e)=>s.handleCompleteFormClick&&s.handleCompleteFormClick(...e)),class:"button button-invite"},"Invite User"))])])])}n(7658);var ze={name:"InviteWindow",props:{msg:String},data(){return{isChecked:!1,buttonClicked:!1,activeTab:0,selectAll:!1,cities:[{id:"berlin",name:"Berlin"},{id:"venice",name:"Vevice Office"},{id:"usa",name:"USA Office"},{id:"canada",name:"Canada"},{id:"poland",name:"Poland Office"},{id:"mexico",name:"Mexico"},{id:"ukraine",name:"Ukraine Kiyv Lukivska 7 Main Office"}],managements:[{id:"All",name:"All bellow"},{id:"venice",name:"Configuration"},{id:"items",name:"Suppliers and items"},{id:"budgets",name:"Budgets"},{id:"warehouse",name:"Warehouse manager"},{id:"reports",name:"Reports"}],selectedCities:[],selectedManagement:[],tab:{select:""},tabs:[{title:"Main info",type:"info",name:"",lastName:"",email:"",phone:"",select:"",cities:"",number:1,completed:!1},{title:"Available Locations",type:"locations",city:"",number:2,completed:!1},{title:"Roles",type:"roles",radio:"",number:3,completed:!1}],accessTo:[{name:"All below",options:[!1,!1,!1]},{name:"Warehouse requests",options:[!1,!1,!1,!1]},{name:"Purchase requests",options:[!1,!1,!1]},{name:"Request for proposals",options:[!1,!1,!1]},{name:"Purchase orders",options:[!1,!1,!1]},{name:"Receipts",options:[!1,!1,!1]},{name:"Invoices",options:[!1,!1,!1]},{name:"Extenses",options:[!1,!1,!1]}]}},methods:{handleNextTabClick(){this.tabs[this.activeTab].completed=!0,this.activeTab=(this.activeTab+1)%this.tabs.length},handleCompleteFormClick(){const e=document.getElementById("select");let t;if(this.selectAll){const n=e.options;t=Array.from(n).map((e=>e.textContent.trim())).join(", ")}else{const n=e.selectedOptions[0];t=n?n.textContent.trim():""}const n=document.getElementById("selectCity");let l;if(this.selectAll){const e=n.options;l=Array.from(e).map((e=>e.textContent.trim())).join(", ")}else{const e=n.selectedOptions[0];l=e?e.textContent.trim():""}let o=[];for(const i of this.accessTo){const e=[];i.options[0]&&e.push("View only"),i.options[1]&&e.push("Create"),i.options[2]&&e.push("Approve"),i.options[3]&&e.push("Pay"),o.push(`${i.name}: ${e.join(", ")}`)}console.log({name:this.tabs[0].name,lastName:this.tabs[0].lastName,email:this.tabs[0].email,phone:this.tabs[0].phone,select:t,city:l,cities:this.selectedCities,managements:this.selectedManagement,roles:o,position:this.tabs[0].position,accessTo:this.accessTo}),this.buttonClicked=!0,this.tabs[this.activeTab].completed=!0,this.activeTab=this.activeTab%this.tabs.length},toggleSelectAll(){const e=document.getElementById("select"),t=e.options;for(let n=0;n<t.length;n++)t[n].selected=!this.selectAll;this.selectAll=!this.selectAll}}};const He=(0,a.Z)(ze,[["render",Ke]]);var Le=He,Re={name:"HomeView",components:{InviteWindow:Le}};const Ye=(0,a.Z)(Re,[["render",f],["__scopeId","data-v-f4031aca"]]);var Ze=Ye;const $e=[{path:"/",name:"home",component:Ze}],Qe=(0,u.p7)({history:(0,u.r5)(),routes:$e});var Ge=Qe,Je=n(3907),Xe=(0,Je.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}}),et=n(2982),tt=n.n(et);(0,l.ri)(d).use(Xe).use(Ge).use(tt()).mount("#app")}},t={};function n(l){var o=t[l];if(void 0!==o)return o.exports;var i=t[l]={exports:{}};return e[l].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,l,o,i){if(!l){var a=1/0;for(r=0;r<e.length;r++){l=e[r][0],o=e[r][1],i=e[r][2];for(var s=!0,c=0;c<l.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](l[c])}))?l.splice(c--,1):(s=!1,i<a&&(a=i));if(s){e.splice(r--,1);var d=o();void 0!==d&&(t=d)}}return t}i=i||0;for(var r=e.length;r>0&&e[r-1][2]>i;r--)e[r]=e[r-1];e[r]=[l,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var l in t)n.o(t,l)&&!n.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/invite-window/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,l){var o,i,a=l[0],s=l[1],c=l[2],d=0;if(a.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(c)var r=c(n)}for(t&&t(l);d<a.length;d++)i=a[d],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(r)},l=self["webpackChunkinvite"]=self["webpackChunkinvite"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=n.O(void 0,[998],(function(){return n(8983)}));l=n.O(l)})();
//# sourceMappingURL=app.b2cf5713.js.map
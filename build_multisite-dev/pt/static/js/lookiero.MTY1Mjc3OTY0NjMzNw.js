(()=>{var Oe=Object.create;var L=Object.defineProperty,ze=Object.defineProperties,Re=Object.getOwnPropertyDescriptor,qe=Object.getOwnPropertyDescriptors,Ne=Object.getOwnPropertyNames,X=Object.getOwnPropertySymbols,De=Object.getPrototypeOf,V=Object.prototype.hasOwnProperty,He=Object.prototype.propertyIsEnumerable;var Z=(e,t,n)=>t in e?L(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))V.call(t,n)&&Z(e,n,t[n]);if(X)for(var n of X(t))He.call(t,n)&&Z(e,n,t[n]);return e},ee=(e,t)=>ze(e,qe(t)),Me=e=>L(e,"__esModule",{value:!0});var Ue=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Fe=(e,t,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Ne(t))!V.call(e,i)&&i!=="default"&&L(e,i,{get:()=>t[i],enumerable:!(n=Re(t,i))||n.enumerable});return e},Ge=e=>Fe(Me(L(e!=null?Oe(De(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var Se=Ue((Ae,Ce)=>{(function(e){var t;if(typeof define=="function"&&define.amd&&(define(e),t=!0),typeof Ae=="object"&&(Ce.exports=e(),t=!0),!t){var n=window.Cookies,i=window.Cookies=e();i.noConflict=function(){return window.Cookies=n,i}}})(function(){function e(){for(var i=0,r={};i<arguments.length;i++){var m=arguments[i];for(var d in m)r[d]=m[d]}return r}function t(i){return i.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}function n(i){function r(){}function m(c,g,l){if(typeof document!="undefined"){l=e({path:"/"},r.defaults,l),typeof l.expires=="number"&&(l.expires=new Date(new Date*1+l.expires*864e5)),l.expires=l.expires?l.expires.toUTCString():"";try{var E=JSON.stringify(g);/^[\{\[]/.test(E)&&(g=E)}catch(u){}g=i.write?i.write(g,c):encodeURIComponent(String(g)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),c=encodeURIComponent(String(c)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var h="";for(var y in l)!l[y]||(h+="; "+y,l[y]!==!0&&(h+="="+l[y].split(";")[0]));return document.cookie=c+"="+g+h}}function d(c,g){if(typeof document!="undefined"){for(var l={},E=document.cookie?document.cookie.split("; "):[],h=0;h<E.length;h++){var y=E[h].split("="),u=y.slice(1).join("=");!g&&u.charAt(0)==='"'&&(u=u.slice(1,-1));try{var D=t(y[0]);if(u=(i.read||i)(u,D)||t(u),g)try{u=JSON.parse(u)}catch(Te){}if(l[D]=u,c===D)break}catch(Te){}}return c?l[c]:l}}return r.set=m,r.get=function(c){return d(c,!1)},r.getJSON=function(c){return d(c,!0)},r.remove=function(c,g){m(c,"",e(g,{expires:-1}))},r.defaults={},r.withConverter=n,r}return n(function(){})})});var H=document.getElementById("header-container"),te=()=>{let e={lastScrollTop:window.pageYOffset,lastDirection:void 0};window.addEventListener("scroll",()=>{e.lastDirection||(H.style.opacity=1,H.style["transition-property"]="opacity, top");let t=window.pageYOffset||document.documentElement.scrollTop,n=t>e.lastScrollTop?"top":"down";n!==e.lastDirection&&(H.style.top=n==="top"?"-55px":0),e.lastScrollTop=t<=0?0:t,e.lastDirection=n})};var Ye=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,We=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i,Je=e=>Ye.test(e)||We.test(e.substr(0,4)),Ke=()=>Je(navigator.userAgent||navigator.vendor||window.opera),M=Ke(),p={mobile:M,desktop:!M,platform:M?"mobile":"desktop"};var oe=()=>window.screen.height>667&&/FBIOS/.test(navigator.userAgent);var v=(e="",t=!1)=>{let n=document.getElementById(e);if(!n)return;let i=n.getBoundingClientRect(),r=window.pageYOffset+i.top;t&&(r=r+(i.height-window.innerHeight)),!t&&oe()&&(r=r-64),window.scrollTo({top:r,behavior:"smooth"})};var U=p.platform,Qe=()=>{let e=document.getElementById("home-intro-main-image");e.src=`https://cdn.dev.envs.lookiero.tech/usf/images/intro/${U}/${Lookiero.homeIntroImage}.jpg`,e.srcset=`https://cdn.dev.envs.lookiero.tech/usf/images/intro/${U}/${Lookiero.homeIntroImage}.jpg 1x, https://cdn.dev.envs.lookiero.tech/usf/images/intro/${U}/${Lookiero.homeIntroImage}@2x.jpg 2x`},Xe=()=>{let e=document.getElementById("trustpilot-logo-image"),t=document.getElementById("trustpilot-stars-image");e&&t&&(e.src="https://cdn.dev.envs.lookiero.tech/usf/images/intro/trustpilot/logo.svg",e.srcset="https://cdn.dev.envs.lookiero.tech/usf/images/intro/trustpilot/logo.svg",t.src="https://cdn.dev.envs.lookiero.tech/usf/images/intro/trustpilot/stars.svg",t.srcset="https://cdn.dev.envs.lookiero.tech/usf/images/intro/trustpilot/stars.svg")},Ve=()=>{Qe(),Xe()},se=()=>{Ve(),document.getElementById("home-intro__cta").addEventListener("click",()=>v("quiz")),document.getElementById("home-intro-to-next-section").addEventListener("click",()=>v("how"))};var B=()=>{document.body.classList.add("scroll-lock")},j=()=>{document.body.classList.remove("scroll-lock")};var Ze={ES:1,FR:2,UK:3,PT:4,BE:5,IT:6,DE:7},et="ltmdata",P=e=>{let t={event:"pageview",eventCategory:"navigation",section:e,store:Ze[window.location.hostname.split(".").pop().toUpperCase()],userLogged:!1};window.dataLayer.push(t),sessionStorage.setItem(et,JSON.stringify(t))};var w=document.getElementById("lk-panel"),ne=!1,tt=()=>{w.classList.remove("pointerNone"),w.classList.add("panel__wrapper--open"),w.setAttribute("aria-hidden","false"),B(),document.getElementById("panel").classList.remove("collapse"),document.getElementById("panel").classList.add("expand"),ne||(P("BurgerMenu"),ne=!0)},ot=()=>{document.getElementById("header-burger-menu").addEventListener("click",tt),document.getElementById("panel-button-close").addEventListener("click",()=>{w.classList.add("pointerNone"),w.classList.remove("panel__wrapper--open"),w.setAttribute("aria-hidden","true"),document.getElementById("panel").classList.remove("expand"),document.getElementById("panel").classList.add("collapse"),j()})},st=()=>{document.getElementById("panel-create-profile-button").addEventListener("click",()=>document.location.href="/user/quiz"),document.getElementById("panel-login-button").addEventListener("click",()=>document.location.href="/user/login")},ie=()=>{ot(),st()};var o=p.platform,T=window.location.hostname.split(".").pop(),a=!T||T==="localhost"?"fr":T==="uk"?"gb":T,nt="https://cdn.dev.envs.lookiero.tech",s=`${nt}/usf/images`,_=o==="mobile",it=["01_mademoisellemodeuse","02_lglora","03_manguepoudree","04_etdieucrea","05_poupeerousse","06_myblondestyle","07_fashionvitaminsantwerp","08_elenavidalrod","09_laura","10_mrsmlmode"].reduce((e,t)=>Object.assign(e,{[`${t}_avatar`]:{src:`${s}/influencers/${o}/avatars/${t}.jpg`,srcset:`${s}/influencers/${o}/avatars/${t}.jpg 1x, ${s}/influencers/${o}/avatars/${t}@2x.jpg 2x`},[t]:{src:`${s}/influencers/${o}/photps/${t}.jpg`,srcset:`${s}/influencers/${o}/photos/${t}.jpg 1x, ${s}/influencers/${o}/photos/${t}@2x.jpg 2x`}}),{}),re=ee(f({"how-it-works-1":{src:`${s}/how-it-works/${o}/01.jpg`,srcset:`${s}/how-it-works/${o}/01.jpg 1x, ${s}/how-it-works/${o}/01@2x.jpg 2x`},"how-it-works-2":{src:`${s}/how-it-works/${o}/02.jpg`,srcset:`${s}/how-it-works/${o}/02.jpg 1x, ${s}/how-it-works/${o}/02@2x.jpg 2x`},"how-it-works-3":{src:`${s}/how-it-works/${o}/03.jpg`,srcset:`${s}/how-it-works/${o}/03.jpg 1x, ${s}/how-it-works/${o}/03@2x.jpg 2x`},"psintro-ps1":{src:`${s}/personal-shopper-intro/${a}/${o}/ps1.jpg`,srcset:`${s}/personal-shopper-intro/${a}/${o}/ps1.jpg, ${s}/personal-shopper-intro/${a}/${o}/ps1.jpg 1x, ${s}/personal-shopper-intro/${a}/${o}/ps1_2x.jpg 2x`},"psintro-ps1-look":{src:`${s}/personal-shopper-intro/${a}/${o}/ps1_look.jpg`,srcset:`${s}/personal-shopper-intro/${a}/${o}/ps1_look.jpg, ${s}/personal-shopper-intro/${a}/${o}/ps1_look.jpg 1x, ${s}/personal-shopper-intro/${a}/${o}/ps1_look_2x.jpg 2x`},"psintro-ps2":{src:`${s}/personal-shopper-intro/${a}/${o}/ps2.jpg`,srcset:`${s}/personal-shopper-intro/${a}/${o}/ps2.jpg, ${s}/personal-shopper-intro/${a}/${o}/ps2.jpg 1x, ${s}/personal-shopper-intro/${a}/${o}/ps2_2x.jpg 2x`},"psintro-ps2-look":{src:`${s}/personal-shopper-intro/${a}/${o}/ps2_look.jpg`,srcset:`${s}/personal-shopper-intro/${a}/${o}/ps2_look.jpg, ${s}/personal-shopper-intro/${a}/${o}/ps2_look.jpg 1x, ${s}/personal-shopper-intro/${a}/${o}/ps2_look_2x.jpg 2x`},"psintro-ps3":{src:`${s}/personal-shopper-intro/${a}/${o}/ps3.jpg`,srcset:`${s}/personal-shopper-intro/${a}/${o}/ps3.jpg, ${s}/personal-shopper-intro/${a}/${o}/ps3.jpg 1x, ${s}/personal-shopper-intro/${a}/${o}/ps3_2x.jpg 2x`},"psintro-ps3-look":{src:`${s}/personal-shopper-intro/${a}/${o}/ps3_look.jpg`,srcset:`${s}/personal-shopper-intro/${a}/${o}/ps3_look.jpg, ${s}/personal-shopper-intro/${a}/${o}/ps3_look.jpg 1x, ${s}/personal-shopper-intro/${a}/${o}/ps3_look_2x.jpg 2x`},"inside-image":{src:`${s}/additional-info/${o}/01.jpg`,srcset:`${s}/additional-info/${o}/01.jpg 1x, ${s}/additional-info/${o}/01@2x.jpg 2x`},"price-image":{src:`${s}/additional-info/${o}/02.jpg`,srcset:`${s}/additional-info/${o}/02.jpg 1x, ${s}/additional-info/${o}/02@2x.jpg 2x`},"quiz-question-1":{src:`${s}/quiz/${a}/${o}/1.jpg`,srcset:`${s}/quiz/${a}/${o}/1.jpg, ${s}/quiz/${a}/${o}/1_2x.jpg 2x`},"quiz-question-2":{src:`${s}/quiz/${a}/${o}/2.jpg`,srcset:`${s}/quiz/${a}/${o}/2.jpg, ${s}/quiz/${a}/${o}/2_2x.jpg 2x`},"quiz-question-3":{src:`${s}/quiz/${a}/${o}/3.jpg`,srcset:`${s}/quiz/${a}/${o}/3.jpg, ${s}/quiz/${a}/${o}/3_2x.jpg 2x`},"quiz-question-4":{src:`${s}/quiz/${a}/${o}/4.jpg`,srcset:`${s}/quiz/${a}/${o}/4.jpg, ${s}/quiz/${a}/${o}/4_2x.jpg 2x`}},it),{"social-facebook":{src:`${s}/social/${o}/social-facebook${_?"":"@2x"}.png`,srcSet:`${s}/social/${o}/social-facebook.png 1x, ${s}/social/${o}/social-facebook@2x.png 2x`},"social-pinterest":{src:`${s}/social/${o}/social-pinterest${_?"":"@2x"}.png`,srcSet:`${s}/social/${o}/social-pinterest.png 1x, ${s}/social/${o}/social-pinterest@2x.png 2x`},"social-instagram":{src:`${s}/social/${o}/social-instagram${_?"":"@2x"}.png`,srcSet:`${s}/social/${o}/social-instagram.png 1x, ${s}/social/${o}/social-instagram@2x.png 2x`},"social-twitter":{src:`${s}/social/${o}/social-twitter${_?"":"@2x"}.png`,srcSet:`${s}/social/${o}/social-twitter.png 1x, ${s}/social/${o}/social-twitter@2x.png 2x`},"social-tiktok":{src:`${s}/social/${o}/social-tiktok${_?"":"@2x"}.png`,srcSet:`${s}/social/${o}/social-tiktok.png 1x, ${s}/social/${o}/social-tiktok@2x.png 2x`},"payment-visa":{src:`${s}/payment/${o}/visa.svg`,srcSet:`${s}/payment/${o}/visa.png 1x, ${s}/payment/${o}/visa.svg 2x`},"payment-mastercard":{src:`${s}/payment/${o}/mastercard.svg`,srcSet:`${s}/payment/${o}/mastercard.png 1x, ${s}/payment/${o}/mastercard.svg 2x`},"payment-paypal":{src:`${s}/payment/${o}/paypal.svg`,srcSet:`${s}/payment/${o}/paypal.png 1x, ${s}/payment/${o}/paypal.svg 2x`},"payment-american":{src:`${s}/payment/${o}/american.svg`,srcSet:`${s}/payment/${o}/american.png 1x, ${s}/payment/${o}/american.svg 2x`},"payment-cartes":{src:`${s}/payment/${o}/cartes.svg`,srcSet:`${s}/payment/${o}/cartes.png 1x, ${s}/payment/${o}/cartes.svg 2x`}});var I=[...document.getElementsByClassName("lazyImage")].filter(e=>{let t=Boolean(e.getAttribute("data-only-desktop"));return t&&p.desktop||!t}).reduce((e,t)=>Object.assign(e,{[t.id]:{element:t,position:t.getBoundingClientRect().y+window.scrollY}}),{}),ae=window.innerHeight,rt=e=>{let t=re[e.id];return e.src=t.src,t.srcset&&(e.srcset=t.srcset),["lazyImage","image--lazy","image--ease"].forEach(n=>{Object.values(e.classList).includes(n)&&e.classList.remove(n)}),delete I[e.id]},ce=()=>{Object.keys(I).forEach(e=>{let t=e.includes("quiz-question-"),n=window.scrollY+ae>I[e].position+100,i=window.scrollY-ae<I[e].position-100;(t||n&&i)&&rt(I[e].element)})},le=()=>{window.addEventListener("scroll",ce),ce()};var pe=10,at=3,ct=6,lt=e=>{let t=!1,n,i,r=document.getElementsByClassName("slider-pagination-bullet"),m=document.getElementsByClassName("slider-item")[0].offsetWidth;e.addEventListener("scroll",d=>{let c=d.target.scrollLeft;c<m*at-pe?(r[0].classList.add("active"),r[1].classList.remove("active"),r[2].classList.remove("active")):c>m*ct-pe?(r[2].classList.add("active"),r[0].classList.remove("active"),r[1].classList.remove("active")):(r[1].classList.add("active"),r[0].classList.remove("active"),r[2].classList.remove("active"))}),e.addEventListener("mousedown",d=>{t=!0,e.classList.add("active"),n=d.pageX-e.offsetLeft,i=e.scrollLeft}),e.addEventListener("mouseleave",()=>{t=!1,e.classList.remove("active")}),e.addEventListener("mouseup",()=>{t=!1,e.classList.remove("active")}),e.addEventListener("mousemove",d=>{if(!t)return;d.preventDefault();let c=d.pageX-e.offsetLeft,g=3,l=(c-n)*g;e.scrollLeft=i-l}),e.scrollLeft=0},de=()=>{document.querySelectorAll(".slider").forEach(lt)};var F=document.getElementById("brands-modal"),pt=F.getElementsByClassName("brands-modal-container")[0],O=document.getElementById("brands-modal-overlay"),x=document.getElementById("brands-modal-section"),z=p.platform,G=z==="desktop",me=!1,R={carmakoma:"Carmakoma",espirit:"esprit","garcia-jeans":"garcia","grace-mila":"Grace&Mila",ichi:"ICHI",lee:"lee",nafnaf:"NAFNAF",only:"Only",pieces:"pieces","scotch-soda":"SCOTCH_SODA","soft-rebels":"SOFT_REBELS","street-one":"street_one",tiffossi:"tiffosi","vero-moda":"Vero_moda",vila:"vila"},dt=()=>{me||Object.keys(R).forEach(e=>{let t=document.getElementById(e);t.src=`https://cdn.dev.envs.lookiero.tech/usf/images/brands/${z}/${R[e]}.png`,t.srcset=`https://cdn.dev.envs.lookiero.tech/usf/images/brands/${z}/${R[e]}.png 1x, https://cdn.dev.envs.lookiero.tech/usf/images/brands/${z}/${R[e]}_2x.png 2x`}),me=!0},ge=()=>{x.style.transform=G?"scale(0.9)":"translateY(120%)"},q=(e,t,n)=>{e.classList.remove(t),e.classList.add(n)},mt=()=>{dt(),O.style.opacity=1,q(O,"collapse","expand"),x.style.opacity=1,x.style.transform=G?"scale(1)":"translateY(0%)",q(x,"collapse","expand"),F.classList.remove("pointerNone"),pt.style["max-height"]=`${window.innerHeight}px`,B()},ue=()=>{O.style.opacity=0,q(O,"expand","collapse"),x.style.opacity=0,ge(),q(x,"expand","collapse"),F.classList.add("pointerNone"),j()},fe=()=>{G&&x.classList.add("timing-spring"),ge(),document.getElementById("brands-modal-link").addEventListener("click",mt),document.getElementById("brands-modal-close").addEventListener("click",ue),document.getElementById("brands-modal-overlay").addEventListener("click",ue)};var b={setItem:function(e,t,n,i,r,m){if(!(!e||/^(?:expires|max-age|path|domain|secure)$/i.test(e))){var d="";if(n)switch(n.constructor){case Number:d=n===1/0?"; expires=Tue, 19 Jan 2038 03:14:07 GMT":"; max-age="+n;break;case String:d="; expires="+n;break;case Date:d="; expires="+n.toGMTString();break}document.cookie=escape(e)+"="+escape(t)+d+(r?"; domain="+r:"")+(i?"; path="+i:"")+(m?"; secure":"")}},getItem:function(e){return!e||!this.hasItem(e)?null:unescape(document.cookie.replace(new RegExp("(?:^|.*;\\s*)"+escape(e).replace(/[-.+*]/g,"\\$&")+"\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*"),"$1"))},hasItem:function(e){return new RegExp("(?:^|;\\s*)"+escape(e).replace(/[-.+*]/g,"\\$&")+"\\s*\\=").test(document.cookie)}};var $e=1.25,gt=48,ut=3,ft=4,he=document.getElementById("home-quiz-question-container__inner"),$t="a",N={1:[]},Y=e=>{document.getElementById(e.id).style.setProperty("width",`${e.width}px`),document.getElementById(e.id).style.setProperty("height",`${e.height}px`)},ht=()=>{let e=he.offsetWidth/2-1.5,t=e*$e;return{width:e,height:t}},yt=()=>{let e=(he.offsetWidth-ut*gt)/ft,t=e*$e;return{width:e,height:t}},vt=()=>{let e=p.mobile?ht():yt();for(let t=1;t<5;t++)Y(f({id:`thumbnail-${t}`},e)),Y(f({id:`quiz-question-${t}`},e)),Y(f({id:`motion-leisure-${t}`},e))},xt={1:"casual",2:"street",3:"classic",4:"femenine"},wt=e=>window.dataLayer.push({event:"quiz",eventCategory:"navigation",quiz:"leisure",number:1,select:{"dress-leisure":[xt[e]]}}),kt=()=>{if(!N[1].length){document.getElementById("home-quiz-error").classList.remove("displayNone");return}b.setItem($t,JSON.stringify(N)),wt(N[1][0]),document.location.href="/user/quiz/work"},Et=(e,t)=>{let n=document.getElementById(t);document.getElementById("home-quiz-error").classList.add("displayNone"),document.querySelectorAll(".selected-border").forEach(r=>r.style.setProperty("box-shadow","none"));let i=n.querySelector(".selected-border");i.style.setProperty("box-shadow",""),i.classList.add("expand"),i.classList.remove("collapse"),N["1"]=[n.getElementsByTagName("input")[0].value],v("quiz",!0)},_t=()=>document.querySelectorAll(".home-quiz-question-container__inner .touchable").forEach(e=>e.addEventListener("click",t=>Et(t,e.id))),ye=()=>{vt(),_t(),document.getElementById("submit-quiz").addEventListener("click",kt)};var k=document.getElementById("discover-sticky-button-container"),W=document.getElementById("home-intro__cta"),ve=W.offsetHeight,It=document.getElementById("header-container"),A=document.getElementById("submit-quiz"),bt=document.querySelector(".home-quiz-title-container"),J=window.innerHeight,At=()=>{let e=W.getBoundingClientRect();return J-e.top>0&&e.top+W.offsetHeight>0},Ct=()=>p.mobile?J>bt.getBoundingClientRect().bottom&&A.getBoundingClientRect().top+A.offsetHeight>0:J-A.getBoundingClientRect().top>0&&A.getBoundingClientRect().top+A.offsetHeight>0,St=()=>It.style.top==="0px",xe=()=>{if(!Ct()&&!At()){let e=St()?"48px":0;k.style.setProperty("opacity",1),k.style.setProperty("bottom",p.mobile?"0px":"auto"),k.style.setProperty("top",p.mobile?"auto":e)}else k.style.setProperty("opacity",0),k.style.setProperty("bottom",p.mobile?`-${ve}px`:"auto"),k.style.setProperty("top",p.mobile?"auto":`-${ve}px`)},we=()=>{document.getElementById("sticky-button").addEventListener("click",()=>v("quiz")),window.addEventListener("scroll",xe),xe()};var ke="cookiesAgreement",Ee=e=>{let t=document.getElementById("cookies-modal");e?t==null||t.classList.remove("hidden-component"):t==null||t.classList.add("hidden-component")},Lt=()=>{b.getItem(ke)||Ee(!0)},_e=()=>{b.setItem(ke,!0),Ee(!1)},Bt=()=>{_e()},jt=()=>{_e(),document.location.href="/terms-and-conds"},Pt=()=>{let e={addEventListener:()=>{}};(document.getElementById("cookie-modal-close-btn")||e).addEventListener("click",Bt),(document.getElementById("cookies-modal-link")||e).addEventListener("click",jt)},Ie=()=>{Lt(),Pt()};var Tt=()=>{let e=window.location.hostname.split(".").pop();window.open(`/${e}/personal-shopper`,"_blank")},Ot=()=>{let e=document.querySelectorAll(".ps-link");e==null||e.forEach(t=>t.addEventListener("click",Tt))},be=()=>{Ot()};var K=Ge(Se());var zt="voyager",Rt="pathfinder",Le="utm_source",qt=["utm_medium","utm_campaign","utm_term","utm_content"],Nt=/(?:www\.)?([a-z0-9\-.]+)(?:\.[a-z.]+[/]?).*/,$="searcher",C="social",Dt=[{name:"google",type:$,adParam:"gclid="},{name:"bing",type:$,adParam:"gclid="},{name:"linkedin",type:C,adParam:""},{name:"facebook",type:C,adParam:"ad_id="},{name:"pinterest",type:C,adParam:""},{name:"twitter",type:C,adParam:""},{name:"instagram",type:C,adParam:""},{name:"yahoo",type:$,adParam:""},{name:"yandex",type:$,adParam:""},{name:"duckduckgo",type:$,adParam:""},{name:"ask.fm",type:$,adParam:""},{name:"ask",type:$,adParam:""},{name:"ecosia",type:$,adParam:""},{name:"baidu",type:$,adParam:""}],Ht="lookiero",S={get:e=>e&&new URL(window.location.href).searchParams.get(e)||void 0,has:e=>S.get(e)!==void 0},Q=(e="")=>e.indexOf(window.location.hostname)===-1,Mt=(e="")=>(Q(e)?Nt.exec(e)||[]:[])[1]||"",Ut=(e="")=>{let t={s:"",ad:!1},n=Dt.find(i=>e.indexOf(i.name)!==-1);return n&&(t={s:n.type,ad:!!n.adParam&&e.indexOf(n.adParam)!==-1}),t},Be=()=>{let e=document.referrer||"",t=new Date().toISOString().split("T").join(" ").split(".")[0],n=Q(e)?e.replace(/(^\w+:|^)\/\//,""):"";return f({ref:n,tld:Mt(e),ua:p.mobile?"mobile":"desktop",ts:t},Ut(e))},Ft=(e,t)=>(e.map(i=>i.ref).includes(t.ref)||e.push(t),e),Gt=(e=[],t={})=>{t&&t.constructor===Object&&Object.keys(t).length>0&&e.push(t);let n=e.reduce(Ft,[]),i=n.length>0,r=i?n[n.length-1]:{},m=i?n[0]:{};return m.constructor!==Object||Object.keys(m).length===0?[]:r.ref===m.ref?[m]:[m,r]},Yt=e=>{let t=e.split("."),n=t.indexOf(Ht);return t.slice(-(t.length-n)).join(".")},je=(e,t)=>{let n=K.default.get(e),i=n?JSON.parse(n):[],r=Gt(i,t);K.default.set(e,JSON.stringify(r),{expires:365,path:"/",domain:`.${Yt(window.location.hostname)}`})},Wt=()=>{let e=S.get(Le);if(!e)return;let t=f({utm_source:e},Be());qt.filter(n=>S.has(n)).forEach(n=>t[n]=S.get(n)),je(zt,t)},Jt=()=>{let e=S.has(Le),t=document.referrer||"";if(e||!Q(t))return;let n=Be();je(Rt,n)},Pe=()=>{Wt(),Jt()};(()=>{Pe(),P("home"),te(),se(),ie(),le(),de(),fe(),ye(),we(),Ie(),be()})();})();
/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */

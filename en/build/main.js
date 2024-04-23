/*! For license information please see main.js.LICENSE.txt */
(()=>{var t={455:(t,e,n)=>{"use strict";n.d(e,{A:()=>r});var o=n(601),i=n.n(o),s=n(314),a=n.n(s)()(i());a.push([t.id,"/*!\n * Toastify js 1.12.0\n * https://github.com/apvarun/toastify-js\n * @license MIT licensed\n *\n * Copyright (C) 2018 Varun A P\n */\n\n.toastify {\n    padding: 12px 20px;\n    color: #ffffff;\n    display: inline-block;\n    box-shadow: 0 3px 6px -1px rgba(0, 0, 0, 0.12), 0 10px 36px -4px rgba(77, 96, 232, 0.3);\n    background: -webkit-linear-gradient(315deg, #73a5ff, #5477f5);\n    background: linear-gradient(135deg, #73a5ff, #5477f5);\n    position: fixed;\n    opacity: 0;\n    transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);\n    border-radius: 2px;\n    cursor: pointer;\n    text-decoration: none;\n    max-width: calc(50% - 20px);\n    z-index: 2147483647;\n}\n\n.toastify.on {\n    opacity: 1;\n}\n\n.toast-close {\n    background: transparent;\n    border: 0;\n    color: white;\n    cursor: pointer;\n    font-family: inherit;\n    font-size: 1em;\n    opacity: 0.4;\n    padding: 0 5px;\n}\n\n.toastify-right {\n    right: 15px;\n}\n\n.toastify-left {\n    left: 15px;\n}\n\n.toastify-top {\n    top: -150px;\n}\n\n.toastify-bottom {\n    bottom: -150px;\n}\n\n.toastify-rounded {\n    border-radius: 25px;\n}\n\n.toastify-avatar {\n    width: 1.5em;\n    height: 1.5em;\n    margin: -7px 5px;\n    border-radius: 2px;\n}\n\n.toastify-center {\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 0;\n    max-width: fit-content;\n    max-width: -moz-fit-content;\n}\n\n@media only screen and (max-width: 360px) {\n    .toastify-right, .toastify-left {\n        margin-left: auto;\n        margin-right: auto;\n        left: 0;\n        right: 0;\n        max-width: fit-content;\n    }\n}\n",""]);const r=a},206:(t,e,n)=>{"use strict";n.d(e,{Ay:()=>p,SR:()=>d,ai:()=>c,n9:()=>l,s_:()=>r});var o=n(601),i=n.n(o),s=n(314),a=n.n(s)()(i());a.push([t.id,".Jion0LspIGi4u_Pmbrz8 {\n    background-color: var(--primary-violet);\n    user-select: none;\n    -webkit-box-shadow: 0px 10px 17px 0px rgba(99,99,99,0.58);\n    -moz-box-shadow: 0px 10px 17px 0px rgba(99, 99, 99, 0.58);\n    box-shadow: 0px 2px 21px 0px rgba(99,99,99,0.5);\n}\n\n.Jion0LspIGi4u_Pmbrz8 > h5 {\n    color: #000;\n    font-size: 1.75rem;\n}\n\n.ZghJlnPtCgwlE9htjSN4 {\n    width: 100%;\n}\n\n.ZghJlnPtCgwlE9htjSN4 > img {\n    max-width: 100%;\n}\n\n.WBtyvn14vG5cr2ixEimE {\n    background-color: #C2D9FF;\n}\n\n.TaMJyzwRSuYQd17sxa_2 {\n    background-color: var(--primary);\n    \n    color: #000;\n    border-radius: 0.5rem;\n    position: absolute;\n    top: 23%;\n    right: 36%;\n    transition: all 0.15s !important;\n}\n\n.TaMJyzwRSuYQd17sxa_2:hover {\n    color: #fff;\n        -webkit-box-shadow: 0px 0px 23px 5px rgba(142,143,250,1);\n        -moz-box-shadow: 0px 0px 23px 5px rgba(142,143,250,1);\n        box-shadow: 0px 0px 23px 5px rgba(142,143,250,1);\n        filter: contrast(1.5);\n}\n",""]);var r="Jion0LspIGi4u_Pmbrz8",l="ZghJlnPtCgwlE9htjSN4",c="WBtyvn14vG5cr2ixEimE",d="TaMJyzwRSuYQd17sxa_2";const p=a},314:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,i,s){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(o)for(var r=0;r<this.length;r++){var l=this[r][0];null!=l&&(a[l]=!0)}for(var c=0;c<t.length;c++){var d=[].concat(t[c]);o&&a[d[0]]||(void 0!==s&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=s),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),e.push(d))}},e}},601:t=>{"use strict";t.exports=function(t){return t[1]}},72:t=>{"use strict";var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var s={},a=[],r=0;r<t.length;r++){var l=t[r],c=o.base?l[0]+o.base:l[0],d=s[c]||0,p="".concat(c," ").concat(d);s[c]=d+1;var u=n(p),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var h=i(m,o);o.byIndex=r,e.splice(r,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function i(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,i){var s=o(t=t||[],i=i||{});return function(t){t=t||[];for(var a=0;a<s.length;a++){var r=n(s[a]);e[r].references--}for(var l=o(t,i),c=0;c<s.length;c++){var d=n(s[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}s=l}}},659:t=>{"use strict";var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,i&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},736:function(t){var e;e=function(t){var e=function(t){return new e.lib.init(t)};function n(t,e){return e.offset[t]?isNaN(e.offset[t])?e.offset[t]:e.offset[t]+"px":"0px"}function o(t,e){return!(!t||"string"!=typeof e||!(t.className&&t.className.trim().split(/\s+/gi).indexOf(e)>-1))}return e.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},e.lib=e.prototype={toastify:"1.12.0",constructor:e,init:function(t){return t||(t={}),this.options={},this.toastElement=null,this.options.text=t.text||e.defaults.text,this.options.node=t.node||e.defaults.node,this.options.duration=0===t.duration?0:t.duration||e.defaults.duration,this.options.selector=t.selector||e.defaults.selector,this.options.callback=t.callback||e.defaults.callback,this.options.destination=t.destination||e.defaults.destination,this.options.newWindow=t.newWindow||e.defaults.newWindow,this.options.close=t.close||e.defaults.close,this.options.gravity="bottom"===t.gravity?"toastify-bottom":e.defaults.gravity,this.options.positionLeft=t.positionLeft||e.defaults.positionLeft,this.options.position=t.position||e.defaults.position,this.options.backgroundColor=t.backgroundColor||e.defaults.backgroundColor,this.options.avatar=t.avatar||e.defaults.avatar,this.options.className=t.className||e.defaults.className,this.options.stopOnFocus=void 0===t.stopOnFocus?e.defaults.stopOnFocus:t.stopOnFocus,this.options.onClick=t.onClick||e.defaults.onClick,this.options.offset=t.offset||e.defaults.offset,this.options.escapeMarkup=void 0!==t.escapeMarkup?t.escapeMarkup:e.defaults.escapeMarkup,this.options.ariaLive=t.ariaLive||e.defaults.ariaLive,this.options.style=t.style||e.defaults.style,t.backgroundColor&&(this.options.style.background=t.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var t=document.createElement("div");for(var e in t.className="toastify on "+this.options.className,this.options.position?t.className+=" toastify-"+this.options.position:!0===this.options.positionLeft?(t.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):t.className+=" toastify-right",t.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.'),this.options.style)t.style[e]=this.options.style[e];if(this.options.ariaLive&&t.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)t.appendChild(this.options.node);else if(this.options.escapeMarkup?t.innerText=this.options.text:t.innerHTML=this.options.text,""!==this.options.avatar){var o=document.createElement("img");o.src=this.options.avatar,o.className="toastify-avatar","left"==this.options.position||!0===this.options.positionLeft?t.appendChild(o):t.insertAdjacentElement("afterbegin",o)}if(!0===this.options.close){var i=document.createElement("button");i.type="button",i.setAttribute("aria-label","Close"),i.className="toast-close",i.innerHTML="&#10006;",i.addEventListener("click",function(t){t.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}.bind(this));var s=window.innerWidth>0?window.innerWidth:screen.width;("left"==this.options.position||!0===this.options.positionLeft)&&s>360?t.insertAdjacentElement("afterbegin",i):t.appendChild(i)}if(this.options.stopOnFocus&&this.options.duration>0){var a=this;t.addEventListener("mouseover",(function(e){window.clearTimeout(t.timeOutValue)})),t.addEventListener("mouseleave",(function(){t.timeOutValue=window.setTimeout((function(){a.removeElement(t)}),a.options.duration)}))}if(void 0!==this.options.destination&&t.addEventListener("click",function(t){t.stopPropagation(),!0===this.options.newWindow?window.open(this.options.destination,"_blank"):window.location=this.options.destination}.bind(this)),"function"==typeof this.options.onClick&&void 0===this.options.destination&&t.addEventListener("click",function(t){t.stopPropagation(),this.options.onClick()}.bind(this)),"object"==typeof this.options.offset){var r=n("x",this.options),l=n("y",this.options),c="left"==this.options.position?r:"-"+r,d="toastify-top"==this.options.gravity?l:"-"+l;t.style.transform="translate("+c+","+d+")"}return t},showToast:function(){var t;if(this.toastElement=this.buildToast(),!(t="string"==typeof this.options.selector?document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||"undefined"!=typeof ShadowRoot&&this.options.selector instanceof ShadowRoot?this.options.selector:document.body))throw"Root element is not defined";var n=e.defaults.oldestFirst?t.firstChild:t.lastChild;return t.insertBefore(this.toastElement,n),e.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout(function(){this.removeElement(this.toastElement)}.bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(t){t.className=t.className.replace(" on",""),window.setTimeout(function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),t.parentNode&&t.parentNode.removeChild(t),this.options.callback.call(t),e.reposition()}.bind(this),400)}},e.reposition=function(){for(var t,e={top:15,bottom:15},n={top:15,bottom:15},i={top:15,bottom:15},s=document.getElementsByClassName("toastify"),a=0;a<s.length;a++){t=!0===o(s[a],"toastify-top")?"toastify-top":"toastify-bottom";var r=s[a].offsetHeight;t=t.substr(9,t.length-1),(window.innerWidth>0?window.innerWidth:screen.width)<=360?(s[a].style[t]=i[t]+"px",i[t]+=r+15):!0===o(s[a],"toastify-left")?(s[a].style[t]=e[t]+"px",e[t]+=r+15):(s[a].style[t]=n[t]+"px",n[t]+=r+15)}return this},e.lib.init.prototype=e.lib,e},t.exports?t.exports=e():this.Toastify=e()}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var s=e[o]={id:o,exports:{}};return t[o].call(s.exports,s,s.exports,n),s.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{"use strict";const t=new class{constructor({CarsData:t,UserData:e,BrandCars:n}){this.CarsData=t,this.UserData=e,this.BrandCars=n}renderCars(t){const e=this.CarsData,n=document.querySelector(t);n.innerHTML=null,n.innerHTML+=`${e.map((t=>`\n            <div class="testimonial-item text-center">\n                <div class="car-img-container">\n                    <img class="" src="${t.imgSrc}" >\n                </div>\n                \n                <div class="testimonial-text bg-light text-center p-4">\n                        <p class="mb-0">${t.description}</p>\n                </div>\n                <h6 class="my-2">${t.year}</h5>\n                <div class="my-2">${t.price}</div>\n                </div>\n                `)).join("")}`}renderComments(t){const e=this.UserData,n=document.querySelector(t);n.innerHTML=null,n.innerHTML+=`${e.map((t=>`\n            <div class="testimonial-item testimonial-item-comments text-center">\n                    ${t.linkedin?`\n\n                    <a href="${t.linkedin}" target="_blank" class="item-comments-img-container mb-3">\n                            <img class="bg-light mx-auto item-comments-img" src="${t.imgSrc}" style="width: 200px; height: 200px;">  \n                    </a>`:`\n                    <div class="d-inline-block mb-3">\n                        <img class="bg-light mx-auto item-comments-img" src="${t.imgSrc}" style="width: 200px; height: 200px;">  \n                    </div>\n                        \n                    `}\n                    \n                    <h5 class="mb-0">${t.name}</h5>\n                    <p>${t.type}</p>\n                    <div style="transition: all .3s ease;" data-user-id="${t.id}" class="testimonial-text testimonial-text-container bg-light p-4">\n                        <p class="mb-0">${t.comment.substring(0,60)}...</p>\n                        <button class="read-more-btn" data-btn-id="${t.id}" type="button">Read more</button>\n                    </div>\n            </div>\n                `)).join("")}`}renderBrands(t){const e=this.BrandCars,n=document.querySelector(t);n.innerHTML=null,n.innerHTML+=`${e.map((t=>`\n            <div class="testimonial-item text-center">\n                    <img class="p-2  m-3" src="${t.imgSrc}" style="width: 200px;">\n            </div>\n                `)).join("")}`}}(window.AppData);var e=n(736),o=n.n(e);function i(t,e){o()({text:t,duration:4e3,newWindow:!0,close:!0,gravity:"top",position:"center",stopOnFocus:!0,style:{background:e,"text-transform":"uppercase"},onClick:function(){}}).showToast()}const{SERVER_URL:s}=window.AppConfig;var a=n(72),r=n.n(a),l=n(825),c=n.n(l),d=n(659),p=n.n(d),u=n(56),m=n.n(u),h=n(540),f=n.n(h),y=n(113),v=n.n(y),b=n(206),g={};g.styleTagTransform=v(),g.setAttributes=m(),g.insert=p().bind(null,"head"),g.domAPI=c(),g.insertStyleElement=f(),r()(b.Ay,g),b.Ay&&b.Ay.locals&&b.Ay.locals;const x=new class{constructor({UserData:t}){this.CommentsData=t}AnchorLinks(){function t(t){t.preventDefault(),e.forEach((t=>t.classList.remove("active"))),t.target.classList.add("active");const n=t.target.getAttribute("data-scroll-to"),o=document.querySelector(n),i=document.querySelector(".navbar").offsetHeight,s=o.offsetTop-i;window.scrollTo({top:s,behavior:"smooth"})}const e=document.querySelectorAll("[data-scroll-to]");e.forEach((e=>{e.addEventListener("click",t)}))}rotateAnimation(){const t=document.querySelector("#service_img-container");let e=0;function n(){e+=60,t.style.transform=`rotate(${e}deg)`,e>=360&&setTimeout((function(){t.classList.remove("transition"),e=-60,n()}),1900)}setInterval((function(){t.classList.add("transition"),n()}),6e3)}FactsCounter(){$('[data-toggle="counter-up"]').counterUp({delay:10,time:3e3})}StickyNavbar(){$(window).scroll((function(){$(this).scrollTop()>300?$(".sticky-top").css("top","0px"):$(".sticky-top").css("top","-100px")}))}Spinner(){setTimeout((function(){$("#spinner").length>0&&$("#spinner").removeClass("show")}),1)}BackToTop(){$(window).scroll((function(){$(this).scrollTop()>200?$(".back-to-top").fadeIn("slow"):$(".back-to-top").fadeOut("slow")})),$(".back-to-top").click((function(){return $("html, body").animate({scrollTop:0},100,"easeInOutExpo"),!1}))}CarouselConfig(t,e,n){$(t).owlCarousel({autoplay:!0,smartSpeed:n,center:!0,margin:25,dots:!0,loop:!0,nav:!1,responsive:{0:{items:e[2]},768:{items:e[1]},992:{items:e[0]}}})}ShowReadMore(t,e){const n=this.CommentsData.find((t=>t.id===Number(e))),o=t.querySelector("p"),i=t.querySelector("button");i.classList.contains("hide")?(o.innerHTML=n.comment.substring(0,60),i.classList.remove("hide"),i.innerHTML="Read more"):(o.innerHTML=n.comment,i.classList.add("hide"),i.innerHTML="Hide")}StartAll(){this.Spinner(),this.AnchorLinks(),this.BackToTop(),this.FactsCounter(),this.rotateAnimation(),this.CarouselConfig(".testimonial-carousel",[3,2,1],1e3),this.CarouselConfig("#brands-container",[5,3,2],500)}}(window.AppData);var w=n(455),k={};k.styleTagTransform=v(),k.setAttributes=m(),k.insert=p().bind(null,"head"),k.domAPI=c(),k.insertStyleElement=f(),r()(w.A,k),w.A&&w.A.locals&&w.A.locals,function(e){(new WOW).init();const n=document.querySelector("body");t.renderCars("#deal-cars-container"),t.renderBrands("#brands-container"),t.renderComments("#comments__inner-container"),n.innerHTML+=`\n      <div class="modal fade" id="StepByStep"\n           data-bs-backdrop="static" \n           data-bs-keyboard="false" \n           tabindex="-1" \n           aria-labelledby="staticBackdropLabel"\n           aria-hidden="true"> \n\n          <div class="modal-dialog modal-dialog-centered">\n              <div class="modal-content">\n                    <div class="modal-header ${b.s_} justify-content-center py-2">\n                        <h5 class="modal-title" id="staticBackdropLabel">UP TO -15% FOR SERVICE</h5>\n                        <button type="button" class="btn-close" aria-label="Close"></button>\n                    </div>\n\n                    <div class="modal-body position-relative ${b.ai} pb-5">\n                              \n                            <a href="file/promocode.zip" download>\n                                <button type="button" class="btn ${b.SR} p-3">Click to Download</button>\n                            </a>\n                             \n                              <div class="${b.n9} p-5"> \n                                    <img src="img/step-by-step/Step-by-step.v4.png" >\n                              </div>\n                    </div>\n                </div>\n\n          </div>\n    </div>\n      `,x.StartAll();const o=Array.from(document.querySelectorAll(".submit-dres-form")),a=Array.from(document.querySelectorAll(".form"));let r;const l=document.querySelector("[download]");o.forEach(((t,e)=>{t.addEventListener("click",(t=>{t.preventDefault(),r=a[e],async function(t){let e=new bootstrap.Modal(document.getElementById("StepByStep"),{keyboard:!1});const n={};Array.from(t.querySelectorAll("input")).length>3?(n.FirstName=t.querySelector('input[name="FirstName"]').value,n.LastName=t.querySelector('input[name="LastName"]').value,n.Email=t.querySelector('input[name="email"]').value,n.Phone=t.querySelector('input[name="phone"]').value):3===Array.from(t.querySelectorAll("input")).length?(n.FirstName=t.querySelector('input[name="FirstName"]').value,n.Email=t.querySelector('input[name="email"]').value,n.Phone=t.querySelector('input[name="phone"]').value):n.Email=t.querySelector('input[name="email"]').value,function(t){const e=[];if(Object.keys(t).length>3){(!t.FirstName||t.FirstName.length<2||t.FirstName.length>30)&&e.push("Name must be between 2 and 30 characters."),(!t.LastName||t.LastName.trim().length<2||t.LastName.trim().length>30)&&e.push("Lastname must be between 2 and 30 characters.");const n=/^\+[1-9]\d{1,14}$/;t.Phone&&n.test(t.Phone)||e.push("Invalid phone number"),t.Email.trim()||e.push("Invalid email")}else if(3===Object.keys(t).length){(!t.FirstName||t.FirstName.length<2||t.FirstName.length>30)&&e.push("Name must be between 2 and 30 characters.");const n=/^\+[1-9]\d{1,14}$/;t.Phone&&n.test(t.Phone)||e.push("Invalid phone number"),t.Email.trim()||e.push("Invalid email")}else t.Email.trim()||e.push("Invalid email");return e.forEach((t=>{i(t,"red")})),e}(n).length>0||(e.show(),localStorage.setItem("user_data",JSON.stringify(n)))}(a[e])}))})),l.addEventListener("click",(()=>function(t){const e=document.querySelector("#StepByStep"),n=e.querySelector('[aria-label="Close"]');e.removeAttribute("data-bs-backdrop"),e.removeAttribute("data-bs-keyboard"),n.setAttribute("data-bs-dismiss","modal");const o=localStorage.getItem("user_data");o&&o.length>5?fetch(s,{method:"POST",body:o,headers:{Accept:"application/json"}}).then((t=>{console.log(t),t.ok?i("Success","green"):t.json().then((t=>{Object.hasOwn(t,"errors")?t.errors.forEach((t=>i(t.message,"red"))):console.log("Error")}))})).catch((t=>{i("Network Error"+t,"red")})).finally((e=>{localStorage.removeItem("user_data"),t.reset()})):i("Empty form","red")}(r))),Array.from(document.querySelectorAll(".read-more-btn")).forEach((t=>{t.addEventListener("click",(function(){const t=this.closest(".testimonial-text-container"),e=this.dataset.btnId;x.ShowReadMore(t,e)}))}))}(jQuery)})()})();
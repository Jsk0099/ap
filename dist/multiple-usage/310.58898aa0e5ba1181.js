"use strict";(self.webpackChunkmultipleUsage=self.webpackChunkmultipleUsage||[]).push([[310],{310:(y,s,a)=>{a.r(s),a.d(s,{MultipleIframeModule:()=>f});var l=a(6895),u=a(28),e=a(1571),p=a(1481);function m(n,h){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",4),e.NdJ("mouseup",function(r){e.CHM(t);const o=e.oxw();return e.KtG(o.endDrag(r))}),e.qZA(),e.BQk()}if(2&n){const t=h.$implicit;e.xp6(1),e.Q6J("innerHTML",t,e.oJD)}}const d=[{path:"",component:(()=>{class n{constructor(t){this.sanitizer=t}ngOnInit(){this.iframeListing=[this.sanitizer.bypassSecurityTrustHtml('<iframe width="'+this.adjustWidth()+'" height="315" src="https://www.youtube.com/embed/wWX60Gx5FBQ?si=LSbW0Kt06NI9PJD9&autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')]}makeIframeLink(t){if(t.indexOf("youtu")){t=t.slice(t.lastIndexOf("/"));let i=`<iframe width="${this.adjustWidth()}" height="315" src="https://www.youtube.com/embed${t}&autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;this.iframeListing.push(this.sanitizer.bypassSecurityTrustHtml(i))}else alert("Please Add Valid Link")}addIframe(){let t=document.getElementById("iframeInput");t.value&&t.value.indexOf("iframe")<0?this.makeIframeLink(t.value):this.iframeListing.length>=1?t.value&&this.iframeListing.push(this.sanitizer.bypassSecurityTrustHtml(t.value.indexOf("youtube")?this.addMutedAutoplay(t.value):t.value)):this.iframeListing[0]=this.sanitizer.bypassSecurityTrustHtml(t.value.indexOf("youtu")?this.addMutedAutoplay(t.value):t.value)}adjustWidth(){return window.outerWidth<560?window.outerWidth-5:560}addMutedAutoplay(t){let i=t.split(" ");if(i[3]){let r=i[3].split("?");r[1]&&(r[1]=r[1].slice(0,r[1].indexOf('"'))+'&autoplay=1&mute=1"'),i[3]&&(i[3]=r.join("?"))}return i.join(" ")}editWidth(){let t=document.getElementById("iframeInput");this.iframeListing.push(this.sanitizer.bypassSecurityTrustHtml(this.changeWidth(t.value,450)))}changeWidth(t,i){let r=t.split(" ");if(r[1]){let o=r[1].split("=");o[1]='"'+i+'"';let g=o.join("=");r[1]=g}return r.join(" ")}endDrag(t){if(t.target){let i=t.target;i.getElementsByTagName("iframe")[0].height=i.offsetHeight.toString(),i.getElementsByTagName("iframe")[0].width=i.offsetWidth.toString()}}ngOnDestroy(){console.log("mulipleIframe Destroy")}static#t=this.\u0275fac=function(i){return new(i||n)(e.Y36(p.H7))};static#e=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-multiple-iframe"]],decls:7,vars:1,consts:[["type","text","id","iframeInput",1,"inputfield"],[1,"btn",3,"click"],[1,"iframe-container"],[4,"ngFor","ngForOf"],[1,"iframes",3,"innerHTML","mouseup"]],template:function(i,r){1&i&&(e._UZ(0,"input",0),e.TgZ(1,"button",1),e.NdJ("click",function(){return r.addIframe()}),e._uU(2,"Add Iframe"),e.qZA(),e.TgZ(3,"button",1),e.NdJ("click",function(){return r.editWidth()}),e._uU(4,"editWidth"),e.qZA(),e.TgZ(5,"div",2),e.YNc(6,m,2,1,"ng-container",3),e.qZA()),2&i&&(e.xp6(6),e.Q6J("ngForOf",r.iframeListing))},dependencies:[l.sg],styles:[".inputfield[_ngcontent-%COMP%]{margin:3px;padding:5px 5px 5px 11px;border-radius:15px;cursor:text;border:1px rgb(105,98,98) solid;outline:none}.inputfield[_ngcontent-%COMP%]:focus{border:1px blue solid}#iframeInput[_ngcontent-%COMP%]{width:31vw}.btn[_ngcontent-%COMP%]{background-color:#1117bd;color:#fff;padding:7px;margin:3px;font-size:15px;border-radius:15px;border:none}.btn[_ngcontent-%COMP%]:hover{background-color:#0f0aa0;font-weight:700;cursor:pointer}.iframe-container[_ngcontent-%COMP%]{margin-top:5px;display:flex;justify-content:space-evenly;flex-wrap:wrap;gap:5px}.iframe-container[_ngcontent-%COMP%]   .iframes[_ngcontent-%COMP%]{resize:both;overflow:hidden}"]})}return n})(),data:{id:"navmultipleiframe"}}];let c=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=e.oAB({type:n});static#i=this.\u0275inj=e.cJS({imports:[u.Bz.forChild(d),u.Bz]})}return n})(),f=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=e.oAB({type:n});static#i=this.\u0275inj=e.cJS({imports:[l.ez,c]})}return n})()}}]);
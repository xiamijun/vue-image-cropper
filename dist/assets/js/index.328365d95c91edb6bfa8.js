webpackJsonp([0],{"0M0F":function(t,e){},GPbd:function(t,e,i){e=t.exports=i("FZ+f")(!1),e.push([t.i,"body{font-size:16px}#app{width:100%;height:100%}p a{margin:0 10px;text-decoration:underline}",""])},Qq0J:function(t,e,i){e=t.exports=i("FZ+f")(!1),e.push([t.i,".imageCropper[data-v-168676ef]{text-align:left}.btn-choose[data-v-168676ef]{width:120px;height:40px;line-height:40px;font-size:14px;border:1px solid #1d9ffd;background-color:#1d9ffd;color:#fff;margin:20px 20px 30px 0;position:relative;overflow:hidden;text-align:center}.file-input[data-v-168676ef]{position:absolute;top:-1px;left:0;height:42px;width:120px;opacity:0;cursor:pointer;font-size:0}.preview-container[data-v-168676ef]{overflow:hidden;color:#999;margin-bottom:20px}.preview-container .noavatar[data-v-168676ef]{background-color:#efeeef}.preview-container>div[data-v-168676ef]{float:left}.large-wrapper[data-v-168676ef]{border-left:1px solid #eee;padding-left:30px;margin-right:30px}.image-container[data-v-168676ef]{position:relative;overflow:hidden;border:1px solid #bbb;margin-bottom:5px}.image-container>img[data-v-168676ef]{position:absolute}.image-container.target[data-v-168676ef]{width:100%;height:100%;margin-right:30px}.image-container.large img[data-v-168676ef],.image-container.target img[data-v-168676ef]{width:100%;height:100%}.cropper-canvas[data-v-168676ef]{display:none}",""])},"Vy+o":function(t,e,i){var r=i("YbC6");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);i("rjj0")("0bd08a02",r,!0,{})},YbC6:function(t,e,i){e=t.exports=i("FZ+f")(!1),e.push([t.i,".resizer{position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box;border:1px dashed #1d9ffd;background-color:transparent;cursor:move}.resizer .resize-handle{position:absolute;background-color:#1d9ffd;opacity:.5;filter:alpha(opacity=50);font-size:1px;height:6px;width:6px}.resizer .resize-handle.ord-n{cursor:n-resize;left:50%;margin-left:-3px;margin-top:-3px;top:0}.resizer .resize-handle.ord-s{cursor:s-resize;bottom:0;left:50%;margin-bottom:-3px;margin-left:-3px}.resizer .resize-handle.ord-e{cursor:e-resize;margin-right:-3px;margin-top:-3px;right:0;top:50%}.resizer .resize-handle.ord-w{cursor:w-resize;left:0;margin-left:-3px;margin-top:-3px;top:50%}.resizer .resize-handle.ord-nw{cursor:nw-resize;left:0;margin-left:-3px;margin-top:-3px;top:0}.resizer .resize-handle.ord-ne{cursor:ne-resize;margin-right:-3px;margin-top:-3px;right:0;top:0}.resizer .resize-handle.ord-se{cursor:se-resize;bottom:0;margin-bottom:-3px;margin-right:-3px;right:0}.resizer .resize-handle.ord-sw{cursor:sw-resize;bottom:0;left:0;margin-bottom:-3px;margin-left:-3px}.resizer .resize-bar.ord-n,.resizer .resize-bar.ord-s{position:absolute;height:6px;width:100%}.resizer .resize-bar.ord-e,.resizer .resize-bar.ord-w{position:absolute;height:100%;width:6px}.resizer .resize-bar.ord-n{cursor:n-resize;margin-top:-3px}.resizer .resize-bar.ord-s{cursor:s-resize;bottom:0;margin-bottom:-3px}.resizer .resize-bar.ord-e{cursor:e-resize;margin-right:-3px;right:0}.resizer .resize-bar.ord-w{cursor:w-resize;margin-left:-3px}.resizer .inner-rect{position:absolute;left:0;top:0;right:0;bottom:0;background-color:#fff;opacity:0;filter:alpha(opacity=0)}.cropper{position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box}.cropper .mask{width:100%;height:100%;opacity:.4;filter:alpha(opacity=40);display:block;background-color:#000}.cropper .resizer .wrapper{position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden}.cropper .resizer .wrapper img{position:absolute;-webkit-user-select:none;-webkit-user-drag:none}",""])},fvOb:function(t,e){},lVK7:function(t,e,i){"use strict";function r(t){i("nlIa")}function o(t,e){if(!t)throw new Error("[Apior] "+e)}function a(t,e){return"POST"===t.method?t.data=e:"GET"===t.method&&(t.params=e),t}function s(t,e){if(!t)return null;var i,r;if(t.tag){i=document.createElement(t.tag);for(var o in t)if(t.hasOwnProperty(o)){if("content"===o||"tag"===o)continue;if("key"===o&&e){var a=t[o];a&&(e[a]=i)}i[o]=t[o]}var n=t.content;if(n instanceof Array)for(var l=0,p=n.length;l<p;l++){var d=n[l];r=s(d,e),i.appendChild(r)}else"string"==typeof n&&(r=document.createTextNode(n),i.appendChild(r))}return i}function n(t,e,i){t.attachEvent?t.attachEvent("on"+e,i):t.addEventListener(e,i,!1)}function l(t,e,i){t.detachEvent?t.detachEvent("on"+e,i):t.removeEventListener(e,i)}function p(t){var e=Math.max(window.scrollY||0,document.documentElement.scrollTop||0),i=Math.max(window.scrollX||0,document.documentElement.scrollLeft||0);t.target=t.srcElement,t.pageX=i+t.clientX,t.pageY=e+t.clientY}function d(t,e){var i=function(t){st&&p(t),e.drag&&e.drag(t)},r=function t(r){st&&p(r),l(document,"mousemove",i),l(document,"mouseup",t),document.onselectstart=null,document.ondragstart=null,at=!1,e.end&&e.end(r)};n(t,"mousedown",function(t){st&&p(t),at||(document.onselectstart=function(){return!1},document.ondragstart=function(){return!1},n(document,"mousemove",i),n(document,"mouseup",r),at=!0,e.start&&e.start(t))})}function h(t){var e=t.getBoundingClientRect(),i=t.offsetParent.getBoundingClientRect();return{left:e.left-i.left,top:e.top-i.top}}function f(t){for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e])}function c(t,e){if(dt<10){pt||(pt=document.createElement("div"),pt.style.position="absolute",pt.style.width="1px",pt.style.height="1px",pt.style.left="-9999px",pt.style.top="-9999px",pt.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=image)",document.body.insertBefore(pt,document.body.firstChild)),pt.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src=t;var i={width:pt.offsetWidth,height:pt.offsetHeight};"function"==typeof e&&e(i)}else{var r=new Image;r.onload=function(){var t={width:r.width,height:r.height};"function"==typeof e&&e(t)},r.src=t}}function g(t){var e=this;this instanceof g||(e=new g);for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);return e.element&&e.render(e.element),e.aspectRatio||(e.aspectRatio=1),e}function u(t){i("wtFt"),i("Vy+o")}Object.defineProperty(e,"__esModule",{value:!0});var m=(i("0M0F"),i("fvOb"),i("7+uW")),v={name:"App"},y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},w=[],x={render:y,staticRenderFns:w},b=x,z=i("VU/8"),S=r,R=z(v,b,!1,S,null,null),C=R.exports,L=i("mtWM"),I=i.n(L),E={timeout:2e4,maxContentLength:2e4,headers:{"Content-Type":"application/json"},baseURL:"/xiaozhi-back-api"},k={mode:"history",base:"/"},T={mockBaseURL:"http://yapi.demo.qunar.com/mock/12982/flytest/v1",mock:!1,debug:!1,sep:"/"},P={strict:!1},M={};M=I.a.create(E);var O=M,N=i("Dd8w"),H=i.n(N),A=i("fZjL"),W=i.n(A),D=i("Zrlr"),X=i.n(D),j=i("wxAW"),F=i.n(j),U=i("BUAs"),$=i.n(U),B=i("HN2V"),Y=i.n(B);i("lHA8"),i("c/Tr"),i("Gu7T");HTMLElement.prototype.getOffset=function(t){for(var e=this.offsetParent,i=this.offsetTop,r=this.offsetLeft;e&&(i+=e.offsetTop,r+=e.offsetLeft,e=e.offsetParent,!t||e!==t););return{top:i,left:r,width:this.offsetWidth,height:this.offsetHeight}},Date.prototype.format=function(t){var e={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var i in e)new RegExp("("+i+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[i]:("00"+e[i]).substr((""+e[i]).length)));return t};var _=[{name:"login",method:"POST",desc:"登录",path:"/login",params:{password:"",username:""}}],q={login:_},V=H()({},q),G=function(){function t(e){X()(this,t),this.api={},this.apiBuilder(e)}return F()(t,[{key:"apiBuilder",value:function(t){var e=this,i=t.sep,r=void 0===i?"/":i,o=t.config,a=void 0===o?{}:o,s=t.mock,n=void 0!==s&&s,l=t.debug,p=void 0!==l&&l,d=t.mockBaseURL,h=void 0===d?"":d;W()(a).map(function(t){e._apiSingleBuilder({namespace:t,mock:n,mockBaseURL:h,sep:r,debug:p,config:a[t]})})}},{key:"_apiSingleBuilder",value:function(t){var e=this,i=t.namespace,r=t.sep,s=void 0===r?"/":r,n=t.config,l=void 0===n?{}:n,p=t.mock,d=void 0!==p&&p,h=t.debug,f=void 0!==h&&h,c=t.mockBaseURL,g=void 0===c?"":c;l.forEach(function(t){var r=t.name,n=t.desc,l=t.params,p=t.method,h=t.path,c=""+i+s+r,u=h,m=d?g:E.baseURL;f&&o(r,u+" :接口name属性不能为空"),f&&o(0===u.indexOf("/"),u+" :接口路径path，首字符应为/"),Object.defineProperty(e.api,""+c,{value:function(t,e){var i=Array.isArray(t)||t instanceof FormData?t:Y()({},l,t);return O(a($()({url:u,desc:n,baseURL:m,method:p},e),i))}})})}}]),t}(),Z=new G(H()({config:V},T)).api,J=new m.default,Q={install:function(t,e){t.prototype.$ajax=O,t.prototype.$api=Z,t.prototype.$bus=J}},K=i("/ocq"),tt=i("pFYg"),et=i.n(tt),it=i("lwon"),rt=i.n(it),ot=s,at=!1,st=Number(document.documentMode)<9,nt={n:{top:!0,height:-1},w:{left:!0,width:-1},e:{width:1},s:{height:1},nw:{left:!0,top:!0,width:-1,height:-1},ne:{top:!0,width:1,height:-1},sw:{left:!0,width:-1,height:1},se:{width:1,height:1}};f.prototype.doOnStateChange=function(){},f.prototype.makeDraggable=function(t){var e=this,i={},r=void 0;d(t,{start:function(e){var o=t.parentNode;r={left:0,top:0,width:o.clientWidth,height:o.clientHeight,right:o.clientWidth,bottom:o.clientHeight},i.startLeft=e.clientX,i.startTop=e.clientY;var a=h(t);i.resizerStartLeft=a.left,i.resizerStartTop=a.top,i.resizerStartWidth=t.offsetWidth,i.resizerStartHeight=t.offsetHeight},drag:function(o){var a=o.clientX-i.startLeft,s=o.clientY-i.startTop,n=i.resizerStartLeft+a,l=i.resizerStartTop+s;n<r.left&&(n=r.left),l<r.top&&(l=r.top),n+i.resizerStartWidth>r.right&&(n=r.right-i.resizerStartWidth),l+i.resizerStartHeight>r.bottom&&(l=r.bottom-i.resizerStartHeight),t.style.left=n+"px",t.style.top=l+"px",e.doOnStateChange()},end:function(){i={},e.doOnDragEnd&&e.doOnDragEnd()}})},f.prototype.bindResizeEvent=function(t){var e=this,i={},r=e.aspectRatio;"number"!=typeof r&&(r=void 0);var o=function(o){var a=o.className.split(" ")[0],s=nt[a.substr(4)],n=void 0;d(o,{start:function(e){var r=t.parentNode;n={left:0,top:0,width:r.clientWidth,height:r.clientHeight,right:r.clientWidth,bottom:r.clientHeight},i.startWidth=t.clientWidth,i.startHeight=t.clientHeight,i.startLeft=e.clientX,i.startTop=e.clientY;var o=h(t);i.resizerStartLeft=o.left,i.resizerStartTop=o.top},drag:function(o){var l=s.width,p=s.height,d=o.clientX-i.startLeft,h=o.clientY-i.startTop,f=void 0,c=void 0;void 0!==l&&(f=i.startWidth+l*d,f<50&&(f=50),f>1e4&&(f=1e4)),void 0!==p&&(c=i.startHeight+p*h,c<50&&(c=50),c>1e4&&(c=1e4)),void 0!==r&&("ord-n"===a||"ord-s"===a?f=c*r:"ord-w"===a||"ord-e"===a?c=f/r:f/c<r?c=f/r:f=c*r);var g={left:i.resizerStartLeft,top:i.resizerStartTop};void 0!==s.left&&(g.left=i.resizerStartLeft+(f-i.startWidth)*l),void 0!==s.top&&(g.top=i.resizerStartTop+(c-i.startHeight)*p),f+g.left>n.right&&(f=n.right-g.left),g.left<n.left&&(f-=n.left-g.left,g.left=n.left),c+g.top>n.bottom&&(c=n.bottom-g.top),g.top<n.top&&(c-=n.top-g.top,g.top=n.top),void 0!==r&&(f/c<r?c=f/r:f=c*r),void 0!==s.left&&(g.left=i.resizerStartLeft+(f-i.startWidth)*l),void 0!==s.top&&(g.top=i.resizerStartTop+(c-i.startHeight)*p),t.style.width=f+"px",t.style.height=c+"px",void 0!==g.left&&(t.style.left=g.left+"px"),void 0!==g.top&&(t.style.top=g.top+"px"),e.doOnStateChange()},end:function(){e.doOnDragEnd&&e.doOnDragEnd()}})},a=t.querySelectorAll(".resize-bar"),s=t.querySelectorAll(".resize-handle"),n=void 0,l=void 0;for(n=0,l=a.length;n<l;n++)o(a[n]);for(n=0,l=s.length;n<l;n++)o(s[n])},f.prototype.render=function(t){var e=this,i=ot({tag:"div",className:"resizer",content:[{tag:"div",className:"ord-n resize-bar"},{tag:"div",className:"ord-s resize-bar"},{tag:"div",className:"ord-w resize-bar"},{tag:"div",className:"ord-e resize-bar"},{tag:"div",className:"ord-nw resize-handle"},{tag:"div",className:"ord-n resize-handle"},{tag:"div",className:"ord-ne resize-handle"},{tag:"div",className:"ord-w resize-handle"},{tag:"div",className:"ord-e resize-handle"},{tag:"div",className:"ord-sw resize-handle"},{tag:"div",className:"ord-s resize-handle"},{tag:"div",className:"ord-se resize-handle"}]});return e.dom=i,e.bindResizeEvent(i),e.makeDraggable(i),t&&t.appendChild(i),i};var lt=f,pt=void 0,dt=Number(document.documentMode);g.prototype.resetResizer=function(){var t=this.resizer,e=this.cropperRect,i=this.aspectRatio;"number"!=typeof i&&(i=1);var r=void 0;r=this.width>0&&"number"==typeof this.width?this.width>e.width?e.width:this.width:e.width/2;var o=void 0;o=this.height>0&&"number"==typeof this.height?this.height>e.height?e.height:this.height:r/i;var a=t.dom;a.style.width=r+"px",a.style.height=o+"px",this.x>0&&"number"==typeof this.x?this.x>e.width-r?a.style.left=e.width-r+"px":a.style.left=this.x+"px":a.style.left=e?(e.width-r)/2+"px":"",this.y>0&&"number"==typeof this.y?this.y>e.height-o?a.style.top=e.height-o+"px":a.style.top=this.y+"px":a.style.top=e?(e.height-o)/2+"px":"",t.doOnStateChange(),t.doOnDragEnd()},g.prototype.setImage=function(t){var e=this.element,i=e.querySelector("img"),r=this.refs.image,o=this;if(void 0===t||null===t)return r.src=i.src="",r.style.width=r.style.height=r.style.left=r.style.top="",i.style.width=i.style.height=i.style.left=i.style.top="",o.updatePreview(""),o.dom.style.display="none",o.resetResizer(),o.dom.style.left=o.dom.style.top="",o.dom.style.width=e.offsetWidth+"px",o.dom.style.height=e.offsetHeight+"px",o.croppedRect={width:0,height:0,left:0,top:0},void(o.onCroppedRectChange&&o.onCroppedRectChange(o.croppedRect));c(t,function(a){dt<10?(r.src=i.src="",r.style.filter=i.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)",i.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src=t,r.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src=t):r.src=i.src=t,o.imageSize=a;var s=e.offsetWidth,n=e.offsetHeight,l=o.dom,p={};a.width/a.height>s/n?(p.width=s,p.height=s*a.height/a.width,p.top=(n-p.height)/2,p.left=0):(p.height=n,p.width=n*a.width/a.height,p.top=0,p.left=(s-p.width)/2),o.cropperRect=p;for(var d in p)p.hasOwnProperty(d)&&(l.style[d]=i.style[d]=r.style[d]=p[d]+"px");o.dom.style.display="",o.resetResizer(),o.updatePreview(t)})},g.prototype.addPreview=function(t){var e=this.previews;e||(e=this.previews=[]),e.push(t)},g.prototype.render=function(t){var e=new lt({aspectRatio:this.aspectRatio}),i={},r=ot({tag:"div",className:"cropper",content:[{tag:"div",className:"mask"}]},i),o=e.render(r),a=ot({tag:"div",className:"wrapper",content:[{tag:"img",key:"image",src:""}]},i),s=this;s.refs=i,e.doOnStateChange=function(){var t=parseInt(o.style.left,10)||0,e=parseInt(o.style.top,10)||0,r=i.image;r.style.left=-t+"px",r.style.top=-e+"px",s.updatePreview()},e.doOnDragEnd=function(){var t=parseInt(o.style.left,10)||0,e=parseInt(o.style.top,10)||0,i=o.offsetWidth,r=o.offsetHeight,a=s.imageSize,n=s.cropperRect;if(n){var l=n.width/a.width;s.croppedRect={width:Math.floor(i/l),height:Math.floor(r/l),left:Math.floor(t/l),top:Math.floor(e/l)},s.onCroppedRectChange&&s.onCroppedRectChange(s.croppedRect)}},s.resizer=e,s.dom=r,o.insertBefore(a,o.firstChild),t.appendChild(r),s.dom.style.display="none"},g.prototype.updatePreview=function(t){var e=this.imageSize,i=this.cropperRect;if(e&&i)for(var r=this.previews||[],o=this.resizer.dom,a=parseInt(o.style.left,10)||0,s=parseInt(o.style.top,10)||0,n=o.offsetWidth,l=o.offsetHeight,p=0,d=r.length;p<d;p++){var h=r[p],f=h.querySelector("img"),c=h.querySelector("div");if(f)if(""===t)f.style.width=f.style.height=f.style.left=f.style.top="",f.src="";else{dt<10?t&&(f.src="",f.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)",f.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src=t,f.style.width=i.width+"px",f.style.height=i.height+"px"):t&&(f.src=t);var g=h.offsetWidth,u=h.offsetHeight,m=g/n;if(c){var v=g/u,y=n/l;if(v<y)c.style.width=g+"px",c.style.height=l*g/n+"px",c.style.top=(u-c.clientHeight)/2+"px",c.style.left="";else{var w=n*u/l;m=w/n,c.style.height=u+"px",c.style.width=w+"px",c.style.left=(g-c.clientWidth)/2+"px",c.style.top=""}}f.style.width=m*i.width+"px",f.style.height=m*i.height+"px",f.style.left=-a*m+"px",f.style.top=-s*m+"px"}}};var ht=g,ft={props:{Setting:{type:Object,default:function(){return{}}}},created:function(){this.updateDom(),rt.a||(Array.prototype.indexOf=function(t){for(var e=0;e<this.length;e++)if(this[e]==t)return e;return-1})},mounted:function(){var t=this,e=t.$refs.cropperCanvas,i=e?e.getContext("2d"):"",r=t.$refs.targetImg,o=t.target.visible?[t.$refs.previewLarge]:[],a=t.target.w/t.target.h,s=t.cutPos.w?t.cutPos.w:t.target.w,n=t.cutPos.h?t.cutPos.h:t.target.h,l=new ht({element:t.$refs.cropperTarget,previews:o,aspectRatio:a,width:s,height:n,x:t.cutPos.x,y:t.cutPos.y,onCroppedRectChange:function(o){i.drawImage(r,o.left,o.top,o.width,o.height,0,0,s,n),t.output(o,e.toDataURL())}}),p=t.$refs.fileInput;p.onchange=function(){var e=0;if(p.value){var i=p.value.substring(p.value.lastIndexOf(".")).toLowerCase();if(t.format&&t.format.length>0&&t.format.indexOf(i)<0)return alert("请选择指定图片格式的文件"),void t.output();if(t.limitSize&&(e=p.files&&p.files[0]?p.files[0].size/1048576:0,t.tolimitSize(e)))return void t.output()}if("undefined"!=typeof FileReader){var r=new FileReader;r.onload=function(t){l.setImage(t.target.result)},p.files&&p.files[0]&&r.readAsDataURL(p.files[0])}else{p.select(),p.blur();var o=document.selection.createRange().text;if(t.limitSize){try{e=new ActiveXObject("Scripting.FileSystemObject").GetFile(o).size/1048576}catch(e){return alert(e+"\n如果错误为：Error:Automation 服务器不能创建对象；\n请按以下方法配置浏览器：\n请打开【Internet选项-安全-Internet-自定义级别-ActiveX控件和插件-对未标记为可安全执行脚本的ActiveX控件初始化并执行脚本（不安全）-点击启用-确定】"),t.output(),window.location.reload()}if(t.tolimitSize(e))return void t.output()}l.setImage(o)}}},methods:{tolimitSize:function(t){return!!(t&&t>this.limitSize)&&(console.log(t,this.limitSize),alert("请选择图片大小不超过"+this.limitSize+"M的文件"),!0)},copyProps:function(t,e,i){if("object"==et()(t[i])){if("btnStyle"==i)return void(e[i]=t[i]);for(var r in t[i])this.copyProps(t[i],e[i],r)}else!t[i]&&"visible"!=i||et()(t[i])!=et()(e[i])||(e[i]=t[i])},updateDom:function(){var t=this;for(var e in t.Setting)t.copyProps(t.Setting,t,e)},output:function(t,e){this.$emit("cutImg",{pos:t,url:e})}},data:function(){return{backgroundUrl:"",width:336,height:400,target:{w:168,h:200,visible:!0},cutPos:{w:0,h:0,x:0,y:0},btnStyle:{},limitSize:0,format:[]}}},ct=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"imageCropper"},[i("div",{staticClass:"btn-choose",style:t.btnStyle},[i("input",{ref:"fileInput",staticClass:"file-input",attrs:{type:"file",name:"avatar",accept:"image/*"}}),t._v("\n    选择文件\n  ")]),i("div",{staticClass:"preview-container"},[i("div",{ref:"cropperTarget",staticClass:"image-container target",style:{width:t.width+"px",height:t.height+"px"}},[i("img",{ref:"targetImg",staticClass:"noavatar",attrs:{src:t.backgroundUrl}})]),t.target.visible?i("div",{staticClass:"large-wrapper"},[i("div",{ref:"previewLarge",staticClass:"image-container large",style:{width:t.target.w+"px",height:t.target.h+"px"}},[i("img",{staticClass:"noavatar",attrs:{src:t.backgroundUrl}})])]):t._e(),i("canvas",{ref:"cropperCanvas",staticClass:"cropper-canvas",attrs:{width:t.cutPos.w?t.cutPos.w:t.target.w,height:t.cutPos.h?t.cutPos.h:t.target.h}})])])},gt=[],ut={render:ct,staticRenderFns:gt},mt=ut,vt=i("VU/8"),yt=u,wt=vt(ft,mt,!1,yt,"data-v-168676ef",null),xt=wt.exports,bt=[{path:"/",name:"ImageCropper",meta:{title:"登录",by:"xiamijun"},component:xt}];m.default.use(K.a);var zt=new K.a(H()({},k,{routes:bt})),St=zt,Rt=i("NYxO"),Ct={state:{userName:""},mutations:{SET_USER_NAME:function(t,e){t.userName=e}},actions:{}},Lt=Ct,It={name:function(t){return t.user.userName}},Et=It;m.default.use(Rt.a);var kt=new Rt.a.Store(H()({},P,{modules:{user:Lt},getters:Et})),Tt=i("BTaQ"),Pt=i.n(Tt);m.default.config.productionTip=!1,m.default.use(Q),m.default.use(Pt.a),window.app=new m.default({el:"#app",store:kt,router:St,render:function(t){return t(C)}})},nlIa:function(t,e,i){var r=i("GPbd");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);i("rjj0")("7678709d",r,!0,{})},wtFt:function(t,e,i){var r=i("Qq0J");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);i("rjj0")("1f558226",r,!0,{})}},["lVK7"]);
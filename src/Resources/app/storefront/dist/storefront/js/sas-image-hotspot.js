"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["sas-image-hotspot"],{4567:(e,t,o)=>{var i=o(6285),s=o(3206);class a extends i.Z{init(){this._registerEvents()}_registerEvents(){this.el.addEventListener("mouseover",(e=>{const t=s.Z.querySelector(document,".sas-image-hotspot__desc",!1);t&&$(t).on("mouseover",(()=>{$(this.el).tooltip("show"),$(document).on("mouseleave",".sas-image-hotspot__desc",(()=>{$(this.el).tooltip("hide")}))}))}))}}var r=o(5550),n=o(1966);class m extends r.Z{_registerEvents(){n.Z.iterate(this._imageContainers,(e=>{const t=s.Z.querySelector(e,this.options.imageSelector,!1);if(t){if(t.parentElement.classList.contains("sas-image-hotspot-map-wrapper"))return;t.addEventListener("mousemove",(o=>this._onMouseMove(o,e,t)),!1),e.addEventListener("mouseout",(e=>this._stopMagnify(e)),!1)}}))}}const l=window.PluginManager;l.register("SasImageHotspot",a,"[data-sas-image-hotspot]"),l.override("Magnifier",m,"[data-magnifier]")},5550:(e,t,o)=>{o.d(t,{Z:()=>m});var i=o(6285),s=o(3206),a=o(2519),r=o(7474),n=o(1966);class m extends i.Z{init(){this._imageContainers=s.Z.querySelectorAll(this.el,this.options.imageContainerSelector),this.options.magnifierOverGallery?this._zoomImageContainer=s.Z.querySelector(this.el,this.options.zoomImageContainerSelector):this._zoomImageContainer=s.Z.querySelector(document,this.options.zoomImageContainerSelector),this._registerEvents()}_registerEvents(){n.Z.iterate(this._imageContainers,(e=>{const t=s.Z.querySelector(e,this.options.imageSelector,!1);t&&(t.addEventListener("mousemove",(o=>this._onMouseMove(o,e,t)),!1),e.addEventListener("mouseout",(e=>this._stopMagnify(e)),!1))}))}_isActive(){return-1!==[r.Z.isLG(),r.Z.isXL(),r.Z.isXXL()].indexOf(!0)}_setCursor(e,t){e&&(e.style.cursor=t)}_onMouseMove(e,t,o){if(this._isActive()&&(this._setCursor(o,this.options.cursorType),this._createOverlay(t),this._createZoomImage(),this._getImageUrl(o),this._imageUrl&&this._zoomImage&&this._overlay)){const i=this._getContainerPos(t),s=this._getImagePos(o),r=this._getImageDimensions(o),n=this._getImageSize(o),m=this._getOverlaySize(n),l=i.subtract(s);l.x=Math.abs(l.x),l.y=Math.abs(l.y);const g=new a.FM(e.pageX,e.pageY).subtract(s),c=g.divide(n).clamp(0,1);this._setOverlayPosition(l,m,n,c),this._setZoomImage(g,n,m,r)}this.$emitter.publish("onMouseMove")}_setOverlayPosition(e,t,o,i){let s=e.subtract(t.divide(2));return s=s.add(o.multiply(i)),s=s.clamp(e,e.add(o).subtract(t)),this._overlay.style.left=`${s.x}px`,this._overlay.style.top=`${s.y}px`,s}_setZoomImage(e,t,o,i){this._setZoomImageSize(t),this._zoomImage.style.backgroundImage=`url('${this._imageUrl}')`;const s=this.calculateZoomBackgroundImageSize(i,t);this._zoomImage.style.backgroundSize=`${s.x}px ${s.y}px`;const a=this.calculateZoomImageBackgroundPosition(e,t,o,i,s);this._zoomImage.style.backgroundPosition=`-${a.x}px -${a.y}px`,this.$emitter.publish("setZoomImagePosition")}_setZoomImageSize(e){const t=e.y/e.x,o=this._getZoomImageSize(),i=this.options.keepAspectRatioOnZoom?this.options.scaleZoomImage?o.x*t:o.y:o.x;this._zoomImage.style.height=`${i}px`,this._zoomImage.style.minHeight=`${i}px`}calculateZoomImageBackgroundPosition(e,t,o,i,s){const r=t.subtract(t.divide(this.options.zoomFactor)).subtract(new a.FM(1,1));let n=e.subtract(o.divide(2)).clamp(0,t.subtract(o)).divide(r);const m=this.getImageOrientation(i,t),l=1-1/this.options.zoomFactor;return this.options.keepAspectRatioOnZoom&&(n=n.clamp(0,1)),0===m?(n=n.multiply(new a.FM(l,1)),n=this.calculateImagePosition(n,t,i,"y","x"),n=n.multiply(new a.FM(1,l))):1===m&&(n=n.multiply(new a.FM(1,l)),n=this.calculateImagePosition(n,t,i,"x","y"),n=n.multiply(new a.FM(l,1))),s.multiply(n)}calculateImagePosition(e,t,o,i,s){const a=(1-o[i]*(t[s]/t[i])/(o[s]/1))/2;return e[s]=this.calculateOffsetPercent(a,e[s]),e}calculateOffsetPercent(e,t){return e+(1-2*e)*t}calculateZoomBackgroundImageSize(e,t){const o=this.getImageOrientation(e,t),i=this._getZoomImageSize();let s=new a.FM(0,0);return 1===o?s=new a.FM(i.x,i.x*e.y/e.x):0===o&&(s=new a.FM(i.y*e.x/e.y,i.y)),s.multiply(this.options.zoomFactor)}getImageOrientation(e,t){return this._assertEqualFactors(e,t)?t.x>t.y?0:1:t.x/t.y>e.x/e.y?1:0}_assertEqualFactors(e,t){const o=this._roundToTwoDigits(e.x/e.y);return this._roundToTwoDigits(t.x/t.y)===o}_getContainerPos(e){const t=e.getBoundingClientRect();return new a.FM(t.left+window.pageXOffset,t.top+window.pageYOffset)}_getImagePos(e){const t=e.getBoundingClientRect();return new a.FM(t.left+window.pageXOffset,t.top+window.pageYOffset)}_getImageDimensions(e){const{naturalWidth:t,naturalHeight:o}=e;return new a.FM(t,o)}_getImageSize(e){const t=e.getBoundingClientRect();return new a.FM(t.width,t.height)}_getZoomImageSize(){const e=this._zoomImage.getBoundingClientRect();return new a.FM(e.width,e.height)}_getOverlaySize(e){const t=e.divide(this.options.zoomFactor);if(!this.options.keepAspectRatioOnZoom){const e=Math.min(t.x,t.y);t.x=e,t.y=e}return this._overlay.style.width=`${Math.ceil(t.x)}px`,this._overlay.style.height=`${Math.ceil(t.y)}px`,t}_createOverlay(e){if(this._overlay=e.querySelector(`.${this.options.overlayClass}`),this._overlay)return this._overlay;const t=`<div class="magnifier-overlay  ${this.options.overlayClass}">&nbsp;</div>`;return this._overlay=e.insertAdjacentHTML("beforeend",t),this.$emitter.publish("createOverlay"),this._overlay}_removeOverlay(){const e=document.querySelectorAll(`.${this.options.overlayClass}`);n.Z.iterate(e,(e=>e.remove())),this.$emitter.publish("removeOverlay")}_createZoomImage(){if(this._zoomImage=this._zoomImageContainer.querySelector(`.${this.options.zoomImageClass}`),this._zoomImage)return this._zoomImage;this._zoomImageContainer.style.position="relative";const e=`<div class="magnifier-zoom-image  ${this.options.zoomImageClass}">&nbsp;</div>`;return this._zoomImage=this._zoomImageContainer.insertAdjacentHTML("beforeend",e),this.$emitter.publish("createZoomImage"),this._zoomImage}_removeZoomImage(){const e=document.querySelectorAll(`.${this.options.zoomImageClass}`);n.Z.iterate(e,(e=>e.remove())),this.$emitter.publish("removeZoomImage")}_getImageUrl(e){this._imageUrl=s.Z.getDataAttribute(e,this.options.fullImageDataAttribute),this.$emitter.publish("getImageUrl")}_stopMagnify(){this._removeZoomImage(),this._removeOverlay();const e=s.Z.querySelectorAll(document,this.options.imageSelector);n.Z.iterate(e,(e=>this._setCursor(e,"default"))),this.$emitter.publish("stopMagnify")}_roundToTwoDigits(e){return Math.round(1e3*e)/1e3}}var l,g,c;l=m,c={zoomFactor:3,imageContainerSelector:".js-magnifier-container",imageSelector:".js-magnifier-image",fullImageDataAttribute:"data-full-image",zoomImageContainerSelector:".js-magnifier-zoom-image-container",overlayClass:"js-magnifier-overlay",zoomImageClass:"js-magnifier-zoom-image",magnifierOverGallery:!1,scaleZoomImage:!1,keepAspectRatioOnZoom:!0,cursorType:"none"},(g=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var i=o.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(g="options"))in l?Object.defineProperty(l,g,{value:c,enumerable:!0,configurable:!0,writable:!0}):l[g]=c}},e=>{e.O(0,["vendor-node","vendor-shared"],(()=>{return t=4567,e(e.s=t);var t}));e.O()}]);
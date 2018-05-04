(function(window){var svgSprite='<svg><symbol id="icon-bofang" viewBox="0 0 1024 1024"><path d="M852.727563 392.447107C956.997809 458.473635 956.941389 565.559517 852.727563 631.55032L281.888889 993.019655C177.618644 1059.046186 93.090909 1016.054114 93.090909 897.137364L93.090909 126.860063C93.090909 7.879206 177.675064-35.013033 281.888889 30.977769L852.727563 392.447107 852.727563 392.447107Z"  ></path></symbol><symbol id="icon-zanting" viewBox="0 0 1024 1024"><path d="M757.52 73.107h-62.493c-34.526 0-62.498 27.984-62.498 62.511v749.948c0 34.526 27.974 62.493 62.498 62.493h62.493c34.516 0 62.502-27.968 62.502-62.493v-749.953c-0.001-34.524-27.984-62.509-62.502-62.509z"  ></path><path d="M320.054 73.107h-62.502c-34.526 0-62.498 27.984-62.498 62.511v749.948c0 34.526 27.974 62.493 62.498 62.493h62.502c34.505 0 62.493-27.968 62.493-62.493v-749.953c-0.001-34.524-27.984-62.509-62.493-62.509z"  ></path></symbol><symbol id="icon-minimum" viewBox="0 0 1024 1024"><path d="M72 462h880v100H72z" fill="" ></path></symbol><symbol id="icon-yinliang" viewBox="0 0 1024 1024"><path d="M509.226667 167.722667l-222.442667 184.341333c-16.704 13.866667-43.178667 23.402667-64.896 23.402667H170.730667A42.666667 42.666667 0 0 0 128 418.090667v187.434666c0 23.466667 19.178667 42.624 42.730667 42.624H221.866667c21.802667 0 48.170667 9.536 64.896 23.402667l222.421333 184.32V167.744zM259.541333 704.426667c-9.045333-7.509333-25.770667-13.589333-37.674666-13.589334H170.730667A85.418667 85.418667 0 0 1 85.333333 605.525333v-187.434666A85.333333 85.333333 0 0 1 170.730667 332.8H221.866667c11.776 0 28.629333-6.08 37.674666-13.589333L519.125333 104.106667c18.090667-14.997333 32.746667-8.170667 32.746667 15.402666v784.64c0 23.488-14.677333 30.378667-32.746667 15.402667L259.562667 704.405333z m436.117334-4.821334a21.333333 21.333333 0 1 1-26.026667-33.834666A196.608 196.608 0 0 0 746.666667 509.504c0-57.408-29.269333-112.32-77.482667-151.637333a21.333333 21.333333 0 1 1 26.965333-33.066667C753.792 371.797333 789.333333 438.485333 789.333333 509.504c0 75.370667-35.050667 144.981333-93.653333 190.08z m64 170.666667a21.333333 21.333333 0 1 1-26.026667-33.834667A414.506667 414.506667 0 0 0 896 507.029333c0-121.642667-61.696-237.354667-162.816-319.829333a21.333333 21.333333 0 1 1 26.965333-33.066667C870.698667 244.309333 938.666667 371.776 938.666667 507.029333a457.173333 457.173333 0 0 1-178.986667 363.221334z" fill="#3D3D3D" ></path></symbol><symbol id="icon-guanbi" viewBox="0 0 1024 1024"><path d="M633.355 512l339.75-339.75c15.227-15.475 24.633-36.723 24.633-60.17 0-47.388-38.415-85.804-85.804-85.804-23.451 0-44.703 9.407-60.195 24.657l-339.737 339.709-339.75-339.724c-15.626-16.162-37.499-26.196-61.716-26.196-47.388 0-85.804 38.415-85.804 85.804 0 24.217 10.033 46.093 26.167 61.694l339.744 339.774-339.724 339.75c-16.162 15.626-26.196 37.499-26.196 61.716 0 47.388 38.415 85.804 85.804 85.804 24.217 0 46.093-10.033 61.694-26.167l339.774-339.744 339.75 339.75c15.475 15.227 36.723 24.633 60.17 24.633 47.388 0 85.804-38.415 85.804-85.804 0-23.451-9.407-44.703-24.657-60.195l-339.709-339.737z"  ></path></symbol><symbol id="icon-bofangqi-xiayiji" viewBox="0 0 1024 1024"><path d="M721.454545 551.563636L302.545455 795.927273c-30.254545 18.618182-69.818182-4.654545-69.818182-39.563637v-488.727272c0-34.909091 39.563636-58.181818 69.818182-39.563637l418.90909 244.363637c30.254545 16.290909 30.254545 62.836364 0 79.127272z"  ></path><path d="M791.272727 684.218182c0 32.581818-30.254545 60.509091-69.818182 60.509091s-69.818182-27.927273-69.818181-60.509091V339.781818c0-32.581818 30.254545-60.509091 69.818181-60.509091s69.818182 27.927273 69.818182 60.509091v344.436364z"  ></path></symbol><symbol id="icon-shezhi-tianchong" viewBox="0 0 1024 1024"><path d="M992 416c-4.266667-27.733333-21.333333-46.933333-42.666667-46.933333h-4.266666c-70.4 0-128-57.6-128-130.133334 0-23.466667 10.666667-49.066667 10.666666-49.066666 12.8-23.466667 4.266667-55.466667-17.066666-70.4h-2.133334l-123.733333-68.266667H682.666667c-6.4-2.133333-14.933333-4.266667-23.466667-4.266667-17.066667 0-34.133333 6.4-44.8 19.2-14.933333 14.933333-61.866667 55.466667-100.266667 55.466667-38.4 0-85.333333-40.533333-100.266666-57.6-10.666667-14.933333-29.866667-21.333333-46.933334-21.333333-8.533333 0-17.066667 2.133333-23.466666 4.266666H341.333333l-128 70.4h-2.133333c-19.2 17.066667-27.733333 49.066667-17.066667 72.533334 0 0 10.666667 25.6 10.666667 49.066666 0 70.4-57.6 130.133333-128 130.133334h-2.133333c-19.2 0-36.266667 19.2-42.666667 46.933333 0 2.133333-10.666667 55.466667-10.666667 96 0 42.666667 10.666667 96 10.666667 98.133333 4.266667 27.733333 21.333333 46.933333 42.666667 46.933334h4.266666c70.4 0 128 57.6 128 130.133333 0 23.466667-10.666667 49.066667-10.666666 49.066667-12.8 23.466667-4.266667 53.333333 17.066666 68.266666h2.133334l119.466666 68.266667h2.133334c6.4 4.266667 14.933333 4.266667 23.466666 4.266667 17.066667 0 34.133333-6.4 46.933334-19.2 14.933333-14.933333 64-59.733333 102.4-59.733334 40.533333 0 87.466667 44.8 102.4 61.866667 10.666667 12.8 27.733333 19.2 46.933333 19.2 8.533333 0 17.066667-2.133333 23.466667-4.266667h2.133333l123.733333-70.4h2.133334c21.333333-14.933333 29.866667-46.933333 19.2-70.4 0 0-10.666667-25.6-10.666667-49.066666 0-70.4 57.6-130.133333 128-130.133334h4.266667c19.2 0 36.266667-17.066667 42.666666-46.933333 0-2.133333 10.666667-55.466667 10.666667-98.133333-2.133333-38.4-12.8-91.733333-12.8-93.866667zM512 682.666667c-93.866667 0-170.666667-76.8-170.666667-170.666667s76.8-170.666667 170.666667-170.666667 170.666667 76.8 170.666667 170.666667-76.8 170.666667-170.666667 170.666667z" fill="#666767" ></path><path d="M512 381.866667c-70.4 0-130.133333 57.6-130.133333 130.133333 0 72.533333 57.6 130.133333 130.133333 130.133333 70.4 0 130.133333-57.6 130.133333-130.133333 0-72.533333-59.733333-130.133333-130.133333-130.133333z" fill="#666767" ></path></symbol><symbol id="icon-quanping" viewBox="0 0 1024 1024"><path d="M910.222 142.222v-28.444H625.778v56.889h227.555v227.555h56.89z m0 739.556v28.444H625.778v-56.889h227.555V625.778h56.89zM113.778 142.222v-28.444h284.444v56.889H170.667v227.555h-56.89z m0 739.556v28.444h284.444v-56.889H170.667V625.778h-56.89z" fill="#73777A" ></path><path d="M568.889 417.166l281.6-281.6 40.22 40.278-281.6 281.6z m-153.998 35.67l-281.6-281.6 40.22-40.22 281.6 281.6z m194.218 113.777l281.6 281.6-40.22 40.164-281.6-281.6z m-153.998 44.829l-281.6 281.6-40.22-40.278 281.6-281.6z" fill="#73777A" ></path></symbol><symbol id="icon-zuixiaohua" viewBox="0 0 1024 1024"><path d="M784 80H240C152 80 80 152 80 240v544c0 88 72 160 160 160h544c88 0 160-72 160-160V240c0-88-72-160-160-160z m96 704c0 52.8-43.2 96-96 96h-96v-96c0-52.8 43.2-96 96-96h96v96z m0-160h-96c-88 0-160 72-160 160v96H240c-52.8 0-96-43.2-96-96V240c0-52.8 43.2-96 96-96h544c52.8 0 96 43.2 96 96v384z" fill="#4A576A" ></path><path d="M560 336c-17.6 0-32 14.4-32 32v115.2L302.4 257.6c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8L483.2 528H368c-17.6 0-32 14.4-32 32s14.4 32 32 32h192c9.6 0 17.6-3.2 22.4-9.6 6.4-6.4 9.6-14.4 9.6-22.4V368c0-17.6-14.4-32-32-32z" fill="#4A576A" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)
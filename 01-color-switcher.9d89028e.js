!function(){var t={start:document.querySelector("button[data-start]"),stop:document.querySelector("button[data-stop]"),body:document.querySelector("body")};console.log(t.body);var o=null;t.start.addEventListener("click",(function(){o=setInterval((function(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),t.start.disabled=!0,t.stop.disabled=!1})),t.stop.addEventListener("click",(function(){clearInterval(o),t.start.disabled=!1,t.stop.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.9d89028e.js.map

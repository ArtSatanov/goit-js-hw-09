function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i);var r=i("7Y9D8");i("iQIUW");const u={firstDelay:document.querySelector('input[name="delay"]'),stepDelay:document.querySelector('input[name="step"]'),amount:document.querySelector('input[name="amount"]'),submit:document.querySelector('button[type="submit"]')};function l(t,n){const o=Math.random()>.3;new Promise(((e,i)=>{setTimeout((()=>{o?e({position:t,delay:n}):i({position:t,delay:n})}))}),n).then((({position:t,delay:n})=>{e(r).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(r).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)}))}u.submit.addEventListener("click",(function(e){e.preventDefault();const t=Number(u.firstDelay.value),n=Number(u.amount.value),o=Number(u.stepDelay.value);for(let e=1;e<=n;e+=1){l(e,t+o*(e-1))}}));
//# sourceMappingURL=03-promises.f118d7a3.js.map

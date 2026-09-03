const btn=document.getElementById("langBtn");
let lang=localStorage.getItem("pierry-lang")||"pt";
function applyLanguage(){
  document.documentElement.lang=lang==="en"?"en":"pt-BR";
  document.querySelectorAll("[data-pt][data-en]").forEach(el=>{el.textContent=el.dataset[lang==="en"?"en":"pt"];});
  if(btn) btn.textContent=lang==="en"?"PT":"EN";
}
if(btn){btn.addEventListener("click",()=>{lang=lang==="pt"?"en":"pt";localStorage.setItem("pierry-lang",lang);applyLanguage();});}
applyLanguage();

var e=document.querySelector(".main-nav"),l=document.querySelector(".main-nav__toggle");e.classList.remove("main-nav--nojs");l.addEventListener("click",()=>{e.classList.contains("main-nav--closed")?(e.classList.remove("main-nav--closed"),e.classList.add("main-nav--opened")):(e.classList.add("main-nav--closed"),e.classList.remove("main-nav--opened"))});var d=document.querySelector(".location__map-wrapper");d.classList.remove("location__map-wrapper--nojs");var t=document.querySelector(".slider__wrapper"),u=t.querySelector(".slider__curtain"),m=getComputedStyle(t),a,i;window.addEventListener("touchstart",p);u.addEventListener("touchend",v);function v(n){a=+m.getPropertyValue("--curtain-place"),i=n.clientX,window.addEventListener("touchmove",c)}function c(n){let o=n.clientX-i,s=a+o/t.clientWidth,r=Math.min(Math.max(s,0),1);t.style.setProperty("--curtain-place",`${r}`)}function p(){window.removeEventListener("mousemove",c)}

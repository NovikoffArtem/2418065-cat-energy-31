var e=document.querySelector(".main-nav"),m=document.querySelector(".main-nav__toggle");e.classList.remove("main-nav--nojs");m.addEventListener("click",()=>{e.classList.contains("main-nav--closed")?(e.classList.remove("main-nav--closed"),e.classList.add("main-nav--opened")):(e.classList.add("main-nav--closed"),e.classList.remove("main-nav--opened"))});var v=document.querySelector(".location__map-wrapper");v.classList.remove("location__map-wrapper--nojs");var t=document.querySelector(".slider__wrapper"),o=t.querySelector(".slider__curtain"),p=getComputedStyle(t),i,s;window.addEventListener("mouseup",r);o.addEventListener("mousedown",c);window.addEventListener("touchend",r);o.addEventListener("touchstart",c);function c(n){i=+p.getPropertyValue("--curtain-place"),s=n.clientX,window.addEventListener("mousemove",a),window.addEventListener("touchmove",a)}function a(n){let l=n.clientX-s,d=i+l/t.clientWidth,u=Math.min(Math.max(d,0),1);t.style.setProperty("--curtain-place",`${u}`)}function r(){window.removeEventListener("touchmove",a)}

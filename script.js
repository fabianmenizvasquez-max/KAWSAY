const $=s=>document.querySelector(s);const $$=s=>document.querySelectorAll(s);
window.addEventListener('load',()=>setTimeout(()=>$('#loader')?.classList.add('hide'),650));
window.addEventListener('scroll',()=>{const y=scrollY;$('#header')?.classList.toggle('scrolled',y>30);$('#top')?.classList.toggle('show',y>500)});
$('#menu')?.addEventListener('click',()=>$('#nav')?.classList.toggle('open'));
$('#top')?.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.14});$$('.reveal').forEach(el=>io.observe(el));
$$('.faq-item').forEach(item=>item.addEventListener('click',()=>item.classList.toggle('open')));
$$('.product-card').forEach(card=>card.addEventListener('click',()=>{$$('.product-card').forEach(c=>c.classList.remove('active'));card.classList.add('active')}));

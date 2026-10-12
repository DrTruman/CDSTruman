
// Display the university name while the external university logo is loading.
document.querySelectorAll('.brand-logo').forEach(img => {
 const fallback=img.nextElementSibling;
 if(!fallback || !fallback.classList.contains('logo-fallback')) return;
 const show=()=>{img.style.display='none';fallback.style.display='inline-block';};
 const hide=()=>{img.style.display='block';fallback.style.display='none';};
 img.addEventListener('load',hide); img.addEventListener('error',show);
 if(img.complete && img.naturalWidth>0) hide(); else show();
});
const toggle = document.querySelector('.mobile-toggle');
const nav = document.querySelector('.mainnav');
if (toggle && nav) {
  const close = () => { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); };
  toggle.addEventListener('click', () => { const opened = nav.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(opened)); });
  nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',close));
  document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=String(new Date().getFullYear()));
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
  document.documentElement.classList.add('js-motion');
  const observer = new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}
  }),{threshold:.08,rootMargin:'0px 0px -30px 0px'});
  document.querySelectorAll('[data-reveal]').forEach(el=>observer.observe(el));
}

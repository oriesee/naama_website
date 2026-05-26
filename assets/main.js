// Scroll reveal
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
},{threshold:0.12, rootMargin:'0px 0px -8% 0px'});
document.querySelectorAll('.reveal').forEach((el,i)=>{
  el.style.transitionDelay = (Math.min(i,6)*60)+'ms';
  io.observe(el);
});

// Contact form (about page) — non-blocking, no real submit
const f = document.getElementById('contactForm');
if(f){
  f.addEventListener('submit', (ev)=>{
    ev.preventDefault();
    const btn = f.querySelector('.btn');
    btn.textContent = 'Message sent ✓';
    btn.style.background = 'var(--accent)';
    f.querySelectorAll('input,textarea').forEach(i=>i.value='');
    setTimeout(()=>{ btn.textContent='Send message'; },2600);
  });
}

'use strict';
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduceMotion && 'IntersectionObserver' in window) {
 document.documentElement.classList.add('motion');
 const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) {entry.target.classList.add('visible');observer.unobserve(entry.target);}
 }), {threshold:0.08});
 document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
}
const hero = document.querySelector('.hero');
if (!reduceMotion && window.matchMedia('(pointer: fine)').matches) {
 hero.addEventListener('pointermove', event => {
  const rect=hero.getBoundingClientRect();
  hero.style.setProperty('--mouse-x',`${event.clientX-rect.left}px`);
  hero.style.setProperty('--mouse-y',`${event.clientY-rect.top}px`);
 }, {passive:true});
}
let scrollPending=false;
function progress(){
 const extent=document.documentElement.scrollHeight-window.innerHeight;
 document.querySelector('.reading-progress').style.width=`${extent>0?window.scrollY/extent*100:0}%`;
 scrollPending=false;
}
window.addEventListener('scroll',()=>{if(!scrollPending){scrollPending=true;requestAnimationFrame(progress);}}, {passive:true});
window.addEventListener('resize',progress);progress();
const hash='da340772903afc686863435ec199de1c3c2eac6d76d5d833bbcb8ed101171d0d';
document.querySelector('#copy-hash').addEventListener('click',async()=>{
 const status=document.querySelector('#copy-status');
 try{await navigator.clipboard.writeText(hash);status.textContent='SHA-256 copied.';}
 catch{status.textContent=`Copy this SHA-256: ${hash}`;}
});

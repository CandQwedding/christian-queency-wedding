const preloader=document.getElementById('preloader');
const welcome=document.getElementById('welcome');
const openInvitation=document.getElementById('openInvitation');

window.addEventListener('load',()=>setTimeout(()=>preloader.classList.add('hide'),650));
openInvitation?.addEventListener('click',()=>{
  welcome.classList.add('hide');
  setTimeout(()=>document.getElementById('home')?.scrollIntoView({behavior:'smooth'}),250);
});

const toggle=document.querySelector('.menu-toggle');
const links=document.querySelector('.nav-links');
toggle?.addEventListener('click',()=>{
  const open=links.classList.toggle('open');
  toggle.setAttribute('aria-expanded',open);
});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));

let lastY=window.scrollY;
const nav=document.getElementById('nav');
window.addEventListener('scroll',()=>{
  const y=window.scrollY;
  if(y>120 && y>lastY) nav.classList.add('hide');
  else nav.classList.remove('hide');
  lastY=y;
},{passive:true});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}})
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.querySelectorAll('.photo img,.feature-photo img').forEach(img=>{
  img.addEventListener('error',()=>{img.style.background='#d7c2ab';});
});

// Wedding countdown — local browser time.
const target=new Date('2026-10-10T07:30:00+08:00').getTime();
function updateCountdown(){
  const diff=Math.max(0,target-Date.now());
  const d=Math.floor(diff/86400000); const h=Math.floor(diff%86400000/3600000);
  const m=Math.floor(diff%3600000/60000); const s=Math.floor(diff%60000/1000);
  document.getElementById('days').textContent=String(d).padStart(2,'0');
  document.getElementById('hours').textContent=String(h).padStart(2,'0');
  document.getElementById('minutes').textContent=String(m).padStart(2,'0');
  document.getElementById('seconds').textContent=String(s).padStart(2,'0');
}
updateCountdown(); setInterval(updateCountdown,1000);

// Optional background music. Add assets/wedding-music.mp3 to activate it.
const music=document.getElementById('weddingMusic');
const musicButton=document.getElementById('musicButton');
music?.addEventListener('error',()=>{musicButton.title='Add assets/wedding-music.mp3 to enable music';});
musicButton?.addEventListener('click',async()=>{
  if(!music) return;
  try{
    if(music.paused){await music.play();musicButton.classList.add('active');musicButton.setAttribute('aria-pressed','true');musicButton.textContent='Ⅱ Music';}
    else{music.pause();musicButton.classList.remove('active');musicButton.setAttribute('aria-pressed','false');musicButton.textContent='♪ Music';}
  }catch(e){musicButton.title='Add a local MP3 file at assets/wedding-music.mp3';}
});

// Add-to-calendar .ics download — no service/account required.
document.getElementById('calendarButton')?.addEventListener('click',()=>{
  const ics=[
    'BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Christian Queency Wedding//EN','BEGIN:VEVENT',
    'UID:christian-queency-20261010@example.local','DTSTAMP:20260101T000000Z',
    'DTSTART:20261010T073000','DTEND:20261010T120000',
    'SUMMARY:Christian & Queency Wedding','LOCATION:St. James the Greater Parish, Batangas / Namuco, Rosario, Batangas',
    'DESCRIPTION:Wedding ceremony and reception for Christian & Queency.','END:VEVENT','END:VCALENDAR'
  ].join('\r\n');
  const blob=new Blob([ics],{type:'text/calendar;charset=utf-8'});
  const url=URL.createObjectURL(blob); const a=document.createElement('a');
  a.href=url; a.download='Christian-and-Queency-Wedding.ics'; a.click(); URL.revokeObjectURL(url);
});

// RSVP email. Change this one address before publishing.
const RSVP_EMAIL='YOUR_EMAIL@example.com';
document.getElementById('rsvpForm')?.addEventListener('submit',e=>{
  e.preventDefault();
  const data=new FormData(e.currentTarget);
  const subject=encodeURIComponent('RSVP — Christian & Queency Wedding');
  const body=encodeURIComponent(`Name: ${data.get('name')}\nAttendance: ${data.get('attendance')}\nMessage: ${data.get('message')||''}`);
  window.location.href=`mailto:${RSVP_EMAIL}?subject=${subject}&body=${body}`;
});

// Subtle falling petals.
const petals=document.getElementById('petals');
function makePetal(){
  if(!petals) return;
  const p=document.createElement('i'); p.className='petal';
  p.style.left=Math.random()*100+'%'; p.style.animationDuration=(7+Math.random()*8)+'s';
  p.style.animationDelay=(Math.random()*2)+'s'; p.style.opacity=(.3+Math.random()*.45).toFixed(2);
  petals.appendChild(p); setTimeout(()=>p.remove(),17000);
}
for(let i=0;i<12;i++) setTimeout(makePetal,i*350);
setInterval(makePetal,900);

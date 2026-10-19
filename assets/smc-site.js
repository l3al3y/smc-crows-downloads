(() => {
  const banner = document.querySelector('.announcement');
  if (banner) {
    const button = banner.querySelector('button');
    banner.classList.add('is-moving');
    button.hidden = false;
    button.addEventListener('click', () => {
      const paused = !banner.classList.toggle('is-moving');
      button.setAttribute('aria-pressed', String(paused));
      button.textContent = paused ? 'Resume announcement' : 'Pause announcement';
    });
  }
  const count = document.getElementById('smc-apk-download-count');
  const status = document.getElementById('smc-apk-counter-status');
  if (!count || !status) return;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);
  fetch('/smc/api/apk-stat', {cache:'no-store', credentials:'omit', signal:controller.signal})
    .then(r => { if (!r.ok) throw Error(); return r.json(); })
    .then(d => {
      if (d.version !== 'smc-crows-v3.0-stable-20261019' || !Number.isSafeInteger(d.starts) || d.starts < 0 || !Number.isSafeInteger(d.previous_r4) || !Number.isSafeInteger(d.previous_r2) || !Number.isSafeInteger(d.historical_v4)) throw Error();
      count.textContent = new Intl.NumberFormat().format(d.starts);
      count.dataset.countValue=String(d.starts);
      for(const cell of document.querySelectorAll('[data-counter]')) { const value=d[cell.dataset.counter]; if(!Number.isSafeInteger(value)||value<0)throw Error();cell.textContent=new Intl.NumberFormat().format(value);cell.dataset.countValue=String(value); }
      window.dispatchEvent(new Event('smc-counts-ready'));
      status.textContent = 'Live counts. v3.0 requests since 19 October 2026; earlier releases shown separately.';
    })
    .catch(() => { status.textContent = 'APK count temporarily unavailable.'; })
    .finally(() => clearTimeout(timeout));
})();

// All pages use the server's release state; no browser clock unlocks downloads.
(()=>{'use strict';const button=document.querySelector('[data-v1-apk-button]');
const resources=[...document.querySelectorAll('[data-v1-resource]')];const budgetNotes=[...document.querySelectorAll('[data-v1-download-budget]')];const notes=[...document.querySelectorAll('[data-v1-release-status]')];
for(const link of resources)link.addEventListener('click',event=>{if(link.getAttribute('aria-disabled')==='true')event.preventDefault();});
function render(ready,message,resourcesReady=ready){if(button){button.disabled=!ready;button.setAttribute('aria-disabled',String(!ready));button.textContent=button.hasAttribute('data-download-choice')?(ready?'Direct download ↗':'Direct download unavailable'):(ready?(button.hasAttribute('data-compact-apk-button')?'Download APK ↗':'Download SMC Crows v3.0 APK'):'Downloads temporarily unavailable');}
for(const link of resources){link.setAttribute('aria-disabled',String(!resourcesReady));link.tabIndex=resourcesReady?0:-1;if(resourcesReady)link.setAttribute('href',link.dataset.downloadPath);else link.removeAttribute('href');link.lastElementChild.textContent=resourcesReady?'Download ZIP →':'Unavailable';}
for(const note of notes)note.textContent=ready&&note.hasAttribute('data-compact-release-status')?'Ready to download.':message;}
async function refresh(){try{const r=await fetch('/smc/api/release-status',{cache:'no-store',credentials:'omit',signal:AbortSignal.timeout(10000)});if(!r.ok)throw Error();const s=await r.json();
const ready=s.version==='v3.0'&&s.available===true,resourcesReady=s.version==='v3.0'&&(s.resources_available===true||s.resources_available===undefined&&ready);
let message=ready?'v3.0 Stable Version is available. Android 10+ / ARM64. Back up your account and install over your compatible app.':'Downloads are temporarily unavailable. Please retry shortly.';
if(!ready&&['daily_quota','monthly_quota'].includes(s.reason)&&typeof s.reset_at==='string'&&Number.isFinite(Date.parse(s.reset_at))){const reset=new Intl.DateTimeFormat('en-MY',{dateStyle:'medium',timeStyle:'short',timeZone:'Asia/Kuala_Lumpur'}).format(new Date(s.reset_at));message=(s.reason==='daily_quota'?'Today’s download-attempt budget is used up.':'This month’s download-attempt budget is used up.')+' Next refresh: '+reset+' (Malaysia time).'+(resourcesReady?' Resource ZIPs are still available.':'');}
if(!ready&&s.reason==='quota_unavailable')message='APK availability could not be checked. Please retry shortly. Your installed game is unchanged.';
const budget=s.quota?.download_budget;for(const note of budgetNotes){note.textContent=budget&&Number.isSafeInteger(budget.daily_full_request_limit)&&Number.isSafeInteger(budget.full_requests_remaining)?'Daily budget: up to '+budget.daily_full_request_limit.toLocaleString('en-US')+' full APK starts · '+budget.full_requests_remaining.toLocaleString('en-US')+' full starts available now. Retries and ranges use the same budget.':'Download-attempt budget could not be checked. Open View quota for details.';}
for(const mirror of document.querySelectorAll('[data-apk-mirror-button]')){mirror.disabled=s.mirror_available!==true;mirror.setAttribute('aria-disabled',String(mirror.disabled));}
render(ready,message,resourcesReady);
}catch{render(false,'Release status unavailable. Please retry shortly.');}}
refresh();setInterval(refresh,60000);document.addEventListener('visibilitychange',()=>{if(!document.hidden)refresh();});})();

// Decorative motion never changes the saved counter or submits a download.
(()=>{'use strict';const reduce=window.matchMedia('(prefers-reduced-motion: reduce)');
for(const button of document.querySelectorAll('.motion-toggle'))button.addEventListener('click',()=>{const container=button.closest('.mecha-scene,.counter-panel');const paused=container.classList.toggle('motion-paused');button.setAttribute('aria-pressed',String(paused));button.textContent=paused?'Resume motion':'Pause motion';});
const table=document.querySelector('.counter-motion');if(!table)return;let ready=false,visible=false,played=false;
function animate(){if(!ready||!visible||played)return;played=true;table.classList.add('is-visible');const cells=[...table.querySelectorAll('[data-count-value]')];const max=Math.max(1,...cells.map(c=>Number(c.dataset.countValue)));
for(const [i,cell] of cells.entries()){const row=cell.closest('tr'),value=Number(cell.dataset.countValue);row.style.setProperty('--row-delay',String(i*65)+'ms');row.style.setProperty('--bar-fill',String(value/max));if(reduce.matches||table.closest('.counter-panel').classList.contains('motion-paused'))continue;const start=performance.now();function tick(now){const progress=Math.min(1,(now-start)/850),n=Math.round(value*(1-Math.pow(1-progress,3)));cell.textContent=new Intl.NumberFormat().format(n);if(progress<1&&!reduce.matches&&!table.closest('.counter-panel').classList.contains('motion-paused'))requestAnimationFrame(tick);else cell.textContent=new Intl.NumberFormat().format(value);}requestAnimationFrame(tick);}}
window.addEventListener('smc-counts-ready',()=>{ready=true;animate();},{once:true});
if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){visible=true;animate();observer.disconnect();}},{threshold:.2});observer.observe(table);}else{visible=true;animate();}
})();




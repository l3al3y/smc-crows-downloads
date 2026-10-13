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
      if (d.version !== 'smc-crows-v2.0-stable-20261014' || !Number.isSafeInteger(d.starts) || d.starts < 0 || !Number.isSafeInteger(d.previous_r4) || !Number.isSafeInteger(d.previous_r2) || !Number.isSafeInteger(d.historical_v4)) throw Error();
      count.textContent = new Intl.NumberFormat().format(d.starts);
      for(const cell of document.querySelectorAll('[data-counter]')) { const value=d[cell.dataset.counter]; if(!Number.isSafeInteger(value)||value<0)throw Error();cell.textContent=new Intl.NumberFormat().format(value); }
      status.textContent = 'Live counts. v2.0 requests since 14 October 2026; earlier releases shown separately.';
    })
    .catch(() => { status.textContent = 'APK count temporarily unavailable.'; })
    .finally(() => clearTimeout(timeout));
})();

// All pages use the server's release state; no browser clock unlocks downloads.
(()=>{'use strict';const button=document.querySelector('[data-v1-apk-button]');
const resources=[...document.querySelectorAll('[data-v1-resource]')];const notes=[...document.querySelectorAll('[data-v1-release-status]')];
for(const link of resources)link.addEventListener('click',event=>{if(link.getAttribute('aria-disabled')==='true')event.preventDefault();});
function render(ready,message){if(button){button.disabled=!ready;button.setAttribute('aria-disabled',String(!ready));button.textContent=ready?'Download SMC Crows v2.0 APK':'Downloads temporarily unavailable';}
for(const link of resources){link.setAttribute('aria-disabled',String(!ready));link.tabIndex=ready?0:-1;if(ready)link.setAttribute('href',link.dataset.downloadPath);else link.removeAttribute('href');link.lastElementChild.textContent=ready?'Download ZIP →':'Unavailable';}
for(const note of notes)note.textContent=message;}
async function refresh(){try{const r=await fetch('/smc/api/release-status',{cache:'no-store',credentials:'omit',signal:AbortSignal.timeout(10000)});if(!r.ok)throw Error();const s=await r.json();
const ready=s.version==='v2.0'&&s.available===true;render(ready,ready?'v2.0 Stable Version is available. Android 10+ / ARM64. Back up your account and install over your compatible app.':'Downloads are temporarily unavailable. Please retry shortly.');
}catch{render(false,'Release status unavailable. Please retry shortly.');}}
refresh();setInterval(refresh,60000);document.addEventListener('visibilitychange',()=>{if(!document.hidden)refresh();});})();

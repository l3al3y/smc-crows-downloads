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
      if (d.version !== 'smc-crows-v1.0-setup-20261012' || !Number.isSafeInteger(d.starts) || d.starts < 0 || !Number.isSafeInteger(d.previous_r4) || !Number.isSafeInteger(d.previous_r2) || !Number.isSafeInteger(d.historical_v4)) throw Error();
      count.textContent = new Intl.NumberFormat().format(d.starts);
      status.textContent = 'This Setup update: APK button requests since 12 October 2026. Previous v1.0: ' + d.previous_v1 + '; r4: ' + d.previous_r4 + '; r2: ' + d.previous_r2 + '; v4: ' + d.historical_v4 + '.';
    })
    .catch(() => { status.textContent = 'APK count temporarily unavailable.'; })
    .finally(() => clearTimeout(timeout));
})();

// All pages use the server's release state; no browser clock unlocks downloads.
(()=>{'use strict';const button=document.querySelector('[data-v1-apk-button]');
const resources=[...document.querySelectorAll('[data-v1-resource]')];const notes=[...document.querySelectorAll('[data-v1-release-status]')];
for(const link of resources)link.addEventListener('click',event=>{if(link.getAttribute('aria-disabled')==='true')event.preventDefault();});
function render(ready,message){if(button){button.disabled=!ready;button.setAttribute('aria-disabled',String(!ready));button.textContent=ready?'Download SMC Crows v1.0 APK':'Downloads temporarily unavailable';}
for(const link of resources){link.setAttribute('aria-disabled',String(!ready));link.tabIndex=ready?0:-1;if(ready)link.setAttribute('href',link.dataset.downloadPath);else link.removeAttribute('href');link.lastElementChild.textContent=ready?'Download ZIP →':'Unavailable';}
for(const note of notes)note.textContent=message;}
async function refresh(){try{const r=await fetch('/smc/api/release-status',{cache:'no-store',credentials:'omit',signal:AbortSignal.timeout(10000)});if(!r.ok)throw Error();const s=await r.json();
const ready=s.version==='v1.0'&&s.available===true;render(ready,ready?'v1.0 with the improved Setup is available. Update over your compatible installation; keep your account backup.':'Public downloads are paused while v2.0 compatibility and the reported Firefox freeze are checked. Reopening will be announced here.');
}catch{render(false,'Release status unavailable. Please retry shortly.');}}
refresh();setInterval(refresh,60000);document.addEventListener('visibilitychange',()=>{if(!document.hidden)refresh();});})();

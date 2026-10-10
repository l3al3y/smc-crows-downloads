(() => {
  const launch = document.querySelector('[data-v1-launch]');
  if (launch) {
    const panel = document.createElement('section');
    panel.className = 'panel v1-manual-play';
    const heading = document.createElement('h2');
    heading.textContent = 'Your account. Your choice to play.';
    const instructions = document.createElement('p');
    instructions.textContent = 'The v1.0 setup stays open after verification. Use Change account / import backup to select your saved account, confirm replacement when switching, and keep an exported copy of your current account first. The game starts only when you tap Play SMC Crows.';
    const note = document.createElement('p');
    note.textContent = 'Account changes require verification before Play becomes available. Ordinary unchanged reopening reuses saved verification. Ready setup checks for signed resource updates in the background. Tap Install resource update when offered.';
    panel.append(heading, instructions, note);
    launch.after(panel);
  }
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
      if (d.version !== 'smc-crows-v1.0-20261011' || !Number.isSafeInteger(d.starts) || d.starts < 0 || !Number.isSafeInteger(d.previous_r4) || !Number.isSafeInteger(d.previous_r2) || !Number.isSafeInteger(d.historical_v4)) throw Error();
      count.textContent = new Intl.NumberFormat().format(d.starts);
      status.textContent = 'v1.0 APK button requests since 11 October 2026. Previous r4: ' + d.previous_r4 + '; r2: ' + d.previous_r2 + '; v4: ' + d.historical_v4 + '.';
    })
    .catch(() => { status.textContent = 'APK count temporarily unavailable.'; })
    .finally(() => clearTimeout(timeout));
})();

// The server, not the browser clock, decides release availability.
(()=>{'use strict';const button=document.querySelector('[data-v1-apk-button]');if(!button)return;
const resources=[...document.querySelectorAll('[data-v1-resource]')];const note=document.querySelector('[data-v1-release-status]');
for(const link of resources)link.addEventListener('click',event=>{if(link.getAttribute('aria-disabled')==='true')event.preventDefault();});
async function refresh(){try{const r=await fetch('/smc/api/release-status',{cache:'no-store',credentials:'omit',signal:AbortSignal.timeout(10000)});if(!r.ok)throw Error();const s=await r.json();
const ready=s.version==='v1.0'&&s.available===true;button.disabled=!ready;button.setAttribute('aria-disabled',String(!ready));button.textContent=ready?'Download SMC Crows v1.0 APK':'Release checks in progress · downloads locked';
for(const link of resources){link.setAttribute('aria-disabled',String(!ready));link.tabIndex=ready?0:-1;link.lastElementChild.textContent=ready?'Download ZIP →':'Locked';}
note.textContent=ready?'v1.0 downloads are available. Use these matching files.':'Downloads remain locked until the scheduled time and final verification.';
}catch{button.disabled=true;button.setAttribute('aria-disabled','true');for(const link of resources){link.setAttribute('aria-disabled','true');link.tabIndex=-1;}note.textContent='Release status unavailable. Downloads remain locked.';}}
refresh();setInterval(refresh,60000);document.addEventListener('visibilitychange',()=>{if(!document.hidden)refresh();});})();

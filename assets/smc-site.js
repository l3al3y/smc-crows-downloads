(() => {
  const launch = document.querySelector('[data-v1-launch]');
  if (launch) {
    const panel = document.createElement('section');
    panel.className = 'panel v1-manual-play';
    const heading = document.createElement('h2');
    heading.textContent = 'Your account. Your choice to play.';
    const instructions = document.createElement('p');
    instructions.textContent = 'The v1.0 setup is being updated to stay open after verification. Use Change account / import backup to select your saved account, confirm replacement when switching, and keep an exported copy of your current account first. The game starts only when you tap Play SMC Crows.';
    const note = document.createElement('p');
    note.textContent = 'Account changes require verification before Play becomes available. Ordinary unchanged reopening reuses saved verification. These changes are included in release preparation; final APK validation and public files are pending.';
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
      if (d.version !== 'smc-android-20261008-r4' || !Number.isSafeInteger(d.starts) || d.starts < 0 || !Number.isSafeInteger(d.previous_r2) || !Number.isSafeInteger(d.historical_v4)) throw Error();
      count.textContent = new Intl.NumberFormat().format(d.starts);
      status.textContent = 'APK button requests since 8 October 2026. Previous r2: ' + d.previous_r2 + '; v4: ' + d.historical_v4 + '.';
    })
    .catch(() => { status.textContent = 'APK count temporarily unavailable.'; })
    .finally(() => clearTimeout(timeout));
})();

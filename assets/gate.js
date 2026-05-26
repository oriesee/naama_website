(function () {
  var PW = 'naama_design';
  var KEY = 'ng_unlocked';
  if (sessionStorage.getItem(KEY) === '1') return;

  var style = document.createElement('style');
  style.textContent = 'html.gated body{overflow:hidden}html.gated body>*:not(.gate){visibility:hidden}.gate{position:fixed;inset:0;background:var(--paper,#f6f4ef);display:flex;align-items:center;justify-content:center;z-index:9999;font-family:var(--sans,"Inter",sans-serif)}.gate-inner{max-width:380px;width:90%;padding:0 24px;text-align:center}.gate-brand{font-family:var(--serif,Georgia,serif);font-size:1.05rem;letter-spacing:.04em;text-transform:uppercase;color:var(--ink,#1a1916);margin-bottom:42px}.gate h1{font-family:var(--serif,Georgia,serif);font-weight:300;font-size:clamp(1.5rem,3.2vw,2rem);letter-spacing:-.01em;color:var(--ink,#1a1916);margin-bottom:10px;line-height:1.2}.gate p{font-size:.95rem;color:var(--ink-soft,#54504a);margin-bottom:28px;line-height:1.55}.gate form{display:flex;flex-direction:column;gap:14px}.gate input{width:100%;background:transparent;border:none;border-bottom:1px solid var(--line,#dcd6c9);padding:12px 4px;font-family:inherit;font-size:1rem;color:var(--ink,#1a1916);text-align:center;letter-spacing:.04em}.gate input:focus{outline:none;border-color:var(--ink,#1a1916)}.gate button{background:var(--ink,#1a1916);color:var(--paper,#f6f4ef);border:none;padding:13px 26px;font-family:var(--mono,ui-monospace,monospace);font-size:.78rem;letter-spacing:.08em;text-transform:uppercase;cursor:pointer;transition:opacity .2s}.gate button:hover{opacity:.85}.gate .err{font-family:var(--mono,ui-monospace,monospace);font-size:.72rem;letter-spacing:.06em;text-transform:uppercase;color:#a8423a;min-height:1em;margin-top:4px}';
  document.documentElement.appendChild(style);
  document.documentElement.classList.add('gated');

  function mount() {
    var gate = document.createElement('div');
    gate.className = 'gate';
    gate.innerHTML = '<div class="gate-inner"><div class="gate-brand">Naama Gershoni</div><h1>Portfolio access</h1><p>This portfolio is password-protected. Please enter the access code to continue.</p><form id="gate-form"><input id="gate-pw" type="password" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="Access code" autofocus><button type="submit">Unlock</button><div class="err" id="gate-err"></div></form></div>';
    document.body.appendChild(gate);
    var form = document.getElementById('gate-form');
    var input = document.getElementById('gate-pw');
    var err = document.getElementById('gate-err');
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      if (input.value === PW) {
        sessionStorage.setItem(KEY, '1');
        document.documentElement.classList.remove('gated');
        gate.remove();
      } else {
        err.textContent = 'Incorrect code';
        input.value = '';
        input.focus();
      }
    });
  }

  if (document.body) {
    mount();
  } else {
    document.addEventListener('DOMContentLoaded', mount);
  }
})();

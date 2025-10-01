(function() {
  const pop = document.getElementById('bib-popover');
  const codeEl = document.querySelector('#bib-code code');
  const copyBtn = document.getElementById('bib-copy-btn');
  let currentBtn = null;

  // 点击按钮
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.bib-btn');
    if (btn) {
      e.preventDefault();
      if (currentBtn === btn && !pop.hidden) { hide(); return; }
      currentBtn = btn;
      openAt(btn);
      return;
    }
    if (!pop.hidden && !pop.contains(e.target)) hide();
  });

  // 复制
  copyBtn.addEventListener('click', async () => {
    const text = codeEl.textContent;
    try {
      await navigator.clipboard.writeText(text);
      copyBtn.textContent = 'Copied';
      setTimeout(()=> copyBtn.textContent = 'Copy', 1200);
    } catch {
      const s = window.getSelection();
      const r = document.createRange();
      r.selectNodeContents(codeEl); s.removeAllRanges(); s.addRange(r);
      try { document.execCommand('copy'); copyBtn.textContent = 'Copied'; } catch {}
      setTimeout(()=> copyBtn.textContent = 'Copy', 1200);
      s.removeAllRanges();
    }
  });

  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') hide(); });

  function openAt(btn){
    const bib = btn.getAttribute('data-bib') || '';
    codeEl.textContent = bib;

    const rect = btn.getBoundingClientRect();
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const scrollX = window.scrollX || document.documentElement.scrollLeft;

    pop.hidden = false;
    pop.style.top = (rect.bottom + scrollY + 10) + 'px';
    const idealLeft = rect.left + scrollX - 20;
    pop.style.left = Math.min(
      Math.max(12, idealLeft),
      document.documentElement.clientWidth + scrollX - pop.offsetWidth - 12
    ) + 'px';
  }

  function hide(){
    pop.hidden = true;
    currentBtn = null;
  }
})();

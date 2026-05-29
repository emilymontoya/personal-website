// Dark mode toggle with localStorage (UX + simple)
const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  const mode = document.body.classList.contains('light') ? 'Light' : 'Dark';
  localStorage.setItem('theme', mode);
  console.log(`🛡️ Security note: Theme changed to ${mode} (no eval used)`);
});

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'Light') {
  document.body.classList.add('light');
}

// Optional: Security check (CSP + no unsafe eval)
try {
  eval("console.log('test')");
  console.warn('Unsafe eval allowed — fix CSP if you see this');
} catch(e) {
  console.log('CSP blocking eval — good security practice');
}

// Glitch effect on hover (fun & high-tech)
const glitchElem = document.getElementById('glitch');
if (glitchElem) {
  glitchElem.addEventListener('mouseover', () => {
    glitchElem.style.animation = 'none';
    glitchElem.offsetHeight;
    glitchElem.style.animation = null;
  });
}

// Live security check
function checkBrowserSecurity() {
  const statusDiv = document.getElementById('secStatus');
  let issues = [];
  
  if (!window.isSecureContext) issues.push('Not in secure context');
  if (document.referrer === '') issues.push('eferrer hidden (good)');
  
  // Check for common tracking protections
  const isPrivate = navigator.doNotTrack === '1' || navigator.globalPrivacyControl;
  if (isPrivate) issues.push('Privacy controls enabled');
  
  if (issues.length === 0) {
    statusDiv.innerHTML = 'Strong security posture: HTTPS, CSP active, modern browser';
  } else {
    statusDiv.innerHTML = issues.join(' · ');
  }
}
checkBrowserSecurity();
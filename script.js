// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const navUl  = document.querySelector('nav ul');
  if(toggle && navUl){
    toggle.addEventListener('click', () => navUl.classList.toggle('open'));
  }

  // Simple countdown timer: set openingDate to the school's opening datetime
  const openingDate = new Date('2026-01-21T08:00:00'); // Opening Date
  const countdownEl = document.getElementById('countdown');
  if(countdownEl){
    const tick = () => {
      const now = new Date();
      const diff = openingDate - now;
      if(diff <= 0){
        countdownEl.textContent = 'School is Open';
        clearInterval(interval);
        return;
      }
      const days = Math.floor(diff / (1000*60*60*24));
      const hrs  = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
      const mins = Math.floor((diff % (1000*60*60)) / (1000*60));
      const secs = Math.floor((diff % (1000*60)) / 1000);
      countdownEl.textContent = `${days}d ${hrs}h ${mins}m ${secs}s`;
    };
    tick();
    const interval = setInterval(tick, 1000);
  }
});

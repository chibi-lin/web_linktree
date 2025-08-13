(function () {
  const tabs = document.querySelectorAll('.tab-btn');

  const tabContents = {
    aboutme: document.getElementById('aboutme'),
    links: document.getElementById('links'),
    illustration: document.getElementById('illustration'),
    animation: document.getElementById('animation'),
    terms: document.getElementById('terms'),
  };

  function activate(target) {
    tabs.forEach((b) => b.classList.toggle('active', b.dataset.target === target));

    Object.entries(tabContents).forEach(([key, section]) => {
      section.style.display = key === target ? '' : 'none';
    });

    localStorage.setItem('activeTab', target);
  }

  tabs.forEach((btn) =>
    btn.addEventListener('click', (e) => {
      if (btn.classList.contains('commission_form')) {
        return;
      }

      e.preventDefault();

      activate(btn.dataset.target);
    })
  );

  const savedTab = localStorage.getItem('activeTab') || 'links';
  activate(savedTab);

  const backToTopBtn = document.querySelector('.back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }
})();
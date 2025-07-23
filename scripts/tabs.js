document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  function showTab(tabId) {
    tabContents.forEach(content => {
      content.style.display = (content.id === tabId) ? 'block' : 'none';
    });
  }

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      showTab(button.getAttribute('data-tab'));
    });
  });

  if (tabButtons.length > 0) {
    showTab(tabButtons[0].getAttribute('data-tab'));
  }
});

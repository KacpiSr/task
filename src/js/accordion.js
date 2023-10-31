const items = document.querySelectorAll('.questions__box');
let openItem = null;

items.forEach(item => {
  const content = item.querySelector('.questions__content');
  const arrow = item.querySelector('.questions__arrow');

  item.addEventListener('click', () => {
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      arrow.style.transform = 'rotate(180deg)';
      content.style.marginTop = '0';
      openItem = null;
    } else {
      if (openItem) {
        const openContent = openItem.querySelector('.questions__content');
        const openArrow = openItem.querySelector('.questions__arrow');
        openContent.style.maxHeight = null;
        openArrow.style.transform = 'rotate(180deg)';
        openContent.style.marginTop = '0';
      }

      content.style.maxHeight = content.scrollHeight + 'px';
      arrow.style.transform = 'rotate(0deg)';
      content.style.marginTop = '25px';
      openItem = item;
    }
    content.style.transition = 'max-height 0.3s, margin-top 0.3s';
  });
});
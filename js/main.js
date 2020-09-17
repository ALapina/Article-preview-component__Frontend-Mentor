const shareButton = document.querySelector('.share-button');
const sharePanel = document.querySelector('.article-preview__share-panel');
const shareArrow = shareButton.querySelector('path');


const toggleSharePanel = () => {
  sharePanel.classList.toggle('show-panel');
  shareButton.classList.toggle('share-active');
  shareArrow.classList.toggle('share-active');
}

shareButton.addEventListener('click', toggleSharePanel);
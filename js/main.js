const shareButton = document.querySelector('.share-button');
const sharePanel = document.querySelector('.article-preview__share-panel');
const shareArrow = shareButton.querySelector('path');

console.log(shareArrow);

let showSharePanel = false;


function toogleSharePanel() {
  if (!showSharePanel) {
    //if panel is hidden then add class show-panel that make panel visible
    sharePanel.classList.add('show-panel');
    shareButton.classList.add('share-active');
    shareArrow.classList.add('share-active');

    showSharePanel = true;
  } else {
    //else if panel is visible then remove class show panel and make panel hidden by default
    sharePanel.classList.remove('show-panel');
    shareButton.classList.remove('share-active');
    shareArrow.classList.remove('share-active');

    showSharePanel = false;
  }
}

shareButton.addEventListener('click', toogleSharePanel);
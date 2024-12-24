const shareButton = document.querySelector('.share-btn');
  const shareOptions = document.querySelector('.share-options');

  shareButton.addEventListener(
    'click', () => {
      shareOptions.classList.toggle('show');

}    )

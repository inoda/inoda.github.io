function fsImg() {
  const imgs = document.querySelectorAll('.pics img');
  imgs.forEach(img => {
    img.addEventListener('click', function(e){
      img.requestFullscreen();
    })
  });
}

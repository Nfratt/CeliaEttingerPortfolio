'use strict';

function expandimg(imgs) {
  // Get the modal
  let modal = document.getElementById("myModal");

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  // console.log(imgs.id);
  let img = document.getElementById(imgs.id);
  let modalImg = document.getElementById("img01");
  let captionText = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = imgs.src;
  captionText.innerHTML = imgs.alt;

  // Get the <span> element that closes the modal
  let span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() { 
      modal.style.display = "none";
  }
}
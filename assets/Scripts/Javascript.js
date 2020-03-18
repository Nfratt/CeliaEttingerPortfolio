'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  render() {
    if (this.state.clicked) {
      return(
        document.write("")
      ) ;    }

    return e(
      'button',
      { onClick: () => this.setState({ clicked: true }) },
      'Like'
    );
  }
}
const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);



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
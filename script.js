var comments = document.getElementsByClassName('md');

for (var i = 0; i < comments.length; i++) {
  comments[i].innerHTML = "My name is Eric and I'm here to say: " + comments[i].innerHTML + "...in a major way.";
}

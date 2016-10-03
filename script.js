var comments = document.getElementsByClassName('comment');

for (var i = 0; i < comments.length; i++) {
  var username = comments[i].getElementsByClassName('author')[0].innerHTML;
  var comment = comments[i].getElementsByClassName('md')[0]
  comment.innerHTML = "My name is " + username + " and I'm here to say: " + comment.innerHTML + "...in a major way.";
}

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);

    switch (e.target.id) {
      case 'grey':
      case 'white':
      case 'blue':
      case 'yellow':
      case 'pink':
        body.style.backgroundColor = e.target.id;
        break;
      default:
        console.log('Color not found');
    }
  });
});

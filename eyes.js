const balls = document.getElementsByClassName('ball');

document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

  // console.log(balls)

  for (let index = 0; index < balls.length; index++) {
    balls[index].style.left = x;
  balls[index].style.top = y;
  balls[index].transform = 'translate(-' + x + ',-' + y + ')';
  }

};''
document.getElementById('player').style.top = '50px';
document.getElementById('player').style.left = '50px';


document.body.onkeydown = function (e) {
  var el = document.getElementById('player');
  
  var KEYCODE_LEFT = 37;
  var KEYCODE_RIGHT = 39;
  var KEYCODE_TOP = 38;
  var KEYCODE_DOWN = 40;
  var KEYCODE_ENTER = 13;
  var KEYCODE_SPACE = 32;
  
  if (e.keyCode == KEYCODE_LEFT) {
    el.style.left = (parseInt(el.style.left) - 10) + 'px';
  }
  else if (e.keyCode == KEYCODE_RIGHT) {
    el.style.left = (parseInt(el.style.left) + 10) + 'px';
  } else if (e.keyCode == KEYCODE_TOP) {
    el.style.top = (parseInt(el.style.top) - 10) + 'px';
  } else if (e.keyCode == KEYCODE_DOWN) {
    el.style.top = (parseInt(el.style.top) + 10) + 'px';
  } else  if (e.keyCode == KEYCODE_ENTER || e.keyCode == KEYCODE_SPACE) {
    effect(el);
    setTimeout(function() {
    fire() ;
    },350);
  }
   function fire() {
    Bullet();
    Animation();
  }

  function Bullet() {
    var bullet = document.createElement('div')
    el.appendChild(bullet);
     bullet.style.width = '6px';
    bullet.style.height = '6px';
    bullet.style.background = 'green';
    bullet.style.position = 'absolute';
    bullet.style.top = '3px';
    bullet.style.left = '10px';
  }

  function Animation() {
    var element = document.querySelector('#player div');
    var currentPosition = 1;
    var id = setInterval(fr, 1);
      
    function fr() {
      if (currentPosition == 150) {
        clearInterval(id);
        removeBullet();
      } else {
        currentPosition++; 
        element.style.left = currentPosition + 'px'; 
      }
    }
  }
function removeBullet() {
    document.getElementById('player').childNodes[0].remove();
  }
function effect(el) {
    el.classList.add('growing');
    setTimeout(function() {
      el.classList.remove('growing');
    },200);
}
}
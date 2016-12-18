function start () {
  putMessage();
  addRadioButton();
}
function putMessage() {
  if (!localStorage.getItem('message')) {
    var message = {
      'ua': 'Раді тебе бачити!',
      'eng': 'We are glad to see you!',
      'ru': 'Рады тебя видеть!'
      };
      localStorage.setItem('message', JSON.stringify(message));
    }
    
  if (!localStorage.getItem('lastLanguages')) {
    localStorage.setItem('lastLanguages', 'ua');
  }
}
function addRadioButton() {
  $languages = document.getElementById('language');
  var lastUserChoice = userChoice();
  var arrRadio = $languages.querySelectorAll('input[data-lang]');
    for (var i = 0; i < arrRadio.length; i++) {
      var $radio = arrRadio[i];
        if (lastUserChoice && $radio.dataset.lang == lastUserChoice) {
          $radio.setAttribute('checked', true);
          showMessage(lastUserChoice);
        }
          $radio.addEventListener('click', function() {
            if (this.checked) {
              showMessage(this.dataset.lang);
            }
        });
    }
}
function showMessage(lang) {
  displayNoneMessages();
  var langEls = document.getElementsByClassName('lang-' + lang);
  for (var i = 0; i < langEls.length; i++) {
      langEls[i].classList.add('visible');
    }
  var data = JSON.parse(localStorage.getItem('message'));
  var message2 = data[lang];
  var $message = document.querySelector('.lang-message');
  $message.textContent = message2;
  $message.classList.add('visible');
  localStorage.setItem('lastLanguages', lang);
}
function displayNoneMessages() {
  var langEls = document.getElementsByClassName('lang');
  for (var i = 0; i < langEls.length; i++) {
    langEls[i].classList.remove('visible');
  }
}

function userChoice() {
  return localStorage.getItem('lastLanguages');
}

start();
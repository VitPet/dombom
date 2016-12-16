var navigatorMessageMap = {
    'mac': 'macos',
    'iphone': 'ios',
    'win': 'windows'
};
var platform = navigator.platform.toLowerCase();

for (var key in navigatorMessageMap) {
    key = key.toLowerCase();
    var version = navigatorMessageMap[key];

    if (platform.indexOf(key) >= 0) {
        showPlatform(version);
  }
}
function showPlatform(version) {
    arrElem = document.getElementsByClassName('download-message');
    for (var i = 0; i < arrElem.length; i++) {
        value = arrElem[i].getAttribute('data-version');
        if (value !== version) {
            arrElem[i].style.display = 'none';
      }
  }
}
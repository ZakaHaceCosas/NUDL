document.addEventListener('DOMContentLoaded', function() {
    const closebtn = document.getElementById('close');
    const appWindow = document.getElementById('app');
    const windowshadow = document.getElementsByClassName('appshadow');
    const newthing = document.getElementById('broclosedwin');
    const reopen = document.getElementById('reopenitman');

    closebtn.onclick = function() {
        if (appWindow.style.display === 'flex') {
            appWindow.style.display = 'none';
            for (let i = 0; i < windowshadow.length; i++) {
                windowshadow[i].style.display = 'none';
            }
            newthing.style.display = 'flex';
        } else {
            appWindow.style.display = 'flex';
            for (let i = 0; i < windowshadow.length; i++) {
                windowshadow[i].style.display = 'flex';
            }
            newthing.style.display = 'none';
        }
    };

    reopen.onclick = function() {
        appWindow.style.display = 'flex';
        for (let i = 0; i < windowshadow.length; i++) {
            windowshadow[i].style.display = 'flex';
        }
        newthing.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const images = [
      'construct.png',
      'evo.png',
      'gnome.png',
      'neboola.png',
      'ihatepurple.png'
    ];
    
    const body = document.getElementById('body');
    const button = document.getElementById('swapbg');
    
    let prevImageIndex = -1;
    
    button.addEventListener('click', function() {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * images.length);
      } while (randomIndex === prevImageIndex);
      const randomImage = images[randomIndex];
      body.style.backgroundImage = `url('${randomImage}')`;
      prevImageIndex = randomIndex;
    });
  });
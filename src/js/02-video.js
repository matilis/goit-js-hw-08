import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
console.log(iframe);
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(
    data => localStorage.setItem('videoplayer-current-time', data.seconds),
    1000
  )
);

//inny zapis

// player.on(
//   'timeupdate',
//   throttle(function (data) {
//     const time = Object.values(data);
//     localStorage.setItem('videoplayer-current-time', time[0]);
//   }, 1000)
// );

// player.on(
//   'timeupdate',
//   throttle(data => {
//     const time = Object.values(data);
//     localStorage.setItem('videoplayer-current-time', time[0]), 1000;
//   })
// );
// nie dziala odliczanie czasu co 1sec (z import throttle from 'lodash.throttle'), poniewaz to jest funkcja, a fuckja z automatu pobiera 250ms z przegladarki i sie tego nie nadpisze throttlem

const timeGone = localStorage.getItem('videoplayer-current-time');

player
  .setCurrentTime(timeGone)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        'ohh no :/ => error';
        break;
    }
  });

//mega zapis, najbardziej czytelny calosci

// import Player from '@vimeo/player';
// import throttle from 'lodash.throttle';

// const videoEl = document.getElementById('vimeo-player');
// const video = new Player(videoEl);

// const saveTime = data =>
//   localStorage.setItem('videoplayer-current-time', data.seconds);
// const saveTimeDelay = throttle(saveTime, 1000);
// const getCurrentTime = localStorage.getItem('videoplayer-current-time');

// video.setCurrentTime(getCurrentTime).then();
// video.on('timeupdate', saveTimeDelay);

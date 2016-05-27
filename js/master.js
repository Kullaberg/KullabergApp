var notifyAttempts = 1;
// $(window).resize(function windowResize() {
//   $('.tabs-wrapper').pushpin({
//     top: $('.tabs-wrapper').offset().top,
//     // offset: $('.nav-wrapper').height(),
//   });
// });
// $(window).scroll(function scrollDoc() {
//   $('.grid').masonry({});
// });
/*
██       ██████   ██████  █████  ████████ ███████
██      ██    ██ ██      ██   ██    ██    ██
██      ██    ██ ██      ███████    ██    █████
██      ██    ██ ██      ██   ██    ██    ██
███████  ██████   ██████ ██   ██    ██    ███████
*/
function position() {
  Materialize.toast('Aquiring your location...', 600);
  const options = {
    enableHighAccuracy: true,
    timeout: 60000,
    maximumAge: 15000,
  };

  function success(pos) {
    const crd = pos.coords;
    Materialize.toast('Your current position:' + '<br>Latitude : ' + crd.latitude + '<br>Longitude: ' + crd.longitude + '<br>Accurate to: ' + crd.accuracy + ' meters.', 6000);
  }

  function error(err) {
    Materialize.toast('ERROR(' + err.code + '): ' + err.message, 1000, 'rounded');
  }
  navigator.geolocation.getCurrentPosition(success, error, options);
}

function detectLanguage() {
  const lang = window.navigator.language;
  Materialize.toast('Your preferred language is ' + lang, 1000);
}

function mapMsg() {
  Materialize.toast('Opening Map...', 600);
}
/*
███    ██  ██████  ████████ ██ ███████ ██  ██████  █████  ████████ ██  ██████  ███    ██ ███████
████   ██ ██    ██    ██    ██ ██      ██ ██      ██   ██    ██    ██ ██    ██ ████   ██ ██
██ ██  ██ ██    ██    ██    ██ █████   ██ ██      ███████    ██    ██ ██    ██ ██ ██  ██ ███████
██  ██ ██ ██    ██    ██    ██ ██      ██ ██      ██   ██    ██    ██ ██    ██ ██  ██ ██      ██
██   ████  ██████     ██    ██ ██      ██  ██████ ██   ██    ██    ██  ██████  ██   ████ ███████
*/
// function spawnNotification(theBody, theIcon, theTitle) {
//   const options = {
//     body: theBody,
//     icon: theIcon,
//     tag: 'Kulla',
//     vibrate: [200, 100, 200],
//   };
//   const n = new Notification(theTitle, options);
// }
//
// function notifyMe(notifyMsg) {
//   notifyAttempts++;
//   // Let's check if the browser supports notifications
//   if (!('Notification' in window)) {
//     Materialize.toast('This browser does not support desktop notification', 1000);
//     // Let's check whether notification permissions have already been granted
//   } else if (Notification.permission === 'granted') {
//     // If it's okay let's create a notification
//     spawnNotification(notifyMsg, 'favicon/android-chrome-192x192.png', 'Kullaberg');
//     // Otherwise, we need to ask the user for permission
//   } else if (Notification.permission !== 'denied') {
//     Notification.requestPermission(function askFor(permission) {
//       // If the user accepts, let's create a notification
//       if (permission === 'granted') {
//         spawnNotification(notifyMsg, 'favicon/android-chrome-192x192.png', 'Kullaberg');
//       } else {
//         Notification.requestPermission().then(function giveThe(result) {
//           Materialize.toast('Notification request ' + result, 1000);
//         });
//       }
//     });
//   }
//   // At last, if the user has denied notifications, and you
//   // want to be respectful there is no need to bother them any more.
// }
/*
███    ██  ██████  ████████ ██ ███████ ██    ██     ███████ ██     ██
████   ██ ██    ██    ██    ██ ██       ██  ██      ██      ██     ██
██ ██  ██ ██    ██    ██    ██ █████     ████       ███████ ██  █  ██
██  ██ ██ ██    ██    ██    ██ ██         ██             ██ ██ ███ ██
██   ████  ██████     ██    ██ ██         ██        ███████  ███ ███
*/
navigator.serviceWorker.register('js/vibrate.min.js');

function showNotification(notifyMsg) {
  Notification.requestPermission(function askPermissionNotify(result) {
    if (result === 'granted') {
      navigator.serviceWorker.ready.then(function notifyRegister(registration) {
        registration.showNotification('Kullaberg SW', {
          body: notifyMsg,
          icon: 'favicon/android-chrome-192x192.png',
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: 'kulla',
        });
      });
    } else {
      Materialize.toast('Notification request ' + result, 1000);
    }
  });
}
/*
███    ██  ██████  ████████ ███████ ███████
████   ██ ██    ██    ██    ██      ██
██ ██  ██ ██    ██    ██    █████   ███████
██  ██ ██ ██    ██    ██    ██           ██
██   ████  ██████     ██    ███████ ███████

Transportation
	Skanetraffiken link
	App download link
Restaurants
	name
	phone, email
	hours
	description
	picture
Hotel
	name
	Phone, email
	picture
*/

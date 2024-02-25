const clock = document.getElementById('clock');

// function timer() {
//   const date = new Date();
//   let time = '';
//   if (date.getHours() < 10) time += '0' + date.getHours() + ':';
//   else time += date.getHours() + ':';
//   if (date.getMinutes() < 10) time += '0' + date.getMinutes() + ':';
//   else time += date.getMinutes() + ':';
//   if (date.getSeconds() < 10) time += '0' + date.getSeconds();
//   else time += date.getSeconds();
//   clock.innerHTML = time;
// }

function timer() {
  const date = new Date();
  let hours = date.getHours();
  const meridiem = hours <= 12 ? 'AM' : 'PM';
  hours = hours % 12 || 12;
  hours = hours.toString().padStart(2, 0);
  const minutes = date.getMinutes().toString().padStart(2, 0);
  const seconds = date.getSeconds().toString().padStart(2, 0);
  const time = `${hours}:${minutes}:${seconds} ${meridiem}`;
  clock.textContent = time;
}

timer();

setInterval(() => timer(), 1000);
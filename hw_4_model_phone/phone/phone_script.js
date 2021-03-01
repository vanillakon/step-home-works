function timer(){
let time = document.querySelector('.phone_time');
  window.setInterval(function(){
    let date = new Date();
    time.innerHTML = `${date.getHours()}:${add_zero(date.getMinutes())}`;
  }, 100);
}
function add_zero(num){
  return (num > 9) ? num : '0' + num;
}
function dates(){
  let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let date = new Date();
  let out_date = document.querySelector('.phone_date');
for (let i = 0; i < 12; i++){
  if (i == date.getMonth()){
    for (let k = 0; k < days.length; k++){
      if (k == date.getDay()){
        out_date.innerHTML = `${days[k]}, ${month[i]} ${date.getDate()}`;
      }
    }
  }
}
}

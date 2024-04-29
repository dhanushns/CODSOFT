setInterval(getTime, 1000)

function getTime () {
  let time = new Date()
  let hr = time.getHours()
  let min = time.getMinutes()
  let sec = time.getSeconds()

  let day = time.getDay()
  let date = time.getDate()
  let month = time.getMonth()
  let year = time.getFullYear()

  if (day === 0) {
    day = 'Sunday'
  } else if (day === 1) {
    day = 'Monday'
  } else if (day === 2) {
    day = 'Tuesday'
  } else if (day === 3) {
    day = 'Wednesday'
  } else if (day === 4) {
    day = 'Thursday'
  } else if (day === 5) {
    day = 'Friday'
  } else if (day === 6) {
    day = 'Saturday'
  }

  if (month === 0) {
    month = 'Jan'
  } else if (month === 1) {
    month = 'Feb'
  } else if (month === 2) {
    month = 'March'
  } else if (month === 3) {
    month = 'April'
  } else if (month === 4) {
    month = 'May'
  } else if (month === 5) {
    month = 'June'
  } else if (month === 6) {
    month = 'July'
  } else if (month === 7) {
    month = 'Aug'
  } else if (month === 8) {
    month = 'Sep'
  } else if (month === 9) {
    month = 'Oct'
  } else if (month === 10) {
    month = 'Nov'
  } else if (month === 11) {
    month = 'Dec'
  }

  hr = hr < 10 ? '0' + hr : hr
  min = min < 10 ? '0' + min : min
  sec = sec < 10 ? '0' + sec : sec

  let meridian;
  if(hr >= 12 && hr != 24){
    meridian = "PM"
  }
  else{
    meridian = "AM"
  }

  if(hr > 12){
    hr = hr - 12;
  }

  let displayTime = hr + ' : ' + min + ' : ' + sec
  let displayDate = month + ' ' + date + ', ' + year
  document.getElementById('set-time').innerHTML = displayTime
  document.getElementById('set-meridian').innerHTML = meridian
  document.getElementById('day').innerHTML = day
  document.getElementById('date-month-year').innerHTML = displayDate

  let secondAngleStart = (sec/60) * 360 + 'deg';
  let secondAngleEnd = (sec/60) * 360 + 360 + 'deg'
  document.documentElement.style.setProperty('--second-hand-angle-start',secondAngleStart)
  document.documentElement.style.setProperty('--second-hand-angle-end',secondAngleEnd)

  let minuteAngleStart = (min/60) * 360 + 'deg';
  let minuteAngleEnd = (min/60) * 360 + 360 + 'deg'
  document.documentElement.style.setProperty('--minute-hand-angle-start',minuteAngleStart);
  document.documentElement.style.setProperty('--minute-hand-angle-end',minuteAngleEnd);

  let hourAngleStart = (hr/12) * 360 + 'deg';
  let hourAngleEnd = (hr/12) * 360 + 360 + 'deg'
  document.documentElement.style.setProperty('--hour-hand-angle-start',hourAngleStart)
  document.documentElement.style.setProperty('--hour-hand-angle-end',hourAngleEnd)

}

getTime()

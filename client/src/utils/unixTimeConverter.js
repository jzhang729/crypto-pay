function addZero(i) {
  if (i < 10) {
    i = '0' + i;
  }
  return i;
}

export const unixTimeConverter = unixTimeStamp => {
  var a = new Date(unixTimeStamp * 1000);
  var months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = addZero(a.getDate());
  var hour = addZero(a.getHours());
  var min = addZero(a.getMinutes());
  var sec = addZero(a.getSeconds());
  var time =
    date + ' ' + month + ' ' + year + ' at ' + hour + ':' + min + ':' + sec;
  return time;
};

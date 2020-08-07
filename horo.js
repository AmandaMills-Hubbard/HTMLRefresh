document.getElementById('result').onclick = getHoroscope;
function getHoroscope(event){
  event.preventDefault()
  var month = document.getElementById('month').value;
  console.log(month);
  var day = document.getElementById('date').value;
if ((month == 3 && day >= 21) || (month == 4 && day <= 20)){
  document.getElementById('zodiac').innerHTML = "aries";
}else if((month == 4 && day >= 20) || (month == 5 && day <= 20)){
  document.getElementById('zodiac').innerHTML= "taurus";
}else if((month == 5 && day >= 21) || (month == 6 && day <= 20)){
  document.getElementById('zodiac').innerHTML= "gemini";
} else if((month == 6 && day >= 22) || (month == 7 && day <= 22)){
  document.getElementById('zodiac').innerHTML= "cancer";
}else if((month == 7 && day >= 23) || (month == 8 && day <= 22)){
  document.getElementById('zodiac').innerHTML= "leo";
}else if((month == 8 && day >= 23) || (month == 9 && day <= 22)){
  document.getElementById('zodiac').innerHTML= "virgo";
}else if((month == 9 && day >= 23) || (month == 10 && day <= 23)){
  document.getElementById('zodiac').innerHTML= "libra";
}else if((month == 10 && day >= 24) || (month == 11 && day <= 21)){
document.getElementById('zodiac').innerHTML= "scorpio";
}else if((month == 11 && day >= 22) || (month == 12 && day <= 21)){
  document.getElementById('zodiac').innerHTML= "sagittarius";
}else if((month == 12 && day >= 22) || (month == 1 && day <= 19)){
document.getElementById('zodiac').innerHTML= "capricorn";
}else if((month == 1 && day >= 20) || (month == 2 && day <= 18)){
document.getElementById('zodiac').innerHTML= "aquarius";;
}else if((month == 2 && day >= 19) || (month == 3 && day <= 20)){
document.getElementById('zodiac').innerHTML= "pisces";
}
}

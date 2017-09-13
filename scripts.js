// Some code thanks to @chrisgannon

var select = function(s) {
  return document.querySelector(s);
}

function randomBetween(min,max)
{
    var number = Math.floor(Math.random()*(max-min+1)+min);
  
    if ( number !== 0 ){
      return number;
    }else {
      return 0.5;
    }
}

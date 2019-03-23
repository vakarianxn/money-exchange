// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {

  const values = [50, 25, 10, 5, 1];
  const values_names = ['H', 'Q', 'D', 'N', 'P', 'error'];
  let change = new Object();
  let i = 0;
  let count = 0;

  if ((currency == 0) || (currency < 0) || (currency > 10000)) {
    if (currency > 10000) {
      change[values_names[5]] = "You are rich, my friend! We don't have so much coins for exchange";
    } else if ((currency == 0) || (currency < 0)) {
      return(change);
    };
  } else {
    while (currency >= 0) {
      if ( ((currency - values[i]) < 0) && (values[i] > currency) ) {
        i+= 1;
      } else {
        currency-= values[i];
        count+= 1;
        if (currency < values[i] ) {
          change[values_names[i]] = count;
          i +=1;
          count = 0;
        };
      };
    };
  };
  return(change);
};
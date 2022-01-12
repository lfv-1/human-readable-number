module.exports = function toReadable (number) {
    let a = ['','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen','eighteen','nineteen'];
    let b = ['', '', 'twenty', 'thirty', 'forty','fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let hundreds = Math.trunc(number/100);
    let tens = Math.trunc(number/10);
    let ones = number % 10;
    if (number === 0) {
      return 'zero';
  }else if (number < 20) {
    return a[number];
  }
  else if(number <= 99) {
    if (number % 10 == 0){
        return `${b[tens]}`;
    }else {
    return `${b[tens]} ${a[ones]}`;
  }
}
  else if(number < 1000 ) {
      if (number % 100 < 20){
          if (number % 100 == 0){
        return (`${a[hundreds]} hundred`);
      }else 
        return (`${a[hundreds]} hundred ${a[Math.trunc(number % 100)]}`);
      }else if (number % 10 == 0){
        return (`${a[hundreds]} hundred ${b[Math.trunc(number % 100/10)]}`);
      }else
        return(`${a[hundreds]} hundred ${b[Math.trunc(number % 100/10)]} ${a[ones]}`);
    }
}


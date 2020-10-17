module.exports = function toReadable (number) {
  let string = '';
  if (number.length === 3 || number.length === 1) {
    switch (number[0]) {
        case 1:
          string += 'one';
          break;
        case 2:
          string += 'two';
          break;
        case 3:
          string += 'three';
          break;
        case 4:
          string += 'four';
          break;
        case 5:
          string += 'five';
          break;
        case 6:
          string += 'six';
          break;
        case 7:
          string += 'seven';
          break;  
        case 8:
          string += 'eight';
          break;
        case 9:
            string += 'nine';
            break;
  }};
  if (number.length === 3) {
      string += 'hundred ';
  };
  if ((number.length === 3 || number.length === 2) && number[number.length-2] === 1) {
    switch (number[number.length-1]) {
        case 0:
            string += 'ten';
          break;
        case 1:
          string += 'eleven';
          break;
        case 2:
          string += 'twelve';
          break;
        case 3:
          string += 'thirteen';
          break;
        case 4:
          string += 'fourteen';
          break;
        case 5:
          string += 'fifteen';
          break;
        case 6:
          string += 'sixteen';
          break;
        case 7:
          string += 'seventeen';
          break;  
        case 8:
          string += 'eighteen';
          break;
        case 9:
            string += 'nineteen';
            break;
  }} else if (number.length === 3 || number.length === 2) {
      switch (number[number.length-2]) {
        case 2:
            string += 'twenty';
            break;
        case 3:
            string += 'thirty';
            break;
        case 4:
            string += 'forty';
            break;
        case 5:
            string += 'fifty';
            break;
        case 6:
            string += 'sixty';
            break;
        case 7:
            string += 'seventy';
            break;
        case 8:
            string += 'eighty';
            break;
        case 9:
            string += 'ninety';
            break;
    }};
  if ((number.length === 3 || number.length === 2) && number[number.length-1] !== 0) {
      switch (number[number.length-1]) {
        case 1:
            string += ' one';
            break;
        case 2:
            string += ' two';
            break;
        case 3:
            string += ' three';
            break;
        case 4:
            string += ' four';
            break;
        case 5:
            string += ' five';
            break;
        case 6:
            string += ' six';
            break;
        case 7:
            string += ' seven';
            break;  
        case 8:
            string += ' eight';
            break;
        case 9:
            string += ' nine';
            break;
    }}; return string;
};
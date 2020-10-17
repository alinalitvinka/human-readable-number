module.exports = function toReadable (number) {
  const arrNum = ['','one','two','three','four','five','six','seven','eight','nine'];
  const arrTwenty = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  const arrDozen = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  let string = '';
  let num = number.toString().split('');
  let a = num.length;
  if (num[0] === '0') { string += 'zero'; }
  if (a === 3 || a === 1) {
    string += arrNum[num[0]];
  }
  if (a === 3) {
      string += ' hundred';
  }
  if (a === 3 && (num[a-2] !== '0' || num[a-1] !== '0')) { string += ' ';}
  if (a !== 1 && num[a-2] === '1') {
    string += arrTwenty[num[a-1]];        
  } else if (a === 3 || a === 2) {
     string += arrDozen[num[a-2]];     
  }
  if (a !== 1 && num[a-2] !== '0' && num[a-1] !== '0' && num[a-2] !== '1') { string += ' ';}
  if (a !== 1 && num[a-1] !== '0' && num[a-2] !== '1') {
    string += arrNum[num[a-1]];
  } return string;
}
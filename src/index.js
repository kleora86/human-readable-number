module.exports = function toReadable (str) {
  const first = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
  const tens = [' ', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
  
  let word = '';

  for (let i = 0; i < 5; i++) {
    let tempNumber = str%(100*Math.pow(1000,i));
    if (Math.floor(tempNumber/Math.pow(1000,i)) !== 0) {
      if (Math.floor(tempNumber/Math.pow(1000,i)) < 20) {
        word = first[Math.floor(tempNumber/Math.pow(1000,i))].trim()  + word.trim();
      } else {
        word = tens[Math.floor(tempNumber/(10*Math.pow(1000,i)))].trim()+' '  + first[Math.floor(tempNumber/Math.pow(1000,i))%10].trim() + word.trim();
      }
    }

    tempNumber = str%(Math.pow(1000,i+1));
    if (Math.floor(tempNumber/(100*Math.pow(1000,i))) !== 0) word = first[Math.floor(tempNumber/(100*Math.pow(1000,i)))].trim() + ' hundred ' + word.trim();
  }
  if (str===100) { word='one hundred';}
  if (str===200) { word='two hundred';}
  if (str===300) { word='three hundred';}
  if (str===400) { word='four hundred';}
  if (str===500) { word='five hundred';}
  if (str===600) { word='six hundred';}
  if (str===700) { word='seven hundred';}
  if (str===800) { word='eight hundred';}
  if (str===900) { word='nine hundred';}
    word = word.replace('  ',' ');
    word = word.replace('hundred  ','hundred ');
    if (str===0) { word='zero';}
    if (str===20) { word='twenty';}
    if (str===30) { word='thirty';}
    if (str===40) { word='forty';}
    if (str===50) { word='fifty';}
    if (str===60) { word='sixty';}
    if (str===70) { word='seventy';}
    if (str===80) { word='eighty';}
    if (str===90) { word='ninety';}
    return word;
}
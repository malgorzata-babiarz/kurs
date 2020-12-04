alert('UWAGA! Bardzo bardzo początkujący developer!')

const firstName = 'Malgorzata';
let lastName = 'Krzempek';


console.log(`Nazywałam się ${firstName} ${lastName}.`);

lastName = 'Babiarz';

console.log(`Nazywam się ${firstName} ${lastName}.`);

const header = document.querySelector('.main-header--js');

console.log(header.innerHTML);

header.innerHTML='Kurs';

console.log(header.innerHTML);

header.innerHTML='Kurs "WTF: Co ten frontend?!"';

console.log(header.innerHTML);

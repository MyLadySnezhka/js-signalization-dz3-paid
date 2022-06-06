const signlink = document.querySelector('select[name="signal"]');
const doorlink = document.querySelector('select[name="door"]');
const houselink = document.querySelector('.kordon');

let signal, doorstat;


signlink.addEventListener('change', (ev) => {
    signal = signlink.value; 
})

doorlink.addEventListener('change', (ev) => {
    doorstat = doorlink.value;
})


houselink.addEventListener('mouseenter', (ev) => {
if ((signal === 'OFF') && (doorstat === 'OPEN')) {
    houselink.style.backgroundColor = 'yellow';
    houselink.innerHTML = 'Вы не забыли включить сигнализацию?'
} else if ((signal === 'ON') && (doorstat === 'OPEN')) {
    houselink.style.backgroundColor = 'red';
    houselink.innerHTML = 'ВИУ - ВИУ - ВИУ !!!';
} else if ((signal === 'OFF') && (doorstat === 'CLOSE')) {
    houselink.style.backgroundColor = 'green';
    houselink.innerHTML = 'Хозяева дома...';
} else {
    houselink.style.backgroundColor = 'yellowgreen';
    houselink.innerHTML = 'Хозяев нет. Дом в порядке.';
}
})
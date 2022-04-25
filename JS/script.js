const card = document.querySelector('.card');

let h1 = document.createElement('h1');
h1.classList.add('mb-5');
h1.setAttribute('id', 'number');

let text = document.createTextNode('0');

h1.append(text);
card.append(h1);

//creo div
let divBtns = document.createElement('div');
divBtns.classList.add('d-flex', 'flex-row', 'justify-content-between');

//creo i bottoni
let btnIncrem = document.createElement('button');
btnIncrem.classList.add('btn', 'btn-dark', 'rounded', 'incremento');
btnIncrem.innerHTML = '<i class="fas fa-plus-circle"></i>';

let btnDecrem = document.createElement('button');
btnDecrem.classList.add('btn', 'btn-dark', 'rounded', 'decremento');
btnDecrem.innerHTML = '<i class="fas fa-minus-circle"></i>';

let btnCanc = document.createElement('button');
btnCanc.classList.add('btn', 'btn-dark', 'rounded', 'cancella');
btnCanc.innerHTML = 'CLEAR';


divBtns.append(btnDecrem);
divBtns.append(btnCanc);
divBtns.append(btnIncrem);

card.append(divBtns);


const buttons = document.querySelectorAll('.btn');
let number = document.querySelector('#number');

// Creo Evento
buttons.forEach(function(button){
button.addEventListener('click', counterUpdate);
})

let counter = 0

function counterUpdate(e){
if (e.target.classList.contains('decremento')){
    counter <= 1 ? counter = 0 : counter--;
}
else if (e.target.classList.contains('incremento')){
    counter++;
}
else {
    counter = 0;
};
numberUpdate();
}

function numberUpdate() {
number.innerHTML = counter;
}
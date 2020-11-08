var inputWord;
var string = [];
var check = false;

// ciclo che fa inserire la parola, nel caso si inserisce un numero fa ripetere il ciclo

do {
    inputWord = prompt("Digita la parola per verificare se sia palindroma : ");
} while(!isNaN(inputWord));

//controllo

console.log(inputWord);

// la parola data in input deve essere splittata in sottostringhe e ricostruita al contrario. Dopo questo si fa un controllo e si confronta se sono uguali o no.

string = inputWord.split('');

//controllo
console.log(string);

var revString = string.reverse('');

//controllo
console.log(revString);

//creo un ciclo for che scorre l'array

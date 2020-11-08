var inputWord;
var string = [];
var revString = [];
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

revString = string.reverse('');

//controllo
console.log(revString);

//creo un ciclo for che scorre l'array

for (var i = 0; i < string.length; i++) {
    if (string[i] != revString[i]) {
        console.log('ok');
    }
    else {
        console.log('ko');
    }
}

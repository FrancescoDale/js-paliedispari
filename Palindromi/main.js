var inputWord;

// ciclo che fa inserire la parola, nel caso si inserisce un numero fa ripetere il ciclo

do {
    inputWord = prompt("Digita la parola per verificare se sia palindroma : ");
} while(!isNaN(inputWord));

//controllo

console.log(inputWord);

// la parola data in input deve essere splittata in sottostringhe e ricostruita al contrario. Dopo questo si fa un controllo e si confronta se sono uguali o no.

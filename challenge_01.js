
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/






let x, y, summe;

x = prompt("Bitte gib die 1. Zahl ein");
y = prompt("Bitte gib die 2. Zahl ein");

// x = parseInt(x); //Umwandlung von string in ganze Zahl
// y = parseInt(y); //Umwandlung von string in ganze Zahl

x = parseFloat(x); //Umwandlung von string in float
y = parseFloat(y); //Umwandlung von string in float

summe = x + y;


console.log("Die Summe der Zahlen ist " + summe);


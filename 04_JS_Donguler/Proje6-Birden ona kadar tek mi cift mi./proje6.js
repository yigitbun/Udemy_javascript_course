/*
    // Birden ona kadar tek mi cift mi.

    1 tek
    2 cift
    3 tek
    .
    .
    .
    .


*/

var i;

for (i=1; i<11; i++){
    if (i % 2 == 1) {
        document.writeln(i + " tek<br>")
    } else {
        document.writeln(i + " cift<br>")
    }
}
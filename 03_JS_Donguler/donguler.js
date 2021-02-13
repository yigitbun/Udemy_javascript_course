        
/*
        //Document Write && Writeln

        document.write("Gerzek ders<br>");
        document.write("Hala gerzek<br>");

        document.write("Php");
        document.write("Bootstrap");
        document.write("JS<br>");

        document.writeln("Php");
        document.writeln("Bootstrap");
        document.writeln("JS<br>");

        var s = "Sam Sepiol";
        document.write(s)
        
*/

/*
        // Alert ve Promt Kullanimi (body icinde)
        

        
        Not: Promt ile istenenler string olarak gelir bu ypzden "parseInt" kullaniriz

        alert("ben ne ise yararim ki")
        <div id="sonuc"></div>
        <script type="text/javascript">
        var sayi1 = prompt("Bir sayi girin");
        var sayi2 = prompt("Bir sayi girin");

        topla = parseInt(sayi1) + parseInt(sayi2);

        document.getElementById("sonuc").innerHTML = topla;

*/


/*

        // For Döngüsü

        var i;

        for (i=3; i<=10; i++) {
            document.write(i);

        }
        
    
        var i;

        for (i=3; i<=10; i+=2) {
            document.write(i);

        }
    
        var i;

        for (i=3; i<=10; i+=2) {
            document.writeln(i + "<br>");

        }



*/
/* 

        // While Döngüsü

        var i = 0;

        while (i<10) {
            document.write(i + ". sayi<br>")
            i++;
        } 
*/

/* 

        //Do while Döngüsü


        var i =11;
        do {
            document.write("Sayi" + i + "<br>")
            i++;
        } while (i < 11);
 */

        
 /* 
        // For in Döngüsü

        var courses = {ccourse1:"Php", course2:"bootstrap"};

        for (key in courses) {

            document.write(courses[key] + "<br>");
        }

        // Dizi Örnegi

        var egitimler = new Array("php", "bootstrap", "Jquery");

        for (key in egitimler) {

            document.write(egitimler[key] + "<br>")
        }
 */
/* 
        // Ic ice döngü

        var i, x;

         for (i=1; i<11; i++) {

            for (x=1; x < 11; x++) {
                document.write(i + "x" + x + "=" + i*x + "<br>")
            }

            

         }

 */

/* 
         // Break

         // Önce bir hatirlatma;


         var i = 10;

         switch (i) {


             case 10:
             document.writeln("Number is 10 <br>");
             break;

             case 11:
             document.writeln("Number is 10");
             break;

         }

         var i;

        for (i=3; i<=10; i++) {
            document.writeln(i);
            if (i==7) {
                document.writeln("You have reached number 7, stop!");
                break
            }

        }
 */

 
/* 
        // Continue

        var i;

        for (i=3; i<=10; i++) {
            
            if (i==7) {
                continue;
            }
            document.writeln(i);
        }

 */

/* 
    // Try Catch


    var a = 10;
    


    try {

        document.write(a);
        
    } catch(err) {
        document.write("Hatali islem :" + err)
    }
 */


    

    

/* 
    // Try Throw

    var a = 10;
    var b =14;
    try {

        document.write(a + " ve " + b + "<br>");
        if (a<b) {
            throw "buyuk";
        }
        if (a==b) {
            throw "esit";
        }
        
    } catch(err) {
        if (err == "buyuk") {
            document.write("a sayisi b'den büyük olamaz <br>");
        }
        document.write(err);
        
    }
 */

        // Try Finally
/* 
        var a = 30;

        try {
            document.write(a + b)
        } catch (error) {
            document.write(error + "<br>");

        } finally {
            document.write(a);
        }
 */    
 //Hangi gündeysek o günü yazdirin.
        /*
        0 Sunday
        1 Monday
        2 Thuesday
        .
        .
        .
        Tip: console.log(new Date().getDay())
        */

       var today = new Date().getDay();

       switch(today) {

           case 0:
           console.log("Sunday");
           break;

           case 1:
           console.log("Monday");
           break;

           case 2:
           console.log("Thuesday");
           break;

           case 3:
           console.log("Wednesday");
           break;

           case 4:
           console.log("Thursday");
           break;

           case 5:
           console.log("Friday");
           break;

           case 6:
           console.log("Saturday");
           break;

       }
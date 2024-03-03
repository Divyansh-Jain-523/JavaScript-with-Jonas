/*
Strict mode offers some additional functionalaties to us;
    such as Javasript having issues with declaring variable we can do that without let, var or const keyword too
    and it restricts us to use new keyword with ES are working such as private , public , interface etc these are not restricted till now but may be in future they can so it will make our code future proof

    for ex : 
        let aOne = false;
        aone = false;  // done intentenionally here but js dont throw msg here
        if(aOne) console.log("Hi");
*/

        // let aOne = false;
        // aone = false;  // done intentenionally here but js dont throw msg here
        // if(aOne) console.log("Hi");

        // check output no error is thrown but our log block also doesnt executed so 

        // 'use strict' must be used here to determine the issue
        
        // implementation of 'use strict'
        /*
        'use strict' must be first excutable line of file thats it and
        */

        'use strict'

        let aOne = false;
        aone = false;  // done intentenionally here but js dont throw msg here
        if(aOne) console.log("Hi");

        // now we will get an error about aone 

        // same with happen with let private = 20;
        // it restrict these kind of action and makes our code robust
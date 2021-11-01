let a = 'Hello';

function kumar() {


    let b = 'Piyush ';

    console.log(a + ' ' + b);

    if (b == 'Piyush ') {

        let c = 'kumar';

        console.log(a + ' ' + b + ' ' + c);
    }

    // variable c cannot be accessed here
    console.log(a + ' ' + b + ' ' + c);
} 
// variable b and  c cannot be accessed here


kumar();

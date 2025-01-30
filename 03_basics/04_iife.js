// Immediately Invoked Function Expressions (IIFE)

// function chai(){
//     console.log('DB Connected');
// }
// chai()

(function chai(){
    console.log(`DB Connected`);
})();

( () => {       //This is a named IIFE
    console.log(`DB Connected Two`);
})();

( (name) => {      //This is a unnamed IIFE
    console.log(`DB Connected Two ${name}`);
})('hitesh')
/*  Exercise-4 : Write a Javascript function to check whether an 
    `input` is an array or not.
*/
const checkArray = (input) => {
    if (Array.isArray(input)) 
        alert(input + " is an array.");
    else alert(input + " is not an array.")
}
const exercise4 = () => {
    alert("Write a Javascript function to check whether an `input` is an array or not.");
    checkArray([1,2,3]);
    checkArray("Hello World");
    checkArray(123);
}
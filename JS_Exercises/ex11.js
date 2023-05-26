/*  Exercise-11 : Write a JavaScript program to construct 
the following pattern, using a nested for loop.
*
**
*** 
**** 
*****
*/
const exercise11 = () => {
    for(let i = 1 ; i < 6 ; i++){
        let out ="";
        for(let j = 0 ; j < i ; j++)
            out += "*";
        console.log(out);
    }
}
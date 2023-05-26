/*  Exercise-12 :  Write a JavaScript program to construct the 
following pattern, using a nested for loop.
*****
**** 
*** 
**
*
*/

const exercise12 = () => {
    for (let i = 5 ; i > 0 ; i--) {
        let out = "";
        for (let j = i ; j > 0 ; j--)
            out += "*";
        console.log(out);
    }
}
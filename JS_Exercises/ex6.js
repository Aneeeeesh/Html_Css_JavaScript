/*  Exercise-6 : Find the word in the array by given the input 
    and return the matches value as list
*/
const matchedValues = (array, str) => {
    let resultArray = [];
    for(let ele of array){
        if(ele === str)
            resultArray.push(str);
        else continue;
    }
    return resultArray;
}
const exercise6 = () => {
    alert("[" + matchedValues(['apple', 'banana', 'orange', 'banana', 'grape'],'banana') 
        + "]");
}
/*  Exercise-3 : Write a Javascript function to repeat a 
    string a specified times.
*/  
const repeatString = () => {
    alert("Write a Javascript function to repeat a string a specified times.");
    let text = prompt('Enter string: ');
    let n = prompt("Enter number of times to repeat: ","1");
    for(let i = 0; i < n ; i++)
        alert(text);
}
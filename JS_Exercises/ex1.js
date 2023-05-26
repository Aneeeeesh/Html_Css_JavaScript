/*  Exercise-1 : Write a Javascript function to insert a string within a 
    string at a particular position (default is 1).
*/
const insertString = () => {
    alert("Write a Javascript function to insert a string within a string at a particular position (default is 1).");
    let mainString = prompt("Enter main string: ");
    let pos = prompt("Enter position: " , "1");
    let substring = prompt("Enter string to be inserted: ");

    let sub1 = mainString.slice(0,pos),
        sub2 = mainString.slice(pos);
    return alert(sub1 + substring + sub2);
}
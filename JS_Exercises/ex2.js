/*  Exercise-2 : Write a Javascript function to humanized number (Formats a number to a  
    human readable string) with the correct suffix such as 1st, 2nd, 3rd, 4th.
*/
const humanizeNumber = () => {
    alert("Write a Javascript function to humanized number (Formats a number to a human readable string) with the correct suffix such as 1st, 2nd, 3rd, 4th.");
    let num = prompt("Enter number: ");
    let suffix;
    if (num%10 === 1 && num%100 !== 11)
        suffix = "st";
    else if (num%10 === 2 && num%100 !== 12)
        suffix = "nd";
    else if (num%10 === 3 && num%100 !== 13)
        suffix = "rd";
    else suffix = "th";
    return alert(num + suffix);
}
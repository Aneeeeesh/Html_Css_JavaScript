/*  Exercise-5 : Find if the given element has presence in the array.
*/
const presentOrNot = (array) => {
    alert("Array: [" + array + "]");
    let ele = prompt ("Enter element: ");
    if (array.includes(ele)) 
        alert("Yes the element is present!");
    else alert("No the element is not present!")
}
const exercise5 = () => {
    alert("Find if the element has present in the array.");
    presentOrNot(["Bugatti", "Lambo","Ferrari"]);
}
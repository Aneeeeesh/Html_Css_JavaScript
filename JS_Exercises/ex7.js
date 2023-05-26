/*  Exercise-7 : Write a Javascript program to list the properties 
    of a Javascript object.
*/
const propsOfObject = (obj) => {
    return Object.keys(obj);
}
const exercise7 = () => {
    let obj1 = { 
                firstName : "Chris",
                lastName : "Nolan",
    };
    alert(propsOfObject(obj1));
}
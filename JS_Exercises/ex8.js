/*  Exercise-8 : Write a Javascript program to check whether the key is 
    present or not in the object.
*/
const keyPresence = (obj,key) => {
    if(obj.hasOwnProperty(key))
        return "Present!";
    else return "Absent";
}
const exercise8 = () => {
    let obj1 = {
                name : "Vismaya",
                age : 19,
                gender : "female",
    };
    alert(keyPresence(obj1, "age"));
}
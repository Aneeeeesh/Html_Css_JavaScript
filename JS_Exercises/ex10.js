/*  Exercise-10 : Write a Javascript program to add and update the
    array data in the object.
*/ 
const addData = (obj, key, value) => {
    if (obj.hasOwnProperty(key) && Array.isArray(obj[key]))
        obj[key].push(value);
    else obj[key] = value;
}

const updateData = (obj, key, value, index) => {
    if(obj.hasOwnProperty(key) && Array.isArray(obj[key]) && index>=0 &&index < obj[key].length)
        obj[key][index] = value;
}

const exercise10 = () => {
    const data = {
        fruits: ["pear", "chikkoo", "kiwi"],
        vegetables: ["carrot", "cucumber", "broccoli"]
    }

    console.log(data);

    addData(data, "fruits", "apple");
    addData(data, "cereals", "oats");
    updateData(data, "vegetables", "Kale", 1);
    console.log(data);
}
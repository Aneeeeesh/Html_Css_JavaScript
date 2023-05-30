let url = "http://localhost:3000/users";
let jsonData, currentUser;

//Fetching data from db.json through server
fetch(url)
    .then(response => response.json())
    .then(data => {
        jsonData = data;
    })
    .catch(error => {
        console.error('Error:',error);
    });

//logging in using validation
const login = () => {
    const inputEmail = document.getElementById("loginEmail").value;
    const inputPass = document.getElementById("loginPass").value;

    if(!inputEmail || !inputPass) {
        alert("Must enter all fields!");
        return;
    }
    // alert("Logging in...");
    for(let user of jsonData){
        if(inputEmail !== user.Email || inputPass !== user.Password){
            document.getElementById("emailNotFound").style.display = "block";
        }
        else showSuccessLoginPage(user);
    }
}

//signing up
const signup = () => {
    const newName = document.getElementById("signupName").value;
    const newEmail = document.getElementById("signupEmail").value;
    const newDob = document.getElementById("signupDob").value;
    const newGender = document.getElementById("signupGender").value;
    const newMob = document.getElementById("signupMob").value;
    const newPass = document.getElementById("signupPass").value;

    if(!newName || !newEmail || !newDob || newGender==='Select' || !newMob || !newPass){
        alert("Must enter all fields!");
        return;
    }

    if(newMob.length != 10) {
        document.getElementById("mobInvalid").style.display = "block";
        return;
    }

    for(let user of jsonData){
        if(newEmail === user.Email){
            document.getElementById("emailExists").style.display = "block";
            return;
        }
    }

    const newUser = {
        Email: newEmail, 
        Password: newPass,
        Name: newName,
        DOB: newDob,
        Gender: newGender,
        Mobile: newMob,
    };

    fetch(url,{
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(newUser)
    })
    .then(response => response.json())
    .then(data => {
        console.log("New user added: " ,data);
        showSuccessSignupPage(newUser);
    })
    .catch(error => {
        console.error('Error:',error);
    });
}

//delete
const deleteUser = () => {
    // alert(currentUser.id);
    let userId = currentUser.id;
    if(!confirm("Are you sure?"))
        return;
    fetch(`${url}/${userId}`, {
        method: 'DELETE'
    })
    .then(response => {
        if(response.ok){
            alert('User deleted successfully');
            window.location.replace("index.html");
        }
        else{
            console.log('Error:',response.statusText);
        }
    })
    .catch(error => {
        console.error('Error:',error);
    });
}

//update
const updatePage = () => {
    document.getElementById("successLoginPage").style.display = "none";
    document.getElementById("editProfilePage").style.display = "block";
    document.getElementById("bantr").innerHTML="Edit profile";

    document.getElementById("editName").value=currentUser.Name;
    document.getElementById("editEmail").value=currentUser.Email;
    document.getElementById("editDob").value=currentUser.DOB;
    document.getElementById("editGender").value=currentUser.Gender;
    document.getElementById("editMob").value=currentUser.Mobile;
} 

const update = () => {
    let oldPass = prompt("Enter old password: ");
    if(oldPass !== currentUser.Password){
        alert("Wrong password!");
        return;
    }
    let updatedUser = {
        Email: document.getElementById("editEmail").value, 
        Password: document.getElementById("editPass").value,
        Name: document.getElementById("editName").value,
        DOB: document.getElementById("editDob").value,
        Gender: document.getElementById("editGender").value,
        Mobile: document.getElementById("editMob").value,
    }
    let userId = currentUser.id;
    fetch(`${url}/${userId}`,{
        method: 'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(updatedUser)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Updated user: " ,data);
    })
    .catch(error => {
        console.error('Error:',error);
    });
    alert("Updated successfully!");
    document.getElementById("editProfilePage").style.display = "none";
    document.getElementById("loginPage").style.display = "block";
}

const showSuccessLoginPage = (user) => {
    currentUser = user;
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("successLoginPage").style.display = "block";
    document.getElementById("bantr").innerHTML=`Welcome back, ${user.Name}!!`;
}

const showSuccessSignupPage = (user) => {
    currentUser = user;
    document.getElementById("signupPage").style.display = "none";
    document.getElementById("successSignupPage").style.display = "block";
    document.getElementById("bantr").innerHTML=`Welcome to Bantr, ${user.Name}!!`;
}
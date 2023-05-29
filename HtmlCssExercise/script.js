let url = "http://localhost:3000/users";

//Fetching data from db.json through server
const verify = (action) => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            switch(action){
                case 'login': login(data);
                                break;
                case 'signup': signup(data)
                                break;
            }
        })
        .catch(error => {
            console.error('Error:',error);
        });
}

//logging in using validation
const login = (jsonData) => {
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
        else showSuccessLoginPage(user.Name);
    }
}

//signing up
const signup = (jsonData) => {
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
        showSuccessSignupPage();
    })
    .catch(error => {
        console.error('Error:',error);
    });
}

const showSuccessLoginPage = (name) => {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("successLoginPage").style.display = "block";
    document.getElementById("bantr").innerHTML=`Welcome back, ${name}!!`;
}

const showSuccessSignupPage = () => {
    document.getElementById("signupPage").style.display = "none";
    document.getElementById("successSignupPage").style.display = "block";
}
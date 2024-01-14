const fullName = document.getElementById("name");
const emailId = document.getElementById("email");
const passwordId = document.getElementById("password");
const checkBoxId = document.getElementById("check1");
const submitbtn = document.getElementById("submitbtn");
const userListView = document.getElementById("userListView");
const formError = document.getElementById("form-error");
const storageKey = "users";



// const getLocalStorageData =()=>{
//     let localData = [];
//     let localStringData = localStorage.getItem("key");
//     if(localStringData){
//         localData = JSON.parse(localData);
//     }
//     return localData;
// }

// const setLocalStorageData = (key,value)=>{
//     localStorage.setItem(key,JSON.stringify(value))
// }

let allUsers = [{
    fullName: "farida",
    email: "f@gmail.com",
    password: "12345"
}];

const isExistUser = (email)=>{
    //if email is exist then email is true otherwise false
    let isEmail = false;
    
    allUsers.map((item,index)=>{
        if(item.email == email){
            isEmail = true;
            
             //console.log("already exist of this email")
        }
        // allUsers.push(item)
    })

    return isEmail;
}

const isEmailPassword = (email,password)=>{
    //if email is exist then email is true otherwise false
    let isExist = false;
    
    allUsers.map((item,index)=>{
        if(item.email == email && item.password === password){
            isExist = true;          
             
        }
        // allUsers.push(item)
    })

    return isExist;
}

const singup=()=>{

    // alert(names)
    // if(fullName.value.trim().lenght=0){
    //     formError.innerHTML = "please fill up your name"
    // }

    let fullname = fullName.value;
    let email = emailId.value;
    let password = passwordId.value;
    
    //  console.log("fullName",fullname);
    //  console.log("emailId",email);
    //  console.log("passwordId",password);

    let user = {
        id: new Date().valueOf(),
        fullname,
        email,
        password        
    }
    isExistUser(email)
     let existmail = isExistUser(email)
    if(existmail){
        alert("already exist")
        window.location.href= "/login"
    }
    else if(email && password && fullName){
        allUsers.push(user);
        fullName.value = "";
        emailId.value = "";
        passwordId.value = ""; 
        window.location.href= "/login"

    }
    else{
        alert("Email/password/name is required field")
    }
    
    console.log("true false",existmail);
    console.log(allUsers);

    // setLocalStorageData(storageKey,allUsers);


}





// LOGIN--------------------------------

const login=()=>{
    alert("login page")
    console.log("allUsers",allUsers)

    let email = emailId.value;
    let password = passwordId.value;

    let isSuccess = isEmailPassword(email,password)

    let mailCheck = isExistUser(email)
    if(!mailCheck){
        alert("user not found")
        window.location.href="/"
        return;
    }

    if(isSuccess){
        alert("successfull login")
        window.location.href="/home"
    }
    else{
        alert("login failed")
    }    
}



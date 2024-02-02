const fullName = document.getElementById("name");
const emailId = document.getElementById("email");
const passwordId = document.getElementById("password");
const checkBoxId = document.getElementById("check1");
const submitbtn = document.getElementById("submitbtn");
const userListView = document.getElementById("userListView");
const formError = document.getElementById("form-error");
const storageKey = "users";
const storageloginkey = "isLogin"



const pageRedirect = (path) =>{
    if(config.isGitHub){
        window.location.href= `/${config.githubRepoPath}/${path}`
    }
    else{
        window.location.href= `/${path}`
    }
}

console.log(config)

const getLocalStorageData =(key)=>{
    let localData = [];
    let localStringData = localStorage.getItem(key);
    if(localStringData){
        localData = JSON.parse(localStringData);
    }
    return localData;
}

const setLocalStorageData = (key,value)=>{
    localStorage.setItem(key,JSON.stringify(value))
}

const isExistUser = (email)=>{
    //if email is exist then email is true otherwise false
    let isEmail = false;
    let allUserList = getLocalStorageData(storageKey)
    
    allUserList.map((item,index)=>{
        if(item.email == email){
            isEmail = true;
        }
        
    })

    return isEmail;
}

const isEmailPassword = (email,password)=>{
    //if email is exist then email is true otherwise false
    let isExist = false;
    let allUserList = getLocalStorageData(storageKey)
    
    allUserList.map((item,index)=>{
        if(item.email == email && item.password === password){
            isExist = true;          
             
        }
        
    })

    return isExist;
}

const singup=()=>{

    

    let fullname = fullName.value;
    let email = emailId.value;
    let password = passwordId.value;
    
    

    let user = {
        id: new Date().valueOf(),
        fullname,
        email,
        password        
    }
    // allUserList = [{ id: 123456,fullname: "farida",email: f@gmail.com,password: "12345"},{},{}]
    let allUserList = getLocalStorageData(storageKey)
    
    isExistUser(email)
    let existmail = isExistUser(email)
    if(existmail){
        alert("already exist")
        // window.location.href= "/login"
        pageRedirect("login");
    }
    else if(email && password && fullName){
        allUserList.push(user);
        setLocalStorageData(storageKey,allUserList);
        fullName.value = "";
        emailId.value = "";
        passwordId.value = ""; 
        // window.location.href= "/login"
        pageRedirect("login");
    }
    else{
        alert("Email/password/name is required field")
    } 
        
}





// LOGIN--------------------------------

const login=()=>{   
    
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
        setLocalStorageData(storageloginkey,[{login: true}])
        window.location.href="/home"
    }
    else{
        alert("login failed")
    }    
}


const logOut = ()=>{
    alert("log Out")
    // checkLogedIn()
    setLocalStorageData(storageloginkey,[{login: false}])
    window.location.href = "/login";
}

const checkLogedIn= ()=>{
    let allUserList = getLocalStorageData(storageloginkey)
    if(allUserList.length > 0){
        if(allUserList[0].login == true){
            alert("user login,true ");
            // window.location.href = "/home";
        }
        else{
            alert("user logout,false");
            window.location.href = "/login";
        }
    }
    else{
        alert("user login not found")
        window.location.href = "/"
        
    }
}





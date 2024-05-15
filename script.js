function SignupBtn() {
    document.getElementById("layer3").style.display = 'flex';
    document.getElementById("layer2").style.display = "none";
}
function SigninBtn() {
    document.getElementById("layer2").style.display = 'flex';
    document.getElementById("layer3").style.display = "none";
}


var signupdata = {}
function signupall() {
    signupdata = {
        "FirstName": document.getElementById("signupFirstName").value,
        "LastName": document.getElementById("signuplastName").value,
        "Email": document.getElementById("signupEmail").value,
        "PhoneNumber": document.getElementById("signupnumber").value,
        "password": document.getElementById("signuppassword").value,
    }
    
    if((signupdata.FirstName==="" )|| (signupdata.LastName === "" )||( signupdata.Email==="") ||( signupdata.PhoneNumber ==="" )||(signupdata.password==="")){
        alert("please enter all details")
    }else{
        localStorage.setItem("SignupForm",JSON.stringify(signupdata))
        alert("regestered successfully")
    }
    document.getElementById("signupFirstName").value ="";
    document.getElementById("signuplastName").value="";
    document.getElementById("signupEmail").value="";
    document.getElementById("signupnumber").value="";
    document.getElementById("signuppassword").value="";
}


var logindata = {}
function loginbtn() {

    logindata = {
        "emailOrNumber": document.getElementById("userName").value,
        "userpassword": document.getElementById("password").value
    }
    if(( logindata.emailOrNumber==="") ||(logindata.userpassword==="")){
        alert("please enter all details")
    }
//     }else{
//         var LogDataRemembered=JSON.parse(localStorage.getItem("rememberLogin"));
//         document.getElementById("userName").value=LogDataRemembered.emailOrNumber;
//         document.getElementById("password").value=LogDataRemembered.userpassword;
// }
    var storedData = JSON.parse(localStorage.getItem("SignupForm"));
    if((logindata.emailOrNumber===storedData.Email) ||(logindata.emailOrNumber==storedData.PhoneNumber) && (logindata.userpassword===storedData.password)){
        document.getElementById("msg").innerHTML="<strong> you have successfully logined </strong>";
        document.getElementById("msg").style.backgroundColor= "green"
        document.getElementById("msg").style.color="white";
        document.getElementById("msg").style.height="10%";
        window.location.href="https://yashwanth-social-css-buttons.netlify.app/"
    }
    else{
        document.getElementById("msg").innerHTML="<strong> please enter a vaild userid or password </strong>";
        document.getElementById("msg").style.backgroundColor= "red"
        document.getElementById("msg").style.color="white";
        document.getElementById("msg").style.height="10%";
        
    document.getElementById("userName").value="";
    document.getElementById("password").value="";
    }
}
function changedCheckBoxtoremember() {
    var rememberData = {
        "emailOrNumber": document.getElementById("userName").value,
        "userpassword": document.getElementById("password").value
    }
    localStorage.setItem("rememberLogin", JSON.stringify(rememberData))
}
// Function to populate login inputs with remembered data from local storage
function populateRememberedData() {
    var rememberedData = JSON.parse(localStorage.getItem("rememberLogin"));
    if (rememberedData) {
        document.getElementById("userName").value = rememberedData.emailOrNumber;
        document.getElementById("password").value = rememberedData.userpassword;
    }
}

// Call the function when the page loads
window.onload = populateRememberedData;

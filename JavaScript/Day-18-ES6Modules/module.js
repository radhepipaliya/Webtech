let userDetails ={
    name:"John",
    age:"21",
};

function loginUser() {
    console.log("Login Function");
}

function logoutUser(){
    console.log("Logout Function");
}
// export everything at once
export {userDetails,loginUser,logoutUser};
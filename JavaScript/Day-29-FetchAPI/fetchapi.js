console.log("Fetch API in JS");

//! What is fetch() API?
//* A fetch is a function in JS.
//* Also it is considered as API in between browser (client) and backend(server) to communicate or transfer that data.
//* A fetch is promise based API.


//? Return Type: promise -> pending
//? syntax: fetch("url")

//! By using asyncand await:
//? step-1: create one async funciton which is responsible to fetch the data.

let fetchUserData = async () => {
    try{
        //? Step-2:Use the fetch() and pass the url
        let response = await fetch ("http://localhost:3000/user");
        console.log(response);
        //? step-3: Convert the JSON data into the JS object.
        let data = await response.json();
        console.log(data);
        document.getElementById("container").innerHTML = data.map((user,index) => {
            return ` 
            <div class="user-card">
            <h2  class="user-id"> ID: ${user.id}<h2>
            <h2  class="user-name">Name: ${user.name}<h2>
            <p class="user-role"> Role: ${user.role}<p>
            </div>
            `;
        })
        .join("");
    } catch(error){
        console.error("Could not fetch users:",error);
        document.getElementById("container").innerHTML='<p> Error loading users. IS the Server runnning?</p>'
    }
}


fetchUserData();
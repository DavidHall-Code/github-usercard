/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
import axios from 'axios'

axios.get('https://api.github.com/users/DavidHall-Code')
    .then((response) => {
        console.log(response.data);
        const aNewCard = gitCard(response.data)
        entryPoint.appendChild(aNewCard)
        })
    .catch((err) => {
        console.log(err);
      })

    let entryPoint = document.querySelector('.cards')

// Step Three: talk about HTTP, requesting data from a server, and axios
// Write the code to request data from this address (or whatever breed you want :) ) 
// console.log the response and inspect it in the console, note that the response data is going to be different for every server.
// move onto step 4 with the response data in mind. 

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 
   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/


const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

followersArray.forEach(i => {
  const newLocal = 'https://api.github.com/users/';
    axios.get(newLocal + [i])
    .then((response) => {
      const aNewCard = gitCard(response.data)
      entryPoint.appendChild(aNewCard)
      })
  .catch((err) => {
      console.log(err);
    })
  })


function gitCard(data){

  //Define Element
  //Card
  let newCard = document.createElement('div');

  //Image
  let newImage = document.createElement('img');
  //Card Info
  let newInfo = document.createElement('div');
  //Name {users name}
  let newName = document.createElement('h3');
  //UserName {users user name}
  let newUserName = document.createElement('p');
  //Location {users location}
  let newLocation = document.createElement('p');
  //Profile
  let newProfile = document.createElement('p');
  //Followers
  let newFollowers = document.createElement('p');
  //Following
  let newFollowing = document.createElement('p');

  //Bio {users bio}
  let newBio = document.createElement('p');
  let newA = document.createElement('a');

  //Set Structure of Elements (appendChild)
  newCard.appendChild(newImage);
  newCard.appendChild(newInfo);
  newInfo.appendChild(newName);
  newInfo.appendChild(newUserName);
  newInfo.appendChild(newLocation);

  newInfo.appendChild(newProfile);
  newProfile.textContent =  `Profile: ${data.html_url}`;
  newProfile.appendChild(newA);

  newInfo.appendChild(newFollowers);
  newInfo.appendChild(newFollowing);
  newInfo.appendChild(newBio);

  //Set Class
  //Card
  newCard.classList.add('card');
  //Card Info
  newInfo.classList.add('card-info');
  //Name
  newName.classList.add('name');
  //UserName
  newUserName.classList.add('username');

  //Set Content
  newImage.setAttribute('src', data.avatar_url);
  // newInfo.textContent =  ;
  newName.textContent = `${data.name}`;
  newUserName.textContent = data.login;
  newLocation.textContent = data.location;
  
  newFollowers.textContent = `Followers: ${data.followers}`;
  newFollowing.textContent = `Following: ${data.following}`;
  newBio.textContent = `Bio: ${data.bio}`;

  return newCard

}

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:
*<div class="card">
  *<img src={image url of user} />
  *<div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
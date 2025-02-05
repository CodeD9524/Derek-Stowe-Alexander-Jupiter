const today = new Date();
const thisYear = today.getFullYear();
const footer = document.createElement("footer");
document.body.appendChild(footer);
const copyright = document.createElement("p");
copyright.innerHTML = 'Derek ©' + thisYear;
footer.appendChild(copyright);
const skills = ["JavaScript", "HTML", "CSS", "Word", " Photoshop"]; 
const skillsSection = document.getElementById("skills"); 
const skillsList = skillsSection.querySelector("ul"); 
for (let i = 0; i < skills.length; i++) {
    const skillItem = document.createElement("li");
    skillItem.innerText = skills[i]; 
    skillsList.appendChild(skillItem);
}
const messageForm = document.getElementsByName("leave_message")[0];
messageForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const usersName = event.target.usersName.value; 
    const usersEmail = event.target.usersEmail.value; 
    const usersMessage = event.target.usersMessage.value; 
    console.log("User's Name:", usersName);
    console.log("User's Email:", usersEmail);
    console.log("User's Message:", usersMessage);
});
const messageSection = document.getElementById("messages");
const messageList = messageSection.querySelector("ul");
const newMessage = document.createElement("li");
newMessage.innerHTML = `
    <a href="mailto:${usersEmail}">${usersName}</a>
    <span>${usersMessage}</span>
`;
const removeButton = document.createElement("button");
removeButton.innerText = "Remove";
removeButton.type = "button";
removeButton.addEventListener("click", function() {
    const entry = removeButton.parentNode;
    entry.remove();
});
newMessage.appendChild(removeButton);
messageList.appendChild(newMessage); 
const url = `https://api.github.com/users/amir95/repos`;
fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json(); 
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
    fetch('https://api.github.com/users/amir95/repos')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    const repositories = data;
    console.log(repositories);
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });
  fetch(url) 
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); 
  })
  .then(data => {
    console.log("TESTING",data.id)
    if (data.length > 0) {
      console.log('Projects:', data.id);
    } else {
      throw new Error('Projects section is empty.');
    }
  })
  .catch(error => {
    console.error('Fetch error:', error.message);
    alert(`Error: ${error.message}`);
  });
var projectSection = document.getElementById("projects");
var projectList = projectSection.querySelector("ul");
var repositories = [
    { name: "Repository 1" },
    { name: "Repository 2" },
    { name: "Repository 3" }
];
for (var i = 0; i < repositories.length; i++) {
    var project = document.createElement("li");
    project.innerText = repositories[i].name;
    projectList.appendChild(project);
}

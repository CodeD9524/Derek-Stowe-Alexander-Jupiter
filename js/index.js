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
const projectSection = document.getElementById("projects");
const projectList = projectSection.querySelector("ul");
  fetch(url) 
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); 
  })
  .then(data => {
    data.forEach(repo => {
        const project = document.createElement("li");
        project.innerText = repo.name;
        projectList.appendChild(project);
    });

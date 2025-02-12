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

const messageForm = document.querySelector('form[name="leave_message"]'); 
messageForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = event.target.usersName.value;
  const email = event.target.usersEmail.value;
  const messageContent = event.target.usersMessage.value;

  console.log(name, email, messageContent);
});
const messageSection = document.getElementById('messages');
const messageList = messageSection.querySelector('ul');
const newMessage = document.createElement('li');
newMessage.innerHTML = `
    <span>${messageContent}</span>
`;
const removeButton = document.createElement('button');
removeButton.innerText = 'remove';
removeButton.setAttribute('type', 'button');
removeButton.addEventListener('click', function() {
  const entry = removeButton.parentNode; 
  entry.remove();
});
newMessage.appendChild(removeButton);
messageList.appendChild(newMessage);
document.querySelector('form[name="contact_form"]').addEventListener('submit', function(event) {
  event.preventDefault();

  const userName = event.target.userName.value; 
  const userEmail = 'amir.stowe95@gmail.com';
  const userMessage = event.target.userMessage.value; 
  const mailtoLink = `mailto:${userEmail}?subject=Message%20from%20${userName}&body=${encodeURIComponent(userMessage)}`;

  const emailButton = document.createElement('a')

  emailButton.href = mailtoLink;
  emailButton.innerText = 'Send Email';
  document.body.appendChild(emailButton); 
});
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
    })
  });
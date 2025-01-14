const today = new Date();
const thisYear = today.getFullYear();
const footer = document.createElement("footer");
document.body.appendChild(footer);
const copyright = document.createElement("p");
copyright.innerHTML = 'Derek ©' + thisYear;
footer.appendChild(copyright);
const skills =["HTML", "CSS", "Word", "PowerPoint", "Spreadsheet"];
const skillsSection = document.getElementById("skillsSection");
const skillsList = skillsSection.querySelector("ul");
for (let i = 0; i < skills.length; i++) {
const skill = document.createElement("li");
skill.innerText = skills[i];
skillsList.appendChild(skill);
}
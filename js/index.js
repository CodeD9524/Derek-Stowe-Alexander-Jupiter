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
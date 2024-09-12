const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;
const generateButton = document.getElementById('generateResume') as HTMLButtonElement;
const resumeDisplay = document.getElementById('resumeDisplay') as HTMLElement;

generateButton.addEventListener('click', () => {

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;


    resumeDisplay.innerHTML = `
        <h2>${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
        <h3>Work Experience</h3>
        <p>${experience}</p>
    `;
});

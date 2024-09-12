var resumeForm = document.getElementById('resumeForm');
var generateButton = document.getElementById('generateResume');
var resumeDisplay = document.getElementById('resumeDisplay');
generateButton.addEventListener('click', function () {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    resumeDisplay.innerHTML = "\n        <h2>".concat(name, "</h2>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n        <h3>Work Experience</h3>\n        <p>").concat(experience, "</p>\n    ");
});

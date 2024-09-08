document.addEventListener("DOMContentLoaded", function () {
    var formElement = document.getElementById("resume");
    if (formElement) {
        formElement.addEventListener("submit", function (event) {
            event.preventDefault();
            var nameElement = document.getElementById("name");
            var emailElement = document.getElementById("email");
            var phoneElement = document.getElementById("phone");
            var educationElement = document.getElementById("education");
            var experienceElement = document.getElementById("experience");
            var skillsElement = document.getElementById("skills");
            var resumeOutputElement = document.getElementById("resumeOutput");
            //** */
            var usernameElement = document.getElementById("username");
            if (nameElement
                && emailElement
                && phoneElement
                && educationElement
                && experienceElement
                && skillsElement &&
                resumeOutputElement &&
                usernameElement) {
                var name_1 = nameElement.value;
                var email = emailElement.value;
                var phone = phoneElement.value;
                var education = educationElement.value;
                var experience = experienceElement.value;
                var skills = skillsElement.value;
                var username = usernameElement.value;
                var uniquePath = "resumes".concat(username.replace(/\s*/g, '_'), "_cv.html");
                var resumeOutput = "\n            <h2>Resume</h2>\n            <div>----------------------</div>\n            <p><strong>Name:</strong> <span id=\"editable-name class=\"editable\" >".concat(name_1, " </span></p>\n            <p><strong>Email:</strong> <span id=\"editable-edit class=\"editable\" > ").concat(email, " </span></p>\n            <p><strong>Phone:</strong><span id=\"editable-phone class=\"editable\" > ").concat(phone, "</span></p>\n            <div>----------------------</div>\n            <h3>Education</h3>\n            <p id=\"editable-education\" class=\"editable\">").concat(education, "</p>\n            <div>----------------------</div>\n            <h3>Experience</h3>\n             <p id=\"editable-experience\" class=\"editable\">").concat(experience, "</p>\n            <div>----------------------</div>\n            <h3>Skills</h3>\n            <p id=\"editable-skills\" class=\"editable\">").concat(skills, "</p>\n            <div>----------------------</div>\n          ");
                //** */
                var downloadLink = document.createElement('a');
                downloadLink.href = "data:text/html;charset=UTF-8," + encodeURIComponent(resumeOutput);
                downloadLink.download = uniquePath;
                downloadLink.textContent = 'Download your 2024 Resume';
                resumeOutputElement.innerHTML = resumeOutput;
                //** */    
                resumeOutputElement.appendChild(downloadLink);
                makeEditable();
            }
        });
    }
    else {
        console.error("Form element not found.");
    }
});
function makeEditable() {
    var editableElement = document.querySelectorAll(".editable");
    editableElement.forEach(function (element) {
        element.addEventListener("click", function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            //replace 
            if (currentElement.tagName === "p" || currentElement.tagName === "SPAN") {
                var input_1 = document.createElement('input');
                input_1.type = "text";
                input_1.value = currentValue;
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = "inline";
                    input_1.remove();
                });
                currentElement.style.display = "none";
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}

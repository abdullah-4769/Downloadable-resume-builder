interface HTMLInputElementWithValue extends HTMLInputElement {
    value: string;
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const formElement = document.getElementById("resume") as HTMLFormElement | null;
    if (formElement) {
      formElement.addEventListener("submit", (event: SubmitEvent) => {
        event.preventDefault();
        const nameElement = document.getElementById("name") as HTMLInputElementWithValue | null;
        const emailElement = document.getElementById("email") as HTMLInputElementWithValue | null;
        const phoneElement = document.getElementById("phone") as HTMLInputElementWithValue | null;
        const educationElement = document.getElementById("education") as HTMLInputElementWithValue | null;
        const experienceElement = document.getElementById("experience") as HTMLInputElementWithValue | null;
        const skillsElement = document.getElementById("skills") as HTMLInputElementWithValue | null;
        const resumeOutputElement = document.getElementById("resumeOutput") as HTMLElement | null;
  

        //** */
     const usernameElement=document.getElementById(
        "username"
     )as HTMLInputElement
        
        if (nameElement 
             && emailElement
              && phoneElement
               && educationElement
                && experienceElement 
                && skillsElement && 
                resumeOutputElement&&
            usernameElement
            
            
            ) {
          const name = nameElement.value;
          const email = emailElement.value;
          const phone = phoneElement.value;

          const education = educationElement.value;
          const experience = experienceElement.value;
          const skills = skillsElement.value;

          const username= usernameElement.value;
          const uniquePath = `resumes${username.replace(/\s*/g, '_')}_cv.html`
         

  
          const resumeOutput = `
            <h2>Resume</h2>
            <div>----------------------</div>
            <p><strong>Name:</strong> <span id="editable-name class="editable" >${name} </span></p>
            <p><strong>Email:</strong> <span id="editable-edit class="editable" > ${email} </span></p>
            <p><strong>Phone:</strong><span id="editable-phone class="editable" > ${phone}</span></p>
            <div>----------------------</div>
            <h3>Education</h3>
            <p id="editable-education" class="editable">${education}</p>
            <div>----------------------</div>
            <h3>Experience</h3>
             <p id="editable-experience" class="editable">${experience}</p>
            <div>----------------------</div>
            <h3>Skills</h3>
            <p id="editable-skills" class="editable">${skills}</p>
            <div>----------------------</div>
          `;

  //** */
  const downloadLink= document.createElement('a')
  downloadLink.href="data:text/html;charset=UTF-8," + encodeURIComponent(resumeOutput)
 downloadLink.download = uniquePath;
 downloadLink.textContent = 'Download your 2024 Resume'  
          resumeOutputElement.innerHTML = resumeOutput;


      //** */    
      resumeOutputElement.appendChild(downloadLink)
          makeEditable()
        } 
      });
    } else {
      console.error("Form element not found.");
    }
  });

  function makeEditable(){
    const editableElement =document.querySelectorAll(".editable");
    editableElement.forEach(element =>{
        element.addEventListener("click", function (){
            const currentElement = element as HTMLElement;
            const currentValue= currentElement.textContent ||"";


            //replace 
            if(currentElement.tagName === "p" || currentElement.tagName ==="SPAN"){
                const input= document.createElement('input')
                input.type="text"
                input.value = currentValue
                input.classList.add('editing-input')

                input.addEventListener('blur', function(){
                    currentElement.textContent = input.value;
                    currentElement.style.display = "inline"

                    input.remove()
                })
                currentElement.style.display="none"
                currentElement.parentNode?.insertBefore(input,currentElement)
                input.focus()
            }

        })
    })
  }
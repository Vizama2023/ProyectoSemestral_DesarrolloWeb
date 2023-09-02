document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        const sectionId = link.getAttribute("href").substring(1);
        showSection(sectionId);
      });
    });
  
    function showSection(sectionId) {
      const sections = document.querySelectorAll("main section");
      sections.forEach(section => {
        if (section.id === sectionId) {
          section.style.display = "block";
        } else {
          section.style.display = "none";
        }
      });
    }
  

  
    const contactForm = document.querySelector("#contact-form");
    contactForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const formData = new FormData(contactForm);
      let formDataString = "Datos ingresados:\n";
      for (const pair of formData.entries()) {
        formDataString += `${pair[0]}: ${pair[1]}\n`;
      }
      alert(formDataString);
    });
  });
  
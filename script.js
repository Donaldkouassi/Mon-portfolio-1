
document.addEventListener('DOMContentLoaded', function() {
    
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(event) {
        
        const prenom = document.getElementById('prenom').value.trim();
        const nom = document.getElementById('nom').value.trim();
        const message = document.getElementById('message').value.trim();

        if (prenom === '' || nom === '' || message === '') {
            
            event.preventDefault(); 
            
            alert('Veuillez remplir tous les champs obligatoires (prénom, nom et message).');
        } else {
            event.preventDefault(); 
            alert('Message envoyé avec succès ! (Simulation)');
            contactForm.reset();
        }
    });

});
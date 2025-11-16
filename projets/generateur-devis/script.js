document.addEventListener('DOMContentLoaded', function() {

    const allServices = document.querySelectorAll('input[name="service"]');
    const totalDisplay = document.getElementById('total-devis');
    
    const contactButton = document.getElementById('btn-contacter');

    function mettreAJourDevis() {
        
        let total = 0;
        let servicesSelectionnes = [];

        allServices.forEach(function(service) {
            
            if (service.checked) {
                total = total + parseFloat(service.value);
                
                let labelText = document.querySelector('label[for="' + service.id + '"]').innerText;
                servicesSelectionnes.push("- " + labelText);
            }
        });

        totalDisplay.innerText = total.toFixed(2);
        
        const emailCible = "kouassy01@gmail.com"; 
        
        const sujet = "Nouvelle demande de devis";
        
        let corpsEmail = "Bonjour,\n\n";
        corpsEmail += "Je suis intéressé(e) par les services suivants :\n";
        corpsEmail += servicesSelectionnes.join("\n");
        corpsEmail += "\n\n";
        corpsEmail += "Total estimé : " + total.toFixed(2) + " €\n\n";
        corpsEmail += "Merci de me recontacter pour finaliser la commande.";

        contactButton.href = `mailto:${emailCible}?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(corpsEmail)}`;
        
        if (total === 0) {
            contactButton.style.opacity = '0.5';
            contactButton.style.pointerEvents = 'none';
        } else {
            contactButton.style.opacity = '1';
            contactButton.style.pointerEvents = 'auto';
        }
    }

    allServices.forEach(function(service) {
        service.addEventListener('change', mettreAJourDevis);
    });

    mettreAJourDevis();

});
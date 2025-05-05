function afficher_correction_variables_form_type_1(){
    var resultat=document.getElementById("Bonne_reponse");
    if (resultat.checked!=''){
        bouton_correction.style.backgroundColor="green";
    }
    else{
        bouton_correction.style.backgroundColor="red";
    }
    
}

function afficher_correction_variables_form_type_2(){
    var resultat=document.getElementById("Bonne_reponse2");
    if (resultat.checked!=''){
        bouton_correction_2.style.backgroundColor="green";
    }
    else{
        bouton_correction_2.style.backgroundColor="red";
    }

}

function afficher_correction_variables_form_type_3(){
    var resultat=document.getElementById("Bonne_reponse3");
    if (resultat.checked!=''){
        bouton_correction_3.style.backgroundColor="green";
    }
    else{
        bouton_correction_3.style.backgroundColor="red";
    }

}
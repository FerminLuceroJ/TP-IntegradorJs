const valorTicket = 200

function calcularTotal(){

    let cant=document.getElementById("cant").value

    let categoria=document.getElementById("categoria").value

    let desc
    if(categoria==1){// Estudiantes
        desc=80
    }
    else if(categoria==2){ // Trainee   
        desc=50
    }
    else{ // Junior
        desc=15
    }

let total=cant*valorTicket

total-=total*desc/100

document.getElementById("total").innerHTML=total

}
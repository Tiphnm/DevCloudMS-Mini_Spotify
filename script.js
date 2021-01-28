// Ajouter un message d'accueil 

document.querySelector("#Enter").addEventListener("click", function (){
    let UserName = document.querySelector("#name").value; 
    console.log(UserName);
    document.getElementById("Username").innerText = "Welcome to your playlist " + UserName + " !";
    document.getElementById("user_info").style.display = "none"; // utiliser style pour avoir accès à mon CSS 
})
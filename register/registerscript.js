document.getElementById("button").onclick = () => {

    registeredName = document.getElementById("uid").value;
    registeredPass = document.getElementById("pass").value;
    registeredYear = document.getElementById("yrlevel").value;
    registeredFood = document.getElementById("color").value;
    favoriteColor = document.getElementById("food").value
    giveAlert();
};

function giveAlert() {
    window.location.href = "../login/login.php";
    alert('Name: ' + registeredName + '\nYear Level: ' + registeredYear + '\nFavorite Color: ' + favoriteColor + '\nFavorite Food: ' + registeredFood)
}




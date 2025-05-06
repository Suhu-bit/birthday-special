document.getElementById("yesButton").addEventListener("click", function() {
    document.getElementById("response").innerHTML = "Yay, you said YES! 😍💖";
    document.getElementById("cutePhotos").style.display = "block";
});

document.getElementById("noButton").addEventListener("click", function() {
    let response = document.getElementById("response");
    response.innerHTML = "Aww, Baby, you can't say NO! 😭💔 You’re my forever. You’re my Baby. I love you so much!";
    setTimeout(function() {
        response.innerHTML += "<br>Seriously, though... YOU'RE MY BABYYYYYYY 😘";
    }, 2000);
});

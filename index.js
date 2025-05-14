
let userName;

let start = () => {
    userName = document.getElementById("nameinput").value;


    if (userName.length > 0) {
        localStorage.setItem("userName", userName);
        window.location.href = "quiz01.html";

    }

    else {
        alert("Please enter your name");
    }

}



window.onload = function () {
    const userName = localStorage.getItem("userName");
    const usernameElement = document.getElementById("username1");
    if (usernameElement) {
        usernameElement.innerText = userName || "Guest";
    }

    let timeLeft = 60;

    const countdownElement = document.getElementById("coundown");

    const timer = setInterval(() => {
        if (timeLeft >= 0) {
            countdownElement.innerText = timeLeft;
            timeLeft--;
        } else {
            clearInterval(timer);
            countdownElement.innerText = "0";
             window.location.href = "quiz02.html";
            alert("Time's up! Moving to the next quiz.");

        }
    }, 1000);
}















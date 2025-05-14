
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



let quiz01 = () => {

    let score ;
    const answer1 = document.getElementById("option1").checked;
    const answer2 = document.getElementById("option2").checked;
    const answer3 = document.getElementById("option3").checked;
    const answer4 = document.getElementById("option4").checked;
   
    if (answer1) {
        alert("answer Submitted!");
        localStorage.setItem("score", 1);
        window.location.href = "quiz02.html";
    }
    else if (answer2) {
        alert("answer Submitted!");
        localStorage.setItem("score", 0);
        window.location.href = "quiz02.html";
    }
    else if (answer3) {
        alert("answer Submitted!");
        localStorage.setItem("score", 0);
        window.location.href = "quiz02.html";
    }
    else if (answer4) {
        alert("answer Submitted!");
        localStorage.setItem("score", 0);
        window.location.href = "quiz02.html";
    }
    else {
        alert("Please select an answer");
    }


};















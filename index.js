
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

    let score;
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


let quiz02 = () => {

    let score = localStorage.getItem("score");
    const answer1 = document.getElementById("option1").checked;
    const answer2 = document.getElementById("option2").checked;
    const answer3 = document.getElementById("option3").checked;
    const answer4 = document.getElementById("option4").checked;

    // console.log(score);

    if (answer1) {
        alert("answer Submitted!");
        localStorage.setItem("score", score);
        window.location.href = "quiz03.html";
    }
    else if (answer2) {
        alert("answer Submitted!");
        score++;
        localStorage.setItem("score", score);
        window.location.href = "quiz03.html";
    }
    else if (answer3) {
        alert("answer Submitted!");
        localStorage.setItem("score", score);
        window.location.href = "quiz03.html";
    }
    else if (answer4) {
        alert("answer Submitted!");
        localStorage.setItem("score", score);
        window.location.href = "quiz03.html";
    }
    else {
        alert("Please select an answer");
    }




}







let quiz03 = () => {

    let score = localStorage.getItem("score");
    const answer1 = document.getElementById("option1").checked;
    const answer2 = document.getElementById("option2").checked;
    const answer3 = document.getElementById("option3").checked;
    const answer4 = document.getElementById("option4").checked;

    // console.log(score);

    if (answer1) {
        alert("answer Submitted!");
        localStorage.setItem("score", score);
        window.location.href = "quiz04.html";
    }
    else if (answer2) {
        alert("answer Submitted!");
        localStorage.setItem("score", score++);
        window.location.href = "quiz04.html";
    }
    else if (answer3) {
        alert("answer Submitted!");
        score++;
        localStorage.setItem("score", score);
        window.location.href = "quiz04.html";
    }
    else if (answer4) {
        alert("answer Submitted!");
        localStorage.setItem("score", score);
        window.location.href = "quiz04.html";
    }
    else {
        alert("Please select an answer");
    }




}




let quiz04 = () => {

    let score = localStorage.getItem("score");
    const answer1 = document.getElementById("option1").checked;
    const answer2 = document.getElementById("option2").checked;
    const answer3 = document.getElementById("option3").checked;
    const answer4 = document.getElementById("option4").checked;

    console.log(score);

    if (answer1) {
        alert("answer Submitted!");
        localStorage.setItem("score", score);
        window.location.href = "quiz05.html";
    }
    else if (answer2) {
        alert("answer Submitted!");
        localStorage.setItem("score", score++);
        window.location.href = "quiz05.html";
    }
    else if (answer3) {
        alert("answer Submitted!");
        localStorage.setItem("score", score);
        window.location.href = "quiz05.html";
    }
    else if (answer4) {
        alert("answer Submitted!");
        score++;
        localStorage.setItem("score", score);
        window.location.href = "quiz05.html";
    }
    else {
        alert("Please select an answer");
    }


}




let quiz05 = () => {

    let score = localStorage.getItem("score");
    const answer1 = document.getElementById("option1").checked;
    const answer2 = document.getElementById("option2").checked;
    const answer3 = document.getElementById("option3").checked;
    const answer4 = document.getElementById("option4").checked;

    console.log(score);

    if (answer1) {
        alert("answer Submitted!");
        score++;
        localStorage.setItem("score", score);
        window.location.href = "result.html";
    }
    else if (answer2) {
        alert("answer Submitted!");
        localStorage.setItem("score", score++);
        window.location.href = "result.html";
    }
    else if (answer3) {
        alert("answer Submitted!");
        localStorage.setItem("score", score);
        window.location.href = "result.html";
    }
    else if (answer4) {
        alert("answer Submitted!");
        localStorage.setItem("score", score);
        window.location.href = "result.html";
    }
    else {
        alert("Please select an answer");
    }


}





// let view = () => {
//     const score = localStorage.getItem("score");
//           const userName = localStorage.getItem("userName");
//           const resultElement = document.getElementById("scoreDisplay");

//           if (score && userName) {
//             const mark = score * (100 / 5);
//             resultElement.textContent = `${userName}, your score is ${mark}%`;
//           } else {
//             resultElement.textContent = "Score or username not found!";
//           }
    
// }






var likesone = document.querySelector("#likesnumone").innerText;
var likestwo = document.querySelector("#likesnumtwo").innerText;
var likesthree = document.querySelector("#likesnumthree").innerText;


function likeOne() {
    likesone++;
    document.querySelector("#likesnumone").innerText = likesone;
}

function likeTwo() {
    likestwo++;
    document.querySelector("#likesnumtwo").innerText = likestwo;
}

function likeThree() {
    likesthree++;
    document.querySelector("#likesnumthree").innerText = likesthree;
}
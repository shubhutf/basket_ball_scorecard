let p1 = document.getElementById("pt1")
console.log(p1)
let count1=0;


function p1_1(){
    count1 += 1;
    p1.textContent = count1;
}
function p1_2(){
    count1 += 2;
    p1.textContent = count1;
}
function p1_3(){
    count1 += 3;
    p1.textContent = count1;
}

let p2 = document.getElementById("pt2")
console.log(p2)
let count2=0;

function p2_1(){
    count2 += 1;
    p2.textContent = count2;
}
function p2_2(){
    count2 += 2;
    p2.textContent = count2;
}
function p2_3(){
    count2 += 3;
    p2.textContent = count2;
}

function re(){
    p1.textContent=0;
    p2.textContent=0;
    count1=0;
    count2=0;
}
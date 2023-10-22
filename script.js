let count = 0;
document.getElementById("inc").onclick = function(){
    count +=1;
    document.getElementById("result").innerHTML = count;
}
document.getElementById("reset").onclick = function(){
    count = 0;
    document.getElementById("result").innerHTML = 0;
}
document.getElementById("dec").onclick = function(){
    count -= 1;
    document.getElementById("result").innerHTML = count;
}
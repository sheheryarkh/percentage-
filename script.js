
function calculatepercentage() {
    


var sub1 = parseFloat(document.getElementById("sub1").value);
var sub2 =parseFloat(document.getElementById("sub2").value)
var sub3 =parseFloat(document.getElementById("sub3").value)

if (isNaN(sub1)|| isNaN(sub2)||isNaN(sub3)){
    alert("please enter your marks first.");
    return;

}
var totalmarks =  sub1 + sub2 + sub3 ;
var percentage = (totalmarks / 1500)* 100;

var resultElement = document.getElementById("result");
resultElement.innerHTML = "totalmarks :" + totalmarks.toFixed(2)+"<br>percentage:" + percentage.toFixed(2)+"%";
}
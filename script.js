function simpleInterest()
{
    var p = document.getElementById("principal").value;
    if(p == "" || p <= 0)
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }
    var r = document.getElementById("rate").value;
    var t = document.getElementById("years").value;
    var si = p * t * r/100;

    var dateNow = new Date();
    var yearNow = parseInt(dateNow.getFullYear()) + parseInt(t);
    
    var resultDisplay = document.getElementById("result");
    resultDisplay.innerHTML = "If you deposit " + "<span class='highlight'>" + p + "</span>."  + ", <br> at an interest rate of "+ "<span class='highlight'>" + r + "</span> %." + "<br> You will receive an amount of " + "<span class='highlight'>" + si + "</span>" + ", <br> in the year " + "<span class='highlight'>" + yearNow + "</span>";

function sliderValue()
{
    var slider = document.getElementById("rate");
    var output = document.getElementById("rateDisplay");
    output.innerHTML = slider.value + "%"; // Display the default slider value

    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function() 
    {
        output.innerHTML = this.value + "%";
    };
}

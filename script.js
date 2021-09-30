function simpleInterest()
{
    var p = document.getElementById("principal").value;
    if(principal == "" || principal <= 0)
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
    resultDisplay.innerHTML = "If you deposit " +  p  + ", <br> at an interest rate of " + r + "%." + "<br> You will receive an amount of " + si + ", <br> in the year " + yearNow;
}

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

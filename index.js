let billamount = document.getElementById("billAmount");
let percentagetip = document.getElementById("percentageTip");
let tipamount = document.getElementById("tipAmount");
let totalamount = document.getElementById("totalAmount");
let errormessage =  document.getElementById("error-message");
let error = "please enter a valid input";
function CalculateButton(){
    let billamount1 = billamount.value;
    let percentageTip1 = percentagetip.value;

    if(billamount1===""){
        errormessage.textContent = error;
        errormessage.style.color = "red";
    }else if(percentageTip1===""){
        errormessage.textContent = error;
        errormessage.style.color = "red";
    }else{
        errormessage.textContent = "";
        let Calculatetip = parseInt(billamount1);
        let Calculatetip2 = parseInt(percentageTip1);

        let amount = (Calculatetip2/100) * Calculatetip;
        let totalAmount1 = amount + Calculatetip;
        tipamount.value = amount;
        totalamount.value = totalAmount1;
    }

}
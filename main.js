//https://prnt.sc/0QvbfIDrK5yf
//https://www.youtube.com/watch?v=BT4WzyT2g8k
const priceInput = document.querySelector(".priceValue");
const tipInput = document.querySelector(".tipValue");
const symbol = document.querySelector(".symbol");
const earn = document.querySelector(".earn");
const fiverrTakes = document.querySelector(".fiverr");
const buyerPaid = document.querySelector(".buyer-paid");

const tip = document.querySelector(".buyer-paid");

function calculator(){
    
    if ( priceInput.value > 0 || tipInput.value> 0 ) {
        let TotalPrice = priceInput.value * 1.00;
        let TotalTip = tipInput.value * 1.00;

        let TotalAmount = TotalPrice + TotalTip;
        calculatorCalculation(TotalAmount)

    }
}
function calculatorCalculation(money){
     
   
    symbol.style.display = 'block';

    let commissionPercentage = 0.20 
    let commission = 1 - commissionPercentage;
    let total = money * commission;

    earn.innerHTML = '$'+total.toFixed(2);
    fiverrTakes.innerHTML = '$'+(money * commissionPercentage).toFixed(2);

    buyerPaid.innerHTML = '$'+(total / commission).toFixed(2);

}
priceInput.addEventListener("keypress", (event) => {
    if(event.target.value < 1){
       // console.log('under 0')
        console.log(event.which)
        if (event.which === 48 || event.which === 96 ) {
            console.log('under1')
            return;
            
        }

    }
   
  });
  
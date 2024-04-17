//https://prnt.sc/0QvbfIDrK5yf
//https://www.youtube.com/watch?v=BT4WzyT2g8k
const priceInput = document.querySelector(".priceValue");
const tipInput = document.querySelector(".tipValue");
const symbol = document.querySelectorAll(".symbol");

const earn = document.querySelector(".earn");
const fiverrTakesFromSeller = document.querySelector(".seller_from_fiverr");

const buyerPaid = document.querySelector(".buyer-paid");
const fiverrTakesFromBuyer = document.querySelector(".buyer_from_fiverr");

const fiverRevenue = document.querySelector(".fiver_revenue");

const tip = document.querySelector(".buyer-paid");

function calculator(){
    
    if ( priceInput.value > 0 || tipInput.value> 0 ) {
        let inputPrice = priceInput.value * 1.00;
        let inputTip = tipInput.value * 1.00;

        var calculatorCalculationData = calculatorCalculation(inputPrice, inputTip);
        var fiverrTakesData = fiverrTakes(inputPrice, inputTip);
        var buyer_order_conditionData = buyer_order_condition(inputPrice, inputTip);

        var sellerEarning = calculatorCalculationData[0] + calculatorCalculationData[1];
        var FiverrSellerEarning = fiverrTakesData[0] + fiverrTakesData[1];
        var bueryPaidMoney = buyer_order_conditionData[0] + buyer_order_conditionData[2];
        var FiverrBuyerEarning = buyer_order_conditionData[1] + buyer_order_conditionData[3];
        var TotalFiverrRevenue = FiverrSellerEarning + FiverrBuyerEarning;
        
        sellerEarning = typeof sellerEarning === 'number' ? sellerEarning.toFixed(2) : sellerEarning;
        FiverrSellerEarning = typeof FiverrSellerEarning === 'number' ? FiverrSellerEarning.toFixed(2) : FiverrSellerEarning;
        bueryPaidMoney = typeof bueryPaidMoney === 'number' ? bueryPaidMoney.toFixed(2) : bueryPaidMoney;
        FiverrBuyerEarning = typeof FiverrBuyerEarning === 'number' ? FiverrBuyerEarning.toFixed(2) : FiverrBuyerEarning;
        TotalFiverrRevenue = typeof TotalFiverrRevenue === 'number' ? TotalFiverrRevenue.toFixed(2) : TotalFiverrRevenue;


        //calculation_render(earnings, sellerCommitionF, buyerPaid, buyerCommitionF, FtotalRevinue )
        calculation_render(sellerEarning, FiverrSellerEarning, bueryPaidMoney, FiverrBuyerEarning, TotalFiverrRevenue )


    }else{
        symbol[0].style.display = 'none';
        symbol[1].style.display = 'none';
        
        earn.innerHTML = '-'; 
            fiverrTakesFromSeller.innerHTML = '-'; 
            buyerPaid.innerHTML = '-'; 
            fiverrTakesFromBuyer.innerHTML = '-'; 
            fiverRevenue.innerHTML = '-';  
            event.currentTarget.blur();
    }
}
let commissionPercentage = 0.20; 
let sellerEarningCommition = 1 - commissionPercentage;

let serviceCharge = 0.055;
let additionalFee = 2.5;

function calculatorCalculation(money, tip){
    if (money) {
        symbol[0].style.display = 'block';
    }else{
        symbol[1].style.display = 'block';
    }
    

    //Your earnings
    var earnings = money * sellerEarningCommition;
    var earningsTip = tip * sellerEarningCommition;

    //earn.innerHTML = earnings;
    //earn.innerHTML = earningsTip;
    //calculation_render(earnings, sellerCommitionF, buyerPaid, buyerCommitionF, FtotalRevinue )

    return [earnings, earningsTip];
}
function fiverrTakes(money, tip){
 
    //Calculate earnings from seller fiverr 
    var fiverrEarningSeller = money * commissionPercentage;
    fiverrTakesFromSeller.innerHTML = fiverrEarningSeller;


    //Calculate earnings from seller tip fiverr 
    var fiverrEarningSellerTip = tip * commissionPercentage;
    fiverrTakesFromSeller.innerHTML = fiverrEarningSellerTip;

    // Return earnings as an object
    return [fiverrEarningSeller, fiverrEarningSellerTip];
}
function buyer_order_condition(money, tip){
    var buyer_order;
    var moneyFromBuyer;

    if (money > 0 && money < 75) {
        //rececived buyer paid 
        buyer_order = money + ( money * serviceCharge) + additionalFee;
        
        // fiverr buyer from fiverr       
        moneyFromBuyer =  money * serviceCharge + additionalFee;
    }else{
        //rececived buyer paid
        buyer_order = money + ( money * serviceCharge);

        // fiverr buyer from fiverr  
        moneyFromBuyer = money * serviceCharge
    }

    var buyer_orderTip;
    var moneyFromBuyerTip;

    if (tip > 0 && tip < 75) {
        //rececived buyer paid 
        buyer_orderTip = tip + ( tip * serviceCharge) + additionalFee;
        
        // fiverr buyer from fiverr       
        moneyFromBuyerTip =  tip * serviceCharge + additionalFee;
    }else{
        //rececived buyer paid
        buyer_orderTip = tip + ( tip * serviceCharge);

        // fiverr buyer from fiverr  
        moneyFromBuyerTip = tip * serviceCharge
    }

    // buyerPaid.innerHTML = buyer_order;
    // fiverrTakesFromBuyer.innerHTML = moneyFromBuyer;
   
   return [buyer_order, moneyFromBuyer, buyer_orderTip, moneyFromBuyerTip]
}

 
function calculation_render(earnings, sellerCommitionF, buyerPaids, buyerCommitionF, FtotalRevinue ){

    earn.innerHTML = earnings; 
    fiverrTakesFromSeller.innerHTML = sellerCommitionF; 
    buyerPaid.innerHTML = buyerPaids; 
    fiverrTakesFromBuyer.innerHTML = buyerCommitionF; 
    fiverRevenue.innerHTML = FtotalRevinue; 

    
}
priceInput.addEventListener("keypress", (event) => {
    if(event.target.value < 1){
        //console.log(event.which)
        //event.currentTarget.blur();
        symbol[0].style.display = 'none';
        symbol[1].style.display = 'none';
        if (event.which === 48 || event.which === 96 ) {
            event.currentTarget.blur();
            event.target.value = '';
            symbol[0].style.display = 'none';
            symbol[1].style.display = 'none';
            earn.innerHTML = '-'; 
            fiverrTakesFromSeller.innerHTML = '-'; 
            buyerPaid.innerHTML = '-'; 
            fiverrTakesFromBuyer.innerHTML = '-'; 
            fiverRevenue.innerHTML = '-';  
        
        }

    }
   
 });
  

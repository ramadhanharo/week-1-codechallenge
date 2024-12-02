function netSalary (){
   let grossSalary = prompt("enter gross salary,0");
   let PAYE;
   let shifRate;
   let nssfRate;
   let housingLevy;
   const personalRelief =2400;
   let netpay;
   if (grossSalary >= 0 && grossSalary <=24000) {
    PAYE = (grossSalary * 10)/100;
    shifRate =(grossSalary *2.75)/100;
    nssfRate = (grossSalary *6)/100;
    housingLevy = (grossSalary *1.5)/100;
    netpay = grossSalary-(PAYE +shifRate+ nssfRate+ housingLevy) + personalRelief;
    console.log("your monthly netpay is:" + netpay);
   }
   else if(grossSalary >24000 && grossSalary <= 32333){
    PAYE =(grossSalary * 25)/100;
    shifRate =(grossSalary *2.75)/100;
    nssfRate = (grossSalary *6)/100;
    housingLevy = (grossSalary *1.5)/100;
    netpay = grossSalary-(PAYE +shifRate+ nssfRate+ housingLevy) + personalRelief;
    console.log("your monthly netpay  is:" + netpay);
   }
   else if(grossSalary >32333 && grossSalary <= 500000){
    PAYE =(grossSalary * 30)/100;
    shifRate =(grossSalary *2.75)/100;
    nssfRate = (grossSalary *6)/100;
    housingLevy = (grossSalary *1.5)/100;
    netpay = grossSalary-(PAYE +shifRate+ nssfRate+ housingLevy) + personalRelief;
    console.log("your monthly netpay is:" + netpay);
   }
    else if(grossSalary >500000 && grossSalary <= 800000){
        PAYE =(grossSalary * 32.5)/100;
        shifRate =(grossSalary *2.75)/100;
    nssfRate = (grossSalary *6)/100;
    housingLevy = (grossSalary *1.5)/100;
    netpay = grossSalary-(PAYE +shifRate+ nssfRate+ housingLevy) + personalRelief;
    console.log("your monthly netpay is: " + netpay);
}
else  if(grossSalary >800000 ){
    PAYE =(grossSalary * 35)/100;
    shifRate =(grossSalary *2.75)/100;
    nssfRate = (grossSalary *6)/100;
    housingLevy = (grossSalary *1.5)/100;
    netpay = grossSalary-(PAYE +shifRate+ nssfRate+ housingLevy) + personalRelief;
    console.log("your monthly netpay is: " + netpay);
}
else (
    console.log ("invalid input")
)
return netpay;
}
netSalary()
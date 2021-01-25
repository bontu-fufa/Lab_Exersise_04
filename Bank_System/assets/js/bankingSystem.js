
// --------- Banking System 


var depositeBirr = 0;
var withdrawedBirr = 0;
var currBalance = 0;
var transferBirr = 0;
var deposite = function(dep){
    depositeBirr += parseInt(dep);
    console.log(dep + " deposited in to your account. :) ")
    
};
var withdrawal = function(withdraw){
    if (parseInt(withdraw) < 50 || parseInt(withdraw) > 9999){
        console.log("Can not be withdrawed");
    }
    else{
        deposite -= parseInt(withdraw)
        console.log(withdraw + " birr is withdrawed");
    }
}
var balance = function(){console.log(depositeBirr + " birr is your current balance");};
var transfer = function(money,recieverId){
    console.log(depositeBirr , money)
    if (parseInt(money) > depositeBirr){
        console.log("Insufficient to transfer");
    }
    else{
        depositeBirr -= parseInt(money);
        console.log(money + " birr is transfered to " + recieverId);
    }
}; 
// ---- invoke Banking System
(function(){
    var newMoney = prompt("deposite into your account");
    deposteBirr = deposite(newMoney);

    choice = prompt("What service do you want? 1 for Deposit, 2 for withdraw 3 for balance 4 for transfer");

    if (choice == "1"){
        var n_money = prompt("deposit : ");
        deposite(n_money);
    }
    else if (choice == "2"){
        var w_money = prompt("withdraw : ");
        withdrawal(w_money);
    }
    else if (choice == "3"){
        balance();
    }
    else if (choice == "4"){
        var t_money = prompt("Transfer money : ");
        var reciever = prompt("Transfer to : ");
        transfer(t_money,reciever);
    }
})();

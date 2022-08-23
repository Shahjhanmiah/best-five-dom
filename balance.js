document.getElementById('calculate-player-expenses').addEventListener('click',function(){
 const playerPrice=  document.getElementById('player-price');
 const newPlayerPriceStr= playerPrice.value;
 const newPlayerPrice= parseFloat(newPlayerPriceStr);
 console.log(newPlayerPrice);


 const totalBalance= document.getElementById('total-balance');
 const previousTotalBalanceStr= totalBalance.innerText;
 const previousTotalBalance= parseFloat(previousTotalBalanceStr);
 const totalPrice= (newPlayerPrice* 5);
 totalBalance.innerText=totalPrice;

});






document.getElementById('calculate').addEventListener('click',function(){
    


    const managerSalary= document.getElementById('manager-salary');
    const newManagerSalaryString= managerSalary.value;
    const newManagerSalary= parseFloat(newManagerSalaryString);
  

    const coachSalary= document.getElementById('coach-salary');
    const previousCoachSalaryString= coachSalary.value;
    const previousCoachSalary= parseFloat(previousCoachSalaryString);
   
    const playerExpenses=  document.getElementById('total-balance');
    const previousplayerExpensesString= playerExpenses.innerText;
    const previousplayerExpenses= parseFloat(previousplayerExpensesString);

    const totalAmount=previousplayerExpenses+newManagerSalary + previousCoachSalary;

    const totalExpenses = document.getElementById('total-expensess'); 
    totalExpenses.innerText=totalAmount;



})
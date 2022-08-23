document.getElementById('calculate-player-expenses').addEventListener('click',function(){
 const playerPrice=  document.getElementById('player-price');
 const newPlayerPriceStr= playerPrice.value;
 const newPlayerPrice= parseFloat(newPlayerPriceStr);
 console.log(newPlayerPrice);


 const totalBalance= document.getElementById('total-balance');
 const previousTotalBalanceStr= totalBalance.innerText;
 const previousTotalBalance= parseFloat(previousTotalBalanceStr);
 const totalPrice= newPlayerPrice*5;
 totalBalance.innerText=totalPrice;
 



})






document.getElementById('calculate').addEventListener('click',function(){
    console.log('calculate')


    const managerSalary= document.getElementById('manager-salary');
    const newManagerSalaryString= managerSalary.value;
    const newManagerSalary= parseFloat(newManagerSalaryString);
    console.log(newManagerSalary);

    const coachSalary= document.getElementById('coach-salary');
    const previousCoachSalaryString= coachSalary.value;
    const previousCoachSalary= parseFloat(previousCoachSalaryString);
    const previousCoachAmount= previousCoachSalary+newManagerSalary;
    console.log(previousCoachAmount);


    const totalExpensess=  document.getElementById('total-expensess');
    const previousTotalExpensessString= totalExpensess.innerText;
    const previousTotalExpensess= parseFloat(previousTotalExpensessString);
    const totalAmount=previousTotalExpensess+newManagerSalary;
    totalExpensess.innerText=totalAmount;



})
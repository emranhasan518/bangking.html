// handel deposite button event 
document.getElementById('deposite-button').addEventListener('click', function () {
    //get the amount deposited
    const depositeInput = document.getElementById('deposite-input');
    const newDepositeAmountText = depositeInput.value;
    const newDepositeAmount = parseFloat(newDepositeAmountText);

    //update deposite total
    const depositeTotal = document.getElementById('deposite-total');
    const previousDepositText = depositeTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositeTotal = previousDepositAmount + newDepositeAmount

    depositeTotal.innerText = newDepositeTotal;

    //update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositeAmount;
    balanceTotal.innerText = newBalanceTotal;


    //clear the deposite input feild
    depositeInput.value = '';

    //handle withdraw event handeler 
    document.getElementById('withdrow-button').addEventListener('click', function () {
        const withdrawInput = document.getElementById('withdrow-input');
        const withdrawAmountText = withdrawInput.value;
        const newWithdrawAmount = parseFloat(withdrawAmountText);

        // console.log(newWithdrawAmount);

        //set withdraw total
        const withdrawTotal = document.getElementById('withdraw-total');
        const previousWithdrawText = withdrawTotal.innerText;
        const previousWithdrawTotal = parseFloat(previousWithdrawText);
        const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
        withdrawTotal.innerText = newWithdrawTotal;

        //balance updatw
        const balanceTotal = document.getElementById('balance-total');
        const previousBalanceTtext = balanceTotal.innerText;
        const previousBalanceTotal = parseFloat(previousBalanceTtext);
        const newBalanceTotalTotal = previousBalanceTotal - newWithdrawAmount;
        balanceTotal.innerText = newBalanceTotalTotal;

        //clear withdraw input 
        withdrawInput.value = '';
    })
})
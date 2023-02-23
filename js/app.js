// string to integers converter for cost
function costStirngToInt(iteam) {
    const iteamText = document.getElementById(iteam + '-cost');
    const iteamCost = parseInt(iteamText.value);
    // iteamText.value = iteamCost;
    return iteamCost;
}

function converter(inputstring) {
    const inputText = document.getElementById(inputstring);
    const inputNumber = parseInt(inputText.value);
    return inputNumber;
}
//  error HTMLHeadingElementling 

function totalBalanceAmount() {
    const foodCost = costStirngToInt('food');
    const rentCost = costStirngToInt('rent');
    const clothesCost = costStirngToInt('clothes');
    const incomeAmmountCheek = converter('income');
    if (foodCost < 0 || rentCost < 0 || clothesCost < 0 || incomeAmmountCheek < 0) {
        document.getElementById('balance-area').style.display = 'none'
        document.getElementById('input-error').style.display = 'block'
    }
    else if (Number.isInteger(foodCost) == true && Number.isInteger(rentCost) == true && Number.isInteger(clothesCost) == true && Number.isInteger(incomeAmmountCheek) == true) {
        document.getElementById('balance-area').style.display = 'block'
        document.getElementById('input-error').style.display = 'none'
        const totalCost = foodCost + rentCost + clothesCost;
        return totalCost;
    }
    else {
        document.getElementById('balance-area').style.display = 'none'
        document.getElementById('input-error').style.display = 'block'
    }

}

// get income for all event handler 
document.getElementById('calculate-btn').addEventListener('click', function () {

    // get income amounts
    const incomeAmmount = converter('income');

    // Get cost and add them
    const totalCost = totalBalanceAmount();

    // update Total expensses  
    if (totalCost > incomeAmmount) {
        const totalExpenses = document.getElementById('total-expenses');
        totalExpenses.innerText = 'You can not sapnd more then your income';
        const balanceText = document.getElementById('balance');
        balanceText.innerText = 'Yor account is block for wrong input';



    }
    else {
        // hide error message 
        document.getElementById('expenses-error').style.display = 'none';

        // update Total expensses 
        const totalExpenses = document.getElementById('total-expenses');
        totalExpenses.innerText = totalCost;

        // update Balance
        const balanceText = document.getElementById('balance');
        const balance = incomeAmmount - totalCost;
        balanceText.innerText = balance;

    }

})

document.getElementById('saving-btn').addEventListener('click', function () {
    // const savingRateInput = document.getElementById('saving-rate');
    const savingRate = converter('saving-rate');

    // set saving ammount 
    const incomeAmmount = converter('income');
    const grossCost = totalBalanceAmount();
    const balanceTotal = incomeAmmount - grossCost;

    const savingAmmountText = document.getElementById('saving-ammount');

    const savingAmmount = (incomeAmmount * savingRate) / 100;
    savingAmmountText.innerText = savingAmmount;

    if (savingAmmount > balanceTotal) {
        document.getElementById('saving-area').style.display = 'none'
        document.getElementById('saving-error').style.display = 'block'

    }
    else {
        // hide error message 
        document.getElementById('saving-error').style.display = 'none'
        document.getElementById('saving-area').style.display = 'block'

        // Set Remaining Balance
        const remainingBalance = document.getElementById('remaining-balance');
        remainingBalance.innerText = incomeAmmount - (grossCost + savingAmmount);
    }
})
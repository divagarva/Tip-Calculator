document.getElementById('calculate-btn').addEventListener('click', function() {
    const billAmount = parseFloat(document.getElementById('bill').value);
    const tipPercentage = parseFloat(document.getElementById('tip').value);

    if (isNaN(billAmount) || isNaN(tipPercentage)) {
        alert("Please enter valid numbers.");
        return;
    }

    const tipAmount = (billAmount * (tipPercentage / 100)).toFixed(2);
    const totalAmount = (billAmount + parseFloat(tipAmount)).toFixed(2);

    document.getElementById('tip-amount').textContent = tipAmount;
    document.getElementById('total-amount').textContent = totalAmount;
});

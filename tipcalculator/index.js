function calculate( a,b) {  
  
    const tip= a * (b/100);
    const total= parseFloat(a) + parseFloat(tip);
    return total;
}  
document.getElementById('calculateButton').addEventListener('click', function()
{
    const subTotal = document.getElementById('subtotal').value;
    const tipPercentage = document.getElementById('tippercentage').value;
    const val = calculate(subTotal, tipPercentage);
    document.getElementById('result').textContent = 'Total amount is : '+ val;
});
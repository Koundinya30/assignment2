function reverseString(str) {
    return str.split('').reverse().join('');
}

document.getElementById('reverseButton').addEventListener('click', function()
{
    const inputString = document.getElementById('inputString').value;
    const reversedString = reverseString(inputString);
    document.getElementById('result').textContent = 'Reversed String : '+reversedString;
});
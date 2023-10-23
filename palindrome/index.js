function checkPalindrome(string) {  
  
    const len = string.length;  

    for (let i = 0; i < len / 2; i++) {  
    
        if (string[i] !== string[len - 1 - i]) {  
            return( string+' is not a palindrome');  
        }  
    }  
    return( string+' is a palindrome');  
}  
document.getElementById('checkButton').addEventListener('click', function()
{
    const inputString = document.getElementById('numberInput').value;
    const val = checkPalindrome(inputString);
    document.getElementById('result').textContent = val;
});
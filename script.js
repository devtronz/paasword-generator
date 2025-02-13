document.getElementById('generate').addEventListener('click', function() {
    const length = document.getElementById('length').value;
    const lowercase = document.getElementById('lowercase').checked;
    const uppercase = document.getElementById('uppercase').checked;
    const numbers = document.getElementById('numbers').checked;
    const symbols = document.getElementById('symbols').checked;

    const generatedPassword = generatePassword(length, lowercase, uppercase, numbers, symbols);
    document.getElementById('result').textContent = generatedPassword;
});


function generatePassword(length, lowercase, uppercase, numbers, symbols) {
    let charSet = '';
    if (lowercase) charSet += 'abcdefghijklmnopqrstuvwxyz';
    if (uppercase) charSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (numbers) charSet += '0123456789';
    if (symbols) charSet += '!@#$%^&*()_+~`|}{[]\:;?><,./-=';

    let password = '';
    if (charSet.length > 0) {
      for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * charSet.length);
          password += charSet[randomIndex];
      }
    }
    return password;
}
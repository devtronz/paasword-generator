document.getElementById('generate').addEventListener('click', function() {
    const length = document.getElementById('length').value;
    const lowercase = document.getElementById('lowercase').checked;
    const uppercase = document.getElementById('uppercase').checked;
    const numbers = document.getElementById('numbers').checked;
    const symbols = document.getElementById('symbols').checked;
    const language = document.getElementById('language').value;

    const generatedPassword = generatePassword(length, lowercase, uppercase, numbers, symbols, language);
    document.getElementById('result').textContent = generatedPassword;
});

document.getElementById('copy').addEventListener('click', function() {
    const password = document.getElementById('result').textContent;
    navigator.clipboard.writeText(password).then(function() {
        alert('Password copied to clipboard!');
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
});

document.getElementById('save').addEventListener('click', function() {
    const password = document.getElementById('result').textContent;
    const blob = new Blob([password], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'password.txt';
    a.click();
    URL.revokeObjectURL(url);
});

function generatePassword(length, lowercase, uppercase, numbers, symbols, language) {
    let charSet = '';
    if (language === 'english') {
        if (lowercase) charSet += 'abcdefghijklmnopqrstuvwxyz';
        if (uppercase) charSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (numbers) charSet += '0123456789';
        if (symbols) charSet += '!@#$%^&*()_+~`|}{[]\:;?><,./-=';

    } else if (language === 'hindi') {
        if (lowercase) charSet += 'अआइईउऊऋएऐओऔकखगघङचछजझञटठडढणतथदधनपफबभमनयरलवशषसह';
        if (uppercase) charSet += 'अआइईउऊऋएऐओऔकखगघङचछजझञटठडढणतथदधनपफबभमनयरलवशषसह';
        if (numbers) charSet += '०१२३४५६७८९';
        if (symbols) charSet += '!@#$%^&*()_+~`|}{[]\:;?><,./-=';

    }
    // Add more languages similarly

    let password = '';
    if (charSet.length > 0) {
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charSet.length);
            password += charSet[randomIndex];
        }
    }
    return password;
}

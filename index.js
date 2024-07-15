document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    const generateBtn = document.getElementById('generateBtn');
    const editBtn = document.getElementById('editBtn');
    const copyBtn = document.getElementById('copyBtn');
    const resetBtn = document.getElementById('resetBtn');
    const storeBtn = document.getElementById('storeBtn');
    const passwordList = document.getElementById('passwordList');

    const generatePassword = () => {
        const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?';
        let password = '';
        for (let i = 0; i < 12; i++) {
            password += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        passwordInput.value = password;
    };

    const copyPassword = () => {
        passwordInput.select();
        document.execCommand('copy');
        alert('Password copied to clipboard!');
    };

    const resetPassword = () => {
        passwordInput.value = '';
    };

    const storePassword = () => {
        if (passwordInput.value) {
            const li = document.createElement('li');
            li.textContent = passwordInput.value;
            passwordList.appendChild(li);
            resetPassword();
        }
    };

    generateBtn.addEventListener('click', generatePassword);
    copyBtn.addEventListener('click', copyPassword);
    resetBtn.addEventListener('click', resetPassword);
    storeBtn.addEventListener('click', storePassword);

    editBtn.addEventListener('click', () => {
        if (passwordInput.readOnly) {
            passwordInput.readOnly = false;
            editBtn.textContent = 'Save';
        } else {
            passwordInput.readOnly = true;
            editBtn.textContent = 'Edit';
        }
    });
});

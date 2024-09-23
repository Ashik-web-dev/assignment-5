const accountBalanceElement = document.getElementById('account-balance');
let accountBalance = parseInt(accountBalanceElement.innerText);

function handleDonation(inputId, amountElementId, cause) {
    const inputElement = document.getElementById(inputId);
    const amountElement = document.getElementById(amountElementId);

    const donationAmount = parseInt(inputElement.value);
    if (isNaN(donationAmount) || donationAmount <= 0) {
        alert('Please enter a valid donation amount.');
        return;
    }

    if (donationAmount > accountBalance) {
        alert('Insufficient balance.');
        return;
    }

    // Update donation amount and account balance
    accountBalance -= donationAmount;
    accountBalanceElement.innerText = accountBalance;
    amountElement.innerText = parseInt(amountElement.innerText) + donationAmount;

    // Add to history
    const historyList = document.getElementById('history-list');
    const historyItem = document.createElement('li');
    historyItem.innerText = `${new Date().toLocaleString()}: Donated ${donationAmount} BDT to ${cause}`;
    historyList.appendChild(historyItem);

    // Show success modal
    showModal();

    inputElement.value = ''; // Reset the input field
}


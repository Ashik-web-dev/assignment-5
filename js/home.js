const donationBtn = document.getElementById('donation-btn');
const historyBtn = document.getElementById('history-btn');
const donationSection = document.getElementById('donation-section');
const historySection = document.getElementById('history-section');

donationBtn.addEventListener('click', () => {
    donationSection.classList.remove('hidden');
    historySection.classList.add('hidden');
    donationBtn.classList.add('active'); // Add active class
    historyBtn.classList.remove('active'); // Remove active class
});

historyBtn.addEventListener('click', () => {
    historySection.classList.remove('hidden');
    donationSection.classList.add('hidden');
    historyBtn.classList.add('active'); // Add active class
    donationBtn.classList.remove('active'); // Remove active class
});

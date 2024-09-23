
// Event listeners for "Donate Now" buttons
document.getElementById('donate-now-noakhali').addEventListener('click', () => {
    handleDonation('donation-input-noakhali', 'donation-amount-noakhali', 'Noakhali Flood Relief');
});

document.getElementById('donate-now-feni').addEventListener('click', () => {
    handleDonation('donation-input-feni', 'donation-amount-feni', 'Feni Flood Relief');
});

document.getElementById('donate-now-quota').addEventListener('click', () => {
    handleDonation('donation-input-quota', 'donation-amount-quota', 'Quota Protest Relief');
});
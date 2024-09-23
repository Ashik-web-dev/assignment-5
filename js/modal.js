// Function to show the modal
function showModal() {
    document.getElementById('success-modal').classList.remove('hidden');
}

// Function to close the modal
document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('success-modal').classList.add('hidden');
});

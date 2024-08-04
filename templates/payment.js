document.getElementById('add-method-btn').addEventListener('click', function () {
    document.getElementById('modal').style.display = 'block';
});

document.querySelector('.close').addEventListener('click', function () {
    document.getElementById('modal').style.display = 'none';
});

document.querySelector('.cancel').addEventListener('click', function () {
    document.getElementById('modal').style.display = 'none';
});

// Optional: Close the modal when clicking outside of it
window.addEventListener('click', function (event) {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
});

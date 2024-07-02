document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = 'booking-confirmation.html';
});

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('booking-confirmation').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('booking-confirmation')) {
        document.getElementById('booking-confirmation').style.display = 'none';
    }
});

const buttons = document.querySelectorAll('.color-btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        document.body.style.backgroundColor = button.style.backgroundColor;
    });
});

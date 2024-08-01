document.querySelectorAll('.recipe-item a').forEach(item => {
    item.addEventListener('click', (event) => {
        console.log('Recipe clicked');
        // Remove or modify event.preventDefault();
    });
});
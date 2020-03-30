const checkBox = document.getElementById('checkbox');

checkBox.addEventListener('change', () => {
    //change theme of your website;
    document.body.classList.toggle('dark');
});
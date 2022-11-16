let searchInput = document.getElementById('search');
let searchButton = document.getElementById('search-button');
searchButton.addEventListener('dblclick', search);





searchInput.addEventListener('keyup', checkPolitcorrectness);



function checkPolitcorrectness() {
    if (searchInput.value === '100') {
        alert('Bad number');
    };
}
function search() {
    alert('we want to find this: ' + searchInput.value);
}

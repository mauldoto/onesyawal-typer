function addToList(greetings) {
    deleteRowData();
    const CACHE_KEY = 'greeting_data' 
    let history = JSON.parse(localStorage.getItem(CACHE_KEY));
    // Retrieve
    if (history === null) {
        history = greetings;
    }
    let row = document.getElementById('listTable')
    for (const item in history) {
        let newRow = document.createElement('tr');
        newRow.setAttribute('class', 'row-data')
        newRow.innerHTML = `
            <td>${parseInt(item)+1}</td>
            <td>${history[item].category}</td>
        `
        row.appendChild(newRow);
    }
}

let buttonDlt = document.querySelector(".delete");
buttonDlt.addEventListener('click', deleteHandler)

function deleteHandler() {
    const CACHE_KEY = 'greeting_data';
    deleteRowData();
    localStorage.removeItem(CACHE_KEY)
    localStorage.removeItem('bg_data')
    location.reload();

}

function deleteRowData() {
    let listRow = document.querySelectorAll('.row-data');
    listRow.forEach(item => item.remove());
}
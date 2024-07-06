const tableRows = document.querySelectorAll('.main table tbody tr');

tableRows.forEach(tableTr =>{
    tableTr.addEventListener('click',() =>{
        tableRows.forEach(item => {
            item.classList.remove('selected');
        });
        tableTr.classList.add('selected');
    });
});
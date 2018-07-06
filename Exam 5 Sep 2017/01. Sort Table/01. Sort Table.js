function sort(colIndex, descending) {
    let rows = $('tbody tr');
    console.log(rows);
    if (colIndex === 0){
        if (descending){
            rows.sort((a, b) => $(b).children()[0].textContent.localeCompare($(a).children()[0].textContent));
            $('tbody').append(rows);
        }
        else{
            rows.sort((a, b) => $(a).children()[0].textContent.localeCompare($(b).children()[0].textContent));
            $('tbody').append(rows);
        }
    }
    else{
        if (descending){
            rows.sort((a, b) => +($(b).children()[1].textContent) - +($(a).children()[1].textContent));
            $('tbody').append(rows);
        }
        else{
            rows.sort((a, b) => +($(a).children()[1].textContent) - +($(b).children()[1].textContent));
            $('tbody').append(rows);
        }
    }
}
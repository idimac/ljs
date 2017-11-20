function backedArrays () { //first task
    var arr = document.getElementById('backText').value.split('');
    var backArray = [];
    for (var i = arr.length -1, j = 0; i >= 0; i--, j++) {
       backArray[j] = arr[i];
    }
    document.getElementById('backedText').value = backArray.join('');
}

function searchedArrays () { //second task
    var arr = document.getElementById('searchText').value.split('');
    var backArray = [];
            for (var i=1; i < arr.length; i++) {                   
                for (var j=i-1; j >= 0; j--) { 
                    if (arr[j] == arr[i]) { 
                    var is_unique = true;
                    for (var k=0; k < backArray.length; k++) {
                        if (backArray[k] == arr[i]) {
                            is_unique = false;
                            break;
                        }
                    }
                    if (is_unique) {
                        backArray.push(arr[i]); 
                    }
                    break;
                } 
            }    
}
    document.getElementById('searchedText').value = backArray.join('');
}





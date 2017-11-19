function backedArrays () {
    var arr = document.getElementById('backText').value.split('');
    var backArray = [];
    for (var i = arr.length -1, j = 0; i >= 0; i--, j++) {
       backArray[j] = arr[i];
    }
    document.getElementById('backedText').value = backArray.join('');
}




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

function searchedOdd() { //third task
    var arr = document.getElementById('searchOddSimb').value.split('');
    var test = false;
    for(var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
        var simb = arr[i];
        test = true;
        } 
    };
    if (test == false) {
        alert ('Nothing odd numbers in your entered simbols')
    };
    
    for(var i = 0; i < arr.length; i++) {
        if (arr[i] < simb && arr[i] % 2 !==0)
        simb = arr[i];
    }
    document.getElementById('searchedOddSimb').value = simb; 
}


function arithmeticMean () { //fourth task
    var arr = document.getElementById('searchArithmeticMean').value.split('');
    var sum = Number(arr[0]);
    var count = 1;
    for (var i = 1; i < arr.length; i++) {
        sum = sum + Number(arr[i]);
        count++;
    }
    var result = sum / count;
    document.getElementById('searchedArithmeticMean').value = result; 

}




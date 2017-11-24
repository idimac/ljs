function backedArrays () { //first task
    var arr = document.getElementById('backText').value.split('');
    var backArray = [];
    for (var i = arr.length -1, j = 0; i >= 0; i--, j++) {
       backArray[j] = arr[i];
    }
    document.getElementById('backedText').value = backArray.join('');
};

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
};

/*
function foo(arr) { Второй вариант решения. Преподователя!
    var result = {};
    for (var i =o; i < arr.length; i++) {
        if (result[arr[i]]){
            result[arr[i]]++ ;
        }
        else {
            result[arr[i]] = 1;
        }
    }
    return result;
}


function foo(arr) { Третий вариант решения. Преподователя!
    var result = {};
    for (var i =o; i < arr.length; i++) {
        var item = arr[i];
        if (result[item){
            result[item]++ ;
        }
        else if (arr.indexOf(item, i) > -1 ){
            result[item] = 1;
        }  
        }
        return result;
}
*/ 

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
};


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

};

function CountPositive () { //fifth task
document.getElementById('searchedPositive').value = "";
var arrays = document.getElementById('searchPositive').value.split(', ');
var returned = arrays.filter (function(number) {
    return number > 0;
});
var count = 0;
for (var i = 0; i < returned.length; i++) {
count++;
}
document.getElementById('searchedPositive').value = count;
};

function CountNegative () { //six task
    document.getElementById('searchedPositive').value = "";
    var arraysNeg = document.getElementById('searchPositive').value.split(', ');
    var returnedNeg = arraysNeg.filter (function(number) {
        return number < 0;
    });
    var countNeg = 0;
    for (var i = 0; i < returnedNeg.length; i++) {
    countNeg++;
    }
    document.getElementById('searchedPositive').value = countNeg;
    };


    function CalculateMinimals () { //Seventh Task
        var arraysMin = document.getElementById('calculateMinimal').value.split('');
        var minimal = arraysMin[0];
        countMinimal = 0;
        for (var i = 0; i < arraysMin.length; i++) {
            if (arraysMin[i] < minimal) {
                minimal = arraysMin[i];
                countMinimal = 1;
            }
            else if (arraysMin[i] === minimal) {
                countMinimal = countMinimal + 1;
            }
        }
        document.getElementById('calculatedMinimals').value = "minimal number " + minimal + "; Count " + countMinimal;
    }

    function CalculateMultiple7 () { //Eighth task
        var arraysMultiple7 = document.getElementById('calculateMultiple7').value.split(', ');
        var result = [];
        for(var i = 0; i < arraysMultiple7.length; i++) {
            if (arraysMultiple7[i] % 7 === 0) {
                result.push(arraysMultiple7[i]);
            };
        }
        var count = 0;
        for (var i = 0; i < result.length; i++) {
        count++;
        }
        document.getElementById('calculatedMultiple7').value = count; 
    }


    function SearchedLastMinimal() { //ninth task
        var arraysEntered = document.getElementById('searchMinimal').value.split('');
        var result = [];
        var Minimal = arraysEntered[arraysEntered.length - 1];
        for (var i = arraysEntered.length; i >= 0 ; i--) {
            if (arraysEntered[i] < Minimal) {
                Minimal = arraysEntered[i];
            }
        }

        document.getElementById('searchedMinimal').value = Minimal;
    }


    function SearchedMaximal() { //tenth task
        var arraysEntered = document.getElementById('searchMaximal').value.split('');
        var result = [];
        var Maximal = arraysEntered[0];
        for (var i = 1; i < arraysEntered.length; i++) {
            if (arraysEntered[i] > Maximal) {
                Maximal = arraysEntered[i];
            }
        }

        document.getElementById('searchedMaximal').value = Maximal;
    }




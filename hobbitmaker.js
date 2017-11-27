var arrayOfHobbits = [];
var neededHobbits = 24;


function newHobbitToArray () {
    if (document.getElementById('hobbit_entered').value === "") {
        alert('You are not entered hobbit name :(');
        return;
      };
    var totalHobbitNumber = newHobbit.total();
    var name = newHobbit.name();
    var age = newHobbit.age();
    arrayOfHobbits.push("№" + totalHobbitNumber + " Имя: " +  name + ", Возраст: " + age);
    neededHobbits--;
    document.getElementById("counter_hobbit_names").innerHTML = neededHobbits;
    if (neededHobbits == 0) {
        var returnedHob = ""
        for(var i = 0; i < arrayOfHobbits.length; i++) {
            returnedHob += arrayOfHobbits[i] +
            "\n\t";
        }
        alert (returnedHob);
        neededHobbits = 24;
        document.getElementById("counter_hobbit_names").innerHTML = neededHobbits;
    }
}

var newHobbit = makeHobbit (); // function maker hobbits
function makeHobbit () {
            
            var count = 1;
           
            function totalHobbit () {
                if(count == 25) {
                    count = 1;
                }
                else {
                return count++;
                }
			}
            
            function makeName() {
                var hobbitName = document.getElementById ("hobbit_entered").value;
                    return hobbitName;
            }

			function makeAge (  ) {
                    return Math.floor(Math.random() * (101 - 12)) + 12;
			}

			

			return { 
                     total: function () {
                     return totalHobbit();
                     },
                     name: function () {
                          return makeName ();
                          },
                     age: function() {
                         return makeAge ();
                     },
				   
			};
		};
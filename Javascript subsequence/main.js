//Checking for subsequence.
//ISSUE: Doesn't care about the order.

const _array = [1, 2, 3, 5, 6, 7]; //Array.
const _sub = [1, 3, 5, 6, 2]; //Subsequence.

let _counter = 0; //Checking how many times a containing number was found.

//Displays the arrays
document.write("Array: " + _array);
document.write("<br>");
document.write("Subsequence: " + _sub);
document.write("<br>");
//////////////////////


//Goes through the main array and
//then goes through the subsequence
//to see if the value matches.
//If it does add 1 to the counter
for (_a in _array) {
    for (_s in _sub) {
        if (_array[_a] === _sub[_s]) {
            _counter++;
        }
    }
}


document.write("<br>");


//If the counter is matching
//the length of the subsequence
//then that means the subquence
//is a match.
if (_counter === _sub.length) {
    document.write("TRUE");
}
else {
    document.write("FALSE");
}

//Displays the value of the counter
//and the subsequence length.
//FOR DEBUGGING
document.write("<br><br>Counter: " + _counter);
document.write("<br>Sub: " + _sub.length);
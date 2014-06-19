
// pretty close. works with all but the last test list.

function duplicates (myarray) {
    var item_freq = {};
    for (var i = 0; i < myarray.length; i++) {
        if (item_freq[myarray[i]] === undefined){
            item_freq[myarray[i]] = 1;
        }
        
        else {
            item_freq[myarray[i]]++;
        }
        
    }
    
    var result = [];
    
    var keys = Object.keys(item_freq);
    for (var j = 0; j < keys.length; j++) {
        if (item_freq[keys[j]] > 1) {
                result.push(keys[j]);
        }
    }
    return result;
}


// the real deal. works with all test lists.

function duplicates (myarray) {
    var result = [];
    for (var i = 0; i < myarray.length; i++) {
        for (var j = 0; j < myarray.length; j++) {
            if (i !== j && myarray[i] === myarray[j]) {
                if (result.indexOf(myarray[i]) === -1) {
                    result.push(myarray[i]);
                }
            }
        }
        
    }
    return result;
}



console.log(duplicates(["katie", "amy", "jenny", "katie", "kelley", "katie", "amy"]));

console.log(duplicates([true, true, true, true]));

console.log(duplicates(["47","12", "19", "22", "26", "99", "30", "50", "324", "003", "44",
    "33", "346", "354", "44", "235", "45", "34", "44", "590", "09", "099", "0", "1", "3", 
    "33", "999", "9"]));
    
console.log(duplicates(["katie", "true", true, 19, "gargoyles", "!", 2 + 3, "2 + 3", 
    19, "19", 19 === "19", 6, false, false]));
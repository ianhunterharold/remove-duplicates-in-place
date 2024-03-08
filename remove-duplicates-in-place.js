/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    const uniqueVals = new Set()

    for (let i = 0; i < nums.length; i++) {
        let val = nums[i]
        if (!uniqueVals.has(val)) {
            uniqueVals.add(val)
        }
    }
    const unique = uniqueVals.size;
    nums.splice(0, 0, ...uniqueVals)
    return unique;
    // create a set that looks for unique values in array
    // add to the set when and then make a short list. 
    // get the length of the set 
    // add that set to the front of the array.
    // hell ya
};

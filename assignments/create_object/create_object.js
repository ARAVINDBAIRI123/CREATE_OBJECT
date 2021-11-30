function CreateObject(arr) {
    // Write your code here
    const obj1 = {};
    for (var j = 0; j < arr.length; j += 2){
        obj1[arr[j]] = arr[j + 1];
    }
    return obj1
}

module.exports = CreateObject;

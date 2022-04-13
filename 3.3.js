let arr = ['a', 'b', 'c', 'd', 'e'];

Array.prototype.push.apply(arr, arr);{
    console.log(arr);
}
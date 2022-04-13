// let arr = [1, 2, 3, 4, 5, 6, 7, 8]

// Array.prototype.max = function() {
//     return Math.max.apply(null, this);
//   };
  
//   Array.prototype.min = function() {
//     return Math.min.apply(null, this);
//   };

//   {
//       console.log(arr.max + arr.min)
//   }



let arr = [1, 2, 3, 4, 5, 6, 7, 9];


Array.prototype.max = function() {
  return Math.max.apply(null, this);
};

Array.prototype.min = function() {
  return Math.min.apply(null, this);
};

console.log("Le min est : "+arr.min()+ " et le max : " +arr.max())
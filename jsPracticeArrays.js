function printReverse(arr){
  for(var i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}
printReverse([3, 5, 6, 7]);

/////Starting isUniform();
function isUniform(arr){
  var first = arr[0];
  for(var i = 1;i < arr.length; i++) {
    if(arr[i] !== first){
      return false;
    }
  }
  return true;
}

isUniform([3, 5, 6, 7]);
isUniform([3, 3, 3, 3]);

/////Starting sumArray();
function sumArray(arr){
  var total = 0;
  for(var i = 0;i < arr.length; i++){
    total += arr[i];
  }
  return total;
}
sumArray([3, 5, 6, 7]);

/////Starting max();
function max(arr){
  var maxA = arr[0];
  arr.forEach(function(compare){
    if(compare > maxA){
      maxA = compare;
    }
  });
  return  maxA;
}
max([3, 5, 6, 7, 20]);

//Examine the document object


// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title=123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.all);
// document.all[10].textContent= "Hello";


// Phone Number Format
function createPhoneNumber(numbers){
    var format = "(xxx) xxx-xxxx";
   
   for(var i = 0; i < numbers.length; i++)
   {
     format = format.replace('x', numbers[i]);
   }
   
   return format;
   
}

/**Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
 * uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
 */


var uniqueInOrder=function(iterable){
    //your code here - remember iterable can be a string or an array
    var result = []
    var last
    
    for (var i = 0; i < iterable.length; i++) {
      if (iterable[i] !== last) {
        result.push(last = iterable[i])
      }
    }
    
    return result
  }


  //Array

  const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
  const salads = new Array('🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '2');

  for(var i=0; i<salads.length; i++){
    console.log(salads[i]);
  }


  //destructuring array

  let [tomato, mushroom, carrot] = ['🍅', '🍄', '🥕'];

  // Nested Array Destructuring in js 

  let fruit = [2,3,4,[5,6,7]];
  console.log(fruit);
  let veg = fruit[3];
  console.log(veg);
  let six = veg[1];
  console.log(six);
  // let seven =fruit[4][2];
  // console.log(seven)

  // How to merge arrays 
  let first = [1,2,3];
  let second = [4,5,6];

  let merge = first.concat(second);
  console.log(merge);
  let firstSecond =[first, second];
  console.log(firstSecond);


  // Fill method for arrays

  let fill = ["green","red","yellow"]
  console.log(fill.fill("pink" , 1,3))

  //Sort

  const numbers = [23, 5, 100, 56, 9, 13, 37, 10, 1];
  numbers.sort();
  function ascendingComp(a, b){
    return (a-b);
  }
  
  console.log(numbers.sort(ascendingComp))
  function descendingComp(a, b){
    return (b-a);
  }
  console.log( numbers.sort(descendingComp))
 
  let a ="ahmad";
  let b = "dolapo";
  [a,b]=[b,a];
  console.log(a);
  console.log(b);

  let d = [1,2,3,4,5];
  let e = [6,7,8,9,10];

  let de = [...d,...e];
  console.log(de)

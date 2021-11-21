



///// Q NO 1//////

// function myfun() {
//     var Date = new Date();
//     document.write(Date)
// }
// myfun()

///// Q NO 2//////



// function myfun1() {
//     var firstName = "M Rafiullah"+" ";
//     var lastName = "khan"
//     document.write(firstName+lastName)
// }
// myfun1()

///// Q NO 3//////.

// function value(num1,num2) {
//    var value = num1+num2;
//    return value
// }

// var value = 3 + 6;
// document.write(value)

///// Q NO 4//////.

// function add(){
// var times = +prompt("how many values.......?")
// var addvalue = 0;
// for (var i =0; i < times; i++){
// addvalue += +prompt("Enter Any Values"+(i +1))


// }
// document.write(addvalue)}



// function sub(){
//     var times = prompt("how many values.......?")
//     var subvalue = 0;
//     for (var i =0; i < times; i++){
//     subvalue -= prompt("enter values")
    
    
//     }
//     document.write(subvalue)
    
// }   

// 
// function mul(){
//     var times = prompt("how many values.......?")
//     var multivalue = 0;
//     for (var i =0; i < times; i++){
//     multivalue *= prompt("enter values")
    
    
//     }
//     document.write(multivalue)
    
// } 


///// Q NO 5//////.

// function squr(num) {
//     var i;

//     for (i=0;i<=num;i++) {
//         var sum=0;
//         var i = i*i;
//         sum = i;
// }
    
// document.write("The sum of squares for numbers up to and including ");
// }

// var num = parseInt(prompt("Enter a number:"));
// squr(num);

///// Q NO 6//////.

// function factor(n){
//     
//     if(n == 0 || n == 1){
//         return 1;
//    
//     }else{
//         return n * factor(n-1);
//     }
// }
// var n = 4;
// ans = factor(n)
// document.write("The factorial of " + n + " is " + ans);

///// Q NO 7//////.

// function sum()
// {
//     var firNumber = 1;
//     var SecNumber = document.getElementById('textSecondNumber').value;
//     alert(parseInt(firNumber) + parseInt(SecNumber));
// }

///// Q NO 8//////

// function pythagorean(sid1, sid2){
//     return Math.sqrt(Math.pow(sid1, 2) + Math.pow(sid2, 2));
//   }
  
//   document.write(pythagorean(4, 3));



///// Q NO 9//////.

// var length = prompt("Enter a whole number for the length of your rectangle.");
// var width = prompt("Enter a whole number for the width of your rectangle.");
// function area(length, width) {
//     return length * width;
// }
// function perimeter(length, width) {
//     return 2*( length + width);
// }

// document.writeln('The area of your rectangle is ' + area(length, width));         
// document.writeln('The perimeter of your rectangle is ' + perimeter(length, width));

///// Q NO 10//////.

// function checkPalindrome(str) {

//     // find the length of a string
//     var len = string.length;

//     // loop through half of the string
//     for (var i = 0; i < len / 2; i++) {

//         // check if first and last string are same
//         if (string[i] !== string[len - 1 - i]) {
//             return 'It is not a palindrome';
//         }
//     }
//     return 'It is a palindrome';
// }

// // take input
// var string = prompt('Enter a string: ');

// // call the function
// var value = checkPalindrome(string);

// document.write(value);

///// Q NO 11//////.

// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// document.write(uppercase("the quick brown fox"));

///// Q NO 12//////.




// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// document.write(find_longest_word('Web Development Tutorial'));

///// Q NO 13//////.

// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// document.write(char_count('JSResourceS.com', 'o'));

///// Q NO 14//////.

// function calCircum(radius) {
//     var your = (Math.PI * radius) * 4;
//   document.write("The Circumfrence is " + your + "."  +"<br>"  +"<br>");
//   }
//   function calArea(radius) {
//     var xyz = (Math.PI * radius) * radius;
//  document.write("The Area is " + xyz + ".");
//   }
  
//   calCircum(30);
//   calArea(10);

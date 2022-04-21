alert("I'm invoked!");


alert("I'm JavaScript!");
alert('Hello') ;
alert("World");
alert(3 +1+ 2); 


var fname=10.5; 
fname = "Guvi";
lname = "geek"
var name = fname+lname;
alert( `hello ${name}`);


let anum = prompt("First number?");
let bnum = prompt("Second number?");
alert(parseInt(anum) +parseInt(bnum));

var A ="12" > "12";
//Don't touch below this
if (A) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}

let a = prompt("Enter a number?");//if we dont enter any value we will get success
//Don't modify any code below this
if (a) {
 console.log( 'OMG it works for any number inc 0' );
}
else
{
 console.log( "Success" );
}




let values = prompt('How many runs you scored in this ball');
if(values = 4) {
      console.log("You hit a Four")}
 if(values = 6) {
      console.log("You hit a Six")}
 else {
      console.log("I couldn't figure out")}

      let login = 'Employee';
      let messages ='welcome'+ ' '+ login;
      console.log(messages);

      var msg;

      if (null || 2 || undefined )
      {
        message = "welcome boss";
      }
      else
      {
        message = "Go away";
      }
        console.log(message);


        let message;
        let lock ;
        //Dont change any code below this 
        if (null || lock || undefined )
        {
          message = "Go away";
        }
        else
        {
         message = "welcome";
        }
          console.log(message);

          //You can change only 2 characters
let I = 3;
while (I) {
  console.log(I--);
}
let num = 0;
for (let i = 1; i<=10;i++){
 num=num+1;
 console.log(num);

}
//You are allowed to modify only one character 
for (let num = 2; num <= 20; num +=2) {
 console.log(num)
}

let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i <3; i++) {
  console.log(`Wrapped ${gifts[i]} and added a bow!`);
}
var countdown = 1;
while (countdown > 1) {
  countdown--;}
  if(countdown ==0)
  {
   console.log("bomb triggered");
  }
  else{
   console.log("disarm bomb")
  }

var lemein = "0;"
var lemeout = 0;
var msg = "";
if (lemein) {
 msg += "hi";
 }
if (lemeout) {
 msg += 'Hello';
}
console.log(msg);


var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

console.log(numsArr.join(''));
console.log(numsArr.join(','));
console.log(numsArr.reverse("").join(' '));


var sum=0
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {

sum=sum+1;

console.log(sum);
}

var array =[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

for(let i=0;i<array.length;i++) {

  if(array[i]%2===0){
    array[i] = "even"

  }
}

console.log(array)
var array =[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
sum =0;
for(var i=0;i<array.length;i++) {
sum=sum+array[i]

}
console.log(sum)


var array=[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=0;
for(var i=0;i<array.length;i++){
if(array[i]%2===0){
sum=sum+array[i]
}
}
console.log(sum)

var array=[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=0;
for(var i=0;i<array.length;i++){
if(array[i]%2===0){
sum=sum+array[i]
}
else{
  sum=sum-array[i]
}
}
console.log(sum)

var numsArr = [[1, 2, 3, 4, 5],[6, 7, 8, 9, 10, 11]];
var newnumsArr =numsArr[0].concat(numsArr[1]);

var evensum=0;
var oddsum=0;
for(var i=0;i<newnumsArr.length;i++){

  if(newnumsArr[i]%2===0){

  evensum=evensum+newnumsArr[i]
  }

  else{
    if(newnumsArr[i]%2!==0){

oddsum=oddsum+newnumsArr[i]
    }
  }
}
console.log(evensum)
console.log(oddsum)




 var aa = (f,s,t) => {

  if(f>s &&f>t){
  console.log(f)}
  else if(s>f && s>t){
  console.log(s)}
  else{
  console.log(t)}
 }
 aa(1,2,3);

 
 var value = 123,
 sum = value .toString().split('').map(Number).reduce(function (a, b) {return a + b;}, 0);

console.log(sum);

var res = function(arr){
  for(var i=0; i < arr.length; i++){
  newArr = [];
  if(newArr.indexOf(arr[i]) == -1) {
  newArr.push(arr[i]);
  } }
  return newArr;
 }



 console.log(res(["guvi","geek","guvi","duplicate","geeK"]))


 (function(str){
  str = str.split("").reverse().join("");
  console.log(str); 
 })("abcd")

 
 var arr = ["guvi", "geek", "zen", "fullstack"];

 (function(arr) {
  for (var i = 0; i <= arr.length; i++) {
  var res =arr[i].charAt(0).toUpperCase("")+ arr[i].slice(1);
  console.log(res);
  }
 })(["guvi", "geek", "zen", "fullstack"]);
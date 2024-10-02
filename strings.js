
// Task :1.take two strings with spaces at starting of one string and 
// at the ending of another string remove the spaces and 
// concat the both string and 
// convert the combined string into uppercase string
var a="  nivas";
var b="reddy  ";
var c=a.concat(b)
d=c.trim();
console.log(d.toUpperCase());


// 2.Extract Middle Portion of the string and
//  get the last index of char of extracted string and
//  Convert the portion to Lowercase
var r="nivasreddy";
const middleIndex = Math.floor(r.length / 2);
const middlePortion = r.substring(middleIndex - 2, middleIndex + 2);
console.log(middlePortion);
const lastchar=middlePortion.slice(-1);
console.log(lastchar);

// 3.take a single char and concat string to that char and 
// convert the resulted string to uppercase and 
// then extract the last second char 

var c="N"
var d="ivas"
var e=c.concat(d);
f=e.toUpperCase();
console.log(f.slice(-2,-1));


// 4.we have 2 string and extract first 3 chars of first string and
//  extra last 3 chars of another string and concat those 2 results together
//  and first char and last char of the resulted concatinated string should as uppercase
var k="nivas";
var l="reddy";
var m=k.slice(0,3);
var n=l.slice(-3);
var o=m.concat(n);
console.log(o.toUpperCase());

// 5.You are given a string with extra spaces at the beginning and end.
//  You need to trim the string, make the first and last characters uppercase, 
//  extract a specific part of the string, 
//  concatenate it with another string

 var j="    coderssss    "
 var z="10k"
  var k=j.trim();
 var l=k.toUpperCase(0,1);
 var m=k.toUpperCase(-1);
 var n=k.slice(0,6);
 console.log(z.concat(n));
 
 
// 6."hello there , how are you " find the index of are word in the sentence

var w="hello there , how are you ";
var x=console.log( w.indexOf("are"));



 


 



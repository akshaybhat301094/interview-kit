/**
    Given two integers a and b, return the sum of the two integers without using the operators + and -.
    leetcode link :- https://leetcode.com/problems/sum-of-two-integers/
 */


// using bit manipulation 
 function getSum(a, b) {
     while(b != 0) {
         let carry = a & b;
         a = a ^ b;
         b = carry<<1;
     }
     return a;
 }


 // if the numbers are positive we can use array.fill

 function getSum(a,b) {
     let first = new Array(a).fill(true);
     let second = new Array(b).fill(true);
     return [...first, ...second].length;
 }
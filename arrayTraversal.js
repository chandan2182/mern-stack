const nums =[3, 5, 6, 8 , 33];

 for(i=0; i<nums.length; i++)
 {
    console.log(nums[i]**2);
 }
 console.log('.............');
 // for of loop

 for(let i of nums){
    console.log(i**2);
 }

// program to filter out odd number

const newArr =[];
for(let i of nums){
   if(i%2==0){
      newArr.push(i);
   }
};
console.log(newArr);

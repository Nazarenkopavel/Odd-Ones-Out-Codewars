/*
The town sheriff dislikes odd numbers and wants all odd numbered families out of town! In town crowds can form and individuals are often mixed with other people and families. However you can distinguish the family they belong to by the number on the shirts they wear. As the sheriff's assistant it's your job to find all the odd numbered families and remove them from the town!

Challenge: You are given a list of numbers. The numbers each repeat a certain number of times. Remove all numbers that repeat an odd number of times while keeping everything else the same.

oddOnesOut([1, 2, 3, 1, 3, 3]) = [1, 1]
In the above example:

the number 1 appears twice
the number 2 appears once
the number 3 appears three times
*/

function oddOnesOut(nums) {
  let a = nums.reduce((acc, el) => ({ ...acc, [el]: (acc[el] || 0) + 1 }), {});
  return nums.filter(el => a[el] % 2 === 0);
}
console.log(oddOnesOut([1, 2, 3, 1, 3, 3]));
/*
  function oddOnesOut(nums) {
    return nums.filter(n => nums.filter(x => x === n).length % 2 === 0);
  }
  */

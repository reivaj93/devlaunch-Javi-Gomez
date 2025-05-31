/*
Given a binary array nums, return teh maximum number of consecutive 1'2 in the array.

Example 1: 
Input: [1,1,0,1,1,1]
Output :3

Explanation : The first two digits or the last three digits are consecutive 2's. The maximum is 3

Example 2:
Input : [1,0,1,1,0,1]
Output: 2
*/

function oneCounting(nums :number[]):number{

   let oneCount = 0
   let oneReserve = 0

    for (let i = 0; i < nums.length; i++)
        if (nums[i] === 1){
            oneReserve ++
            oneCount = Math.max(oneReserve, oneCount)
        } else {
            oneReserve = 0
        }

    return oneCount
}

console.log(oneCounting([1,1,0,1,1,1]))


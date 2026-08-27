class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for(let i = 0; i < nums.length; i++){
            let diff = target - nums[i]
            let diffIndex = nums.indexOf(diff, i + 1)
            
            if(diffIndex !== -1){
                return [i, diffIndex]
            }

        }


    }
}

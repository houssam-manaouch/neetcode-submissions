class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */

    hasDuplicate(nums) {
        let arr = []
        for(let i = 0; i < nums.length; i++){
            if(!arr.includes(nums[i])){
                arr.push(nums[i])
            } else {
                return true
            }
        }
        return false
    }
    
};

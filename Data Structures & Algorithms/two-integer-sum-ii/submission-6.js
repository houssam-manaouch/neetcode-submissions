class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const n = numbers.length

        let l = 0
        let r = n - 1

        while (numbers[l] + numbers[r] != target) {
            if (numbers[l] + numbers[r] > target) {
                r -= 1
            } else {
                l += 1
            }
        }
        return [l+1, r+1]
    }
}

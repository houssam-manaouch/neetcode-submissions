class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */

    topKFrequent(nums, k) {
        let freq = new Map();
        for (let num of nums){
            freq.set(num, (freq.get(num)  || 0  )+ 1)
        }
        let freqSorted = [...freq.entries()].sort((a, b) => b[1] - a[1])
        let result = []
        for (let i = 0; i < k; i++){
            result.push(freqSorted[i][0])
        }
        return result
    }
}
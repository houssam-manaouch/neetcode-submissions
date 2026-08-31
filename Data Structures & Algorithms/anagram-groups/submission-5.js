class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const result = {}
        for (let str of strs) {
            const sorted = str.split('').sort().join('')
            if (!result[sorted]) {
                result[sorted] = []
            }
            result[sorted].push(str)
        }
        return Object.values(result)
    }
}

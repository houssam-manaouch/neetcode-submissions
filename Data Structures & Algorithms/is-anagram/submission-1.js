class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length){
            return false
        } else {
            return [...s].sort().join("") === [...t].sort().join("")
        }

    }
}
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
            let sArr = [];
            let tArr = [];
            for(let i = 0; i < s.length; i++){
                sArr.push(s.charAt(i))
                tArr.push(t.charAt(i))
            }
            sArr.sort()
            tArr.sort()

            return sArr.join("") === tArr.join("")
        }

    }
}
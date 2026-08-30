class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let updated = s.toLowerCase().replaceAll(' ', '').replace(/\W/g, '')
        let reverseUpdated = updated.split("").reverse().join("");

        return updated == reverseUpdated

    }
}

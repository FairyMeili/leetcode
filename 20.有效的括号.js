/* 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
   有效字符串需满足：
   左括号必须用相同类型的右括号闭合。
   左括号必须以正确的顺序闭合。
   注意空字符串可被认为是有效字符串。
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    var list = s.replace(" ", "").split("");
    var arr = []
    var obj = {
        '(': ")",
        '{': '}',
        '[': ']'
    }
    for (i of list) {
        if (i in obj) {
            arr.push(i)
        } else if (i !== obj[arr.pop()]) {
            return false
        }
    }
    return !arr.length
};
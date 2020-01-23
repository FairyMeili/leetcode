/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    var pathList = path.split("/");
    var arr = []

    for (let item of pathList) {
        if (item) {
            if (item === '..') {
                arr.pop()
            } else if (item !== '.') {
                arr.push(item);
            }
        }
    }
    return '/' + arr.join('/');
};
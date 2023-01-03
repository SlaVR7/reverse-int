module.exports = function reverse (n) {
    let rev;
    rev = Number(String(Math.abs(n)).split('').reverse().join(''));
    return rev;
}

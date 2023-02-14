module.exports = function reverse (n) {
const a = Math.abs(n)
const b = a.toString()
const c = b.split('')
const d = c.reverse()
const e = d.join('')
const f = +e
return f;
}

import * as date from './mod.js';
import test from '../test/mod.js'

console.log(new Date().toISOString())
console.log(date.isoDateTime())
let testDate = '2021-02-03 00:00:00'
test.equal('iso', date.isoDateTime(testDate), new Date(Date.parse(testDate)).toISOString())
test.equal('from', date.from(testDate), new Date(Date.parse(testDate)))
test.equal('copy', date.copy(date.from(testDate)), new Date(Date.parse(testDate)))
test.equal('format', date.format(date.from(testDate), 'DDDD, !D. MMMM YYYY'), 'Wednesday, 3. February 2021')
test.equal('week', date.weekNumber(date.from(testDate)), { "year": 2021, "week": 5 })
test.equal('week', date.weekNumber(date.from('2021-01-01')), { "year": 2020, "week": 53 })

// let d = new Date()
// console.log(d.hour, d.minute, d.second)
// console.log('week', d.weekNumber)
// console.log(d.year, d.month, d.day)
// console.log('format',d.format('DDD., DD.','en-US'))
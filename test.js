import date from './mod.js';
import test from '../test/mod.js'

test.equal('from', date.from('2021-02-03'), new Date(Date.parse('2021-02-03')))
test.equal('copy', date.copy(date.from('2021-02-03')), new Date(Date.parse('2021-02-03')))
test.equal('format', date.format(date.from('2021-02-03'), 'DDDD, !D. MMMM YYYY'), 'Wednesday, 3. February 2021')
test.equal('week', date.weekNumber(date.from('2021-02-03')), {"year":2021,"week":5})
test.equal('week', date.weekNumber(date.from('2021-01-01')), {"year":2020,"week":53})

// let d = new Date()
// console.log(d.hour, d.minute, d.second)
// console.log('week', d.weekNumber)
// console.log(d.year, d.month, d.day)
// console.log('format',d.format('DDD., DD.','en-US'))
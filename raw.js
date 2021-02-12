
import date from './raw.mjs';

Object.defineProperties(Date.prototype, {
	format: { value: function (f, l) { return date.format(this, f, l) } },
	weekNumber: { get: function () { return date.getWeekNumber(this) } },
	year: { get: function () { return String(this.getFullYear()) } },
	month: { get: function () { return String(this.getMonth() + 1).padStart(2, '0') } },
	day: { get: function () { return String(this.getDate()).padStart(2, '0') } },
	hour: { get: function () { return String(this.getHours()).padStart(2, '0') } },
	minute: { get: function () { return String(this.getMinutes()).padStart(2, '0') } },
	second: { get: function () { return String(this.getSeconds()).padStart(2, '0') } },
	date: { get: function () { return this.toISOString().slice(0, 10) } },
	time: { get: function () { return this.toISOString().slice(11, 19) } },
});
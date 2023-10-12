/* Your Code Here */
// initial function
function hoursWorked(timeIn, timeOut){
    const minutesIn = new Date(timeIn).getMinutes();
    const minutesOut = new Date(timeOut).getMinutes();
    const timeWorked = (new Date(timeOut) - new Date(timeIn))/ (1000*60*60)
    const minutesInWork = (minutesIn / 60) + (minutesOut / 60)
    return timeWorked - minutesInWork
}
//array of the employee record
function createEmployeeRecord(arr){
    return{
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}
// array of the employee record array
function createEmployeeRecords(array){
    return arrays.map(arr => createEmployeeRecord(arr))

}
//
function createTimeInEvent(calenderDay){
    const [date, hour] = calenderDay.split('')
    this.timeInEvents.push({
        type: "TimeIn",
        date: date,
        hour: parseInt(hour),

    })
    return this;
}

function createTimeOutEvent(calenderDay){
    const [date, hour] = calenderDay.split('')
    this.timeOutEvents.push({
        type:"TimeOut",
        date: date,
        hour:parseInt(hour)
    })
    return this;
}

function hoursWorkedOnDate(date){
    const findTimeInEvent = this.timeInEvents.find((event)=>{return event.date === date})
    const findTimeOutEvent =this.timeOutEvents.find((event)=> {return event.date===date});
    return hoursWorked(findTimeInEvent.hour, timeInEvents.hour);
}

function wagesEarnedOnDate(date){
    const timeWorked = hoursWorkedOnDate.call(this, date)
    return timeWorked * this.payPerHour;

}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


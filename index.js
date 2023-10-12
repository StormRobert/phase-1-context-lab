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

function allWagesFor(){
    const dateWorked = this.timeInEvents.map( event=> event.date)
    return dateWorked.reduce((totalIncome, date) => {
        return totalIncome + wagesEarnedOnDate.call(this,date)
    },  
    0)
}

function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((totalPayroll, employee) =>{
        return totalPayroll + allWagesFor.call(employee)

    },
    0)
}

function hoursWorkedOnDate(date){
    const findTimeInEvent = this.timeInEvents.find((event)=>{return event.date === date})
    const findTimeOutEvent =this.timeOutEvents.find((event)=> {return event.date===date})
    const timeWorked = (findTimeOutEvent - findTimeInEvent.hour) / 100;
    return timeWorked
}



function wagesEarnedOnDate(date){
    const timeWorked = hoursWorkedOnDate.call(this, date)
    return timeWorked * this.payPerHour;

}

function allWagesFor(){
    const dateWorked = this.timeInEvents.map( event=> event.date)
    return dateWorked.reduce((totalIncome, date) => {
        return totalIncome + wagesEarnedOnDate.call(this,date)
    },  
    0)
}
function findEmployeeByFirstName(collection, firstNameString){
   // return collection.filter((employee) => {return employee.firstName === firstNameString })[0];
   return collection.find(employee => employee.firstName === firstNameString)
}

module.exports = {
    createEmployeeRecord,
    createEmployeeRecords,
    createTimeInEvent,
    createTimeOutEvent,
    hoursWorkedOnDate,
    wagesEarnedOnDate,
    allWagesFor,
    calculatePayroll
}


 //rewrote it


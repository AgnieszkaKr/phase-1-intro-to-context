const createEmployeeRecord =(arr)=>{
    let employee = {
        firstName:arr[0],
        familyName:arr[1],
        title:arr[2],
        payPerHour:arr[3],
        timeInEvents:[],
        timeOutEvents:[],
    }
    return employee
}

const createEmployeeRecords =(arr)=>{
    let employeesArr=[]
    arr.forEach(element => {
        let record = createEmployeeRecord(element)
       employeesArr.push(record)
        
    });
    return employeesArr
}

const createTimeInEvent =(employeeObj, dateStamp)=>{
    let employeeRecord = employeeObj
    let timeIn = {
        type: "TimeIn",
        hour: parseInt(dateStamp.substr(11, 14)),
        date: dateStamp.substr(0, 10)
    }
    // console.log("hour", dateStamp.substr(11, ))

    employeeRecord.timeInEvents.push(timeIn)
    
    return employeeRecord
}

const createTimeOutEvent =(employeeObj, dateStamp)=>{
    let employeeRecord = employeeObj
    let timeOut ={
        type: "TimeOut",
        hour: parseInt(dateStamp.substr(11, 14)),
        date: dateStamp.substr(0, 10)
    }
    
    employeeRecord.timeOutEvents.push(timeOut)

    return employeeRecord
}


const hoursWorkedOnDate =(employeeObj, date)=>{
   let hoursWorked 
    for(let employeeIn of employeeObj.timeInEvents){
        if (employeeIn.date === dateStamp){
            for(let employeeOut of employeeObj.timeOutEvents){
                if(employeeOut.date ===date){
                hoursWorked = employeeOut.hour-employeeIn.hour   
                }
            }
        }
    }
    return employeeRecord
}

const wagesEarnedOnDate = (employeeObj, date) =>{



    return payOwed
}

// let dateStamp = "YYYY-MM-DD HHMM"
// console.log("hour", dateStamp.substr(11,2 ))

        
            
            
   

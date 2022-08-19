function saturdayFun ( activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

saturdayFun()


function mondayWork ( activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

mondayWork()

function wrapAdjective (d = "*"){
    let result = function (a= 'a hard worker'){
       return `You are ${d}${a}${d}!`
    }
    return result
   }
  


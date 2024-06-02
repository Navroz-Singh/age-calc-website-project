console.log("hello")

let givenday;
let givenmonth;
let givenyear;


let today = new Date()
let currdate = moment(new Date())
let currday = today.getDate();
let currmonth = today.getMonth() + 1;
let curryear = today.getFullYear();

let DaysInMonth;




function calculateAge(date1, date2) {
    var years = date2.diff(date1, 'years');
    date1.add(years, 'years');

    var months = date2.diff(date1, 'months');
    date1.add(months, 'months');

    var days = date2.diff(date1, 'days');

    return {
        years: years,
        months: months,
        days: days
    };
}

var age;







//appending value to the day, month and year input taken
function valuesfrominput(){
    
    document.querySelector(".dayinp").children[1].addEventListener("input", (e) => {
        givenday = Number.parseInt(e.target.value);
    })
    
    document.querySelector(".monthinp").children[1].addEventListener("input", (e) => {
        givenmonth = Number.parseInt(e.target.value);
    })
    
    document.querySelector(".yearinp").children[1].addEventListener("input", (e) => {
        givenyear = Number.parseInt(e.target.value);
    })
}
valuesfrominput()



let worked = true;




document.querySelector(".arrow").children[0].addEventListener('click',(e)=>{
    var givendate = moment(new Date(givenyear, givenmonth-1, givenday))
    
    // Now we check if all the values have been input and no value is undefined
    {     
        if(givenday==undefined){
            document.getElementsByTagName("span")[0].innerHTML = "This field is required"
            document.getElementsByTagName('input')[0].style.border = "1px solid hsl(0, 100%, 67%)"
            document.querySelector(".day").style.color = "hsl(0, 100%, 67%)"
            worked = false;
        }else{
            document.getElementsByTagName("span")[0].innerHTML = ""
            document.getElementsByTagName('input')[0].style.border = "1px solid hsl(259, 100%, 65%)"
            document.querySelector(".day").style.color = "hsl(0, 1%, 44%)"
            worked = true
        }
        
        if(givenmonth==undefined){
            document.getElementsByTagName("span")[1].innerHTML = "This field is required"
            document.getElementsByTagName('input')[1].style.border = "1px solid hsl(0, 100%, 67%)"
            document.querySelector(".month").style.color = "hsl(0, 100%, 67%)"
            worked = false
        }else{
            document.getElementsByTagName("span")[1].innerHTML = ""
            document.getElementsByTagName('input')[1].style.border = "1px solid hsl(259, 100%, 65%)"
            document.querySelector(".month").style.color = "hsl(0, 1%, 44%)"
            worked = true
        }
        
        if(givenyear==undefined){
            document.getElementsByTagName("span")[2].innerHTML = "This field is required"
            document.getElementsByTagName('input')[2].style.border = "1px solid hsl(0, 100%, 67%)"
            document.querySelector(".year").style.color = "hsl(0, 100%, 67%)"
            worked = false
        }else{
            document.getElementsByTagName("span")[2].innerHTML = ""
            document.getElementsByTagName('input')[2].style.border = "1px solid hsl(259, 100%, 65%)"
            document.querySelector(".year").style.color = "hsl(0, 1%, 44%)"
            worked = true
        }
        
    }
    
    //Now we will check if the dates entered are in range
    {
        if(givenday>31){
            document.getElementsByTagName("span")[0].innerHTML = "Must be a valid day"
            document.getElementsByTagName('input')[0].style.border = "1px solid hsl(0, 100%, 67%)"
            document.querySelector(".day").style.color = "hsl(0, 100%, 67%)"
            worked = false
        }else{
            document.getElementsByTagName("span")[0].innerHTML = ""
            document.getElementsByTagName('input')[0].style.border = "1px solid hsl(259, 100%, 65%)"
            document.querySelector(".day").style.color = "hsl(0, 1%, 44%)"
            worked = true
        }
        
        if(givenmonth>12){
            document.getElementsByTagName("span")[1].innerHTML = "Must be a valid month"
            document.getElementsByTagName('input')[1].style.border = "1px solid hsl(0, 100%, 67%)"
            document.querySelector(".month").style.color = "hsl(0, 100%, 67%)"
            worked = false
        }else{
            document.getElementsByTagName("span")[1].innerHTML = ""
            document.getElementsByTagName('input')[1].style.border = "1px solid hsl(259, 100%, 65%)"
            document.querySelector(".month").style.color = "hsl(0, 1%, 44%)"
            worked = true
        }
        
        if(givenyear>curryear){
            document.getElementsByTagName("span")[2].innerHTML = "Must be in the past"
            document.getElementsByTagName('input')[2].style.border = "1px solid hsl(0, 100%, 67%)"
            document.querySelector(".year").style.color = "hsl(0, 100%, 67%)"
            worked = false
        }else{
            document.getElementsByTagName("span")[2].innerHTML = ""
            document.getElementsByTagName('input')[2].style.border = "1px solid hsl(259, 100%, 65%)"
            document.querySelector(".year").style.color = "hsl(0, 1%, 44%)"
            worked = true
        }
        
    }

    
    //checking if the date entered is valid
    {
        if(givenyear > curryear || (givenyear == curryear && givenmonth > currmonth) || (givenyear == curryear && givenmonth == currmonth && givenday > currday)){
            document.getElementsByTagName("span")[0].innerHTML = "Must be a valid date"
            document.getElementsByTagName('input')[0].style.border = "1px solid hsl(0, 100%, 67%)"
            document.querySelector(".day").style.color = "hsl(0, 100%, 67%)"
            document.getElementsByTagName("span")[1].innerHTML = ""
            document.getElementsByTagName('input')[1].style.border = "1px solid hsl(0, 100%, 67%)"
            document.querySelector(".month").style.color = "hsl(0, 100%, 67%)"
            document.getElementsByTagName("span")[2].innerHTML = ""
            document.getElementsByTagName('input')[2].style.border = "1px solid hsl(0, 100%, 67%)"
            document.querySelector(".year").style.color = "hsl(0, 100%, 67%)"
            worked = false
        }else{
            document.getElementsByTagName("span")[0].innerHTML = ""
            document.getElementsByTagName('input')[0].style.border = "1px solid hsl(259, 100%, 65%)"
            document.querySelector(".day").style.color = "hsl(0, 1%, 44%)"
            document.getElementsByTagName("span")[1].innerHTML = ""
            document.getElementsByTagName('input')[1].style.border = "1px solid hsl(259, 100%, 65%)"
            document.querySelector(".month").style.color = "hsl(0, 1%, 44%)"
            document.getElementsByTagName("span")[2].innerHTML = ""
            document.getElementsByTagName('input')[2].style.border = "1px solid hsl(259, 100%, 65%)"
            document.querySelector(".year").style.color = "hsl(0, 1%, 44%)"
            worked = true
        }
    }
    
    
    DaysInMonth = new Date(givenyear, givenmonth, 0).getDate();


    {
        if(givenday>DaysInMonth){
            document.getElementsByTagName("span")[0].innerHTML = "Must be a valid date"
            document.getElementsByTagName('input')[0].style.border = "1px solid hsl(0, 100%, 67%)"
            document.querySelector(".day").style.color = "hsl(0, 100%, 67%)"
            document.getElementsByTagName("span")[1].innerHTML = ""
            document.getElementsByTagName('input')[1].style.border = "1px solid hsl(0, 100%, 67%)"
            document.querySelector(".month").style.color = "hsl(0, 100%, 67%)"
            document.getElementsByTagName("span")[2].innerHTML = ""
            document.getElementsByTagName('input')[2].style.border = "1px solid hsl(0, 100%, 67%)"
            document.querySelector(".year").style.color = "hsl(0, 100%, 67%)"
            worked = false
        }else{
            document.getElementsByTagName("span")[0].innerHTML = ""
            document.getElementsByTagName('input')[0].style.border = "1px solid hsl(259, 100%, 65%)"
            document.querySelector(".day").style.color = "hsl(0, 1%, 44%)"
            document.getElementsByTagName("span")[1].innerHTML = ""
            document.getElementsByTagName('input')[1].style.border = "1px solid hsl(259, 100%, 65%)"
            document.querySelector(".month").style.color = "hsl(0, 1%, 44%)"
            document.getElementsByTagName("span")[2].innerHTML = ""
            document.getElementsByTagName('input')[2].style.border = "1px solid hsl(259, 100%, 65%)"
            document.querySelector(".year").style.color = "hsl(0, 1%, 44%)"
            worked = true
        }
    }

    
    if(worked === true){
        age = calculateAge(givendate,currdate);
        document.querySelector(".yearans").innerHTML = age.years
        document.querySelector(".monthans").innerHTML = age.months
        document.querySelector(".dayans").innerHTML = age.days

    }




})





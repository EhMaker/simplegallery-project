let year = prompt( "Enter a Year:");
if (isNaN(year)){
    alert("please enter a valid year.")
}else{
    alert(year +" is not a leap year.");
    if((year%4===0 && year%100 !==0)|| (year%400===0)){
        alert( year + " is a leap year.");
    }else{
    }
}
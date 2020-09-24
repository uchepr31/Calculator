// this function allows the calculator to display more than one number at a time.
function uche(t){
    document.cal.display.value = document.cal.display.value + t ; 
}

// this function allows the calculator to carry out the CLEAR ALL operation.
function clean(){
    document.cal.display.value = "";
}

// this function allows the calculator to carry out the DELETE one operation.
function del(){
    var dp;
    dp = document.cal.display.value;
    document.cal.display.value = dp.substring(0, dp.length-1);
}

// this function allows the calculator to carry out the equals operation.
function eqn(){
    var a;
    a = document.cal.display.value;
    document.cal.display.value = eval(a);
}

function isALeap(year){

    if((year%4==0)&&(year%100!=0))
    {
        return year + "is a leap year";
    }
    elseif((year%4==0)&&(year%100==0)&&(year%400==0))
    {
        return year + "is a leap year";
    }
    }
    
    function main(){
        isALeap(2021); 
    }
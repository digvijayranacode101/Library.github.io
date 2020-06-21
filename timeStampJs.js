var stamptime = '';
var MakeStamp= function(){

    var year=(new Date().getFullYear())
    var month=(new Date().getMonth())
    var date=(new Date().getDate())
    var hour=(new Date().getHours())
    var min=(new Date().getMinutes())
    var sec=(new Date().getSeconds())
    
     function stamp(year,month,date,hour,min,sec){
        this.year= year,
        this.month = function(){
            if (month<=9){
                return this.month= "0"+month.toString();
            }else {return this.month = month.toString()};
        },
        this.date = function(){
            if (date<=9){
                return this.date= "0"+date.toString();
            }else { return this.date = date.toString()};
    
        }
        this.hour = function(){
            if (hour<=9){
                return this.hour= "0"+hour.toString();
            }else { return this.hour = hour.toString()};
    
        }
        this.min = function(){
            if (min<=9){
                return this.min= "0"+min.toString();
            }else { return this.min = min.toString()};
    
        }
        this.sec = function(){
            if (sec<=9){
                return this.sec= "0"+sec.toString();
            }else { return this.sec = sec.toString()};
    
        }
     }

    stamp1= new stamp(year,month,date,hour,min,sec)
    stamptime= stamp1.year+stamp1.month()+stamp1.date()+stamp1.hour()+stamp1.min()+stamp1.sec()
    return stamptime;

}
//document.getElementById("para").innerHTML= MakeStamp();
//document.getElementById("btn").addEventListener("click",MakeStamp())

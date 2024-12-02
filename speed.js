function toTestSpeed(){
    let speed = prompt("enter vehicle speed","0");
    const maxSpeed = 70;
    const speedPerPoint = 5;
    let demeritPoints = 0;
    let  message;
    if (speed <= maxSpeed) {
     console.log("ok"); 
    }
    else {
        demeritPoints = Math.floor((speed-maxSpeed)/speedPerPoint);
        if (demeritPoints >12) {
            console.log("license suspended");
        }
        else {
            console.log("your demerit points is " +demeritPoints);
        }
    
    }
    return message;
    }
    toTestSpeed()
    

// Students Late Penalty System.
// Class start 10:00AM.
// To make calculation easy convert Hours to Minutes (10*60=600 minutes).
// "Allow" until 5 minutes late.
// After that for each 5 Minutes late penalty 1 point.
// For each 1 point Fine 10Tk.
// If students are late more than 30 minutes late, "Don't Allow".

// Note: I allow students until 5 minute late. But when I apply fine, it will count on total late time.

function checkAttendTime(minutes) {
    let classStart = 600;
    let penaltyTime = 5;
    let finePerPoint = 10;
    let late = minutes - classStart;
    
    if (minutes<=classStart+penaltyTime) {
      return 'Allow';
    }

    else if (late > 30) {
      return 'Do Not Allow';
    }  

    let point=Math.floor(late/penaltyTime);
      return point*finePerPoint + 'Tk Fine';

}

let fine = checkAttendTime(610);
console.log(fine);

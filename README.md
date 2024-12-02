# Student Marks Grading Function

## Description

The `studentMarks()` function is a simple JavaScript function that takes the user's input marks through a prompt, checks the marks range, and returns the corresponding grade. The function categorizes marks into five grades based on predefined ranges:

- **A**: For marks greater than 79 and less than or equal to 100.
- **B**: For marks between 60 and 79 (inclusive).
- **C**: For marks between 49 and 59 (inclusive).
- **D**: For marks between 40 and 49 (inclusive).
- **E**: For marks less than 40.
- **Invalid Marks**: For non-numeric input or invalid marks.

## Function Overview

### `studentMarks()`

- **Input**: The function prompts the user to enter marks as a string.
- **Output**: The function returns the corresponding grade (A, B, C, D, E, or "invalid marks").

### Code

```javascript
function studentMarks() {
    let marks = prompt("Enter marks", "0");
    let grade = "";
    if (marks > 79 && marks <= 100) {
        grade = "A";
    } else if (marks >= 60 && marks <= 79) {
        grade = "B";
    } else if (marks >= 49 && marks <= 59) {
        grade = "C";
    } else if (marks >= 40 && marks <= 49) {
        grade = "D";
    } else if (marks < 40) {
        grade = "E";
    } else {
        grade = "invalid marks";
    }
    return grade;
}

console.log(studentMarks());


# Vehicle Speed Testing Function

## Description

The `toTestSpeed()` function prompts the user to enter a vehicle's speed and checks whether the speed exceeds the speed limit. If the speed is over the speed limit, the function calculates the number of demerit points based on the excess speed. If the demerit points exceed a certain threshold, the function will suspend the driver's license; otherwise, it will return the calculated demerit points.

## Function Overview

### `toTestSpeed()`

- **Input**: The function prompts the user to enter the vehicle's speed.
- **Output**: 
  - If the speed is within the limit, it logs `"ok"`.
  - If the speed exceeds the limit, it calculates demerit points and logs either the demerit points or a `"license suspended"` message if the points exceed 12.

### Code

```javascript
function toTestSpeed() {
    let speed = prompt("Enter vehicle speed", "0");
    const maxSpeed = 70;
    const speedPerPoint = 5;
    let demeritPoints = 0;
    let message;
    
    if (speed <= maxSpeed) {
        console.log("ok"); 
    } else {
        demeritPoints = Math.floor((speed - maxSpeed) / speedPerPoint);
        if (demeritPoints > 12) {
            console.log("license suspended");
        } else {
            console.log("Your demerit points are: " + demeritPoints);
        }
    }
    return message;
}

toTestSpeed();


# Net Salary Calculation Function

## Description

The `netSalary()` function calculates the monthly net salary based on the given gross salary. The function takes into account various deductions like PAYE (Pay As You Earn), SHIF (Shifting rate), NSSF (National Social Security Fund), and Housing Levy. It also applies a personal relief amount to calculate the final net pay. The deductions are applied based on different salary brackets, and the function returns the monthly net salary after all deductions.

## Function Overview

### `netSalary()`

- **Input**: The function prompts the user to input their gross salary.
- **Output**: The function calculates and logs the user's monthly net pay after all deductions, applying the relevant tax rates and personal relief based on their salary range.

### Code

```javascript
function netSalary() {
    let grossSalary = prompt("Enter gross salary", "0");
    let PAYE;
    let shifRate;
    let nssfRate;
    let housingLevy;
    const personalRelief = 2400;
    let netpay;

    if (grossSalary >= 0 && grossSalary <= 24000) {
        PAYE = (grossSalary * 10) / 100;
        shifRate = (grossSalary * 2.75) / 100;
        nssfRate = (grossSalary * 6) / 100;
        housingLevy = (grossSalary * 1.5) / 100;
        netpay = grossSalary - (PAYE + shifRate + nssfRate + housingLevy) + personalRelief;
        console.log("Your monthly net pay is: " + netpay);
    } else if (grossSalary > 24000 && grossSalary <= 32333) {
        PAYE = (grossSalary * 25) / 100;
        shifRate = (grossSalary * 2.75) / 100;
        nssfRate = (grossSalary * 6) / 100;
        housingLevy = (grossSalary * 1.5) / 100;
        netpay = grossSalary - (PAYE + shifRate + nssfRate + housingLevy) + personalRelief;
        console.log("Your monthly net pay is: " + netpay);
    } else if (grossSalary > 32333 && grossSalary <= 500000) {
        PAYE = (grossSalary * 30) / 100;
        shifRate = (grossSalary * 2.75) / 100;
        nssfRate = (grossSalary * 6) / 100;
        housingLevy = (grossSalary * 1.5) / 100;
        netpay = grossSalary - (PAYE + shifRate + nssfRate + housingLevy) + personalRelief;
        console.log("Your monthly net pay is: " + netpay);
    } else if (grossSalary > 500000 && grossSalary <= 800000) {
        PAYE = (grossSalary * 32.5) / 100;
        shifRate = (grossSalary * 2.75) / 100;
        nssfRate = (grossSalary * 6) / 100;
        housingLevy = (grossSalary * 1.5) / 100;
        netpay = grossSalary - (PAYE + shifRate + nssfRate + housingLevy) + personalRelief;
        console.log("Your monthly net pay is: " + netpay);
    } else if (grossSalary > 800000) {
        PAYE = (grossSalary * 35) / 100;
        shifRate = (grossSalary * 2.75) / 100;
        nssfRate = (grossSalary * 6) / 100;
        housingLevy = (grossSalary * 1.5) / 100;
        netpay = grossSalary - (PAYE + shifRate + nssfRate + housingLevy) + personalRelief;
        console.log("Your monthly net pay is: " + netpay);
    } else {
        console.log("Invalid input");
    }

    return netpay;
}

netSalary();

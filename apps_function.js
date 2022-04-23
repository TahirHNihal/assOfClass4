// Age Pireod Function

function agePireod(name, age) {
  let pireod = "";

  if (age >= 0 && age <= 10) {
    pireod = "Children";
  } else if (age >= 11 && age <= 17) {
    pireod = "Teenagers";
  } else if (age >= 18 && age <= 30) {
    pireod = "Young";
  } else if (age > 31) {
    pireod = "Old";
  }

  console.log(`
    Hi, ${name}, your age pireod is ${pireod}.
    `);
}

// Area Calculation Function

function rectArea(length, width) {
  let recAreaCal = length * width;
  console.log(`Your rectangle are is ${recAreaCal}`);
}
// Square Area Calculation Function

function sqrArea(side) {
  let sideAreaCal = Math.pow(side, 2);
  console.log(`Your square result is ${sideAreaCal}`);
}
// Triangle Area Calculation Function

function triArea(base, height) {
  let triAreaCal = (base * height) / 2;
  console.log(`Your triangle area is ${triAreaCal}`);
}

// GPA, Grade Result Calculation Function

function getGpa(marks) {
  let gpa;
  if (marks >= 0 && marks <= 32) {
    gpa = "0.00";
  } else if (marks >= 33 && marks <= 39) {
    gpa = "1.00";
  } else if (marks >= 40 && marks <= 49) {
    gpa = "2.00";
  } else if (marks >= 50 && marks <= 59) {
    gpa = "3.00";
  } else if (marks >= 60 && marks <= 69) {
    gpa = "3.50";
  } else if (marks >= 70 && marks <= 79) {
    gpa = "4.00";
  } else if (marks >= 80 && marks <= 100) {
    gpa = "5.00";
  } else {
    gpa = "Invalide";
  }
  return gpa;
}

function getGrade(marks) {
  let grade;
  if (marks >= 0 && marks <= 32) {
    grade = "F";
  } else if (marks >= 33 && marks <= 39) {
    grade = "D";
  } else if (marks >= 40 && marks <= 49) {
    grade = "C";
  } else if (marks >= 50 && marks <= 59) {
    grade = "B";
  } else if (marks >= 60 && marks <= 69) {
    grade = "A-";
  } else if (marks >= 70 && marks <= 79) {
    grade = "A";
  } else if (marks >= 80 && marks <= 100) {
    grade = "A+";
  } else {
    grade = "Invalide";
  }
  return grade;
}

// An age calculator function

function ageCal(age) {
  let calAge = 2022 - age;
  console.log(`Hi ${uName}, your are now ${calAge} years old.`);
}

// A BMI function

function getBMI(bmi) {
  let bmiCat;
  if (bmi <= 18.5) {
    bmiCat = "underweight";
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    bmiCat = "normal weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    bmiCat = "overweight";
  } else if (bmi >= 30) {
    bmiCat = "obesity";
  } else {
    bmiCat = "Undifind";
  }
  console.log(`Hi ${uName}, you are ${bmiCat} & your bmi is ${uBmi}`);
  return bmiCat;
}

// A currency converter function

function currencyConvert(amount, currenName) {
  let convertMoney;
  if (currenName == "usd") {
    convertMoney = amount * 86.78;
  } else if (currenName == "cad") {
    convertMoney = amount * 69.46;
  } else if (currenName == "pound") {
    convertMoney = amount * 113.55;
  } else if (currenName == "euro") {
    convertMoney = amount * 94.64;
  }
  console.log(`Hi, your converted ${currenName} is ${convertMoney} Taka`);
  return convertMoney;
}

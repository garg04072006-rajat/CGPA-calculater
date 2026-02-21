function gotosem3() {
  window.location.href = "index.html";
}
function limitmarks(input) {
  let value = Number(input.value);
  if (value > 100) {
    input.value = 100;
  }
  if (value < 0) {
    input.value = 0;
  }
}
function GradePoints(marks) {
  if (marks >= 90) return 10;
  else if (marks >= 80) return 9;
  else if (marks >= 70) return 8;
  else if (marks >= 60) return 7;
  else if (marks >= 50) return 6;
  else if (marks >= 40) return 5;
  else if (marks >= 30) return 4;
  else if (marks >= 20) return 3;
  else if (marks >= 10) return 2;
  else return 1;
}
function percentage() {
  let name1 = document.getElementById("nme").value;
  let input = [
    "sub1",
    "sub2",
    "sub3",
    "sub4",
    "sub5",
    "sub6",
    "sub7",
    "sub8",
    "sub9",
  ];
  for (let id of input) {
    let inputbox = document.getElementById(id);
    if (inputbox.value === "") {
      inputbox.value = 0;
    }
  }
  let sub11 = Number(document.getElementById("sub1").value) || 0;
  let sub22 = Number(document.getElementById("sub2").value) || 0;
  let sub33 = Number(document.getElementById("sub3").value) || 0;
  let sub44 = Number(document.getElementById("sub4").value) || 0;
  let sub55 = Number(document.getElementById("sub5").value) || 0;
  let sub66 = Number(document.getElementById("sub6").value) || 0;
  let sub77 = Number(document.getElementById("sub7").value) || 0;
  let sub88 = Number(document.getElementById("sub8").value) || 0;
  let sub99 = Number(document.getElementById("sub9").value) || 0;
  let total =
    sub11 + sub22 + sub33 + sub44 + sub55 + sub66 + sub77 + sub88 + sub99;
  let percentage = total / 9;
  let marks = [sub11, sub22, sub33, sub44, sub55, sub66, sub77, sub88, sub99];

  let credits = [3, 3, 3, 3, 3, 3, 1, 1, 1];
  let totalcredits = 0;
  let totalCiGi = 0;

  for (let i = 0; i < marks.length; i++) {
    let gp = GradePoints(marks[i]);
    totalCiGi += gp * credits[i];
    totalcredits += credits[i];
  }

  let ktcount = 0;
  for (let m of marks) {
    if (m < 35) {
      ktcount++;
    }
  }

  let grade = "";
  if (ktcount > 3) {
    grade = "Fail";
  } else if (ktcount > 0) {
    grade = ktcount + "KT";
  } else {
    if (percentage >= 90) {
      grade = "A+";
    } else if (percentage >= 75) {
      grade = "A";
    } else if (percentage >= 60) {
      grade = "B";
    } else if (percentage >= 50) {
      grade = "C";
    } else if (percentage >= 35) {
      grade = "D";
    } else {
      grade = "Fail";
    }
  }

  let sgpa = totalCiGi / totalcredits;

  document.getElementById("box").innerHTML =
    "Name : " +
    name1 +
    "<br>" +
    "Total marks : " +
    total +
    "/900" +
    "<br>" +
    "Percentage : " +
    percentage.toFixed(2) +
    "%" +
    "<br>" +
    "Grade : " +
    grade +
    "<br>" +
    "SGPA : " +
    sgpa.toFixed(2);
}
window.onload = function () {
  let inputs = document.querySelectorAll("input[type='number']");
  inputs.forEach((input) => (input.value = ""));

  document.getElementById("nme").value = "";
};

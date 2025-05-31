
var height = Number(prompt("enter your height in meter"));
var weight = Number(prompt("enter your weight in kg"));

var bmi = (weight / (height * height));
var result = "";

if (bmi < 18.5)
{ result = "Underweight" }
else if (18.5 < 24.9)
{ result = "Normal weight" }
else if (25.0 < 29.9)
{ result = "Over weight" }

document.write("your BMI is " + bmi + "" + result + "");
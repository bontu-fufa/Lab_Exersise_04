let calcBmi = function(weight,height){
    var bmi = ((weight) / (height*height)).toFixed()
 
    if (bmi < 18.5 ){
        return bmi + " BMI Under weight"
    }
    else if (bmi < 24.5){
        return bmi + ' BMI Healthy weight'
    }
    return bmi + ' BMI Over weight'
 
 }

console.log(calcBmi(52,1.7))
console.log(calcBmi(52,1.6))
console.log(calcBmi(52,1.2))


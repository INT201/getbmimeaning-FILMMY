const { template } = require('@babel/core')
function calculateBMI (weight, height) {
  return weight/(height*height)
}
function getBMIMeaning(weight, height){
  let BMI = calculateBMI(weight, height) 
  if (BMI < 18.5){
      return "UnderWeight"
  }else if (BMI < 25) {
      return "Normal Weight"
  }else (BMI>25) 
      return "Overweight"
     
} 
module.exports = getBMIMeaning

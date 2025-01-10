//Anagram Detection
var isAnagram = function(test, original) {
    const sortedTest = test.toLowerCase().split('').sort().join('');
    const sortedOriginal = original.toLowerCase().split('').sort().join('');
    
    return sortedTest === sortedOriginal;
  };
  
  console.log(isAnagram("foefet", "toffee")); 
  console.log(isAnagram("Buckethead", "DeathCubeK")); 
//Odd or Even?
function oddOrEven(array) {
    const sum = array.reduce((acc, num) => acc + num, 0);
  
    return sum % 2 === 0 ? "even" : "odd";
  }
  
  console.log(oddOrEven([0]));  
  console.log(oddOrEven([0, 1, 4]));  
  console.log(oddOrEven([0, -1, -5]));
//Grasshopper - Grade book
function getGrade(s1, s2, s3) {
    const average = (s1 + s2 + s3) / 3; 
  
    if (average >= 90) {
      return 'A';
    } else if (average >= 80) {
      return 'B';
    } else if (average >= 70) {
      return 'C';
    } else if (average >= 60) {
      return 'D';
    } else {
      return 'F';
    }
  }
  
  console.log(getGrade(90, 92, 88)); 
  console.log(getGrade(85, 80, 88)); 
  console.log(getGrade(75, 70, 80)); 
  console.log(getGrade(60, 55, 65)); 
  console.log(getGrade(50, 60, 45)); 
//By 3, or not by 3? That is the question...
function divisibleByThree(str){
    let osszeg = 0;
    for (let i = 0; i < str.length; i++) {
        osszeg += +str[i];
    }
    
    return osszeg % 3 == 0;
    }
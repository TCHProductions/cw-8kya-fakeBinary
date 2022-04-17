/*Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string*/

function fakeBin(x){
    // Create Empty String
    let result = ''
    // For Loop using the length of 'x' as it's end parameter
    for (let i = 0; i < x.length; i++){
    // if x is greater than 5, replace with 1.
      if (x[i] >= 5){
        result += '1'
      }
      // if x is less than 5 replace with 0
      else {
        result += '0'
      }
      //return empty string
    } return result
}
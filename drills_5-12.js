// 5 URL-ify a string
// write a method that takes in a string and rpelaces all empty spaces with '%20'

const URLify = string => {
    const arr = string.split('')
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === ' ') {
        arr[i] = '%20'
      }
    }
    return arr.join('')
  }
// console.log(URLify("tauhida parveen"))
// console.log(URLify("www.thinkful.com /tauh ida parv een"));
// console.log(URLify("llsdkhfuiah fhuilst irhtijpeoiru hkgj jhguk yfguk kyfy dcfjhyt ytjdfyut ytrdutre trdeuyjtryui treurt5rw yu5et tre dc d d g gh d d g gd d d gf gg df d d d f gg f d d d fg f d edd  f f f f f f f f f d d d d d d d d d d d  d d d d d idtu istdu oirtudj irsdugj odriug oiug o8tru orihsg iryt osighf oieryt oseirtyhg jkdghg ugklh iugh uitihui uyfgh uyghkj uyrt yut uyg t tg y y y fytjdyt  yut yut y tyt yt yut yt yt yt yt yt yt rytu yt rftrdt iugl")); //0.044 s
  
  // 6 Filter an array
  //Imagine you have an array of numbers. Write an algorithm to remove all numbers less than 5 from the array. DO NOT use Array's built-in .filter() method here; write the algorithm from scratch.
  const filterArray = (array, num) => {
    let outArr = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] >= num) {
        outArr.push(array[i]);
      }
    }
    return outArr;
  };
  
  // console.log(filterArray([4, 6, -3, 5, -2, 1], 5));
  
  // 7. Max sum in the array
  // You are given an array containing positive and negative integers. Write an algorithm which will find the largest sum in a continuous sequence.
  const maxSum = (arr) => {
    let currentMax = 0;
    let maxSoFar = 0;
  
    for (var i = 0; i < arr.length; i++) {
      // Set current max to either 0 or the currentMax + this index
      currentMax = Math.max(0, currentMax + arr[i]);
      // Set the absolute max to either the currentMax or itself
      maxSoFar = Math.max(currentMax, maxSoFar);
    }
    // Return our largest accumulative value
    return maxSoFar;
  };
  
  // console.log(maxSum([4, 6, -3, 5, -2, 1]));
  
  // 8. Merge arrays
  //Imagine you have 2 arrays which have already been sorted. Write an algorithm to merge the 2 arrays into a single array, which should also be sorted.
  const mergeArrays = (left, right) => {
    let mergedArr = [];
    let indexL = 0;
    let indexR = 0;
    let current = 0;
  
    //While our current value is lower than all indexes of both arrays
    while (current < left.length + right.length) {
      // check if we are out of items for left
      let isLeftDepleted = indexL >= right.length;
      // Check if we are out of items for right
      let isRightDepleted = indexR >= right.length;
  
      // If left array isn't depleted and right array IS depleted or right array's value is larger
      if (!isLeftDepleted && (isRightDepleted || left[indexL] < right[indexR])) {
        // Push our left array value to our merged array
        mergedArr[current] = left[indexL];
        // Increase our left array's index
        indexL++;
      } else {
        // push our right array value to our merged array
        mergedArr[current] = right[indexR];
        // increase our right array's index
        indexR++;
      }
      // Increase our counter, as a value was added
      current++;
    }
    console.log(mergedArr);
    return mergedArr;
  };
  
  //mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]);
  
  // 9. Remove characters
  const removeCharacters = (string, remove) => {
    let outString = "";
  
    // Helper function to see if a character is to be removed
    const isCharNull = (char) => {
      for (let i = 0; i < remove.length; i++) {
        if (char === remove[i]) {
          return true;
        }
      }
      return false;
    };
    
    for (let i = 0; i < string.length; i++) {
      if (!isCharNull(string[i])) {
        outString += string[i];
      }
    }
    return outString;
  };
  
  // console.log(
  //   removeCharacters("Battle of the Vowels: Hawaii vs. Grozny", "aeiou")
  // );
  
  // 10. Products
  // Given an array of numbers, write an algorithm to find out the products of every other number except the number at each index.
  // Input: [1, 3, 9, 4]   Output:[108, 36, 12, 27]
  

  function products(array) {
      let result = [];

      // We need to generate a product for each element in the array
      array.forEach(number => {
          let product = 1;
          // The product is the result of multiplying every element in the array except the one we are looking right now
          for (let el of array) {
              if (el !== number) {
                  product *= el;
              }
          }
          result.push(product)
      })

      return result;
  }
  
//   console.log(products([1, 3, 9, 4]));
  
  // 11. 2D array
  // Write an algorithm which searches through a 2D array, and whenever it finds a 0 should set the entire row and column to 0.

  
  // We'll have to iterate over element in the array to check for 0
    // If we hit a 0, we'll have to iterate height+width times

    function detonateZeroes(array) {
        let zeroes = []

        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array[i].length; j++) {
                if (array[i][j] === 0) {
                    zeroes.push([i, j])
                }
            }
        }

        zeroes.forEach(zero => {
            let row = zero[0];
            let column = zero[1];

            for (let i = 0; i < array.length; i++) {
                for (let j = 0; j < array[i].length; j++) {
                    if (i === row || j === column) {
                        array[i][j] = 0;
                    }
                }
            }
        })

        return array;
    }
    // console.log(detonateZeroes(
    //     [[1,0,1,1,0],
    //     [0,1,1,1,0],
    //     [1,1,1,1,1],
    //     [1,0,1,1,1],
    //     [1,1,1,1,1]]
    // ));
  
  
  // 12. String rotation
  // Given 2 strings, str1 and str2, write a program that checks if str2 is a rotation of str1.
  function isRotation(string1, string2) {
    let arr = string1.split('');
    for (let i = 0; i < arr.length; i++) {
        let temp = arr.shift();
        arr.push(temp);
        let rotation = arr.join('')

        if (rotation === string2) {
            return true;
        }
    }
    return false;
}

// console.log(isRotation('amazon', 'azonma'))
// // false
// console.log(isRotation('amazon', 'azonam'))
// // true
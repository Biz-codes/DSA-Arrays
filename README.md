# DSA-Arrays

## 1. Implement an Array class from scratch.

Walk through each step of implementing an array. Don't rush through this by copying and pasting the code samples. After you've walked through it and you understand the code of the Array class, hide the sample code and try writing the Array class from scratch using the memory module here for allocating memory.

Be sure to export the memory module and then import it using require.

See Array.js

## 2. Explore the push() method

Using the Array class you just created above, add an item to the array. Use the following function:

    function main(){
        Array.SIZE_RATIO = 3;

        // Create an instance of the Array class
        let arr = new Array();

        // Add an item to the array
        arr.push(3);

        console.log(arr);
    }

What is the length, capacity and memory address of your array?

    Array { length: 1, _capacity: 3, ptr: 0 }
    
Add the following in the main function and then print the array:

    ...
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);

What is the length, capacity and memory address of your array? Explain the result of your program after adding the new lines of code.

    Array { length: 6, _capacity: 12, ptr: 3 }

The length is 6, beacues we've pushed 6 items into the array. When we push the 3rd item (15), it triggers the if statement: `if (this.length >= this._capacity) {this._resize((this.length + 1) * Array.SIZE_RATIO)} Since the current length is 3, our computation is (3 + 1) * 3 (our size ratio). This works out to a capacity of 12, which is not exceeded. Them memory address is 3, because it started out at 1. The this._resize changed the memory address to 2, and the * Array.SIZE_RATIO changed it to 3.

## 3. Exploring the pop() method

Add the following in the main function and then print the array:

    ...
    arr.pop();
    arr.pop();
    arr.pop();

What is the length, capacity, and address of your array? Explain the result of your program after adding the new lines of code.

    Array { length: 3, _capacity: 12, ptr: 3 }

The length decreases when we pop off the last 3 values, but the capacity and the memory address have already been shifted by pushing, so they stay as they are.

## 4. Understanding more about how arrays work

Print the 1st item in the array arr.
    3

Empty the array and add just 1 item: arr.push("tauhida");

Print this 1 item that you just added. What is the result? Can you explain your result?

    Array { length: 0, _capacity: 12, ptr: 3 }

    NaN

    It returns this because the Float64Array class is a typed array that only stores 64-bit floating point numbers.

    The Float64Array typed array represents an array of 64-bit floating point numbers (corresponding to the C double data type) in the platform byte order.

What is the purpose of the _resize() function in your Array class?

    To allocate a new block of memory for our array when the current block of memory is too small to perform the operation we need

______________________________

You can use JavaScript's built-in arrays to solve the following drills. After you write the algorithm, identify its time complexity and determine if it needs to be optimized. Start each problem by understanding the problem and coming up with some sample input and output. For your convenience, a few sample input and output are provided.

For the code for drills 5-12, see drills_5-12.js

## 5. URLify a string

A common mistake users make when they type in an URL is to put spaces between words or letters. A solution that developers can use to solve this problem is to replace any spaces with a %20. Write a method that takes in a string and replaces all its empty spaces with a %20. Your algorithm can only make 1 pass through the string. Examples of input and output for this problem can be

Input: tauhida parveen

Output: tauhida%20parveen

Input: www.thinkful.com /tauh ida parv een

Output: www.thinkful.com%20/tauh%20ida%20parv%20een

   

O(n)

## 6. Filtering an array
Imagine you have an array of numbers. Write an algorithm to remove all numbers less than 5 from the array. DO NOT use Array's built-in .filter() method here; write the algorithm from scratch.



O(n) This one might be able to be improved since there is a logical way to divide the data (less than five) but I'm not sure.

## 7. Max sum in the array

You are given an array containing positive and negative integers. Write an algorithm which will find the largest sum in a continuous sequence.

    Input: [4, 6, -3, 5, -2, 1] Output: 12

   
O(n) This function's complexity doesn't appear improveable

## 8. Merge arrays
Imagine you have 2 arrays which have already been sorted. Write an algorithm to merge the 2 arrays into a single array, which should also be sorted.

Input:[1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10] Output:[1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]


O(n) where n is the combined amount of numbers. We iterate over both arrays at the same time and keep track of where we are in each with an index variable. Much better performance than if we were to have used a nested loop.

## 9. Remove characters
Write an algorithm that deletes given characters from a string. For example, given a string of "Battle of the Vowels: Hawaii vs. Grozny" and the characters to be removed are "aeiou", the algorithm should transform the original string to "Bttl f th Vwls: Hw vs. Grzny". Do not use Javascript's filter, split, or join methods.

Input:'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou' Output: 'Bttl f th Vwls: Hw vs. Grzny'


O(n * k), number of chars in the sentence times the number of chars to remove

## 10. Products
Given an array of numbers, write an algorithm to find out the products of every other number except the number at each index.

    Input:[1, 3, 9, 4] Output:[108, 36, 12, 27]

O(n2) It might be possibly to improve upon this complexity

## 11. 2D array
Write an algorithm which searches through a 2D array, and whenever it finds a 0 should set the entire row and column to 0.

    Input:
    [[1,0,1,1,0],
    [0,1,1,1,0],
    [1,1,1,1,1],
    [1,0,1,1,1],
    [1,1,1,1,1]];

    Output:
    [[0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,1,1,0],
    [0,0,0,0,0],
    [0,0,1,1,0]];
    
    
    // O(2n^2)

## 12. String rotation
Given 2 strings, str1 and str2, write a program that checks if str2 is a rotation of str1.

Input: amazon, azonma

Output: False

Input: amazon, azonam

Output: true

O(n), we iterate once for every char in the string
/*

Given an integer array nums sorted in non-decreasing order, 
return an array of the squares of each number sorted in non-decreasing order.

 
Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].

Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]


Constraints:

    1 <= nums.length <= 104
    -104 <= nums[i] <= 104
    nums is sorted in non-decreasing order.

 
Follow up: Squaring each element and sorting the new array is very trivial, 
could you find an O(n) solution using a different approach?

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Функция sortedSquares принимает массив чисел nums в качестве аргумента
// The function sortedSquares takes an array of numbers nums as an argument
var sortedSquares = function (nums) {
  // Инициализация указателей left и right, указывающих на начало и конец массива
  // Initializing pointers left and right, pointing to the start and end of the array
  let left = 0;
  let right = nums.length - 1;

  // Цикл продолжается, пока left не превысит right
  // The loop continues until left exceeds right
  while(left <= right) {
    // Берем абсолютное значение текущего элемента, на который указывает left
    // Take the absolute value of the current element pointed to by left
    const item = Math.abs(nums[left]);
    // Заменяем исходное значение этим квадратом
    // Replace the original value with this square
    nums[left] = item * item;    
    // Переходим к следующему элементу
    // Move to the next element
    left++;
  }

  // Возвращаем массив nums, отсортированный в возрастающем порядке
  // Return the array nums, sorted in ascending order
  return nums.sort((a, b) => a - b);
};

console.log(sortedSquares([-4, -1, 0, 3, 10])); /// 0, 1, 9, 16, 100
console.log(sortedSquares([-7, -3, 2, 3, 11])); /// 4, 9, 9, 49, 121

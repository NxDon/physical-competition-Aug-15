/*
题目：统计数组 arr 中值等于 item 的元素出现的次数
例如：arr = [1, 3, 7, 1 ,4,] , item = 1,item出现的次数为2
要求：不要使用for循环
*/
function countItem(array, item) {
    let count = 0;
    //解法1
    // arr.forEach((elem) => {
    //       count += elem === item ? 1 : 0;
    // });
    //解法2
    // for (let index in array) {
    //     count += array[index] === item ? 1 : 0;
    // }
    //解法3
    // for (let elem of array) {
    //     count += elem === item ? 1 : 0;
    // }
    //解法4
    count = arr.filter((elem) => elem === item).length

    return count;
}

let arr = [1, 3, 7, 1, 4], item = 1;
console.log("arr = [1, 3, 7, 1 ,4] , item = 1,\ncountItem(arr,item) = " + countItem(arr, item));


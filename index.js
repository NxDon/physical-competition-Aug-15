/*
题目：统计数组 arr 中值等于 item 的元素出现的次数
例如：arr = [1, 3, 7, 1 ,4,] , item = 1,item出现的次数为2
要求：不要使用for循环
*/
function countItem(array, item) {
    let count = 0;
    arr.forEach((elem) => {
        if (elem === item) {
            count++;
        }
    });
    return count;
}

let arr = [1, 3, 7, 1, 4], item = 1;
console.log("arr = [1, 3, 7, 1 ,4] , item = 1,\ncountItem(arr,item) = " + countItem(arr, item));


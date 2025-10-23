function solution(arr)
{
    const result = [];
    
    for (let num of arr) {
        if (result[result.length-1] !==num) {
            result.push(num);
        }
    }
    
    return result;
}
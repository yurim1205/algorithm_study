function solution(numbers) {
    let arr = numbers.map(num => String(num));
    
    arr.sort((a,b)=>(b+a)-(a+b));
    
    let answer=arr.join('');
    
    return answer[0] === '0' ? '0' : answer;
}
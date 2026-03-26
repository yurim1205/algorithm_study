function solution(strings, n) {
  // 1. 리스트 정렬하기
   return strings.sort((a,b)=> {
       // 2. n번째 요소가 다를 때
        if(a[n] !== b[n]) {
            return a[n] > b[n] ? 1: -1;
        } 
       
       return a>b ? 1:-1;
   })
}
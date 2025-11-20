function solution(triangle) {
    const dp = triangle.map(row => [...row]); // 원본 복사

    for (let i = 1; i < triangle.length; i++) {
        for (let j = 0; j < triangle[i].length; j++) {

            if (j === 0) {
                dp[i][j] += dp[i - 1][j];
            } 
            else if (j === triangle[i].length - 1) {
                dp[i][j] += dp[i - 1][j - 1];
            } 
            else {
                dp[i][j] += Math.max(dp[i - 1][j - 1], dp[i - 1][j]);
            }
        }
    }

    return Math.max(...dp[dp.length - 1]);
}

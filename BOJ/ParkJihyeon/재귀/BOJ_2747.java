package ParkJihyeon.재귀;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class BOJ_2747 {
    static int fibo(int n) {
        int[] dp = new int[n+1]; //수열 저장할 배열 생성
        dp[0] = 0; dp[1] = 1;

        for (int i = 2; i <= n; i++) {
            dp[i] = dp[i-2] + dp[i-1];
        }
        return dp[n];
    }
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());

        System.out.println(fibo(n));
    }
}

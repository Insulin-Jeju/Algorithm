package ParkJihyeon.DP;

import java.util.*;

public class BOJ_1149 {
    static int N;
    static int [][]dp;
    static int[][]cost;
    static int rgb(int house, int color) {
        int min = 1000000000;

        if(house == N-1) return cost[house][color]; // 마지막 집인경우, 현재 집의 색상을 칠하는 비용 반환(재귀 호출 종료 조건)
        if(dp[house][color] != -1) return dp[house][color]; // 중복 계산 방지 조건

        for (int i = 0; i < 3; i++) {
            if (i == color) continue;
            min = Math.min(min, rgb(house + 1, i));
        }

        dp[house][color] = min + cost[house][color];
        return dp[house][color];
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        N = sc.nextInt();
        dp = new int[N][3];
        cost = new int[N][3];

        // 초기화
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < 3; j++) {
                cost[i][j] = sc.nextInt();
                dp[i][j] = -1;
            }
        }

        sc.close();

        int min = 100000000;
        for (int i = 0; i < 3; i++) {
            min = Math.min(min, rgb(0, i));
        }
        System.out.println(min);
    }
}
package ParkJihyeon.브루트포스;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class BOJ_1018 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());

        char[][] board = new char[N][M];
        for (int i = 0; i < N; i++) {
            String line = br.readLine();
            for (int j = 0; j < M; j++) {
                board[i][j] = line.charAt(j);
            }
        }
        // 초기값 초기화
        int min = Integer.MAX_VALUE;
        for (int i = 0; i <= N - 8; i++) {
            for (int j = 0; j <= M - 8; j++) {
                int w_cnt = 0; // W로 시작하는 체스판에서 바꿔야 할 칸의 수
                int b_cnt = 0; // B로 시작하는 체스판에서 바꿔야 할 칸의 수

                // 첫 번째 칸이 W일 때와 B일 때의 차이를 각각 계산
                for (int k = 0; k < 8; k++) {
                    for (int l = 0; l < 8; l++) {
                        if ((k + l) % 2 == 0) { // W로 시작하는 체스판
                            if (board[i+k][j+l] != 'W') w_cnt++;
                            if (board[i+k][j+l] != 'B') b_cnt++;
                        } else { // B로 시작하는 체스판
                            if (board[i+k][j+l] != 'B') w_cnt++;
                            if (board[i+k][j+l] != 'W') b_cnt++;
                        }
                    }
                }
                // 최솟값 갱신
                min = Math.min(min, Math.min(w_cnt, b_cnt));
            }
        }
        System.out.println(min);
        br.close();
    }
}

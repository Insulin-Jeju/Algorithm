import java.util.*;
import java.io.*;

public class BOJ_23968 {
    static int arr [];
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int N = Integer.parseInt(st.nextToken());
        int K = Integer.parseInt(st.nextToken());

        arr = new int[N];

        st = new StringTokenizer(br.readLine());
        for (int i = 0; i < N; i++) {
            arr[i] = Integer.parseInt(st.nextToken());
        }

        int cnt = 0;

        for (int i = 0; i < arr.length - 1; i++) {
            for (int j = 0; j < arr.length - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) { //교환
                    int tmp = arr[j + 1];
                    arr[j + 1] = arr[j];
                    arr[j] = tmp;
                    cnt++; //교환 횟수 증가

                    if (cnt == K) {
                        System.out.println(arr[j] + " " + arr[j + 1]);
                        return;
                    }
                }
            }
        }
        System.out.println(-1);
    }
}

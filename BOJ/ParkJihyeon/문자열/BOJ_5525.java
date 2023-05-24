package ParkJihyeon.문자열;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.StringTokenizer;

public class BOJ_5525 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        int M = Integer.parseInt(br.readLine());
        String str = br.readLine();

        int cnt = 0;
        int result = 0;

        //"IOI"패턴을 hashmap에 저장
        HashMap<Integer, Character> map = new HashMap<>();
        map.put(0, 'I');
        map.put(1, 'O');
        map.put(2, 'I');

        for (int i = 0; i < M - 2; i++) { //"IOI" 조건에 맞는 길이만 체크
            //"IOI" 패턴을 찾는 조건
            if (str.charAt(i) == map.get(0) && str.charAt(i + 1) == map.get(1) && str.charAt(i + 2) == map.get(2)) {
                cnt++; //문자열이 "IOI" 조건 만족시 증가
                if (cnt == N) { //cnt가 주어진 패턴의 길이 N과 같아지면 패턴이 N번 연속 등장(찾고자 하는)
                    cnt--;
                    result++;
                }
                i++;
            } else { //패턴 끊긴 경우 ex: "IOII"
                cnt = 0;
            }
        }
        System.out.println(result);
    }
}


package ParkJihyeon.문자열;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class BOJ_6996 {
    static void anagram(String first, String second) {
        char[] charArr = first.toCharArray();
        char[] charArr2 = second.toCharArray();

        Arrays.sort(charArr);
        Arrays.sort(charArr2);
        System.out.println(charArr);
        System.out.println(charArr2);
        if (Arrays.equals(charArr, charArr2)) {
            System.out.println(first + " & " + second + " are anagrams.");
        } else {
            System.out.println(first + " & " + second + " are NOT anagrams.");
        }
    }
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());

        for (int i = 0; i < N; i++) {
           // StringTokenizer st = new StringTokenizer(br.readLine());
            String[] str = br.readLine().split(" " );
            String first = str[0];
            String second = str[1];
            anagram(first, second);
        }
    }
}


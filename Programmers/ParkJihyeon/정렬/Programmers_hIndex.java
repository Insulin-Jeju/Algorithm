import org.jetbrains.annotations.NotNull;

import java.util.Arrays;

public class Programmers_hIndex {
    public static class Solution {
        public int solution(int[] citations) {
            int answer = 0;
            int len = citations.length;

            Arrays.sort(citations);

            int i;
            int cnt = 0;
            int index = len - 1;

            for (i = len; i >= 0; i--) {
                while(citations[index] >= i){
                    cnt ++;
                    index --;
//                    System.out.println("cnt: " + cnt+ " " +"index:" + index);
                    if (index < 0) break;
                }
                if(cnt >= i) break;
            }
            answer = i;
            return answer;
        }

        public static void main(String[] args) {
            int[] citations = {3, 0, 6, 1, 5};
            System.out.print(new Programmers_hIndex.Solution().solution(citations));
        }
    }
}

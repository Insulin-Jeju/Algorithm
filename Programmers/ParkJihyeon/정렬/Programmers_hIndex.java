import org.jetbrains.annotations.NotNull;

public class Programmers_hIndex {
    static int h;
    static void insertSort(int @NotNull [] arr) {
        for (int i = 1; i < arr.length; i++) {
            int target = arr[i];
            int j = i - 1;

            while (j >= 0 && target < arr[j]) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = target;
        }
    }
    public static class Solution {
        public int solution(int[] citations) {
            int answer = 0;

            insertSort(citations);

            for (int i = 0; i < citations.length; i++) {
                h = citations.length - i;

                if (citations[i] >= h) {
                    answer = h;
                    break;
                }
            }
            return answer;
        }

        public static void main(String[] args) {
            int[] citations = {3, 0, 6, 1, 5};
            System.out.print(new Programmers_hIndex.Solution().solution(citations));
        }
    }
}

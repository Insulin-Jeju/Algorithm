import org.jetbrains.annotations.NotNull;

public class Programmers_K번째수 {
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
        public int[] solution(int[] array, int[][] commands) {
            int[] answer = new int[commands.length];

            for (int i = 0; i < commands.length; i++) {
                int sIndex = commands[i][0];
                int eIndex = commands[i][1];
                int kIndex = commands[i][2];

                int[] tmp = new int[eIndex - sIndex + 1];

                int idx = 0;
                for (int j = 0; j < tmp.length; j++) {
//                    System.out.println(j +" "+ idx);
                    tmp[idx] = array[j + (sIndex - 1)];
                    idx++;
                }
                insertSort(tmp);
//                System.out.println(Arrays.toString(tmp));
                answer[i] = tmp[kIndex-1];
//                System.out.println(answer[i]);
            }
            return answer;
        }

        public static void main(String[] args) {
            int[] array = {1, 5, 2, 6, 3, 7, 4};
            int[][] commands = {{2, 5, 3}, {4, 4, 1}, {1, 7, 3}};
            for (int i = 0; i < commands.length; i++) {
                System.out.print(new Solution().solution(array, commands)[i] + " ");
            }
        }
    }
}





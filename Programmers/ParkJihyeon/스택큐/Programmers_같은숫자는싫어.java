import java.util.*;

public class Programmers_같은숫자는싫어 {
    public static int[] solution(int[] arr) {
        Queue<Integer> q = new LinkedList<>();

        if (arr.length > 0) { //배열이 비어있는 경우는 수행x
            q.offer(arr[0]);

            for (int i = 1; i < arr.length; i++) {
                if (arr[i - 1] != arr[i]) { //같은 숫자가 담겨있지 않을 때만 담기
                    q.offer(arr[i]);
                }
            }
        }

        int[] answer = new int[q.size()]; //큐에 저장된 값을 담을 배열 answer
        int index = 0;
        while (!q.isEmpty()) { //queue가 비어있지 않은 동안
            answer[index++] = q.poll();
        }

        return answer;
    }

    public static void main(String[] args) {
        int[] arr = {1, 1, 3, 3, 0, 1, 1};
        int[] arr2 = {4, 4, 4, 3 ,3};
        int[] result = solution(arr);
        int[] result2 = solution(arr2);

        System.out.println(Arrays.toString(result));
        System.out.println(Arrays.toString(result2));
    }
}
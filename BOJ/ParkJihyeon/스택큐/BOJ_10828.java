package ParkJihyeon.스택큐;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;

public class BOJ_10828 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        Integer N = Integer.parseInt(br.readLine());
        Stack<Integer> stack = new Stack<>(); //정수 담는 스택

        StringBuilder sb = new StringBuilder(); //결과 한 번에 출력하기 위한 객체 sb 생성
        for (int i = 0; i < N; i++) {
            String[] commands = br.readLine().split(" "); //받은 문자열을 공백으로 나누고
            String command = commands[0]; //명령만 command에 담음
            if (command.equals("push")) { //추가
                stack.push(Integer.parseInt(commands[1])); // //commands에서 받았던 두 번째 요소를 추가
            } else if (command.equals("pop")) { //삭제
                if (stack.size() >= 1) { //스택에 값이 있는 경우
                    sb.append(stack.pop() + "\n");
                } else { //없는 경우
                    sb.append("-1\n");
                }
            } else if (command.equals("size")) { //스택에 들어있는 정수 개수
                sb.append(stack.size() + "\n");
            } else if (command.equals("empty")) {
                if (stack.empty()) { //스택이 비었다면
                    sb.append("1\n");
                } else { //비어있지 않았다면
                    sb.append("0\n");
                }
            } else if (command.equals("top")) { //스택 가장 위에 있는 원소 출력
                if (stack.empty()) { //만약 비었다면
                    sb.append("-1\n");
                } else {
                    sb.append(stack.peek() + "\n");
                }
            }
        }
        System.out.println(sb.toString());
    }
}


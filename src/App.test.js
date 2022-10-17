import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i); // 정규표현식을 사용하여 있는지 확인
  expect(linkElement).toBeInTheDocument();
});

// function test_fn() {
//   // 람다식 형태로 바로 파라미터에 정의하는게 더 편함
//   // 함수 선언 보다 에로우 function을 사용
// };

// test("테스트 설명", test_fn);
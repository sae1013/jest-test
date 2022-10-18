import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// 스쿱을 업데이트 했을때
// 조건. Scoops total: $ // getByText는 exact false로 , 부분문자열 검사 허용
//tc1  초기 가격은 0.00 달러로 시작
test('Test Scoop Update and Check the price', async () => {
  const scoopsSubtotalPrice = screen.getByText('total option Amount $', {exact: false});
  expect(scoopsSubtotalPrice).toBeInTheDocument();
//tc2 바닐라스쿱을 1개 증가

  const vanilaScoopInput = await screen.findByRole('vanila-input', {
    name: 'vanila'
  });
  userEvent.clear(vanilaScoopInput);
  userEvent.type(vanilaScoopInput,'1');
  expect(scoopsSubtotalPrice).toHaveTextContent('2.00');

// tc3 초콜릿스쿱 1개 증가
})




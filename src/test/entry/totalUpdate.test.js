import {render, screen,waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Options from '../../components/entry/Option.jsx';
import {OrderDetailProvider} from "../../hooks/scoopContext.jsx";

//tc1  초기 가격은 0.00 달러로 시작
test('Test Scoop Update and Check the price', async () => {

  render(
    <OrderDetailProvider>
      <Options optionType={"scoops"}></Options>
    </OrderDetailProvider>
  )
  const scoopsSubtotalPrice = await screen.findByText('total option Amount: 0$', {exact: false});
  expect(scoopsSubtotalPrice).toBeInTheDocument();
  const vanilaScoopInput = await screen.findByRole('vanila');
  const chocolateScoopInput = await screen.findByRole('chocolate');

  //tc2 바닐라스쿱을 1개 증가
  userEvent.clear(vanilaScoopInput);
  userEvent.type(vanilaScoopInput, '1');
  await waitFor(() => {
    expect(scoopsSubtotalPrice).toHaveTextContent('2$')
  })

  userEvent.clear(chocolateScoopInput);
  userEvent.type(chocolateScoopInput,'1');
  await waitFor(() => {
    expect(scoopsSubtotalPrice).toHaveTextContent('4$')
  })

})




// const vanilaScoopInput = screen.findByRole('input', {
//   name: 'vanila'
// });
// userEvent.clear(vanilaScoopInput);
// userEvent.type(vanilaScoopInput, '1');
// expect(scoopsSubtotalPrice).toHaveTextContent('2$');

// tc3 초콜릿스쿱 1개 증가



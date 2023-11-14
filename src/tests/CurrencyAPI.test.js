import { api } from '../services/currencyAPI';

it('Teste de retorno da api', async () => {
  const data = await api();

  expect(data.USD.name).toEqual('Dólar Americano/Real Brasileiro');
  expect(data.EUR.code).toEqual('EUR');
});

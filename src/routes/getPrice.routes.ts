import { Router, Response } from 'express';
import PriceRepository from '../service/getTheSelectedDate';

const priceRoutes = Router();

priceRoutes.post('/', async (request, response): Promise<Response> => {
  const { initialDate, finalDate, underEleven, underSix, single, couple } =
    request.body;
  // atenção ao formato de datas, ex: "2021-06-24T21:55:07.280Z"

  const priceRepository = new PriceRepository();

  const numberOfPeople = underEleven + underSix + single + couple * 2;
  const numberOfUnderSix = underSix <= 1 ? 0 : underSix;
  const caravan = numberOfPeople < 25 ? 1 : 1.3;

  const datesAvailableAndPrice = await priceRepository.findByDate({
    initialDate,
    finalDate,
  });
  if (!datesAvailableAndPrice) {
    return response.json({ err: 'error' });
  }

  const total = datesAvailableAndPrice.reduce((memo, current) => {
    return memo + current.value;
  }, 0);

  const getPrice = () => {
    const amountSingle = total * 0.7;
    const coupleAmount = total * 1;
    const amountUnderSix = total * 0.1;
    const amountUnderEleven = total * 0.2;

    let sumPercent =
      Number(underEleven) * amountUnderEleven +
      Number(numberOfUnderSix) * amountUnderSix +
      Number(single) * amountSingle +
      Number(couple) * coupleAmount;

    sumPercent *= caravan;
    return sumPercent;
  };

  const Price = () => {
    return getPrice();
  };

  return response.json({ Price: Price() });
});

export default priceRoutes;

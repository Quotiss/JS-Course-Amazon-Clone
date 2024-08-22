import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

export const deliveryOptions = [{
  id: '1',
  deliveryDays: 7,
  priceCents: 0
}, {
  id: '2',
  deliveryDays: 3,
  priceCents: 499
}, {
  id: '3',
  deliveryDays: 1,
  priceCents: 999
}];

export function getDeliveryOption(deliveryOptionId) {
  let deliveryOption;

  deliveryOptions.forEach((option) => {
    if (option.id === deliveryOptionId) {
      deliveryOption = option;
    }
  });

  return deliveryOption || deliveryOptions[0];
}

export function calculateDeliveryDate(deliveryOption) {
  let daysToAdd = deliveryOption.deliveryDays;
  let currentDate = dayjs();
  
  while (daysToAdd > 0) {
    currentDate = currentDate.add(1, 'day');
    if (currentDate.day() !== 0 && currentDate.day() !== 6) {
      daysToAdd--;
    }
  }

  const dateString = currentDate.format('dddd, MMMM D');
  
  return dateString;
}
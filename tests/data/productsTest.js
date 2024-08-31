import {Product, Clothing, Appliance} from '../../data/products.js';

describe('test suite: Product class', () => {
  it('generates new products', () => {
    const testProduct = new Product({
      id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      image: "images/products/athletic-cotton-socks-6-pairs.jpg",
      name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
      rating: {
        stars: 4.5,
        count: 87
      },
      priceCents: 1090,
      keywords: [
        "socks",
        "sports",
        "apparel"
      ]
    });

    expect(testProduct.id).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(testProduct.image).toEqual("images/products/athletic-cotton-socks-6-pairs.jpg");
    expect(testProduct.name).toEqual("Black and Gray Athletic Cotton Socks - 6 Pairs");
    expect(testProduct.priceCents).toEqual(1090);
    expect(testProduct.getStarsUrl()).toEqual('images/ratings/rating-45.png');
    expect(testProduct.getPrice()).toEqual('$10.90');
    expect(testProduct.extraInfoHTML()).toEqual('');
  });
});
describe('test suite: Clothing class', () => {
  it('generates new clothing products', () => {
    const testClothing = new Clothing({
      id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
      image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
      name: "Adults Plain Cotton T-Shirt - 2 Pack",
      rating: {
        stars: 4.5,
        count: 56
      },
      priceCents: 799,
      keywords: [
        "tshirts",
        "apparel",
        "mens"
      ],
      type: "clothing",
      sizeChartLink: "images/clothing-size-chart.png"
    });
    expect(testClothing.id).toEqual("83d4ca15-0f35-48f5-b7a3-1ea210004f2e");
    expect(testClothing.image).toEqual("images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg");
    expect(testClothing.name).toEqual("Adults Plain Cotton T-Shirt - 2 Pack");
    expect(testClothing.priceCents).toEqual(799);
    expect(testClothing.getStarsUrl()).toEqual('images/ratings/rating-45.png');
    expect(testClothing.getPrice()).toEqual('$7.99');
    expect(testClothing.extraInfoHTML()).toContain('Size chart');
    expect(testClothing instanceof Product).toEqual(true);
    expect(testClothing instanceof Clothing).toEqual(true);
  })
});
describe('test suite: Appliance', () => {
  let appliance;

  beforeEach(() => {
    appliance = new Appliance({
      id: "54e0eccd-8f36-462b-b68a-8182611d9add",
      image: "images/products/black-2-slot-toaster.jpg",
      name: "2 Slot Toaster - Black",
      rating: {
        stars: 5,
        count: 2197
      },
      priceCents: 1899,
      keywords: [
        "toaster",
        "kitchen",
        "appliances"
      ],
      type: 'appliance',
      instructionsLink: 'images/appliance-instructions.png',
      warrantyLink: 'images/appliance-warranty.png'
    });
  });

  it('has the correct properties', () => {
    expect(appliance.id).toEqual('54e0eccd-8f36-462b-b68a-8182611d9add'),
    expect(appliance.image).toEqual('images/products/black-2-slot-toaster.jpg');

    expect(appliance.instructionsLink).toEqual('images/appliance-instructions.png');
    expect(appliance.warrantyLink).toEqual('images/appliance-warranty.png');
  });

  it('gets the stars url', () => {
    expect(appliance.getStarsUrl()).toEqual('images/ratings/rating-50.png');
  });

  it('gets the price', () => {
    expect(appliance.getPrice()).toEqual('$18.99');
  });

  it('displays instructions and warranty in extraInfoHTML', () => {
    expect(appliance.extraInfoHTML()).toContain(
      `<a href="images/appliance-instructions.png" target="_blank">`
    );
    expect(appliance.extraInfoHTML()).toContain('Instructions');

    expect(appliance.extraInfoHTML()).toContain(
      `<a href="images/appliance-warranty.png" target="_blank">`
    );
    expect(appliance.extraInfoHTML()).toContain('Warranty');
  });
});
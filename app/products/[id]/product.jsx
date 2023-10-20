const productData = {
    id: '1',
    name: 'Premium Leather Wallet',
    description: 'A high-quality leather wallet for your everyday needs.',
    price: 49.99,
    variants: ['Brown', 'Black', 'Tan'],
    images: [
      '/images/wallet-brown.jpg',
      '/images/wallet-black.jpg',
      '/images/wallet-tan.jpg',
    ],
    features: [
      'Genuine leather material',
      'Multiple card slots and compartments',
      'RFID blocking technology',
      'Slim and stylish design',
    ],
    inStock: true,
    ratings: {
      average: 4.5,
      count: 120,
    },
    reviews: [
      {
        id: '1',
        author: 'John Doe',
        rating: 5,
        reviewText: 'I love this wallet! It looks and feels amazing.',
        date: '2023-01-15',
      },
      {
        id: '2',
        author: 'Jane Smith',
        rating: 4,
        reviewText: 'Great quality, but a bit pricey.',
        date: '2023-02-03',
      },
      // Add more reviews here
    ],
  };

  export default productData;
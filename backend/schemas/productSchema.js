const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Sub-schema for product image
const productImageSchema = new Schema({
  image: String,
  images: [String]
});

// Sub-schema for product specification
const productSpecificationSchema = new Schema({
  panel_size: String,
  viewing_angle: String,
  brightness: String,
  refresh_rate: String,
  resolution: String
});

// Sub-schema for discount information
const discountSchema = new Schema({
  fixed: Number,
  percentage: Number
});

// Sub-schema for coupon information
const couponSchema = new Schema({
  coupon_code: String,
  coupon_discount: discountSchema
});

// Sub-schema for price information
const priceSchema = new Schema({
  regular_price: Number,
  sell_price: Number
});

// Sub-schema for product variables
const productVariableSchema = new Schema({
  name: String,
  values: [String],
  options: [
    {
      value_name: String,
      stock: Number,
      image: String,
      price: Number
    }
  ]
});

// Sub-schema for product reviews
const productReviewSchema = new Schema({
  user: String,
  rating: Number,
  comment: String
});

// Sub-schema for shipping information
const shippingInfoSchema = new Schema({
  shipping_options: [String],
  delivery_time: [String],
  shipping_fees: [Number]
});

// Sub-schema for related products
const relatedProductsSchema = new Schema({
  related_products: [String]
});

// Sub-schema for payment and financing options
const paymentFinancingSchema = new Schema({
  payment_methods: [String],
  financing_options: [String]
});

// Sub-schema for product questions and answers
const productQASchema = new Schema({
  question: String,
  answer: String
});

// Main product schema
const productSchema = new Schema({
  basic_information: {
    name: String,
    description: String,
    model: String,
    Product_SKU: String,
    brand: String,
    summary: String,
    warranty: Number,
    image: productImageSchema
  },
  category_name: String,
  specification: productSpecificationSchema,
  video_link: String,
  meta_data: {
    meta_title: String,
    meta_description: String,
    meta_tags: String
  },
  status: Boolean,
  discount: discountSchema,
  coupon: couponSchema,
  single_product: {
    stock: Number,
    price: priceSchema
  },
  variables: [productVariableSchema],
  reviews: [productReviewSchema],
  shipping_information: shippingInfoSchema,
  related_products: relatedProductsSchema,
  return_and_refund_policy: String,
  payment_and_financing_options: paymentFinancingSchema,
  product_qa: [productQASchema],
  product_recommendations: relatedProductsSchema
});

module.exports =  productSchema;

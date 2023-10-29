var mongoose = require('mongoose');
var productSchema = require("../schemas/productSchema");

module.exports = mongoose.models.Products || mongoose.model('Products', productSchema);
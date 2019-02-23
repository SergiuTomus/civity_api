const Product = require('../../models/Product');

// @route   GET client/products
// @access  Public
exports.getAllProducts = (req, res, next) => {
    Product.fetchAll(req.body.restaurantId)
        .then(([rows,]) => {
            const response = {
                products: rows.map(row => {
                    return {
                        id: row.id,
                        product_name: row.name,
                        price: row.price,
                        description: row.description,
                        imageUrl: row.imageUrl,
                        category: row.category
                    }
                })
            };
            res.status(200).json(response);
        })
        .catch(err => console.log(err));
};
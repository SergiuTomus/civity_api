const Product = require('../../models').Product; // imports 'db'(object with all the models) from index.js 

// @route   GET client/products
// @access  Public
exports.getAllProducts = (req, res, next) => {
    Product.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        where: {
            restaurant_id: req.body.restaurant_id,
            category: req.body.category
        }
    })
        .then((rows) => {
            const response = {
                products: rows.map(row => {
                    return {
                        id: row.id,
                        product_name: row.name,
                        price: row.price,
                        stock: row.stock,
                        description: row.description,
                        image_url: row.image_url,
                        category: row.category
                    }
                })
            };
            res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
};


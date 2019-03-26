const Product = require('../../models').Product;

// @route   GET admin/products
// @access  Private
exports.getAllProducts = (req, res, next) => {
  Product.findAll({
    attributes: { exclude: ['createdAt', 'updatedAt'] },
    where: {
      restaurant_id: req.body.restaurant_id
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
            category_id: row.category_id
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

// @route   POST admin/products
// @access  Private
exports.createProduct = (req, res, next) => {
  Product.create({ // create object and store/save to db
    restaurant_id: req.body.restaurant_id,
    name: req.body.name,
    price: req.body.price,
    category_id: req.body.category_id
  })
    .then(result => {
      res.status(201).json({
        messsage: 'Created product succesfully',
        createdProduct: {
          id: result.id,
          name: result.name,
          price: result.price,
          category_id: result.category_id
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

// @route   GET admin/products/:productId
// @access  Private
exports.getProduct = (req, res, next) => {
  const id = req.params.productId;
  Product.findByPk(id)
    .then(product => {
      if (product) {
        res.status(200).json({
          product: product
        });
      } else {
        res.status(404).json({ messsage: "No data for this ID" })
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

// @route   PATCH admin/products/:productId
// @access  Private
exports.updateProduct = (req, res, next) => {
  Product.update(
    { ...req.body },
    {
      where: { id: req.params.productId }
    }
  )
    .then(result => {
      if (result[0] === 1) {
        res.status(200).json({ message: "Product updated successfully" });
      }
      else {
        res.status(404).json({ message: "Product record not found" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

// @route   DELETE admin/products/:productId
// @access  Private
exports.deleteProduct = (req, res, next) => {
  Product.destroy({
    where: {
      id: req.params.productId
    }
  })
    .then(result => {
      if (result === 1) {
        res.status(200).json({ message: "Product deleted successfully" });
      }
      else {
        res.status(404).json({ message: "Product record not found" })
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

const Restaurant = require('../../models').Restaurant;
const Product = require('../../models').Product;

// @route   GET client/restaurants
// @access  Public
exports.getAllRestaurants = (req, res, next) => {
    const today = new Date();
    let day = today.getDay();
    const hour = today.getHours();

    let program = 'week_program';
    if (day == 6) program = "saturday_program";
    if (day == 7) program = "sunday_program";

    Restaurant.findAll({
        attributes: ['id', 'name', 'description', 'image_url', 'minimum_order', 'cost_delivery', program]
    })
        .then((rows) => {
            const response = {
                restaurants: rows.map(row => {
                    let isOpen = (row[program] === 'inchis' ? false : true);
                    if (isOpen) {
                        startProgram = Number(row[program].slice(0, 2));
                        endProgram = Number(row[program].slice(8, 10));
                        isOpen = (hour >= startProgram && hour < endProgram ? true : false);
                    }
                    return {
                        id: row.id,
                        restaurant_name: row.name,
                        description: row.description,
                        image_url: row.image_url,
                        opened: isOpen,
                        minimum_order: row.minimum_order,
                        cost_delivery: row.cost_delivery
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

// @route   GET client/restaurants/:restaurantId
// @access  Public
exports.getRestaurantProducts = (req, res, next) => {
    const today = new Date();
    let day = today.getDay();
    let program = 'week_program';
    if (day == 6) program = "saturday_program";
    if (day == 7) program = "sunday_program";

    Restaurant.findByPk(
        req.params.restaurantId,
        {
            attributes: ['id', 'name', 'description', 'address', 'phone', 'image_url', 'minimum_order', 'cost_delivery', program]
        })
        .then(restaurant => {
            if (restaurant) {
                Product.findAll({
                    attributes: { exclude: ['createdAt', 'updatedAt'] },
                    where: {
                        restaurant_id: req.params.restaurantId
                    }
                })
                    .then((rows) => {
                        res.status(200).json({
                            restaurant: restaurant,
                            products: rows
                        });
                    })
                    .catch(err => {
                        console.log(err);
                        res.status(500).json({ error: err });
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
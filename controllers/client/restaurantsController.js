const Restaurant = require('../../models/Restaurant');

// @route   GET client/restaurants
// @access  Public
exports.getAllRestaurants = (req, res, next) => {
    const today = new Date();
    let day = today.getDay();
    const hour = today.getHours();

    let program = 'week_program';
    if (day == 6) {
        program = "saturday_program";
    }
    if (day == 7) {
        program = "sunday_program";
    }
    Restaurant.fetchList(program)
        .then(([rows,]) => {
            const response = {
                restaurants: rows.map(row => {
                    let isOpen = (row[program] === 'closed' ? false : true);
                    if (isOpen) {
                        startProgram = Number(row[program].slice(0, 2));
                        endProgram = Number(row[program].slice(8, 10));
                        isOpen = (hour >= startProgram && hour < endProgram ? true : false);
                    }
                    return {
                        id: row.id,
                        restaurant_name: row.name,
                        description: row.description,
                        imageUrl: row.imageUrl,
                        open: isOpen,
                        minimum_order: row.minimum_order,
                        cost_delivery: row.cost_delivery
                    }
                })
            };
            res.status(200).json(response);
        })
        .catch(err => console.log(err));
};
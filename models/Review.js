import Sequelize from "sequelize";
import connection from '../config/db.js';

const Review = connection.define(
    'Review',
    {
        id: {
             type: Sequelize.INTEGER,
             autoIncrement: true,
             allowNull: false,
             primaryKey: true
        },
        UserId: {
            type: Sequelize.INTEGER,
            allownull: false
        },
        idRestaurant: {
            type: Sequelize.INTEGER,
            allownull: false
        },
        comment: {
            type: Sequelize.STRING,
            allownull: false
        }, 
        stars: {
            type: Sequelize.INTEGER,
            allownull: false
        }
    }
);

export default Review;



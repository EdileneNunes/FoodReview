import Sequelize from "sequelize";
import connection from '../config/db.js';

const Restaurant = connection.define(
    'restaurant',
    {
        id: {
             type: Sequelize.INTEGER,
             autoIncrement: true,
             allowNull: false,
             primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allownull: false
        },
        type: {
            type: Sequelize.STRING,
            allownull: false
        },
        description: {
            type: Sequelize.STRING,
            allownull: false
        }, 
        address: {
            type: Sequelize.STRING,
            allownull: false
        }
    }
);

export default Restaurant;



import connection from "./config/db.js";
import Restaurant from "./models/restaurant.js";
import Review from "./models/Review.js";

const migrate = async () => {
    try {
        const result = await connection.sync();
        console.log(result);
    } catch (error) {
        console.log(error);

    }
};

migrate();

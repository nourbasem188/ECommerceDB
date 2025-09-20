import UserRouter from "./Modules/Users/user.controller.js";
import ProductRouter from "./Modules/Products/product.controller.js";
import OrderRouter from "./Modules/Orders/order.controller.js";
import connectDB from "./DB/connection.js";
import ReviewRouter from "./Modules/Reviews/review.controller.js";
const bootstrap = async(app,express) => {
    app.use(express.json());

    await connectDB();


    app.use("/users",UserRouter);
    app.use("/products",ProductRouter);
    app.use("/orders",OrderRouter);
    app.use("/reviews",ReviewRouter);

    app.all("/*dummy", (req,res) => {
        res.status(404).json({
            message: "Page not found"
        })
    })
}

export default bootstrap;
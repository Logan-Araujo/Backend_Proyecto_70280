import { model, Schema} from "mongoose";

const collection = "products"

const schema = new Schema({
    title: { type: String, required: true, index: true },
    description: { type: String, default: "description"},
    price: { type: Number, default: 10},
    stock: { type: Number, default: 10},
    category: { type: String, enum: ["botellas", "vasos", "jarras"], default: "botellas"}
});

const Product = model(collection, schema);
export default Product;
const Product = require("../model/Product");

const addProduct = async (req, res) => {
    const { name } = req.body;
    const estaEnProducts = await Product.findOne({ name });
    /* Si no tenemos el producto */
    if (!estaEnProducts) {
        //res.status(400).json({
        //mensaje: "Este producto no se encuentra en nuestra base de datos",
        const product = new Product(req.body);
        product
            .save()
            .then((product) => {
                res.json({
                    mensaje: `El producto fue agregado al carrito`,
                    product,
                });
            })
            .catch((error) => res.json({ message: error }))

    }
    else {
        res.status(400).json({
            mensaje: "Este producto ya se encuentra en nuestra base de datos"
        })
    }

};
module.exports = addProduct;

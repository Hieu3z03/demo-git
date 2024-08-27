const { uploadSingleFile } = require('../services/fileService');
const { createCustomerService } = require('../services/customerService');
module.exports = {
    postCreateCustomer: async (req, res) => {
        let { name, address, phone, email, description } = req.body;

        // console.log(">>> check req.body: ", name, address);
        let imageUrl = '';
        if (!req.files || Object.keys(req.files).length === 0) {
        } else {
            let result = await uploadSingleFile(req.files.image);
            imageUrl = result.path;
        }
        let customerData = { name, address, phone, email, description, image: imageUrl };

        let customer = await createCustomerService(customerData);

        return res.status(200).json({
            EC: 0,
            data: customer
        })
    }
}
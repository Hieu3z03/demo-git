const Customer = require('../models/Customer');

const createCustomerService = async (customerData) =>{
    try {
        let result = await Customer.create({
            name: customerData.name,
            address: customerData.address,
            phone: customerData.phone,
            email: customerData.email,
            description: customerData.description,
            image: customerData.image
        });
        return result;
    } catch (error) {
        console.log("Error: ", error);
        return null;
    }
}

module.exports = { createCustomerService }
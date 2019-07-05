const Category = require('./category.model');

exports.create = async (data) => {
    try {
        const category = new Category(data);
        const savedCategory = await category.save();
        return savedCategory;
    } catch (error) {
        throw error;
    }
}
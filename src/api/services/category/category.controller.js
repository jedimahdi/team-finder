const httpStatus = require('http-status');
const service = require('./category.service');


exports.create = async (req, res, next) => {
    try {
        const response = await service.create(req.body);
        return res.status(httpStatus.CREATED).json(response);
    } catch (error) {
        return next(error);
    }
};

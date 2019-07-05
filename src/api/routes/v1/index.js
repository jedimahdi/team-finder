const express = require('express');
const userRoutes = require('../../services/user/user.route');
const authRoutes = require('../../services/auth/auth.route');
const categoryRoutes = require('../../services/category/category.route');

const router = express.Router();

router.get('/status', (req, res) => res.send('OK'));

router.use('/users', userRoutes);
router.use('/auth', authRoutes);
router.use('/categories', categoryRoutes);


module.exports = router;

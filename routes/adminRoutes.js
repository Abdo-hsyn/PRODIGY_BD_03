const express = require('express');
const router = express.Router();
const { authenticateToken, authorizeRoles } = require('../middlewares/auth');


router.get('/dashboard', authenticateToken, authorizeRoles('admin', 'owner'), (req, res) => {
  res.status(200).json({ message: `Welcome ${req.user.role}, this is the admin/owner dashboard.` });
});

module.exports = router;

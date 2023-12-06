const { user } = require("../models");

module.exports = {
  getAllUser: async (req, res) => {
    try {
      const users = await user.findAll({ include: Todo });

      res.json({
        message: "Successfully retrieved all users",
        data: users,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },
}

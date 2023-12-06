const { user } = require("../models");

module.exports = {
  getAllUsers: async (req, res) => {
    try {
      const users = await user.findAll();
      res.json({ message: "Get All users success", data: users });
    } catch (error) {
      console.error(error);  // Log the error for debugging
      res.status(500).json({ message: "Terjadi kesalahan saat mengambil data pengguna", error: error.message });
    }
  },
};

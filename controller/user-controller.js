const {user} = require("../models");

module.exports = {
    getAllUsers: async (req, res) => {
      try {
        const users = await user.findAll();
        res.json(users);

      } catch (error) {
        res
          .status(500)
          .json({ message: "Terjadi kesalahan saat mengambil data pengguna"});
      }
    },
}
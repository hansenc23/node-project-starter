//GET /user/all
getAllUsers = (req, res) => {
  res.send('All Users!');
};

//GET /user/:id
getUserById = (req, res) => {
  const userId = req.params.id;
  res.send(`This is user ${userId}`);
};

module.exports = {
  getAllUsers,
  getUserById,
};

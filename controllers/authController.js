const register = (req, res, next) => {
  res.send("register");
};
const login = (req, res, next) => {
  res.send("login");
};
const updateUser = (req, res, next) => {
  res.send("updateUser");
};

export { register, login, updateUser };

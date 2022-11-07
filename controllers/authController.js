const register = (res, req, next) => {
  res.send("register");
};
const login = (res, req, next) => {
  res.send("login");
};
const updateUser = (res, req, next) => {
  res.send("updateUser");
};

export { register, login, updateUser };

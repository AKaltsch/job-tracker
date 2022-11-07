const createJob = async (req, res, next) => {
  res.send("createJob");
};
const deleteJob = async (req, res, next) => {
  res.send("deleteJob");
};
const getAllJobs = async (req, res, next) => {
  res.send("getAllJobs");
};
const updateJob = async (req, res, next) => {
  res.send("updateJob");
};
const showStats = async (req, res, next) => {
  res.send("showStats");
};

export { createJob, deleteJob, getAllJobs, updateJob, showStats };

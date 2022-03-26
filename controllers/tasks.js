// REST API
const getAllTasks = (req, res) => {
  res.send("get all items");
};

const getTask = (req, res) => {
  res.json({ id: req.params.id });
};
const updateTask = (req, res) => {
  res.send("update task");
};
const deleteTask = (req, res) => {
  res.send("delete task");
};
const createTask = (req, res) => {
  res.json(req.body);
};
module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};

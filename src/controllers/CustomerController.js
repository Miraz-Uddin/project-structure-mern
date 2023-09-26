// Create
exports.create = (req, res) => {
  const reqBody = req.body;
  res
    .status(200)
    .json({ status: "success", data: "Create Function is Tested Properly" });
};

// Read
exports.read = (req, res) => {
  const reqBody = req.body;
  res
    .status(200)
    .json({ status: "success", data: "Read Function is Tested Properly" });
};

// Delete
exports.delete = (req, res) => {
  const reqBody = req.body;
  res
    .status(200)
    .json({ status: "success", data: "Delete Function is Tested Properly" });
};

// Update
exports.update = (req, res) => {
  const reqBody = req.body;
  res
    .status(200)
    .json({ status: "success", data: "Update Function is Tested Properly" });
};

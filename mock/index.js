const dealy = (interval = 2000) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, interval);
  });
};

export default {
  "GET /api/getRepos": (req, res) => {
    dealy().then(() => {
      res.json({
        code: "0",
        data: "lina",
        msg: ""
      });
    });
  }
};

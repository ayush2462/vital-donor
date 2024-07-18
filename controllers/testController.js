const testController = (req, res) => {
  res.status(200).send({
    message: "test route,welcome user",
    success: true,
  });
};
export default testController;

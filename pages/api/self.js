import self from "!!raw-loader!../../public/component-name";

export default (req, res) => {
  res.statusCode = 200;
  res.json(self);
};

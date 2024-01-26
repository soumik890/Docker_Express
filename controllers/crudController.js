import crudModel from "../models/crudModel.js";

export const create = async (req, res) => {
  try {
    console.log(req.body);
    const data = await crudModel.create({
      name: req.body.name,
      phone: req.body.phone,
    });

    res.status(200).json({
      data,
      status: true,
      msg: "Successfull !!",
    });
  } catch (error) {
    console.log(error);
    res.status(200).send({ status: false, msg: "error in create", error });
  }
};
export const read = async (req, res) => {
  try {
    const data = await crudModel.find({});
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(200).status({ status: false, msg: "error in read" });
  }
};
export const update = async (req, res) => {
  try {
    const { id } = req.params;
    await crudModel.findByIdAndUpdate(
      id,
      {
        name: req.body.name,
        phone: req.body.phone,
      },
      { new: true }
    );
    res.status(200).json({ status: true, msg: "Successfull updated!!" });
  } catch (error) {
    console.log(error);
    res.status(200).status({ status: false, msg: "error in update" });
  }
};
export const remove = async (req, res) => {
  try {
    const { id } = req.params;
    await crudModel.findByIdAndDelete(id);

    res.status(200).json({ status: true, msg: "Successfull !!" });
  } catch (error) {
    console.log(error);
    res.status(200).status({ status: false, msg: "error in remove" });
  }
};

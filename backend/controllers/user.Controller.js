import { User } from "../model/user.js";

const createUser = async (req, response) => {
  try {
    const { name, email, password, phoneNumber } = req.body;
    const result = await User.create({
      name,
      email,
      password,
      phoneNumber,
    });
    response.status(201).json({
      succes: true,
      data: result,
    });
  } catch (error) {
    response.status(501).json({ error: "can't , create user " });
  }
};

const getAllUsers = async (req, response) => {
  try {
    const result = await User.find();

    response.status(201).json({
      succes: true,
      data: result,
    });
  } catch (error) {
    response.status(501).json({ error: "User not Found" });
  }
};

const deleteUser = async (req, response) => {
  try {
    const Id = req.params["id"];
    const result = await User.findByIdAndDelete(Id);
    response.status(201).json({
      succes: true,
      data: result,
    });
  } catch (error) {
    response.status(501).json({ error: "Can't delete user" });
  }
};

export { createUser, getAllUsers, deleteUser };

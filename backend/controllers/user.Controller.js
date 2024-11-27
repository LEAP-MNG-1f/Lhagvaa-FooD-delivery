import { User } from "../model/user.js";

const createUser = async (req, response) => {
  const result = await User.create({
    name: "Lhagvaa10",
    email: "Lhagvaa@gmail.com",
    password: "Lhagvaa0102",
    phoneNumber: 99999999,
  });

  response.json({
    success: true,
    data: result,
  });
};

const getAllUsers = async (req, response) => {
  const result = await User.find();

  response.json({
    succes: true,
    data: result,
  });
};

export { createUser, getAllUsers };

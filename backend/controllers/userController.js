import { User } from "../model/user.js";

const createUser = async (request, response) => {
  const result = await User.create({
    name: "Lhagvaa",
    email: "Lhagvaa@gmail.com",
    password: "Lhagvaa0102",
    phoneNumber: 99999999,
  });

  response.json({
    success: true,
    data: result,
  });
};

const getAllUsers = async (request, response) => {
  const result = await User.find();

  response.json({
    succes: true,
    data: result,
  });
};

export { createUser, getAllUsers };

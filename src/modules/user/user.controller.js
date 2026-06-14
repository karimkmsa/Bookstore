import userModel from "../../../dataBase/models/user.model.js"

export const createUser = async (req, res) => {
  try {

    const { email } = req.body;

    const exist = await userModel.findOne({ email });

    if (exist) {
      return res.status(409).json({
        message: "Email already exists"
      });
    }

    const result = await userModel.create(req.body);

    return res.status(201).json({
      message: "User added",
      result
    });

  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};
export const getAllUsers = async (req, res) => {
  try {

    const users = await userModel.find();

    res.status(200).json({
      message: "Users Data",
      count: users.length,
      users
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
export const getUserById = async (req, res) => {
  try {

    const { id } = req.params;

    const user = await userModel.findById(id);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.status(200).json({
      message: "User Data",
      user
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
export const updateUser = async (req, res) => {
  try {

    const { id } = req.params;

    const updatedUser =
      await userModel.findByIdAndUpdate(
        id,
        req.body,
        {
          new: true,
          runValidators: true
        }
      );

    if (!updatedUser) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.status(200).json({
      message: "User updated",
      updatedUser
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
export const deleteUser = async (req, res) => {
  try {

    const { id } = req.params;

    const deletedUser =
      await userModel.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.status(200).json({
      message: "User deleted",
      deletedUser
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
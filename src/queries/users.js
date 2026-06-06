import { User } from "@/model/user-model";

export async function createUser(user) {
  try {
    await User.create(user);
  } catch (e) {
    throw new Error(e)
  }
}

export const getUsersByService = async (serviceName) => {
  const workers = await User.find({ service: serviceName }).select("-password").lean();
  return workers; // Ensure it always returns an array (empty if no workers exist)
};

export async function getUsersByEmail(email) {
  return await User.findOne({ email }).select("-password").lean();
}

import user from "../models/users.model";

export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // create new user
    const newUser = new user({
      username,
      email,
      password,
    });

    // add new user to database
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // check if user exists
    const user = await user.findOne({ email });

    // user not found
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // add check for password here (e.g., using bcrypt)

    res.status(200).json({ message: "User logged in successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  } 
};

export const guestLogin = async (req, res) => {
  try {
    // create guest user token, customzie experiation as needed.
    const guestToken = jwt.sign({ role: "guest" }, process.env.JWT_SECRET, { expiresIn: "1d" });

    // add logic to store guest token
    // e.g., save to database or session storage

    res.status(200).json({ message: "Guest user logged in successfully", token: guestToken });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default { registerUser, loginUser, guestLogin };
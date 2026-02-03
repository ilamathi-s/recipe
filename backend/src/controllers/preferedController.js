import Preference from "../models/Preference.js";

export const savePreference = async (req, res) => {
  try {
    const { foodType, nutritionFocus, greenBasedOnly } = req.body;
    const userId = req.user.id;

    let preference = await Preference.findOne({ userId });

    if (preference) {
      preference.foodType = foodType;
      preference.nutritionFocus = nutritionFocus;
      preference.greenBasedOnly = greenBasedOnly;
      await preference.save();
    } else {
      preference = await Preference.create({
        userId,
        foodType,
        nutritionFocus,
        greenBasedOnly
      });
    }

    res.status(200).json(preference);
  } catch (error) {
    res.status(500).json({ message: "Failed to save preference" });
  }
};

export const getPreference = async (req, res) => {
  try {
    const preference = await Preference.findOne({ userId: req.user.id });
    res.status(200).json(preference);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch preference" });
  }
};

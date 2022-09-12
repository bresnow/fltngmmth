import * as yup from "yup";

const validateProductStore = async (req, res, next) => {
  try {
    const schema = yup.object().shape({
      name: yup.string().required("Name required"),
      sku: yup.string().required("Sku required"),
      price: yup.number().required("Price required"),
      description: yup.string().required("Description required"),
      image: yup.string().required("Image required"),
    });

    await schema.validate(req.body, { abortEarly: false });

    return next();
  } catch (error) {
    return res
      .status(400)
      .json({ error: "Validation Fails", messages: error.inner[0].message });
  }
};
export { validateProductStore };

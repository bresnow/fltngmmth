import * as yup from "yup";

const validateProductUpdate = async (req, res, next) => {
  try {
    const item = {
      id: req.params.id,
      name: req.body.name,
      sku: req.body.sku,
      price: req.body.price,
      description: req.body.description,
      image: req.body.image,
    };

    const schema = yup.object().shape({
      id: yup
        .string()
        .required("Id required")
        .uuid("The id must be of type uuid v4"),
      name: yup.string().required("Name required"),
      sku: yup.string().required("Sku required"),
      price: yup.number().required("Price required"),
      description: yup.string().required("Description required"),
      image: yup.string().required("Image required"),
    });

    await schema.validate(item, { abortEarly: false });

    return next();
  } catch (error) {
    return res
      .status(400)
      .json({ error: "Validation Fails", messages: error.inner[0].message });
  }
};
export { validateProductUpdate };

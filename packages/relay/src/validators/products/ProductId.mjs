import * as yup from "yup";

const validateProductId = async (req, res, next) => {
  const id = {
    id: req.params.id,
  };
  try {
    const schema = yup.object().shape({
      id: yup
        .string()
        .required("Id required")
        .uuid("The id must be of type uuid v4"),
    });

    await schema.validate(id, { abortEarly: false });

    return next();
  } catch (error) {
    return res
      .status(400)
      .json({ error: "Validation Fails", messages: error.inner[0].message });
  }
};
export { validateProductId };

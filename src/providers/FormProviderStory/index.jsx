import { FormProvider, useForm } from "react-hook-form";
import PropTypes from "prop-types";

const FormProviderStory = ({ children }) => {
  const methods = useForm();
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FormProvider {...methods}>{children}</FormProvider>
  );
};

FormProviderStory.propTypes = {
  children: PropTypes.node,
};

FormProviderStory.defaultProps = {
  children: null,
};

export default FormProviderStory;

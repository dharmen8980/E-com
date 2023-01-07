import React from "react";
import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import AddressForm from "./AddressForm";
import { validateYupSchema } from "formik";

const Shipping =
  ({ values, errors, touched, handleChange, handleBlur, setFieldValue }) => {
    return (
      <Box m="30px auto">
        <Box>
          <Typography sx={{ mb: "15px" }} fontSize="18px">
            Billing Information
          </Typography>
          <AddressForm
            type="billingAddress"
            values={values.billingAddress}
            errors={errors}
            touched={touched}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        </Box>
        <Box mb="20px">
          <FormControlLabel
            control={
              <Checkbox
                defaultChecked
                values={values.shippingAddress.isSameAddress}
                onChange={() => {
                  setFieldValue(
                    "shippingAddress.isSameAddress",
                    !values.shippingAddress.isSameAddress
                  );
                }}
              />
            }
            label="Same as billing address"
          />
        </Box>
        {!values.shippingAddress.isSameAddress && (
          <Box>
            <Typography sx={{ mb: "15px" }} fontSize="18px">
              Shipping Information
            </Typography>
            <AddressForm
              type="shippingAddress"
              values={values.shippingAddress}
              errors={errors}
              touched={touched}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
          </Box>
        )}
      </Box>
    );
  };

export default Shipping;

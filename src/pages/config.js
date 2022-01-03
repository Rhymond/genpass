import { Box, Typography } from "@mui/material";
import * as React from "react";

const Config = ({ account, secret }) => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom component="div">
        Account ID
      </Typography>
      <Typography variant="subtitle1" gutterBottom component="div">
        {account}
      </Typography>
      <Typography variant="h5" gutterBottom component="div">
        Secret
      </Typography>
      <Typography variant="subtitle1" gutterBottom component="div">
        {secret}
      </Typography>
    </Box>
  );
};

export default Config;

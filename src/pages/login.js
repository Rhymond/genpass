import { Box, Button } from "@mui/material";

const Login = ({ handleLogin }) => {
  return (
    <Box>
      <Button variant="contained" onClick={handleLogin}>
        Login
      </Button>
    </Box>
  );
};

export default Login;

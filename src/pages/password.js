import * as React from 'react';
import {
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  TextField,
  Typography
} from "@mui/material";
import {useState} from "react";
import Generate from "../uitls/generate";

const Password = () => {
  const [formData, setFormData] = useState({
    site: "",
    username: "",
    password: "",
    counter: "1",
    generated: "",
  })

  const handleSubmit = e => {
    e.preventDefault();
    const gen = Generate(formData.site, formData.username, formData.password, formData.counter, 16)
    setFormData({...formData, generated: gen})
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Generate Password
        </Typography>
        <Box component="form" onSubmit={() => {}} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            name="site"
            label="Site"
            id="site"
            autoComplete="site"
            value={formData.site}
            onChange={(e) => setFormData({...formData, site: e.target.value})}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            value={formData.username}
            onChange={(e) => setFormData({...formData, username: e.target.value})}
            autoComplete="username"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            autoComplete="current-password"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="counter"
            label="Counter"
            type="number"
            id="counter"
            value={formData.counter}
            onChange={(e) => setFormData({...formData, counter: e.target.value})}
            autoComplete="counter"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            onClick={handleSubmit}
            sx={{ mt: 3, mb: 2 }}
          >
            Generate
          </Button>
          <TextField
            margin="normal"
            required
            fullWidth
            name="generated"
            id="generated"
            value={formData.generated}
            disabled
          />
        </Box>
      </Box>
    </Container>
  )
}

export default Password;

import * as React from "react";
import { useState } from "react";
import jazzicon from "@metamask/jazzicon";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Slider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Generate from "../utils/generate";

const generateCharMap = (chars) => {
  let charMap = "";
  if (chars.lower) {
    charMap += "a-z";
  }
  if (chars.upper) {
    charMap += "A-Z";
  }
  if (chars.numbers) {
    charMap += "0-9";
  }
  if (chars.special) {
    charMap += "!()-.?[]_`~;:!@#$%^&*+=";
  }
  return charMap;
};

let sliderInterval;

const Password = ({ account }) => {
  const [generated, setGenerated] = useState("");
  const [chars, setChars] = useState({
    lower: true,
    upper: true,
    numbers: true,
    special: true,
  });
  const [formData, setFormData] = useState({
    site: "",
    username: "",
    password: "",
    counter: "1",
    passwordLen: 12,
    charmap: generateCharMap(chars),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const gen = Generate(
      formData.site,
      formData.username,
      formData.password,
      formData.counter,
      formData.passwordLen,
      formData.charmap
    );
    setGenerated(gen);
  };

  const handleCharChange = (e) => {
    const newchars = {
      ...chars,
      [e.target.name.replace("char", "")]: e.target.checked,
    };
    setChars(newchars);
    setFormData({ ...formData, charmap: generateCharMap(newchars) });
  };

  const handlePassLenChange = (e, val) => {
    clearTimeout(sliderInterval);
    sliderInterval = setTimeout(() => {
      setFormData({ ...formData, passwordLen: Number(val) });
    }, 200);
  };

  const jazz = jazzicon(64, parseInt(account.slice(2, 10), 16));

  return (
    <Box component="form" noValidate sx={{ mt: 1 }}>
      <Stack mb={3} direction="row" spacing={2} alignItems="center">
        <Avatar sx={{ width: 64, height: 64 }}>
          <div dangerouslySetInnerHTML={{ __html: jazz.innerHTML }} />
        </Avatar>
        <Typography variant="h5" gutterBottom component="div">
          {account.slice(0, 5)}....
          {account.slice(account.length - 5, account.length)}
        </Typography>
      </Stack>
      <TextField
        margin="normal"
        required
        fullWidth
        name="site"
        label="Site"
        id="site"
        autoComplete="site"
        value={formData.site}
        onChange={(e) => setFormData({ ...formData, site: e.target.value })}
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
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
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
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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
        onChange={(e) => setFormData({ ...formData, counter: e.target.value })}
        autoComplete="counter"
      />
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={chars.lower}
              onChange={handleCharChange}
              name="charlower"
            />
          }
          label="a-z"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={chars.upper}
              onChange={handleCharChange}
              name="charupper"
            />
          }
          label="A-Z"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={chars.numbers}
              onChange={handleCharChange}
              name="charnumbers"
            />
          }
          label="0-9"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={chars.special}
              onChange={handleCharChange}
              name="charspecial"
            />
          }
          label="^&$"
        />
      </FormGroup>
      <TextField
        margin="normal"
        required
        fullWidth
        name="charmap"
        label="charmap"
        id="charmap"
        value={formData.charmap}
        onChange={(e) => setFormData({ ...formData, charmap: e.target.value })}
        autoComplete="charmap"
      />
      <Typography id="track-false-slider" sx={{ mt: 2 }}>
        Password Length ( {formData.passwordLen} )
      </Typography>
      <Slider
        valueLabelDisplay="auto"
        defaultValue={12}
        onChange={handlePassLenChange}
        min={6}
        max={32}
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
        label="generated password"
        value={generated}
        disabled
      />
    </Box>
  );
};

export default Password;

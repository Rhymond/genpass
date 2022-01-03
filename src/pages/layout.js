import { Box, Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import Password from "./password";
import Config from "./config";

const Layout = ({ account, secret }) => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange}>
            <Tab label="Generate" value="1" />
            <Tab label="Config" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Password account={account} />
        </TabPanel>
        <TabPanel value="2">
          <Config account={account} secret={secret} />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default Layout;

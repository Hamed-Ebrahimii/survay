"use client";
import Image from "next/image";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";

import { Survay } from "@/types/survay";
import Form from "../form";
const BoxForm = ({ surveys }: { surveys: Survay[] }) => {
  const [value, setValue] = useState(1);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div className="glass w-1/4 px-4 py-5 rounded-xl">
      <div className="w-full flex items-center gap-2">
        <Image
          src="/img/avatar.png"
          alt="avatar"
          width={50}
          height={50}
          quality={100}
        />
        <div>
          <p className="text-white font-medium font-mono">hamed ebrahimi</p>
        </div>
      </div>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }} >
          <TabList 
            onChange={handleChange}
            aria-label="lab API tabs example"
            variant="scrollable"
            indicatorColor="primary"
            scrollButtons={false}
            textColor="inherit"
          >
            {surveys.map((item) => (
              <Tab
                style={{ fontFamily: "yekan", fontWeight: "bold" }}
                key={item.id}
                label={item.title}
                value={`${item.id + 1}`}
              />
            ))}
          </TabList>
        </Box>
        {surveys.map((item) => (
          <TabPanel
            key={item.id}
            defaultChecked={item.id === 0}
            value={`${item.id + 1}`}
          >
            <Form {...item}/>
          </TabPanel>
        ))}
      </TabContext>
    </div>
  );
};
export default BoxForm;

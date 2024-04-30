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
import { Button } from "@mui/material";
const BoxForm = ({ surveys }: { surveys: Survay[] }) => {
  const [value, setValue] = useState<number>(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const handleAnswer = (id: number) => {
    setAnswers([...answers, id]);
    setValue(value + 1);
  };
  const pagination = (value: number) => {
    setValue(value);
  };
  return (
    <div className="glass w-1/4 px-4 py-5 rounded-xl min-h-[561px] relative">
      <div className="w-full flex items-center gap-2 absolute -top-9">
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
      <div className="my-7 w-full">
        <h1 className="text-xl font-medium text-white flex items-center justify-center">
          نظرسنجی محصول موبایل
        </h1>
      </div>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
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
                style={{
                  fontFamily: "yekan",
                  fontWeight: "bold",
                  color: "white",
                }}
                disabled={surveys[value]?.requierd && surveys[value].id <= item.id }
                key={item.id}
                label={item.title}
                value={item.id}
              />
            ))}
          </TabList>
        </Box>
        {surveys.map((item) => (
          <TabPanel
            key={item.id}
            defaultChecked={item.id == 0}
            // @ts-ignore: Unreachable code error
            value={item.id}
          >
            <Form handleAnswer={handleAnswer} {...item} />
          </TabPanel>
        ))}
      </TabContext>
      <div className="w-full flex items-center justify-between my-4">
        <Button
          color="info"
          variant="contained"
          sx={
            {
              fontFamily : "yekan"
            }
          }
          onClick={() => pagination(value - 1)}
        >
          سوال قبلی
        </Button>
        <Button
          color="info"
          variant="contained"
          sx={{
            fontFamily : 'yekan'
          }}
          onClick={() => pagination(value + 1)}
          disabled={surveys[value]?.requierd}
        >
          سوال بعدی
        </Button>
      </div>
    </div>
  );
};
export default BoxForm;

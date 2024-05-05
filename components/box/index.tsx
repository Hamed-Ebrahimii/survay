"use client";
import Image from "next/image";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Form from "../form";
import "react-toastify/dist/ReactToastify.css";
import Btn from "../form/components/btn";
import { Context, InitialState } from "@/context/inedx";
const BoxForm = () => {
  const [tabIndex, setTabIndex] = useState<number>(0);
  //@ts-ignore
  const { setState, state: surveys }: InitialState = useContext(Context);
  
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };
  const pagination = (page: number) => {
   console.log(tabIndex , surveys.length);
   
    if (tabIndex + 1 >= surveys.length) {
      toast("ممنون بابت مشارکت شما ", {
        type: "info",
        position: "top-right",
        style: {
          flexDirection: "row-reverse",
        },
      });
      return;
    }
    setTabIndex(tabIndex + page);
  };
  const handleDisableBtn = () => {
    if (surveys[tabIndex]?.requierd) {
      if (!surveys.find(item => item.id === tabIndex)?.userAnswer) {
        return true;
      }
      return false;
    }
    return false;
  };

  return (
    <>
      <ToastContainer rtl />
      <div className="glass w-1/4 px-4 py-5 rounded-xl min-h-[561px] relative flex flex-col">
        <div className="w-full flex items-center gap-2 absolute -top-9">
          <Image
            src="/img/user.png"
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
        <div className="flex-1">
          <TabContext value={String(tabIndex)}>
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
                    disabled={true}
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
                {/* @ts-ignore: Unreachable code error */}
                <Form
                  handleTabs={pagination}
                  {...item}
                  
                />
              </TabPanel>
            ))}
          </TabContext>
        </div>
        <div className="w-full flex items-center justify-between my-4">
          <div>
            <Btn disabled={tabIndex <= 0} onClick={() => pagination(-1)}>سوال قبلی</Btn>
          </div>
          <div className="min-w-[118px]">
            <Btn
              onClick={() => pagination(tabIndex + 1)}
              disabled={handleDisableBtn()}
            >
              {tabIndex + 1 >= surveys.length ? "پایان" : "  سوال بعدی"}
            </Btn>
          </div>
        </div>
      </div>
    </>
  );
};
export default BoxForm;

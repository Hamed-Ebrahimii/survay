"use client";
import Image from "next/image";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useContext, useEffect, useState } from "react";
import anime from 'animejs/lib/anime.es.js';
import Form from "../form";
import "react-toastify/dist/ReactToastify.css";
import { ContextSurvey, InitialState } from "@/context/inedx";
import Check from "../check";
import Btn from "../form/components/btn";
const BoxForm = () => {
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [showTab , setShowTab] = useState(true)
  //@ts-ignore
  const { setState, state: surveys }: InitialState = useContext(ContextSurvey);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };
  const pagination = (page: number) => {
    if (tabIndex + 1 >= surveys.length && page > 0) {
        anime({
          targets : '.tab',
          opacity : ['100%' , '0%'],
          loop : false ,
          duration : 1000,
          complete : () =>{
            setShowTab(false)
          }
        }).play()

      return;
    }
    setTabIndex(tabIndex + page);
  };
  return (
    <>
    {
      !showTab && <div className="glass p-5 rounded-lg flex flex-col items-center justify-center">
        <Check/>
        <h1 className="mt-5 text-xl text-gray-200 font-medium">
          فرم نظرسنجی شما با موفقیت ارسال شد
        </h1>
        <Btn className="mt-4 w-2/3">
            مشاهده پاسخ ها
        </Btn>
      </div>
    }
    {
      showTab &&
      <div className="glass w-1/3 px-2 py-2 rounded-xl min-h-[330px] relative flex flex-col tab">
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
        <div className="my-3 w-full">
          <h1 className="text-xl font-medium text-white flex items-center justify-center">
            نظرسنجی محصول موبایل
          </h1>
        </div>
        <div className="flex-1">
          <TabContext value={tabIndex}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                height: "100%",
                padding: "0px",
              }}
            >
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                variant="scrollable"
                indicatorColor="primary"
                scrollButtons={false}
                textColor="inherit"
              >
                {surveys.map((item, index) => (
                  <Tab
                    style={{
                      fontFamily: "yekan",
                      fontWeight: "bold",
                      color: "white",
                    }}
                    disabled={true}
                    key={item.QuestionID}
                    label={"سوال : " + (index + 1)}
                    value={index}
                  />
                ))}
              </TabList>
            </Box>
            {surveys.map((item, index) => (
              <TabPanel
                key={item.QuestionID}
                defaultChecked={item.QuestionID === 0}
                // @ts-ignore: Unreachable code error
                value={index}
                sx={{
                  height: "100%",
                  paddingY: "0px",
                }}
                className="!h-full"
              >
                <Form
                  pagination={pagination}
                  {...item}
                  tabIndex={tabIndex}
                  numberSurvey={surveys.length}
                />
              </TabPanel>
            ))}
          </TabContext>
        </div>
      </div>
}
    </>
  );
};
export default BoxForm;

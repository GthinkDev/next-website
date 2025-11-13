"use client";

import type { FC } from "react";
import React, { memo } from "react";
import { motion } from "motion/react";
import { Button } from "@heroui/button";
import { CameraIcon } from "@/components/icons";

const Hero: FC = () => {
  return (
    <section
      className="overflow-hidden flex flex-col items-center"
      style={{ height: "calc(100vh - 128px)" }}
    >
      {/* 视频背景 */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/地球.mp4" type="video/mp4" />
        您的浏览器不支持视频标签。
      </video>

      {/* 内容区域 */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 0.5,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className="relative z-20 flex flex-col items-center  py-20 px-4 gap-6 w-full"
        style={{ height: "calc(100vh - 128px)" }}
      >
        <motion.p
          className={"opacity-90 secondaryText tracking-widest font-bold"}
        >
          SOFTWARE
        </motion.p>
        <h1 className="lgTitle opacity-90">
          执「三」生万物 &nbsp;&nbsp;&nbsp; 破「百」难之题
        </h1>
        <p className={"secondaryText opacity-90"}>
          网站 &nbsp;&nbsp;&nbsp;｜&nbsp;&nbsp;&nbsp;小程序
          &nbsp;&nbsp;&nbsp;｜&nbsp;&nbsp;&nbsp;APP
          &nbsp;&nbsp;&nbsp;｜&nbsp;&nbsp;&nbsp;公众号
        </p>

        <Button
          radius={"full"}
          variant={"solid"}
          color={"primary"}
          className={"mt-10 flex gap-2 items-center text-base px-5"}
        >
          联系我们
          <CameraIcon />
        </Button>
      </motion.div>
    </section>
  );
};

export default memo(Hero);

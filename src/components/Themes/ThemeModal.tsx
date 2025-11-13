"use client";

import Image from "next/image";
import type { FC } from "react";
import React, { memo, useEffect, useState } from "react";
import ThemeData from "@/components/Themes/ThemeData";
import ThemeItems from "@/components/Themes/ThemeItems";

const ThemeModal: FC = () => {
  const [selectedTheme, setSelectedTheme] = useState<string>("winter");
  const [currentThemeName, setCurrentThemeName] = useState<string>("冬日雪景");
  const [isClient, setIsClient] = useState(false);

  // 根据主题名称获取对应的汉化显示名称
  const getThemeDisplayName = (themeName: string): string => {
    if (themeName === "winter") return "冬日雪景";

    const allThemes = [...ThemeData.light, ...ThemeData.dark];
    const theme = allThemes.find((t) => t.name === themeName);
    return theme ? theme.displayName : "冬日雪景";
  };

  // 组件挂载后设置为客户端环境
  useEffect(() => {
    setIsClient(true);

    // 从本地存储获取保存的主题
    const savedTheme = localStorage.getItem("selectedTheme");
    const themeToApply = savedTheme || "winter"; // 如果没有保存的主题，使用 winter

    setSelectedTheme(themeToApply);
    setCurrentThemeName(getThemeDisplayName(themeToApply));
    document.documentElement.setAttribute("data-theme", themeToApply);
  }, []);

  useEffect(() => {
    // 监听本地存储变化，以便在多个标签页之间同步主题
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "selectedTheme" && e.newValue) {
        setSelectedTheme(e.newValue);
        setCurrentThemeName(getThemeDisplayName(e.newValue));
        document.documentElement.setAttribute("data-theme", e.newValue);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleThemeChange = (themeName: string) => {
    // 更新HTML元素的data-theme属性
    document.documentElement.setAttribute("data-theme", themeName);
    // 保存到本地存储
    localStorage.setItem("selectedTheme", themeName);
    // 更新状态
    setSelectedTheme(themeName);
    setCurrentThemeName(getThemeDisplayName(themeName));
  };
  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn  hover:bg-base-200 flex gap-4"
      >
        <Image src={"/theme.png"} alt={"missing"} width={24} height={24} />
        <span>{currentThemeName}</span>
        {/*<svg*/}
        {/*  width="12px"*/}
        {/*  height="12px"*/}
        {/*  className="inline-block h-2 w-2 fill-current opacity-60"*/}
        {/*  xmlns="http://www.w3.org/2000/svg"*/}
        {/*  viewBox="0 0 2048 2048"*/}
        {/*>*/}
        {/*  <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>*/}
        {/*</svg>*/}
      </div>
      <ul
        tabIndex={1}
        className="dropdown-content bg-base-200 rounded-box border-2 border-base-100 z-1 w-52 p-3 mt-2 shadow-2xl shadow-neutral/20"
      >
        <ThemeItems
          onThemeChange={handleThemeChange}
          currentTheme={selectedTheme}
        />
      </ul>
    </div>
  );
};

export default memo(ThemeModal);

"use client";

import type { FC } from "react";

import React, { memo, useEffect, useState } from "react";

const ThemeModal: FC = () => {
  const [selectedTheme, setSelectedTheme] = useState<string>("Default");

  useEffect(() => {
    // 获取当前应用的主题
    const htmlElement = document.documentElement;
    const currentTheme = htmlElement.getAttribute("data-theme") || "default";
    setSelectedTheme(
      currentTheme.charAt(0).toUpperCase() + currentTheme.slice(1),
    );
  }, []);

  const handleThemeChange = (themeName: string) => {
    // 更新HTML元素的data-theme属性
    document.documentElement.setAttribute("data-theme", themeName);
    // 更新状态显示主题名称
    setSelectedTheme(themeName.charAt(0).toUpperCase() + themeName.slice(1));
  };
  return (
    <div className="dropdown mb-72">
      <div tabIndex={0} role="button" className="btn m-1">
        颜色模式: {selectedTheme}
        <svg
          width="12px"
          height="12px"
          className="inline-block h-2 w-2 fill-current opacity-60"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <ul
        tabIndex={1}
        className="dropdown-content bg-base-300 rounded-box z-1 w-52 p-2 shadow-2xl"
      >
        <li className="menu-title">亮模式</li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Default"
            value="default"
            onChange={() => handleThemeChange("default")}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Retro"
            value="retro"
            onChange={() => handleThemeChange("retro")}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Cyberpunk"
            value="cyberpunk"
            onChange={() => handleThemeChange("cyberpunk")}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Valentine"
            value="valentine"
            onChange={() => handleThemeChange("valentine")}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Aqua"
            value="aqua"
            onChange={() => handleThemeChange("aqua")}
          />
        </li>
      </ul>
    </div>
  );
};

export default memo(ThemeModal);

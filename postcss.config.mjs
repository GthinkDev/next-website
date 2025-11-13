const config = {
  plugins: {
    "@tailwindcss/postcss": {
      plugins: ["daisyui"],
    },
    // 添加 autoprefixer 来处理现代 CSS 特性
    'autoprefixer': {},
  },
};

export default config;

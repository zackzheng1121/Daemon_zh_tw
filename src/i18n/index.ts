// Copyright (C) 2022 MCSManager <mcsmanager-dev@outlook.com>

import i18next from "i18next";

import zh_cn from "./language/zh_cn.json";
import en_us from "./language/en_us.json";

i18next.init({
  interpolation: {
    escapeValue: false
  },
  lng: "en_us",
  fallbackLng: "en_us",
  resources: {
    zh_cn: {
      translation: zh_cn
    },
    en_us: {
      translation: en_us
    },
    zh_tw: {
      translation: zh_tw
  }
});

// alias
const $t = i18next.t;

export { $t, i18next };

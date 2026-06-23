import enUS from "./locales/en-US";
import arSA from "./locales/ar-SA";
import caES from "./locales/ca-ES";
import csCZ from "./locales/cs-CZ";
import deDE from "./locales/de-DE";
import enGB from "./locales/en-GB";
import esES from "./locales/es-ES";
import faIR from "./locales/fa-IR";
import fiFI from "./locales/fi-FI";
import frFR from "./locales/fr-FR";
import heIL from "./locales/he-IL";
import huHU from "./locales/hu-HU";
import idID from "./locales/id-ID";
import itIT from "./locales/it-IT";
import jaJP from "./locales/ja-JP";
import kkKZ from "./locales/kk-KZ";
import koKR from "./locales/ko-KR";
import ltLT from "./locales/lt-LT";
import nbNO from "./locales/nb-NO";
import nlNL from "./locales/nl-NL";
import plPL from "./locales/pl-PL";
import ptBR from "./locales/pt-BR";
import roRO from "./locales/ro-RO";
import ruRU from "./locales/ru-RU";
import thTH from "./locales/th-TH";
import trTR from "./locales/tr-TR";
import ukUA from "./locales/uk-UA";
import viVN from "./locales/vi-VN";
import zhCN from "./locales/zh-CN";
import zhTW from "./locales/zh-TW";

const locales: Record<string, typeof enUS> = {
  "en-US": enUS,
  "ar-SA": arSA,
  "ca-ES": caES,
  "cs-CZ": csCZ,
  "de-DE": deDE,
  "en-GB": enGB,
  "es-ES": esES,
  "fa-IR": faIR,
  "fi-FI": fiFI,
  "fr-FR": frFR,
  "he-IL": heIL,
  "hu-HU": huHU,
  "id-ID": idID,
  "it-IT": itIT,
  "ja-JP": jaJP,
  "kk-KZ": kkKZ,
  "ko-KR": koKR,
  "lt-LT": ltLT,
  "nb-NO": nbNO,
  "nl-NL": nlNL,
  "pl-PL": plPL,
  "pt-BR": ptBR,
  "ro-RO": roRO,
  "ru-RU": ruRU,
  "th-TH": thTH,
  "tr-TR": trTR,
  "uk-UA": ukUA,
  "vi-VN": viVN,
  "zh-CN": zhCN,
  "zh-TW": zhTW,
};

export function i18n(locale: string) {
  return locales[locale] || enUS;
}

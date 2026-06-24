import { readFileSync } from 'fs';
import { join } from 'path';

// src/components/Footer.tsx

// src/i18n/locales/en-US.ts
var en_US_default = {
  components: {
    footer: {
      createdWith: "Created with"
    }
  }
};

// src/i18n/locales/ar-SA.ts
var ar_SA_default = {
  components: {
    footer: {
      createdWith: "\u0623\u064F\u0646\u0634\u0626 \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645"
    }
  }
};

// src/i18n/locales/ca-ES.ts
var ca_ES_default = {
  components: {
    footer: {
      createdWith: "Creat amb"
    }
  }
};

// src/i18n/locales/cs-CZ.ts
var cs_CZ_default = {
  components: {
    footer: {
      createdWith: "Vytvo\u0159eno pomoc\xED"
    }
  }
};

// src/i18n/locales/de-DE.ts
var de_DE_default = {
  components: {
    footer: {
      createdWith: "Erstellt mit"
    }
  }
};

// src/i18n/locales/en-GB.ts
var en_GB_default = {
  components: {
    footer: {
      createdWith: "Created with"
    }
  }
};

// src/i18n/locales/es-ES.ts
var es_ES_default = {
  components: {
    footer: {
      createdWith: "Creado con"
    }
  }
};

// src/i18n/locales/fa-IR.ts
var fa_IR_default = {
  components: {
    footer: {
      createdWith: "\u0633\u0627\u062E\u062A\u0647 \u0634\u062F\u0647 \u0628\u0627"
    }
  }
};

// src/i18n/locales/fi-FI.ts
var fi_FI_default = {
  components: {
    footer: {
      createdWith: "Luotu k\xE4ytt\xE4en"
    }
  }
};

// src/i18n/locales/fr-FR.ts
var fr_FR_default = {
  components: {
    footer: {
      createdWith: "Cr\xE9\xE9 avec"
    }
  }
};

// src/i18n/locales/he-IL.ts
var he_IL_default = {
  components: {
    footer: {
      createdWith: "\u05E0\u05D5\u05E6\u05E8 \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA"
    }
  }
};

// src/i18n/locales/hu-HU.ts
var hu_HU_default = {
  components: {
    footer: {
      createdWith: "K\xE9sz\xEDtve ezzel:"
    }
  }
};

// src/i18n/locales/id-ID.ts
var id_ID_default = {
  components: {
    footer: {
      createdWith: "Dibuat dengan"
    }
  }
};

// src/i18n/locales/it-IT.ts
var it_IT_default = {
  components: {
    footer: {
      createdWith: "Creato con"
    }
  }
};

// src/i18n/locales/ja-JP.ts
var ja_JP_default = {
  components: {
    footer: {
      createdWith: "\u4F5C\u6210"
    }
  }
};

// src/i18n/locales/kk-KZ.ts
var kk_KZ_default = {
  components: {
    footer: {
      createdWith: "\u049A\u04B1\u0440\u0430\u0441\u0442\u044B\u0440\u044B\u043B\u0493\u0430\u043D \u049B\u04B1\u0440\u0430\u043B:"
    }
  }
};

// src/i18n/locales/ko-KR.ts
var ko_KR_default = {
  components: {
    footer: {
      createdWith: "Created with"
    }
  }
};

// src/i18n/locales/lt-LT.ts
var lt_LT_default = {
  components: {
    footer: {
      createdWith: "Sukurta Su"
    }
  }
};

// src/i18n/locales/nb-NO.ts
var nb_NO_default = {
  components: {
    footer: {
      createdWith: "Laget med"
    }
  }
};

// src/i18n/locales/nl-NL.ts
var nl_NL_default = {
  components: {
    footer: {
      createdWith: "Gemaakt met"
    }
  }
};

// src/i18n/locales/pl-PL.ts
var pl_PL_default = {
  components: {
    footer: {
      createdWith: "Stworzone z u\u017Cyciem"
    }
  }
};

// src/i18n/locales/pt-BR.ts
var pt_BR_default = {
  components: {
    footer: {
      createdWith: "Criado com"
    }
  }
};

// src/i18n/locales/ro-RO.ts
var ro_RO_default = {
  components: {
    footer: {
      createdWith: "Creat cu"
    }
  }
};

// src/i18n/locales/ru-RU.ts
var ru_RU_default = {
  components: {
    footer: {
      createdWith: "\u0421\u043E\u0437\u0434\u0430\u043D\u043E \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E"
    }
  }
};

// src/i18n/locales/th-TH.ts
var th_TH_default = {
  components: {
    footer: {
      createdWith: "\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E14\u0E49\u0E27\u0E22"
    }
  }
};

// src/i18n/locales/tr-TR.ts
var tr_TR_default = {
  components: {
    footer: {
      createdWith: "\u015Eununla olu\u015Fturuldu"
    }
  }
};

// src/i18n/locales/uk-UA.ts
var uk_UA_default = {
  components: {
    footer: {
      createdWith: "\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043E \u0437\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u043E\u044E"
    }
  }
};

// src/i18n/locales/vi-VN.ts
var vi_VN_default = {
  components: {
    footer: {
      createdWith: "\u0110\u01B0\u1EE3c t\u1EA1o b\u1EB1ng"
    }
  }
};

// src/i18n/locales/zh-CN.ts
var zh_CN_default = {
  components: {
    footer: {
      createdWith: "Created with"
    }
  }
};

// src/i18n/locales/zh-TW.ts
var zh_TW_default = {
  components: {
    footer: {
      createdWith: "Created with"
    }
  }
};

// src/i18n/index.ts
var locales = {
  "en-US": en_US_default,
  "ar-SA": ar_SA_default,
  "ca-ES": ca_ES_default,
  "cs-CZ": cs_CZ_default,
  "de-DE": de_DE_default,
  "en-GB": en_GB_default,
  "es-ES": es_ES_default,
  "fa-IR": fa_IR_default,
  "fi-FI": fi_FI_default,
  "fr-FR": fr_FR_default,
  "he-IL": he_IL_default,
  "hu-HU": hu_HU_default,
  "id-ID": id_ID_default,
  "it-IT": it_IT_default,
  "ja-JP": ja_JP_default,
  "kk-KZ": kk_KZ_default,
  "ko-KR": ko_KR_default,
  "lt-LT": lt_LT_default,
  "nb-NO": nb_NO_default,
  "nl-NL": nl_NL_default,
  "pl-PL": pl_PL_default,
  "pt-BR": pt_BR_default,
  "ro-RO": ro_RO_default,
  "ru-RU": ru_RU_default,
  "th-TH": th_TH_default,
  "tr-TR": tr_TR_default,
  "uk-UA": uk_UA_default,
  "vi-VN": vi_VN_default,
  "zh-CN": zh_CN_default,
  "zh-TW": zh_TW_default
};
function i18n(locale) {
  return locales[locale] || en_US_default;
}

// src/components/styles/footer.scss
var footer_default = "footer {\n  text-align: left;\n  margin-bottom: 4rem;\n  opacity: 0.7;\n}\nfooter ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: row;\n  gap: 1rem;\n  margin-top: -1rem;\n}";
var l;
l = { __e: function(n2, l2, u3, t2) {
  for (var i2, r2, o2; l2 = l2.__; ) if ((i2 = l2.__c) && !i2.__) try {
    if ((r2 = i2.constructor) && null != r2.getDerivedStateFromError && (i2.setState(r2.getDerivedStateFromError(n2)), o2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), o2 = i2.__d), o2) return i2.__E = i2;
  } catch (l3) {
    n2 = l3;
  }
  throw n2;
} }, "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Math.random().toString(8);

// node_modules/preact/jsx-runtime/dist/jsxRuntime.mjs
var f2 = 0;
function u2(e2, t2, n2, o2, i2, u3) {
  t2 || (t2 = {});
  var a2, c2, p2 = t2;
  if ("ref" in p2) for (c2 in p2 = {}, t2) "ref" == c2 ? a2 = t2[c2] : p2[c2] = t2[c2];
  var l2 = { type: e2, props: p2, key: n2, ref: a2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f2, __i: -1, __u: 0, __source: i2, __self: u3 };
  if ("function" == typeof e2 && (a2 = e2.defaultProps)) for (c2 in a2) void 0 === p2[c2] && (p2[c2] = a2[c2]);
  return l.vnode && l.vnode(l2), l2;
}

// src/components/Footer.tsx
function getQuartzVersion() {
  try {
    const pkg = JSON.parse(readFileSync(join(process.cwd(), "package.json"), "utf-8"));
    return pkg.version ?? "";
  } catch {
    return "";
  }
}
var Footer_default = ((opts) => {
  const version = getQuartzVersion();
  const Footer = ({ displayClass }) => {
    const year = (/* @__PURE__ */ new Date()).getFullYear();
    const links = opts?.links ?? [];
    return /* @__PURE__ */ u2("footer", { class: `${displayClass ?? ""}`, children: [
      /* @__PURE__ */ u2("p", { children: [
        "A permanent knowledge graph project dedicated to documenting Aceh's history. Developed by ",
        /* @__PURE__ */ u2("a", { href: "https://www.trida.id", children: "TAR" }),
        ", led by ",
        /* @__PURE__ */ u2("a", { href: "https://github.com/kbpro8", children: "Kbpro8" }),
        ", and powered by ",
        /* @__PURE__ */ u2("a", { href: "https://github.com", children: "GitHub" }),
        " and ",
        /* @__PURE__ */ u2("a", { href: "https://quartz.jzhao.xyz/", children: [
          "Quartz",
          version ? ` v${version}` : ""
        ] }),
        " \xA9",
        " ",
        year,
        "."
      ] }),
      /* @__PURE__ */ u2("p", { children: [
        "Contribute to the project: ",
        /* @__PURE__ */ u2("a", { href: "https://github.com/kbpro8/acehwiki", children: "https://github.com/kbpro8/acehwiki" })
      ] }),
      /* @__PURE__ */ u2("ul", { children: Object.entries(links).map(([text, link]) => /* @__PURE__ */ u2("li", { children: /* @__PURE__ */ u2("a", { href: link, children: text }) })) })
    ] });
  };
  Footer.css = footer_default;
  return Footer;
});

export { Footer_default as Footer };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map

import { readFileSync } from 'fs';
import { join } from 'path';

// src/components/Footer.tsx

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
        "A knowledge graph project dedicated to documenting Aceh's history. Developed by ",
        /* @__PURE__ */ u2("a", { href: "https://github.com/kbpro8", children: "Kbpro8" }),
        ", supported by",
        " ",
        /* @__PURE__ */ u2("a", { href: "https://www.trida.id", children: "trida" }),
        ", and powered by",
        " ",
        /* @__PURE__ */ u2("a", { href: "https://github.com", children: "GitHub" }),
        " and",
        " ",
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
        "Contribute to the project:",
        " ",
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
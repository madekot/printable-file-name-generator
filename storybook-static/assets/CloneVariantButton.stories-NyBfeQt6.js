import { j as e } from "./jsx-runtime-D_zvdyIk.js";
import { B as w } from "./Button-Cv370no3.js";
import { c as b } from "./clsx-B-dksMZM.js";
import { f as H } from "./index-D_Ss_HUe.js";
import "./index-BCtMShv3.js";
const T = "_cloneVariantButton_3n70g_1",
  D = { cloneVariantButton: T },
  I = () =>
    e.jsxs("svg", {
      stroke: "currentColor",
      fill: "none",
      strokeWidth: "2",
      viewBox: "0 0 24 24",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      height: "20px",
      width: "20px",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        e.jsx("line", { x1: "15", x2: "15", y1: "12", y2: "18" }),
        e.jsx("line", { x1: "12", x2: "18", y1: "15", y2: "15" }),
        e.jsx("rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }),
        e.jsx("path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }),
      ],
    });
I.__docgenInfo = { description: "", methods: [], displayName: "LuCopyPlus" };
const V = ({ variantId: B, clickHandler: j, className: k, children: _ = "Дублировать" }) =>
  e.jsxs(w, {
    className: b(D.cloneVariantButton, k),
    onClick: () => j(B),
    variant: "green",
    children: [_, e.jsx(I, {})],
  });
V.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "CloneVariantButton",
  props: {
    clickHandler: {
      required: !0,
      tsType: {
        name: "signature",
        type: "function",
        raw: "(variantId: number) => void",
        signature: {
          arguments: [{ type: { name: "number" }, name: "variantId" }],
          return: { name: "void" },
        },
      },
      description: "",
    },
    variantId: { required: !0, tsType: { name: "number" }, description: "" },
    children: { defaultValue: { value: '"Дублировать"', computed: !1 }, required: !1 },
  },
  composes: ["ButtonHTMLAttributes"],
};
const E = {
    title: "Components/CloneVariantButton",
    component: V,
    parameters: { layout: "centered" },
    argTypes: {
      variantId: {
        control: { type: "number" },
        description: "ID варианта для дублирования",
        defaultValue: 1,
      },
      clickHandler: { action: "clicked", description: "Функция для обработки клика по кнопке" },
    },
    tags: ["autodocs"],
    args: { clickHandler: H(), variantId: 1 },
  },
  r = { args: {} },
  t = { args: {}, parameters: { pseudo: { hover: !0 } } },
  s = { args: { children: "Копировать вариант" } },
  a = { args: { variantId: 2 } },
  o = { args: { className: "bonus-custom-class" } };
var n, c, i;
r.parameters = {
  ...r.parameters,
  docs: {
    ...((n = r.parameters) == null ? void 0 : n.docs),
    source: {
      originalSource: `{
  args: {}
}`,
      ...((i = (c = r.parameters) == null ? void 0 : c.docs) == null ? void 0 : i.source),
    },
  },
};
var u, d, m;
t.parameters = {
  ...t.parameters,
  docs: {
    ...((u = t.parameters) == null ? void 0 : u.docs),
    source: {
      originalSource: `{
  args: {},
  parameters: {
    pseudo: {
      hover: true
    }
  }
}`,
      ...((m = (d = t.parameters) == null ? void 0 : d.docs) == null ? void 0 : m.source),
    },
  },
};
var p, l, g;
s.parameters = {
  ...s.parameters,
  docs: {
    ...((p = s.parameters) == null ? void 0 : p.docs),
    source: {
      originalSource: `{
  args: {
    children: "Копировать вариант"
  }
}`,
      ...((g = (l = s.parameters) == null ? void 0 : l.docs) == null ? void 0 : g.source),
    },
  },
};
var x, h, f;
a.parameters = {
  ...a.parameters,
  docs: {
    ...((x = a.parameters) == null ? void 0 : x.docs),
    source: {
      originalSource: `{
  args: {
    variantId: 2
  }
}`,
      ...((f = (h = a.parameters) == null ? void 0 : h.docs) == null ? void 0 : f.source),
    },
  },
};
var v, y, C;
o.parameters = {
  ...o.parameters,
  docs: {
    ...((v = o.parameters) == null ? void 0 : v.docs),
    source: {
      originalSource: `{
  args: {
    className: "bonus-custom-class" // Можно добавить кастомный стиль, если нужно
  }
}`,
      ...((C = (y = o.parameters) == null ? void 0 : y.docs) == null ? void 0 : C.source),
    },
  },
};
const M = ["Default", "DefaultHovered", "WithCustomText", "WithCustomId", "CustomClassVariant"];
export {
  o as CustomClassVariant,
  r as Default,
  t as DefaultHovered,
  a as WithCustomId,
  s as WithCustomText,
  M as __namedExportsOrder,
  E as default,
};

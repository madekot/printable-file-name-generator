import { j as e } from "./jsx-runtime-D_zvdyIk.js";
import { c as S } from "./clsx-B-dksMZM.js";
import { f as U } from "./index-D_Ss_HUe.js";
const W = "_checkbox_eare1_1",
  E = "_input_eare1_9",
  L = "_checkmark_eare1_13",
  I = "_labelText_eare1_44",
  c = { checkbox: W, input: E, checkmark: L, labelText: I },
  C = ({ checked: _, onChange: f, label: t, className: y, ...N }) => {
    const j = (T) => {
      f(T.target.checked);
    };
    return e.jsxs("label", {
      ...N,
      className: S(c.checkbox, y),
      children: [
        e.jsx("input", { type: "checkbox", checked: _, onChange: j, className: c.input }),
        e.jsx("span", { className: c.checkmark }),
        t && e.jsx("span", { className: c.labelText, children: t }),
      ],
    });
  };
C.__docgenInfo = { description: "", methods: [], displayName: "Checkbox" };
const v = {
    title: "Components/Checkbox",
    component: C,
    parameters: { layout: "centered" },
    argTypes: {
      checked: { control: { type: "boolean" } },
      label: { control: { type: "text" } },
      className: { control: { type: "text" } },
    },
    tags: ["autodocs"],
    args: { onChange: U(), checked: !1 },
  },
  s = { args: { checked: !1, label: "Unchecked checkbox" } },
  a = { args: { checked: !0, label: "Checked checkbox" } },
  o = { args: { checked: !1 } },
  r = {
    args: { checked: !1, label: "Custom styled checkbox", className: "custom-checkbox-class" },
  };
var n, l, h;
s.parameters = {
  ...s.parameters,
  docs: {
    ...((n = s.parameters) == null ? void 0 : n.docs),
    source: {
      originalSource: `{
  args: {
    checked: false,
    label: "Unchecked checkbox"
  }
}`,
      ...((h = (l = s.parameters) == null ? void 0 : l.docs) == null ? void 0 : h.source),
    },
  },
};
var m, d, k;
a.parameters = {
  ...a.parameters,
  docs: {
    ...((m = a.parameters) == null ? void 0 : m.docs),
    source: {
      originalSource: `{
  args: {
    checked: true,
    label: "Checked checkbox"
  }
}`,
      ...((k = (d = a.parameters) == null ? void 0 : d.docs) == null ? void 0 : k.source),
    },
  },
};
var p, u, x;
o.parameters = {
  ...o.parameters,
  docs: {
    ...((p = o.parameters) == null ? void 0 : p.docs),
    source: {
      originalSource: `{
  args: {
    checked: false
  }
}`,
      ...((x = (u = o.parameters) == null ? void 0 : u.docs) == null ? void 0 : x.source),
    },
  },
};
var b, i, g;
r.parameters = {
  ...r.parameters,
  docs: {
    ...((b = r.parameters) == null ? void 0 : b.docs),
    source: {
      originalSource: `{
  args: {
    checked: false,
    label: "Custom styled checkbox",
    className: "custom-checkbox-class"
  }
}`,
      ...((g = (i = r.parameters) == null ? void 0 : i.docs) == null ? void 0 : g.source),
    },
  },
};
const w = ["Unchecked", "Checked", "WithoutLabel", "WithCustomClass"];
export {
  a as Checked,
  s as Unchecked,
  r as WithCustomClass,
  o as WithoutLabel,
  w as __namedExportsOrder,
  v as default,
};

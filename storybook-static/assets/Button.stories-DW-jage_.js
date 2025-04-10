import { B as h } from "./Button-Cv370no3.js";
import { f } from "./index-D_Ss_HUe.js";
import "./jsx-runtime-D_zvdyIk.js";
import "./index-BCtMShv3.js";
import "./clsx-B-dksMZM.js";
const k = {
    title: "Components/Button",
    component: h,
    parameters: { layout: "centered" },
    argTypes: {
      variant: { control: { type: "radio" }, options: ["delete", "red", "green", "primary"] },
    },
    tags: ["autodocs"],
    args: { onClick: f() },
  },
  r = { args: { children: "Click me" } },
  e = { args: { children: "Delete", variant: "delete" } },
  a = { args: { children: "Primary", variant: "primary" } },
  n = { args: { children: "green", variant: "green" } };
var t, s, o;
r.parameters = {
  ...r.parameters,
  docs: {
    ...((t = r.parameters) == null ? void 0 : t.docs),
    source: {
      originalSource: `{
  args: {
    children: "Click me"
  }
}`,
      ...((o = (s = r.parameters) == null ? void 0 : s.docs) == null ? void 0 : o.source),
    },
  },
};
var c, i, m;
e.parameters = {
  ...e.parameters,
  docs: {
    ...((c = e.parameters) == null ? void 0 : c.docs),
    source: {
      originalSource: `{
  args: {
    children: "Delete",
    variant: "delete"
  }
}`,
      ...((m = (i = e.parameters) == null ? void 0 : i.docs) == null ? void 0 : m.source),
    },
  },
};
var p, d, l;
a.parameters = {
  ...a.parameters,
  docs: {
    ...((p = a.parameters) == null ? void 0 : p.docs),
    source: {
      originalSource: `{
  args: {
    children: "Primary",
    variant: "primary"
  }
}`,
      ...((l = (d = a.parameters) == null ? void 0 : d.docs) == null ? void 0 : l.source),
    },
  },
};
var g, u, y;
n.parameters = {
  ...n.parameters,
  docs: {
    ...((g = n.parameters) == null ? void 0 : g.docs),
    source: {
      originalSource: `{
  args: {
    children: "green",
    variant: "green"
  }
}`,
      ...((y = (u = n.parameters) == null ? void 0 : u.docs) == null ? void 0 : y.source),
    },
  },
};
const B = ["Default", "Delete", "Primary", "Green"];
export {
  r as Default,
  e as Delete,
  n as Green,
  a as Primary,
  B as __namedExportsOrder,
  k as default,
};

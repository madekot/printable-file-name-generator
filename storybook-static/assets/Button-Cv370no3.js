import { j as l } from "./jsx-runtime-D_zvdyIk.js";
import { r as i } from "./index-BCtMShv3.js";
import { c as u } from "./clsx-B-dksMZM.js";
const m = "_button_14i6s_1",
  d = "_red_14i6s_33",
  p = "_green_14i6s_45",
  c = "_primary_14i6s_57",
  e = { button: m, delete: "_delete_14i6s_21", red: d, green: p, primary: c },
  t = i.forwardRef(({ className: r, children: a, variant: s = "default", ...n }, o) =>
    l.jsx("button", { ref: o, className: u(e.button, e[s], r), type: "button", ...n, children: a })
  );
t.displayName = "Button";
t.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "Button",
  props: {
    className: { required: !1, tsType: { name: "string" }, description: "" },
    variant: {
      required: !1,
      tsType: {
        name: "union",
        raw: '"default" | "delete" | "red" | "green" | "primary"',
        elements: [
          { name: "literal", value: '"default"' },
          { name: "literal", value: '"delete"' },
          { name: "literal", value: '"red"' },
          { name: "literal", value: '"green"' },
          { name: "literal", value: '"primary"' },
        ],
      },
      description: "",
      defaultValue: { value: '"default"', computed: !1 },
    },
  },
  composes: ["ButtonHTMLAttributes"],
};
export { t as B };

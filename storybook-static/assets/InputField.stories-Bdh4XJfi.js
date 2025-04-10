import { j as l } from "./jsx-runtime-D_zvdyIk.js";
import { c as n } from "./clsx-B-dksMZM.js";
import { r as y } from "./index-BCtMShv3.js";
import { f as e } from "./index-D_Ss_HUe.js";
const F = "_inputField_gwuup_1",
  I = "_label_gwuup_5",
  j = "_input_gwuup_1",
  p = { inputField: F, label: I, input: j },
  N = ({ label: f, labelClassName: x, inputClassName: _, wrapperClassName: h, ...w }) => {
    const r = y.useId();
    return l.jsxs("div", {
      className: n(p.inputField, h),
      "data-testid": `input-field-wrapper-${r}`,
      children: [
        l.jsx("label", { className: n(p.label, x), htmlFor: r, children: f }),
        l.jsx("input", { ...w, className: n(p.input, _), id: r }),
      ],
    });
  };
N.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "InputField",
  props: {
    label: { required: !0, tsType: { name: "string" }, description: "" },
    inputClassName: { required: !1, tsType: { name: "string" }, description: "" },
    labelClassName: { required: !1, tsType: { name: "string" }, description: "" },
    wrapperClassName: { required: !1, tsType: { name: "string" }, description: "" },
  },
};
const D = {
    title: "Components/InputField",
    component: N,
    parameters: { layout: "centered" },
    argTypes: {
      label: { control: { type: "text" }, description: "Текст лейбла" },
      inputClassName: { control: { type: "text" }, description: "Класс для инпута" },
      labelClassName: { control: { type: "text" }, description: "Класс для лейбла" },
      wrapperClassName: { control: { type: "text" }, description: "Класс для обёртки" },
    },
    args: {
      label: "Имя пользователя",
      value: "",
      placeholder: "",
      inputClassName: "input-field",
      labelClassName: "input-label",
      wrapperClassName: "input-wrapper",
      onClick: e(),
      onChange: e(),
      onFocus: e(),
      onBlur: e(),
    },
    tags: ["autodocs"],
  },
  a = { args: { label: "Введите ваше имя", placeholder: "Имя", value: "Вальдемар" } },
  s = {
    args: {
      label: "Пароль",
      inputClassName: "custom-input",
      labelClassName: "custom-label",
      wrapperClassName: "custom-wrapper",
    },
  },
  t = { args: { label: "Email", placeholder: "Введите ваш email", disabled: !0 } };
var o, i, u;
a.parameters = {
  ...a.parameters,
  docs: {
    ...((o = a.parameters) == null ? void 0 : o.docs),
    source: {
      originalSource: `{
  args: {
    label: "Введите ваше имя",
    // Лейбл по умолчанию
    placeholder: "Имя",
    // Плейсхолдер для инпута
    value: "Вальдемар"
  }
}`,
      ...((u = (i = a.parameters) == null ? void 0 : i.docs) == null ? void 0 : u.source),
    },
  },
};
var c, m, d;
s.parameters = {
  ...s.parameters,
  docs: {
    ...((c = s.parameters) == null ? void 0 : c.docs),
    source: {
      originalSource: `{
  args: {
    label: "Пароль",
    inputClassName: "custom-input",
    // Пример кастомного класса для инпута
    labelClassName: "custom-label",
    // Пример кастомного класса для лейбла
    wrapperClassName: "custom-wrapper" // Пример кастомного класса для обёртки
  }
}`,
      ...((d = (m = s.parameters) == null ? void 0 : m.docs) == null ? void 0 : d.source),
    },
  },
};
var b, C, g;
t.parameters = {
  ...t.parameters,
  docs: {
    ...((b = t.parameters) == null ? void 0 : b.docs),
    source: {
      originalSource: `{
  args: {
    label: "Email",
    placeholder: "Введите ваш email",
    disabled: true // Поле ввода будет заблокировано
  }
}`,
      ...((g = (C = t.parameters) == null ? void 0 : C.docs) == null ? void 0 : g.source),
    },
  },
};
const S = ["Default", "WithCustomClasses", "Disabled"];
export {
  a as Default,
  t as Disabled,
  s as WithCustomClasses,
  S as __namedExportsOrder,
  D as default,
};

define(["require", "exports", "preact/jsx-runtime"], function (require, exports, jsx_runtime_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Foreach = () => {
        return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", { children: "VDOM does not have a view and viewModel like JET MVVM does. It is all done in the TypeScript file. Iterating over an array of data is done using the JavaScript Map() method." }), (0, jsx_runtime_1.jsx)("div", Object.assign({ class: "oj-panel oj-sm-margin-4x-bottom" }, { children: (0, jsx_runtime_1.jsx)("code", { children: (0, jsx_runtime_1.jsxs)("div", { children: ["return (", (0, jsx_runtime_1.jsx)("br", {}), "\u00A0", "<ul>", (0, jsx_runtime_1.jsx)("br", {}), "\u00A0\u00A0", "{", (0, jsx_runtime_1.jsx)("br", {}), "\u00A0\u00A0\u00A0", "itemList.map((item) => (", (0, jsx_runtime_1.jsx)("br", {}), "\u00A0\u00A0\u00A0\u00A0", "<li>", (0, jsx_runtime_1.jsx)("br", {}), "\u00A0\u00A0\u00A0\u00A0\u00A0", '<a id={item.id} href={item.linkTarget} target="_blank">{item.message}</a>', (0, jsx_runtime_1.jsx)("br", {}), "\u00A0\u00A0\u00A0\u00A0\u00A0", "</a>", (0, jsx_runtime_1.jsx)("br", {}), "\u00A0\u00A0\u00A0\u00A0", "</li>", (0, jsx_runtime_1.jsx)("br", {}), "\u00A0\u00A0\u00A0", "))", (0, jsx_runtime_1.jsx)("br", {}), "\u00A0\u00A0", "}", (0, jsx_runtime_1.jsx)("br", {}), "\u00A0", "</ul>", (0, jsx_runtime_1.jsx)("br", {}), ")"] }) }) })), (0, jsx_runtime_1.jsx)("p", { children: "Notice that the arrow function inside the map() method, uses parenthesis and not curly braces? This is a bit of a shortcut provided by JSX. If you use curly braces, you would then have to provide a return method with parenthesis inside of that." })] }));
    };
    exports.default = Foreach;
});
define(["require", "exports", "preact/jsx-runtime", "./bindings/index", "./modules/index", "./examples/index"], function (require, exports, jsx_runtime_1, index_1, index_2, index_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Content = (props) => {
        let pageContent = (page) => {
            switch (page) {
                case "modules":
                    return (0, jsx_runtime_1.jsx)(index_2.default, {});
                case "bindings":
                    return (0, jsx_runtime_1.jsx)(index_1.default, {});
                case "examples":
                    return (0, jsx_runtime_1.jsx)(index_3.default, {});
            }
        };
        return ((0, jsx_runtime_1.jsx)("div", Object.assign({ class: "oj-web-applayout-max-width oj-web-applayout-content" }, { children: pageContent(props.page) })));
    };
    exports.default = Content;
});

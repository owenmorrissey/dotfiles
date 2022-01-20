"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseSnippet = exports.formatSnippet = exports.revertSnippetPlaceholders = exports.replaceSnippetPlaceholders = exports.extensionConfig = void 0;
const prettier_1 = __importDefault(require("prettier"));
const vscode_1 = require("vscode");
const types_1 = require("./types");
let prettierConfig;
prettier_1.default
    .resolveConfig('', { editorconfig: true })
    .then((config) => (prettierConfig = config));
const extensionConfig = () => vscode_1.workspace.getConfiguration('reactSnippets.settings');
exports.extensionConfig = extensionConfig;
const getPrettierConfig = () => {
    const { semiColons, singleQuote, tabWidth, prettierEnabled } = (0, exports.extensionConfig)();
    return {
        parser: 'typescript',
        semi: semiColons,
        singleQuote,
        tabWidth,
        ...(prettierEnabled && prettierConfig),
    };
};
const replaceSnippetPlaceholders = (snippetString) => String(snippetString)
    .replace(new RegExp(types_1.SnippetPlaceholders.FileName, 'g'), '${1:${TM_FILENAME_BASE}}')
    .replace(new RegExp(types_1.SnippetPlaceholders.FirstTab, 'g'), '${1:first}')
    .replace(new RegExp(types_1.SnippetPlaceholders.SecondTab, 'g'), '${2:second}')
    .replace(new RegExp(types_1.SnippetPlaceholders.ThirdTab, 'g'), '${3:third}')
    .replace(new RegExp(types_1.SnippetPlaceholders.LastTab, 'g'), '$0');
exports.replaceSnippetPlaceholders = replaceSnippetPlaceholders;
const revertSnippetPlaceholders = (snippetString) => String(snippetString)
    .replace(new RegExp(/\${1:\${TM_FILENAME_BASE}}/, 'g'), types_1.SnippetPlaceholders.FileName)
    .replace(new RegExp(/\${1:first}/, 'g'), types_1.SnippetPlaceholders.FirstTab)
    .replace(new RegExp(/\${2:second}/, 'g'), types_1.SnippetPlaceholders.SecondTab)
    .replace(new RegExp(/\${3:third}/, 'g'), types_1.SnippetPlaceholders.ThirdTab)
    .replace(new RegExp(/\$0/, 'g'), types_1.SnippetPlaceholders.LastTab);
exports.revertSnippetPlaceholders = revertSnippetPlaceholders;
const formatSnippet = (string) => {
    const prettierConfig = getPrettierConfig();
    return prettier_1.default.format(string, prettierConfig);
};
exports.formatSnippet = formatSnippet;
const parseSnippet = (body) => {
    const snippetBody = typeof body === 'string' ? body : body.join('\n');
    return (0, exports.replaceSnippetPlaceholders)((0, exports.formatSnippet)((0, exports.revertSnippetPlaceholders)(snippetBody)));
};
exports.parseSnippet = parseSnippet;
//# sourceMappingURL=helpers.js.map
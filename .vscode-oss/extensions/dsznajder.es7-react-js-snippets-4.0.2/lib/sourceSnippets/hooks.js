"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const useEffect = {
    key: 'useEffect',
    prefix: 'useEffectSnippet',
    body: [
        'useEffect(() => {',
        `  ${types_1.SnippetPlaceholders.FirstTab}`,
        '',
        '  return () => {',
        `    ${types_1.SnippetPlaceholders.SecondTab}`,
        '  }',
        `}, [${types_1.SnippetPlaceholders.ThirdTab}])`,
        '',
    ],
};
const useContext = {
    key: 'useContext',
    prefix: 'useContextSnippet',
    body: [
        `const ${types_1.SnippetPlaceholders.FirstTab} = useContext(${types_1.SnippetPlaceholders.SecondTab})`,
    ],
};
const useReducer = {
    key: 'useReducer',
    prefix: 'useReducerSnippet',
    body: [
        `const [state, dispatch] = useReducer(${types_1.SnippetPlaceholders.FirstTab}, ${types_1.SnippetPlaceholders.SecondTab}, ${types_1.SnippetPlaceholders.ThirdTab})`,
    ],
};
const useCallback = {
    key: 'useCallback',
    prefix: 'useCallbackSnippet',
    body: [
        'useCallback(',
        '  () => {',
        `    ${types_1.SnippetPlaceholders.FirstTab}`,
        '  },',
        `  [${types_1.SnippetPlaceholders.SecondTab}],`,
        ')',
        '',
    ],
};
const useMemo = {
    key: 'useMemo',
    prefix: 'useMemoSnippet',
    body: [
        `useMemo(() => ${types_1.SnippetPlaceholders.FirstTab}, ${types_1.SnippetPlaceholders.SecondTab})`,
    ],
};
const useRef = {
    key: 'useRef',
    prefix: 'useRefSnippet',
    body: [
        `const ${types_1.SnippetPlaceholders.FirstTab} = useRef(${types_1.SnippetPlaceholders.SecondTab})`,
    ],
};
const useImperativeHandle = {
    key: 'useImperativeHandle',
    prefix: 'useImperativeHandleSnippet',
    body: [
        'useImperativeHandle(',
        `  ${types_1.SnippetPlaceholders.FirstTab},`,
        '  () => {',
        `    ${types_1.SnippetPlaceholders.SecondTab}`,
        '  },',
        `  [${types_1.SnippetPlaceholders.ThirdTab}],`,
        ')',
    ],
};
const useLayoutEffect = {
    key: 'useLayoutEffect',
    prefix: 'useLayoutEffectSnippet',
    body: [
        'useLayoutEffect(() => {',
        `  ${types_1.SnippetPlaceholders.FirstTab}`,
        '  return () => {',
        `    ${types_1.SnippetPlaceholders.SecondTab}`,
        '  };',
        `}, [${types_1.SnippetPlaceholders.ThirdTab}])`,
    ],
};
exports.default = [
    useEffect,
    useContext,
    useReducer,
    useCallback,
    useMemo,
    useRef,
    useImperativeHandle,
    useLayoutEffect,
];
//# sourceMappingURL=hooks.js.map
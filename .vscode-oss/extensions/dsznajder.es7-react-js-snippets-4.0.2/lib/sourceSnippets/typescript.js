"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const sharedSnippets_1 = require("./sharedSnippets");
const exportType = {
    body: [
        `export type ${types_1.SnippetPlaceholders.FirstTab} = {${types_1.SnippetPlaceholders.LastTab}}`,
    ],
    key: 'exportType',
    prefix: 'exptp',
};
const exportInterface = {
    key: 'exportInterface',
    prefix: 'expint',
    body: [
        `export interface ${types_1.SnippetPlaceholders.FirstTab} {${types_1.SnippetPlaceholders.LastTab}}`,
        '',
    ],
};
const typescriptReactClassComponent = {
    key: 'typescriptReactClassComponent',
    prefix: 'tsrcc',
    description: 'Creates a React component class with ES7 module system and TypeScript interfaces',
    body: [
        ...sharedSnippets_1.reactComponent,
        ...sharedSnippets_1.propsStateInterface,
        `export default class ${types_1.SnippetPlaceholders.FileName} extends Component<Props, State> {`,
        '  state = {}',
        '',
        ...sharedSnippets_1.innerComponentReturn,
        '}',
        '',
    ],
};
const typescriptReactClassExportComponent = {
    key: 'typescriptReactClassExportComponent',
    prefix: 'tsrce',
    body: [
        ...sharedSnippets_1.reactComponent,
        ...sharedSnippets_1.propsStateInterface,
        `class ${types_1.SnippetPlaceholders.FileName} extends Component<Props, State> {`,
        '  state = {}',
        '',
        ...sharedSnippets_1.innerComponentReturn,
        '}',
        ...sharedSnippets_1.exportDefault,
    ],
    description: 'Creates a React component class with ES7 module system and TypeScript interfaces',
};
const typescriptReactFunctionalExportComponent = {
    key: 'typescriptReactFunctionalExportComponent',
    prefix: 'tsrfce',
    body: [
        ...sharedSnippets_1.react,
        ...sharedSnippets_1.propsTypeInterface,
        `function ${types_1.SnippetPlaceholders.FileName}({}: Props) {`,
        ...sharedSnippets_1.innerComponent,
        '}',
        ...sharedSnippets_1.exportDefault,
    ],
    description: 'Creates a React Functional Component with ES7 module system and TypeScript interface',
};
const typescriptReactFunctionalComponent = {
    key: 'typescriptReactFunctionalComponent',
    prefix: 'tsrfc',
    body: [
        ...sharedSnippets_1.react,
        ...sharedSnippets_1.propsTypeInterface,
        `export default function ${types_1.SnippetPlaceholders.FileName}({}: Props) {`,
        ...sharedSnippets_1.innerComponent,
        '}',
        '',
    ],
    description: 'Creates a React Functional Component with ES7 module system and TypeScript interface',
};
const typescriptReactArrowFunctionExportComponent = {
    key: 'typescriptReactArrowFunctionExportComponent',
    prefix: 'tsrafce',
    body: [
        ...sharedSnippets_1.react,
        ...sharedSnippets_1.propsTypeInterface,
        `const ${types_1.SnippetPlaceholders.FileName} = (props: Props) => {`,
        ...sharedSnippets_1.innerComponent,
        '}',
        ...sharedSnippets_1.exportDefault,
    ],
    description: 'Creates a React Arrow Function Component with ES7 module system and TypeScript interface',
};
const typescriptReactArrowFunctionComponent = {
    key: 'typescriptReactArrowFunctionComponent',
    prefix: 'tsrafc',
    body: [
        ...sharedSnippets_1.react,
        ...sharedSnippets_1.propsTypeInterface,
        `const ${types_1.SnippetPlaceholders.FileName} = (props: Props) => {`,
        ...sharedSnippets_1.innerComponent,
        '}',
        '',
    ],
    description: 'Creates a React Arrow Function Component with ES7 module system and TypeScript interface',
};
const typescriptReactClassPureComponent = {
    key: 'typescriptReactClassPureComponent',
    prefix: 'tsrpc',
    body: [
        ...sharedSnippets_1.reactPureComponent,
        ...sharedSnippets_1.propsTypeInterface,
        `export default class ${types_1.SnippetPlaceholders.FileName} extends PureComponent<Props> {`,
        ...sharedSnippets_1.innerComponentReturn,
        '}',
        '',
    ],
    description: 'Creates a React pure component class with ES7 module system and TypeScript interface',
};
const typescriptReactClassExportPureComponent = {
    key: 'typescriptReactClassExportPureComponent',
    prefix: 'tsrpce',
    body: [
        ...sharedSnippets_1.reactPureComponent,
        ...sharedSnippets_1.propsTypeInterface,
        `class ${types_1.SnippetPlaceholders.FileName} extends PureComponent<Props> {`,
        ...sharedSnippets_1.innerComponentReturn,
        '}',
        ...sharedSnippets_1.exportDefault,
    ],
    description: 'Creates a React pure component class with ES7 module system and TypeScript interface',
};
const typescriptReactClassComponentRedux = {
    key: 'typescriptReactClassComponentRedux',
    prefix: 'tsrcredux',
    body: [
        "import { connect } from 'react-redux'",
        ...sharedSnippets_1.reactComponent,
        ...sharedSnippets_1.propsStateInterface,
        `export class ${types_1.SnippetPlaceholders.FileName} extends Component<Props, State> {`,
        '  state = {}',
        '',
        ...sharedSnippets_1.innerComponentReturn,
        '}',
        ...sharedSnippets_1.reduxComponentExport,
    ],
    description: 'Creates a React component class with connected redux and ES7 module system and TypeScript interfaces',
};
const typescriptReactNativeArrowFunctionComponent = {
    key: 'typescriptReactNativeArrowFunctionComponent',
    prefix: 'tsrnf',
    body: [
        "import { View, Text } from 'react-native'",
        ...sharedSnippets_1.react,
        ...sharedSnippets_1.propsTypeInterface,
        `const ${types_1.SnippetPlaceholders.FileName} = (props: Props) => {`,
        '  return (',
        '    <View>',
        `      <Text>${types_1.SnippetPlaceholders.LastTab}</Text>`,
        '    </View>',
        '  )',
        '}',
        ...sharedSnippets_1.exportDefault,
    ],
    description: 'Creates a React Native Arrow Function Component with ES7 module system and TypeScript interface',
};
const typescriptReactNativeArrowFunctionComponentNamedProps = {
    key: 'typescriptReactNativeArrowFunctionComponentNamedProps',
    prefix: 'tsrnfi',
    body: [
        "import { View } from 'react-native'",
        ...sharedSnippets_1.react,
        ...sharedSnippets_1.propsTypeInterface,
        `const ${types_1.SnippetPlaceholders.FileName}: React.FC<${types_1.SnippetPlaceholders.FileName}Props> = (props) => {`,
        '  return (',
        '    <View>',
        `      ${types_1.SnippetPlaceholders.LastTab}`,
        '    </View>',
        '  )',
        '}',
        ...sharedSnippets_1.exportDefault,
    ],
    description: 'Creates a React Native Arrow Function Component with ES7 module system and named TypeScript interface',
};
const typescriptReactNativeArrowFunctionComponentWithStyles = {
    key: 'typescriptReactNativeArrowFunctionComponentWithStyles',
    prefix: 'tsrnfs',
    body: [
        "import { StyleSheet, Text, View } from 'react-native'",
        ...sharedSnippets_1.react,
        ...sharedSnippets_1.propsTypeInterface,
        `const ${types_1.SnippetPlaceholders.FileName} = (props: Props) => {`,
        '  return (',
        '    <View>',
        `      <Text>${types_1.SnippetPlaceholders.LastTab}</Text>`,
        '    </View>',
        '  )',
        '}',
        ...sharedSnippets_1.exportDefault,
        'const styles = StyleSheet.create({})',
        '',
    ],
    description: 'Creates a React Native Arrow Function Component with ES7 module system, TypeScript interface and StyleSheet',
};
exports.default = [
    exportType,
    exportInterface,
    typescriptReactClassComponent,
    typescriptReactClassExportComponent,
    typescriptReactFunctionalExportComponent,
    typescriptReactFunctionalComponent,
    typescriptReactArrowFunctionExportComponent,
    typescriptReactArrowFunctionComponent,
    typescriptReactClassPureComponent,
    typescriptReactClassExportPureComponent,
    typescriptReactClassComponentRedux,
    typescriptReactNativeArrowFunctionComponent,
    typescriptReactNativeArrowFunctionComponentNamedProps,
    typescriptReactNativeArrowFunctionComponentWithStyles,
];
//# sourceMappingURL=typescript.js.map
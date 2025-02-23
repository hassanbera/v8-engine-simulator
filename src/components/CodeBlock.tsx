import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = () => {
    const codeString = `
let person = { name: "Alice" };
person.age = 25;
person.city = "Berlin";

function getAge(obj) {
    return obj.age;
}

getAge(person); // İlk erişim - Cold State
getAge(person); // İkinci erişim - Monomorphic State
    `;

    return (
        <SyntaxHighlighter language="javascript" style={atomDark}>
            {codeString}
        </SyntaxHighlighter>
    );
};

export default CodeBlock;


import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = () => {
    const codeString = `
let person1 = { name: "Alice" };
person1.age = 25;
person1.city = "Berlin";

function getAge(obj) {
    return obj.age;
}

// 🚀 Cold State (First Access)
getAge(person1); 

// 🚀 Monomorphic State (Same Shape, Optimized)
getAge(person1);

// 🚀 Polymorphic State (Different Object, Different Shape)
let person2 = { name: "Bob", age: 30 };
getAge(person2);

// 🚀 Megamorphic State (Cache De-Optimization)
let person3 = { name: "Charlie", age: "Thirty-Five" }; // Different property structure (age as string)
getAge(person3);
    `;

    return (
        <SyntaxHighlighter language="javascript" style={atomDark}>
            {codeString}
        </SyntaxHighlighter>
    );
};

export default CodeBlock;

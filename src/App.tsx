import Shapes from './components/Shapes';
import InlineCache from './components/InlineCache';
import Controls from './components/Controls';
import CodeBlock from './components/CodeBlock';
import './styles.css';

const App = () => {
    return (
        <div className="app">
            <h1>V8 Engine Simulator</h1>
            <div className="main-content">
                <div className="left-panel">
                    <CodeBlock />
                    <Controls />
                </div>
                <div className="right-panel">
                    <Shapes />
                    <InlineCache />
                </div>
            </div>
        </div>
    );
};

export default App;

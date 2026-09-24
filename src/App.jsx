import { useState } from "react";
import "./App.css";
import KpiCard from "./components/KpiCard";
import Counter from "./components/Counter";
import Toggle from "./components/Toggle";

function App() {

    const [isDark, setIsDark] = useState(false);

    function themeToggle(){
        setIsDark(!isDark);
    }

    return (
        <div className={isDark ? "dark-theme" : "light-theme"}>
            
            <h1>Countries Dashboard</h1>

                <Toggle
                    isDark={isDark}
                    onToggle={themeToggle}
                />

            <div className="kpi-container">
                <KpiCard
                    title="Number of countries"
                    value="195"
                    change="+2"
                />

                <KpiCard
                    title="Total population"
                    value="8.2B"
                    change="+1.3%"
                />

                <KpiCard
                    title="Continents"
                    value="7"
                    change="0"
                />
            </div>

            <Counter />
        </div>
    );
}

export default App;
import KpiCard from "./components/KpiCard";

function App() {
    return (
        <div>
            <h1>Countries Dashboard</h1>

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
        </div>
    );
}

export default App;
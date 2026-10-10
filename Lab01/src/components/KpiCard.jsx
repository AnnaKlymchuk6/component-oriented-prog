function KpiCard(props) {
    return (
        <div className="kpi-card">
            <h3>{props.title}</h3>
            <p className="kpi-value">{props.value}</p>
            <p className="kpi-change">{props.change}</p>
        </div>
    );
}

export default KpiCard;
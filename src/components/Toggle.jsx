function Toggle(props){
    return(
        <button className="theme-toggle" onClick={props.onToggle}>
            {props.isDark ? "Light mode" : "Dark mode"}
        </button>
    );
}

export default Toggle;
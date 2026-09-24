import { useState } from "react";
import countries from "../data/countries";

function FilteredList() {
    const [selectedRegion, setSelectedRegion] = useState("All");

    function handleRegionChange(event) {
        setSelectedRegion(event.target.value);
    }

    const filteredCountries = countries.filter(function(country) {
        if (selectedRegion === "All") {
            return true;
        }

        return country.region === selectedRegion;
    });

    return (
        <div className="filtered-list">
            <h2>Countries</h2>

            <label>
                Filter by region:{" "}
                <select
                    value={selectedRegion}
                    onChange={handleRegionChange}
                >
                    <option value="All">All</option>
                    <option value="Europe">Europe</option>
                    <option value="Asia">Asia</option>
                    <option value="North America">North America</option>
                    <option value="South America">South America</option>
                </select>
            </label>

            <div className="country-list">
                {filteredCountries.map(function(country) {
                    return (
                        <p key={country.name}>
                            {country.name}
                        </p>
                    );
                })}
            </div>
        </div>
    );
}

export default FilteredList;
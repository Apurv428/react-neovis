import React, { useState } from "react";
import { NeoGraph, ResponsiveNeoGraph } from "./NeoGraph";
import "./App.css";

const NEO4J_URI = "bolt://44.195.37.48:7687.dbs.graphenedb.com:24787";
const NEO4J_USER = "neo4j";
const NEO4J_PASSWORD = "grants-rigs-crosses";

const App = () => {
    const [showResponsiveGraph, setShowResponsiveGraph] = useState(true);

    const toggleGraph = () => {
        setShowResponsiveGraph(!showResponsiveGraph);
    };

    return (
        <div className="app-container">
            {/* Navbar */}
            <nav className="navbar">
                <h1>React-Neo4j-NeoVis</h1>
            </nav>

            {/* Button */}
            <div className="button-container">
                <button onClick={toggleGraph} className="toggle-button">
                    {showResponsiveGraph ? "Show NeoGraph" : "Show ResponsiveNeoGraph"}
                </button>
            </div>

            {/* Graph */}
            <div className="graph-container">
                {showResponsiveGraph ? (
                    <ResponsiveNeoGraph
                        containerId={"id0"}
                        neo4jUri={NEO4J_URI}
                        neo4jUser={NEO4J_USER}
                        neo4jPassword={NEO4J_PASSWORD}
                    />
                ) : (
                    <NeoGraph
                        width={600}
                        height={400}
                        containerId={"id1"}
                        neo4jUri={NEO4J_URI}
                        neo4jUser={NEO4J_USER}
                        neo4jPassword={NEO4J_PASSWORD}
                        backgroundColor={"#eee"}
                    />
                )}
            </div>
        </div>
    );
};

export default App;
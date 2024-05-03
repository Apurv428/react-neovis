import React, { useEffect, useRef } from "react";
import useResizeAware from "react-resize-aware";
import PropTypes from "prop-types";
import Neovis from "neovis.js/dist/neovis.js";

const NeoGraph = (props) => {
    const {
        width,
        height,
        containerId,
        backgroundColor,
        neo4jUri,
        neo4jUser,
        neo4jPassword,
    } = props;

    const visRef = useRef();

    useEffect(() => {
        const config = {
            container_id: visRef.current.id,
            server_url: neo4jUri,
            server_user: neo4jUser,
            server_password: neo4jPassword,
            labels: {
                Troll: {
                    caption: "user_key",
                    size: "pagerank",
                    community: "community",
                },
            },
            relationships: {
                RETWEETS: {
                    caption: false,
                    thickness: "count",
                },
            },
            initial_cypher:
                "MATCH (tw:Tweet)-[rel:HAS_TAG]->(ht:Hashtag) RETURN tw, ht, rel LIMIT 10",
        };
        const vis = new Neovis(config);
        vis.render();
    }, [neo4jUri, neo4jUser, neo4jPassword]);

    return (
        <div
            id={containerId}
            ref={visRef}
            style={{
                width: `${width}px`,
                height: `${height}px`,
                backgroundColor: `${backgroundColor}`,
            }}
        />
    );
};

NeoGraph.defaultProps = {
    width: 600,
    height: 600,
    backgroundColor: "#d3d3d3",
};

NeoGraph.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    containerId: PropTypes.string.isRequired,
    neo4jUri: PropTypes.string.isRequired,
    neo4jUser: PropTypes.string.isRequired,
    neo4jPassword: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string,
};

const ResponsiveNeoGraph = (props) => {
    const [resizeListener, sizes] = useResizeAware();

    const defaultSize = 600;
    const side = sizes && sizes.width != null ? Math.min(sizes.width, sizes.height) / 2 : defaultSize;
    const neoGraphProps = { ...props, width: side, height: side };

    useEffect(() => {
        // Configuration for Neovis
        const config = {
            container_id: props.containerId,
            server_url: props.neo4jUri,
            server_user: props.neo4jUser,
            server_password: props.neo4jPassword,
            labels: {
                Troll: {
                    caption: "user_key",
                    size: "pagerank",
                    community: "community",
                },
            },
            relationships: {
                RETWEETS: {
                    caption: false,
                    thickness: "count",
                },
            },
            initial_cypher: "MATCH (tw:Tweet)-[rel:HAS_TAG]->(ht:Hashtag) RETURN tw, ht, rel LIMIT 10",
        };

        // Create and render NeoGraph
        const vis = new Neovis(config);
        vis.render();
    }, []);

    return (
        <div style={{ position: "relative", width: "100%", height: "80vh" }}>
            {resizeListener}
            <div id={props.containerId} style={{ width: "100%", height: "100%" }} />
        </div>
    );
};

ResponsiveNeoGraph.propTypes = {
    containerId: PropTypes.string.isRequired,
    neo4jUri: PropTypes.string.isRequired,
    neo4jUser: PropTypes.string.isRequired,
    neo4jPassword: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string,
};


export { NeoGraph, ResponsiveNeoGraph };
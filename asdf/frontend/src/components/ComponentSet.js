import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { IconComponentNode } from "./IconComponentNode";
import { VolumeNotice } from "./VolumeNotice";
import "./style.css";

export const PropertyWrapper = ({ property1 }) => {
    const [state, dispatch] = useReducer(reducer, {
        property1: property1 || "one",
    });

    return (
        <div
            className="property-wrapper"
            onClick={() => {
                dispatch("click");
            }}
        >
            {state.property1 === "one" && <IconComponentNode className="volume-notice" />}

            {state.property1 === "two" && <VolumeNotice className="volume-notice-instance" />}
        </div>
    );
};

function reducer(state, action) {
    if (state.property1 === "one") {
        switch (action) {
            case "click":
                return {
                    property1: "two",
                };
        }
    }

    if (state.property1 === "two") {
        switch (action) {
            case "click":
                return {
                    property1: "one",
                };
        }
    }

    return state;
}

PropertyWrapper.propTypes = {
    property1: PropTypes.oneOf(["two", "one"]),
};

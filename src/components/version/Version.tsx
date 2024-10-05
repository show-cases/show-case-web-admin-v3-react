import React from "react";

interface VersionProps {
    version: string,
    environment : "DEV" | "STAGING" | "PRODUCTION",
}

export const Version : React.FC<VersionProps> = (props: VersionProps) => {
    return (
        <div>
            <h3>Environment is set as {props.environment}</h3>
            <h5>The current version is {props.version}</h5>
        </div>
    )
}

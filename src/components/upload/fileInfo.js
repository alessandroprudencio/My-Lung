import React from 'react';

import { FileInfo } from "../../styles/upload/styles"

export const Info = ({ result }) => {

    return (
        <FileInfo result={result}>
            <div>
                <p> <span>Resultado: </span> {result}</p>
            </div>
        </FileInfo>
    )
}


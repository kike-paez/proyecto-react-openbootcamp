/**
 * Ejemplo de uso del método componentWillUnmount para componente clase
 * Ejemplo de uso de hooks para componente funcional
 * (Cuando el componente va a desaparecer)
 */

import React, { Component, useEffect } from 'react';

export class WillUnmount extends Component {

    componentWillUnmount() {
        console.log("Comportamiento antes de que el componente desaparezca")
    }

    render() {
        return (
            <div>
                <h1>WillUnmount</h1>
            </div>
        );
    }
}

export const WillUnmountHook = () => {

    useEffect(() => {
        // Aquí no ponemos nada
        return () => {
            console.log("Comportamiento antes de que el componente desaparezca")
        };
    }, []); // Lista vacía, solo se ejecuta una vez

    return (
        <div>
            <h1>WillUnmount</h1>
        </div>
    );
}

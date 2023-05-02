/**
 * Ejemplo de uso del método de ciclo de vida en componente clase
 * Ejemplo de uso de hook de ciclo de vida en componente funcional
 * (Antes de que el componente se renderice)
 */

import React, { Component, useEffect } from 'react';

export class DidMount extends Component {

    componentDidMount() {
        console.log("Comportamiento antes de que el componente sea añadido al DOM (renderice)")
    }

    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
    }
}

export const DidMountHook = () => {

    useEffect(() => {
        console.log("Comportamiento antes de que el componente sea añadido al DOM (renderice)")
    }, []); // Lista vacía, solo se ejecuta una vez

    return (
        <div>
            <h1>DidMount</h1>
        </div>
    );
}

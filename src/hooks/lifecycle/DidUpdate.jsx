/**
 * Ejemplo de uso de método componentDidUpdate en componente clase
 * Ejemplo de uso de hook en componente funcional
 * (Cuando el componente se actualiza con nuevos props o cambia su estado privado)
 */

import React, { Component, useEffect } from 'react';

export class DidUpdate extends Component {

    componentDidUpdate() {
        console.log("Comportamiento cuando el componente recibe nuevos props o cambio en su estado privado")
    }

    render() {
        return (
            <div>
                <h1>DidUpdate</h1>
            </div>
        );
    }
}

export const DidUpdateHook = () => {

    useEffect(() => {
        console.log("Comportamiento cuando el componente recibe nuevos props o cambio en su estado privado")
    }); // Sin lista, se ejecuta siempre

    return (
        <div>
            <h1>DidUpdate</h1>
        </div>
    );
}

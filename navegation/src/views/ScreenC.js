import React from 'react';
import CenterText from '../components/CenterText';

export default props => {
    const r = props.route;
    const numero = r.params && r.params.numero ? props.route.params.numero : 0
    return (
        <CenterText background="#9932cd">Tela C</CenterText>
    )
};
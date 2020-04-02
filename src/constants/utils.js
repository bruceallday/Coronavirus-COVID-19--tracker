import React from 'react'
import { range } from 'd3-array'
import { scaleQuantile } from 'd3-scale'

export const formatNumber = (num) => {
    if ( num ) {
        let str = num.toString()
        if (str.length === 4) {
            str = [str.slice(0, 1), ",", str.slice(1)].join('')
        } else if (str.length === 5) {
            str = [str.slice(0, 2), ",", str.slice(2)].join('')
        } else if (str.length === 6) {
            str = [str.slice(0, 3), ",", str.slice(3)].join('')
        } else if (str.length === 7) {
            str = [str.slice(0, 1), ',', str.slice(1, 4), ',', str.slice(4, 7)].join('')
        }
        return str
    } else {
        return 0
    } 
   
}

export const updatePercentiles = (featureCollection, accessor) =>{
    const { features } = featureCollection;
    const scale = scaleQuantile()
        .domain(features.map(accessor))
        .range(range(9));

    return {
        type: 'FeatureCollection',
        features: features.map(f => {
            const value = accessor(f);
            const properties = {
                ...f.properties,
                value,
                cases: scale(value)
            };
            return { ...f, properties };
        })
    };
}
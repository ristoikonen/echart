import { type FC } from 'react';
import ReactECharts from 'echarts-for-react';

//import React, { useState } from 'react'


//import {
//    SwitchField, Input, Label, Card, Flex, Text, Heading, Image,
//    useTheme
//} from '@aws-amplify/ui-react';


interface AminochartProps {
    valine_percentage: number;
}

//{valine_percentage = 0}

const Aminochart: FC<AminochartProps> = (props) => {
    let valine = (((props.valine_percentage ?? 0) > 100 ? 0 : (props.valine_percentage ?? 0)) / 10).toFixed(1);
    let valine_prc = 'Valine ' + (props.valine_percentage ?? 0) + '%';
    
    return (
        <>
            <h1>Amino acid spectrum</h1>
            <div>{valine_prc}</div>
            
            <ReactECharts 
                style={{ height: '100%', width: '100%' }} 

                option={{
                    legend: {
                        top: 'bottom'
                    },
                    toolbox: {
                        show: true,
                        feature: {
                        mark: { show: true },
                        dataView: { show: true, readOnly: false },
                        restore: { show: true },
                        saveAsImage: { show: true }
                        }
                    },
                    series: [
                        {
                            name: 'Nightingale Chart',
                            type: 'pie',
                            radius: [50, 250],
                            center: ['50%', '50%'],
                            roseType: 'area',
                            itemStyle: {
                                borderRadius: 8
                            },
                            data: [
                                { value: 4, name: 'Histidine' },
                                { value: 8, name: 'isoleucine' },
                                { value: 2, name: 'leucine' },
                                { value: 6, name: 'lysine' },
                                { value: 8, name: 'methionine' },
                                { value: 6, name: 'phenylalanine' },
                                { value: 2, name: 'phenylalanine' },
                                { value: 8, name: 'threonine' },
                                { value: 6, name: 'tryptophan' },
                                { value: valine, name: valine_prc }
                            ]
                        }
                    ]                
            }}
            />

            <div>Valine percentage: {props.valine_percentage.toFixed(0)} </div>
        </>
    )
};

export default Aminochart;

import { type FC } from 'react';
import ReactECharts from 'echarts-for-react';

//import React, { useState } from 'react'


//import {
//    SwitchField, Input, Label, Card, Flex, Text, Heading, Image,
//    useTheme
//} from '@aws-amplify/ui-react';


interface AminoachartProps {
    valine_percentage: number;
    histidine_percentage: number;
/*     isoleucine: number;
    leucine: number;
    lysine: number;
    methionine: number;
    phenylalanine: number;
    threonine: number;
    tryptophan: number;  */
}

function FormatPrc(prc: number): string
 {
    return (((prc ?? 0) > 100 ? 0 : (prc ?? 0)) / 10).toFixed(1);
 }

 function FormatPrcString(caption:string, prc: number): string
 {
    //let prc_string = Object.keys(prc ?? 0)[0].charAt(0).toUpperCase() + (prc ?? 0).toFixed(1) + '%';
    return caption + ' ' + (prc ?? 0).toFixed(1) + '%';
 }

const Aminoachart: FC<AminoachartProps> = (props) => {
    let valine = FormatPrc(props.valine_percentage);
    let valine_prc = FormatPrcString('Valine', props.valine_percentage);
    let histidine = FormatPrc(props.histidine_percentage);
    let histidine_prc = FormatPrcString('Histidine', props.histidine_percentage);

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
                                { value: histidine , name: histidine_prc },
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

export default Aminoachart;

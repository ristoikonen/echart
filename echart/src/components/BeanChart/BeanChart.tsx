import  { type FC } from 'react';
import ReactECharts from 'echarts-for-react';
import './BeanChart.css';
import { Badge } from '@chakra-ui/react';

interface BeanChartProps {
    valine_percentage: number;
    histidine_percentage: number;
    isoleucine_percentage: number;
    leucine_percentage: number;
    lysine_percentage: number;
    methionine_percentage: number;
    phenylalanine_percentage: number;
    threonine_percentage: number;
    tryptophan_percentage: number;
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

const BeanChart: FC<BeanChartProps> = (props) => {  
    //let valine = (((props.valine_percentage ?? 0) > 100 ? 0 : (props.valine_percentage ?? 0)) / 10).toFixed(1);
    let valine_prc = 'Valine ' + (props.valine_percentage ?? 0) + '%';
    
    return (
        <>

            <div>BeanChart {valine_prc}</div>
            
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
                                { value: FormatPrc(props.histidine_percentage), name: FormatPrcString('histidine',props.histidine_percentage) },
                                { value: FormatPrc(props.isoleucine_percentage), name: FormatPrcString('isoleucine',props.isoleucine_percentage) }, 
                                { value: FormatPrc(props.leucine_percentage), name: FormatPrcString('leucine',props.leucine_percentage) },
                                { value: FormatPrc(props.lysine_percentage), name: FormatPrcString('lysine',props.lysine_percentage) },
                                { value: FormatPrc(props.methionine_percentage), name: FormatPrcString('methionine',props.methionine_percentage) },
                                { value: FormatPrc(props.phenylalanine_percentage), name: FormatPrcString('phenylalanine',props.phenylalanine_percentage) },
                                { value: FormatPrc(props.threonine_percentage), name: FormatPrcString('threonine',props.threonine_percentage) },
                                { value: FormatPrc(props.tryptophan_percentage), name: FormatPrcString('tryptophan',props.tryptophan_percentage) },   
                                { value: FormatPrc(props.valine_percentage), name: FormatPrcString('valine',props.valine_percentage) }
                            ]
                        }
                    ]                
            }}
            />

            <div>
              <Badge variant="solid" colorPalette="green">Histidine percentage: {props.histidine_percentage.toFixed(0)}</Badge>
              Valine percentage: {props.valine_percentage.toFixed(0)} 
              <Badge variant="outline">Histidine</Badge> {props.histidine_percentage.toFixed(0)}
            </div>
        </>
    )
};



export default BeanChart;

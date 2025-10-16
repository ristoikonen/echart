import { type FC } from 'react';
// useState
import ReactECharts from 'echarts-for-react';
import './bchart.css';

interface bchartProps {
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

interface aminoacidvalues {
      Histidine: number;
      Isoleucine: number;
      Leucine: number;
      Lysine: number;
      Methionine: number;
      Phenylalanine: number;
      Threonine: number;
      Tryptophan: number;
      Valine: number;
      Alanine: number;
      Aspartic_acid: number;
      Glutamic_acid: number;
      Glycine: number;
      Proline: number;
      Serine: number;
}
const aminoacids: aminoacidvalues = {
    Histidine: 0,
    Isoleucine: 0,
    Leucine: 0,
    Lysine: 0,
    Methionine: 0,
    Phenylalanine: 0,
    Threonine: 0,
    Tryptophan: 0,
    Valine: 0,
    Alanine: 0,
    Aspartic_acid: 0,
    Glutamic_acid: 0,
    Glycine: 0,
    Proline: 0,
    Serine: 0
};

function FormatPrc(prc: number): string
 {
    return (((prc ?? 0) > 100 ? 0 : (prc ?? 0)) / 10).toFixed(1);
 }

 function FormatPrcString(caption:string, prc: number): string
 {
    //let prc_string = Object.keys(prc ?? 0)[0].charAt(0).toUpperCase() + (prc ?? 0).toFixed(1) + '%';
    return caption + ' ' + (prc ?? 0).toFixed(1) + '%';
 }


const Bchart: FC<bchartProps> = (props) => {
    let valine = FormatPrc(props.valine_percentage);
    let valine_prc = FormatPrcString('Valine', props.valine_percentage);
    let histidine_value = props.histidine_percentage;
    let histidine = FormatPrc(histidine_value);
    let histidine_prc = FormatPrcString('Histidine', histidine_value);

    return (
      <>
            <div>{valine_prc}</div>
            <div>{aminoacids.Histidine}</div>
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
                                        { value: aminoacids.Histidine , name: histidine_prc },
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

      </>
    );
};

export default Bchart;

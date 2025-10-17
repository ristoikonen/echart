import { type FC, useState } from 'react';
//import ReactECharts from 'echarts-for-react';
import { RadioCard, HStack  } from "@chakra-ui/react"
import BeanChart from '../BeanChart/BeanChart';


//let USDADataArray: USDAData[] = [];

const items = [
  { value: "kidney", title: "Kidney beans", description: "Larger beans" },
  { value: "black", title: "Black beans", description: "Medium beans" },
  { value: "chick", title: "Chickpeas", description: "Large beans" },
]

//let histidine = '';

interface AminosMainProps {
    valine_percentage: number;
    histidine_percentage: number;
     isoleucine: number;
    leucine: number;
    lysine: number;
    methionine: number;
    phenylalanine: number;
    threonine: number;
    tryptophan: number;  
}



interface USDARoot {
    unit : string;
    legumes: Array<USDAData>;
}

interface USDAData {
    fdc_id: number;
    description: string;
    protein_content: number;
    amino_acids: Array<amino_acids>;
}

interface amino_acids {
      value: number;
      name: string;
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





function ReadJSON(chosenBean:string |null)
{
    //fetch('././assets/legumes_USDA.json')
    //TODO: NOTE THIS!
    fetch('src/assets/legumes_USDA.json')
    .then(response => response.json()) // Adjust based on the actual structure of your JSON
    .then(data => {
        //console.log(data);
        //console.log(data.unit);
        return data;
    })
     .then((data: USDARoot) => { // Type assertion for fetched data
            setUSDA(data.legumes, chosenBean);
            //setLoading(false);
          })
    .catch(error => {
        console.error('Error fetching JSON:', error);
        return null;
    });
}

function setUSDA(data: USDAData[] | null, chosenBean:string |null )
{
    //let legs = data?.amino_acids.indexOf('adzuki');
    for (let i = 0; i < (data?.length ?? 0); i++) {
        //console.log(data?.[i]);
        
        console.log('Chosen bean: ' + (chosenBean ?? 'EMPTY'));;

        if (data && data[i].description === 'adzuki beans, mature seeds, cooked, boiled, without salt') {
            console.log('Found adzuki beans');
            //console.log('Found adzuki beans: ' + data[i].amino_acids[0].name + ' ' + data[i].amino_acids[0].value);
        }
        //'kidney'
        if (data && data[i].description.search(chosenBean ?? 'kidney')!== -1) {
            console.log('Chosen  search: ' + (chosenBean ?? 'EMPTY'));;
            console.log(i);
            let aarr = data[i];//.amino_acids
            let aarra = data[i].description;
            let aarrb = data[i].protein_content;
            let aarrc = data[i].amino_acids[0].name;
            const indexByName = data[i].amino_acids.findIndex(aa => aa.name === "Histidine");  
            if(indexByName > 0) {
                console.log("Found Histidine at index: " + indexByName);
                console.log(indexByName); // Outputs: 0interface aminoacidvalues {
                aminoacids.Histidine = data[i].amino_acids[indexByName].value;
                //setHistidineValue(data[i].amino_acids[indexByName].value);
                //aminoacids.Histidine= aminoacids.Histidine.toString();
                
                 console.log(aminoacids.Histidine); // Outputs: 0 
            }

            let histidine_value = data[i].amino_acids[indexByName].value;
            console.log(histidine_value); // Outputs: 0  console.log(histidine_value); // Outputs: 0 
            console.log('Found : ' + aarra + ' ' + aarrb + ' ' + aarrc);//data[i].aminoacidsdata[i].aminoacids[0].name);//.aminoacids[0].name + ' ' + data[5].aminoacids[0].value);
            console.log('Found beans: ' + aarr); //data[i].aminoacidsdata[i].aminoacids[0].name);//.aminoacids[0].name + ' ' + data[5].aminoacids[0].value);

            //console.log('Found kidney: ' + data[i].aminoacids[0].name + ' ' + data[i].aminoacids[0].value);
            //console.log('Found adzuki beans: ' + data[i].amino_acids[0].name + ' ' + data[i].amino_acids[0].value);
        }
    }
    //let descs = 
    console.log(data);
}

const AminosMain: FC<AminosMainProps> = (props) => {
    const [value, setValue] = useState<string | null>(null);
    //const [selectedOption, setSelectedOption] = useState("");
    ReadJSON(value);
    // Remove OptionChangeEvent interface, use ValueChangeDetails from RadioCard

/*     const handleOptionChange = (details: { value: string }): void => {
      setSelectedOption(details.value);
      console.log('Selected option:', details.value);
      ReadJSON(details.value);
    }; */

    //const [histidine_value, setHistidineValue] = useState(props.histidine_percentage ?? 0); //useState<number | 0>(0)
    //setHistidineValue(props.histidine_percentage ?? 0); // ?? aminoacids.Histidine);
    //ReadJSON(value);
    //let valine = FormatPrc(props.valine_percentage);
    //let valine_prc = FormatPrcString('Valine', props.valine_percentage);
    //let histidine = FormatPrc(props.histidine_percentage);
    //let histidine_prc = FormatPrcString('Histidine', histidine); //props.histidine_percentage);

    //     const handleValueChange = (details: { value: string }) => {
    //        setValue(details.value);
    //    };

    return (
        <>
            <h1>Amino acid spectrums</h1>

            <div>

                <RadioCard.Root defaultValue="next" value={value} onValueChange={(e) => setValue(e.value)}>
                    <RadioCard.Label>Select</RadioCard.Label>
                    <HStack align="stretch">
                        {items.map((item) => (
                        <RadioCard.Item key={item.value} value={item.value}>
                            <RadioCard.ItemHiddenInput />
                            <RadioCard.ItemControl>
                            <RadioCard.ItemContent>
                                <RadioCard.ItemText>{item.title}</RadioCard.ItemText>
                                <RadioCard.ItemDescription>
                                {item.description}
                                </RadioCard.ItemDescription>
                            </RadioCard.ItemContent>
                            <RadioCard.ItemIndicator />
                            </RadioCard.ItemControl>
                        </RadioCard.Item>
                        ))}
                    </HStack>
                </RadioCard.Root>

            </div>

            <div>{aminoacids.Histidine}</div>
            
            <BeanChart 
              histidine_percentage={props.histidine_percentage} 
              valine_percentage={props.valine_percentage} 
              tryptophan_percentage={props.tryptophan}
              threonine_percentage={props.threonine} 
              phenylalanine_percentage={props.phenylalanine} 
              methionine_percentage={props.methionine} 
              lysine_percentage={props.lysine} 
              leucine_percentage={props.leucine} 
              isoleucine_percentage={props.isoleucine} 
            />



        </>
    )
};


export default AminosMain;

import { type FC, useState } from 'react';
//import ReactECharts from 'echarts-for-react';
import { RadioCard, HStack  } from "@chakra-ui/react"
import BeanChart from '../BeanChart/BeanChart';


//let USDADataArray: USDAData[] = [];
const PERSON_WEIGHT = 80.0; // kg
const MEAL_WEIGHT = 100.0; // g

const items = [
  { value: "kidney", title: "Kidney beans", description: "Larger beans" },
  { value: "black", title: "Black beans", description: "Medium beans" },
  { value: "Chickpeas", title: "Chickpeas", description: "Large beans" },
]


interface AminosMainProps {
 
}

// interface AminosMainPropsX {
//     valine_percentage: number;
//     histidine_percentage: number;
//      isoleucine: number;
//     leucine: number;
//     lysine: number;
//     methionine: number;
//     phenylalanine: number;
//     threonine: number;
//     tryptophan: number;  
// }
//  valine_percentage={12.3} histidine_percentage={23.4} tryptophan={54.0} threonine={45.6} 
//  phenylalanine={34.5} methionine={22.1} lysine={18.9} leucine={29.4} isoleucine={15.2} 


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
// mg per kg of body weight
const aminoacids_daily: aminoacidvalues = {
    Histidine: 10,
    Isoleucine: 20,
    Leucine: 39,
    Lysine: 30,
    // (Methionine + cysteine)
    Methionine: 15,
    Phenylalanine: 25,
    Threonine: 15,
    Tryptophan: 4,
    Valine: 26,
    Alanine: 20,
    Aspartic_acid: 3,
    Glutamic_acid: 30,
    Glycine: 20,
    Proline: 0,
    Serine: 20
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


function FindByName(aa: amino_acids[] | null, aaname:string) : number
{
  if(!aa) return 0;
  let aminos = aa;

  //console.log('find by name ' + aaname);;

  const indexByName = aminos.findIndex(aa => aa.name === aaname);
  if(indexByName > 0) {
      console.log(aminos.length + " Found " + aaname + " at index: " + indexByName + ",value = " + aminos[indexByName].value);
      if(!aminos[indexByName].value) return 0;
      return aminos[indexByName].value;
      
  }
  return 0;
}

function precentageByWeight(aa: number, weight_kg:number, dailyRecommneded: number) : number
{
  if(!aa) return 0;
  if(!weight_kg) return 0;
  if(!dailyRecommneded) return 0;
  return Math.round((aa * MEAL_WEIGHT * 100)/ dailyRecommneded); 
}

function setUSDA(data: USDAData[] | null, chosenBean:string |null )
{
  if(!chosenBean) return;


    for (let i = 0; i < (data?.length ?? 0); i++) {
        
        //console.log('Chosen bean, setUSDA: ' + i +  (chosenBean ?? 'EMPTY'));;

        //if (data && data[i].description === 'Beans, black, mature seeds, cooked, boiled, with salt') {
        if (data && data[i].description.search(chosenBean)!== -1) {
           console.log("chosenBean = " + chosenBean);
            //console.log('Found black beans, tryptophan:' + FindByName(data[i].amino_acids,"Tryptophan"));
            //aminoacids.Isoleucine = FindByName(data[i].amino_acids,"Isoleucine");
            //aminoacids.Leucine = FindByName(data[i].amino_acids,"Leucine");
            aminoacids.Histidine = FindByName(data[i].amino_acids,"Histidine");
            //console.log('Found adzuki beans: ' + data[i].amino_acids[0].name + ' ' + data[i].amino_acids[0].value);
        }

        /* 
        if (data && data[i].description.search(chosenBean ?? 'kidney')!== -1) {
            console.log('Chosen  search: ' + (chosenBean ?? 'EMPTY'));;
            console.log(i);
            let aarr = data[i];//.amino_acids
            let aarra = data[i].description;
            let aarrb = data[i].protein_content;
            let aarrc = data[i].amino_acids[0].name;
            
            aminoacids.Isoleucine = FindByName(data[i].amino_acids,"Isoleucine");
            aminoacids.Tryptophan = FindByName(data[i].amino_acids,"Tryptophan");




            //let histidine_value = data[i].amino_acids[indexByName].value;
            //console.log(histidine_value); // Outputs: 0  console.log(histidine_value); // Outputs: 0 
            //console.log('Found : ' + aarra + ' ' + aarrb + ' ' + aarrc);//data[i].aminoacidsdata[i].aminoacids[0].name);//.aminoacids[0].name + ' ' + data[5].aminoacids[0].value);
            //console.log('Found beans: ' + aarr); //data[i].aminoacidsdata[i].aminoacids[0].name);//.aminoacids[0].name + ' ' + data[5].aminoacids[0].value);

            //console.log('Found kidney: ' + data[i].aminoacids[0].name + ' ' + data[i].aminoacids[0].value);
            //console.log('Found adzuki beans: ' + data[i].amino_acids[0].name + ' ' + data[i].amino_acids[0].value);
        } */

    }

    //console.log(data);
}


const AminosMain: FC<AminosMainProps> = () => {
    const [value, setValue] = useState<string | null>(null);
    //const [histdine, setHistidine] = useState<number>(0);

    //setHistidine(props.histidine_percentage ?? 0);
    //const [selectedOption, setSelectedOption] = useState("");
    //ReadJSON(value);
    

/*     const handleOptionChange = (details: { value: string }): void => {
      setSelectedOption(details.value);
      console.log('Selected option:', details.value);
      ReadJSON(details.value);
    }; */

    //const [histidine_value, setHistidineValue] = useState(props.histidine_percentage ?? 0); //useState<number | 0>(0)
    
    //let valine = FormatPrc(props.valine_percentage);
    //let valine_prc = FormatPrcString('Valine', props.valine_percentage);
    //let histidine = FormatPrc(props.histidine_percentage);
    //let histidine_prc = FormatPrcString('Histidine', histidine); //props.histidine_percentage);

    const handleValueChange = (e: string|null) => {
      setValue(e);
      console.log('AminosMain Selected bean:', e);
      ReadJSON(e);
    };

  // (e) => setValue(e.value)}>
    return (
      <>
        <h1>Amino acid spectrums</h1>

        <div>

                <RadioCard.Root defaultValue="next" value={value} onValueChange={(e) => handleValueChange(e.value)}>
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

            <div>aminoacids.Histidine:{aminoacids.Histidine}</div>
            <div>aminoacids.Tryptophan:{aminoacids.Tryptophan}</div>
            <div>aminoacids.Leucine:{aminoacids.Leucine}</div>
            
            <BeanChart 
              histidine_percentage={precentageByWeight(aminoacids.Histidine, PERSON_WEIGHT, aminoacids_daily.Histidine) } 
              valine_percentage={aminoacids.Valine} 
              tryptophan_percentage={aminoacids.Tryptophan}
              threonine_percentage={aminoacids.Threonine} 
              phenylalanine_percentage={aminoacids.Phenylalanine} 
              methionine_percentage={aminoacids.Methionine} 
              lysine_percentage={aminoacids.Lysine} 
              leucine_percentage={aminoacids.Leucine} 
              isoleucine_percentage={aminoacids.Isoleucine} 
            />



        </>
    )
};


export default AminosMain;

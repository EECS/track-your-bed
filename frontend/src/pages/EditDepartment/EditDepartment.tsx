

import * as React from "react";
import {Dropdown} from 'primereact/dropdown';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import { useParams } from "react-router-dom";

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const divStyle = {
  margin: '50px'
};

const btnStyle = {
  margin: '20px'
};

const fieldStyle = {
  width: '250px'
}



const departments = [
//  {label: 'Kardiologie', value: 'Kardiologie'},
//  {label: 'Urologie', value: 'Urologie'},
//  {label: 'Radiologie', value: 'Radiologie'}
{label: 'Akutgeriatrie/Remobilisation ', value: 'Akutgeriatrie/Remobilisation'},
{label: 'Allergologie', value: 'Allergologie'},
{label: 'Anästhesiologie', value: 'Anästhesiologie'},
{label: 'Angiologie', value: 'Angiologie'},
{label: 'Augenheilkunde', value: 'Augenheilkunde'},
{label: 'Chirurgie', value: 'Chirurgie'},
{label: '--Allgemeine Chirurgie', value: 'Allgemeine Chirurgie'},
{label: '--Gefäßchirurgie', value: 'Gefäßchirurgie'},
{label: '--Herzchirurgie', value: 'Herzchirurgie'},
{label: '--Kinderchirurgie', value: 'Kinderchirurgie'},
{label: 'Mund-, Kiefer- und Gesichtschirurgie', value: 'Mund-, Kiefer- und Gesichtschirurgie'},
{label: 'Orthopädische Chirurgie', value: 'Orthopädische Chirurgie'},
{label: '--Unfallchirurgie', value: 'Unfallchirurgie'},
{label: 'Plastische, rekonstruktive, ästhetische Chirurgie', value: 'Plastische, rekonstruktive, ästhetische Chirurgie'},
{label: 'Thoraxchirurgie', value: 'Thoraxchirurgie'},
{label: 'Viszeralchirurgie', value: 'Viszeralchirurgie'},
{label: 'Dermatologie', value: 'Dermatologie'},
{label: 'Endokrinologie', value: 'Endokrinologie'},
{label: 'Gastroenterologie ', value: 'Gastroenterologie'},
{label: 'Gynäkologie und Geburtshilfe', value: 'Gynäkologie und Geburtshilfe'},
{label: 'Hals-, Nasen- und Ohrenheilkunde', value: 'Hals-, Nasen- und Ohrenheilkunde'},
{label: 'Hämatologie', value: 'Hämatologie'},
{label: 'Infektionsepidemiologie', value: 'Infektionsepidemiologie'},
{label: 'Intensivmedizin ', value: 'Intensivmedizin'},
{label: 'Kardiologie', value: 'Kardiologie'},
{label: 'Kinder- und Jugendchirurgie', value: 'Kinder- und Jugendchirurgie'},
{label: 'Kinder- und Jugendheilkunde', value: 'Kinder- und Jugendheilkunde'},
{label: 'Kinder- und Jugendpsychiatrie', value: 'Kinder- und Jugendpsychiatrie'},
{label: 'Nephrologie', value: 'Nephrologie'},
{label: 'Neurochirurgie ', value: 'Neurochirurgie'},
{label: 'Neurologie', value: 'Neurologie'},
{label: 'Notfallambulanz', value: 'Notfallambulanz'},
{label: 'Nuklearmedizin ', value: 'Nuklearmedizin'},
{label: 'Onkologie', value: 'Onkologie'},
{label: 'Orthopädie', value: 'Orthopädie'},
{label: 'Palliativmedizin ', value: 'Palliativmedizin'},
{label: 'Pneumologie', value: 'Pneumologie'},
{label: 'Psychosomatik ', value: 'Psychosomatik'},
{label: 'Psychiatrie', value: 'Psychiatrie'},
{label: 'Rheumatologie', value: 'Rheumatologie'},
{label: 'Strahlentherapie-Radioonkologie', value: 'Strahlentherapie-Radioonkologie'},
{label: 'Unfallchirurgie', value: 'Unfallchirurgie'},
{label: 'Urologie ', value: 'Urologie'},
{label: 'Virologie', value: 'Virologie'},
{label: 'Zahn-, Mund- und Kieferheilkunde', value: 'Zahn-, Mund- und Kieferheilkunde'}
];

const EditDepartment: React.FunctionComponent = () => {
  
  const [department, setDepartment] = React.useState(
    null
  )
  const {hospitalId, departmentId}=useParams();
  return (
    <div style={divStyle}>
      <h1>Fachabteilung hinzufügen</h1>
        <form>
          <Dropdown style={fieldStyle} options={departments}  placeholder="Wählen Sie eine Fachabteilung" value={department} onChange={event => setDepartment(event.target.value)}/>
          <br/>
          <br/>
          <span className="p-float-label">
            <InputText id="in" style={fieldStyle}/>
            <label htmlFor="in">Name der Abteilung</label>
          </span>
          <div>
            <Button label="Hinzufügen" />
            <Button style={btnStyle} label="Abbrechen" />
          </div>
        </form>
    </div>
  );
};

export default EditDepartment;
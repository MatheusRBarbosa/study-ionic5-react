import React, { useState } from 'react';
import { 
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonGrid, IonRow, IonCol, IonButton
 } from '@ionic/react';

import './Calculadora.css';

const Calculadora: React.FC = () => {

  // eslint-disable-next-line
  const [ value, setValue ] = useState<string>("0");


  function addValue(number: string): void {

    let newValue: string;
    if(value === "0"){
      newValue = number;
    }
    else {
      newValue = value + number
    }
    setValue(newValue);
    
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Calculadora</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="font-resize">
        <IonGrid>
          <IonRow>
            <IonCol>
              <div className="value ion-text-right">
                {value}
              </div>
            </IonCol>
            <div className="divider"/>
          </IonRow>
         
          <IonRow>
            <IonCol>
              <IonButton onClick={() => addValue("7")} expand="full" size="large" fill="default">7</IonButton>
            </IonCol>
            <IonCol>
              <IonButton onClick={() => addValue("8")} expand="full" size="large" fill="default">8</IonButton>
            </IonCol>
            <IonCol>
              <IonButton onClick={() => addValue("9")} expand="full" size="large" fill="default">9</IonButton>
            </IonCol>
            <IonCol>
              <IonButton onClick={() => addValue("X")} expand="full" size="large" fill="default">X</IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton onClick={() => addValue("4")} expand="full" size="large" fill="default">4</IonButton>
            </IonCol>
            <IonCol>
              <IonButton onClick={() => addValue("5")} expand="full" size="large" fill="default">5</IonButton>
            </IonCol>
            <IonCol>
              <IonButton onClick={() => addValue("6")} expand="full" size="large" fill="default">6</IonButton>
            </IonCol>
            <IonCol>
              <IonButton onClick={() => addValue("-")} expand="full" size="large" fill="default">-</IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton onClick={() => addValue("1")} expand="full" size="large" fill="default">1</IonButton>
            </IonCol>
            <IonCol>
              <IonButton onClick={() => addValue("2")} expand="full" size="large" fill="default">2</IonButton>
            </IonCol>
            <IonCol>
              <IonButton onClick={() => addValue("3")} expand="full" size="large" fill="default">3</IonButton>
            </IonCol>
            <IonCol>
              <IonButton onClick={() => addValue("+")} expand="full" size="large" fill="default">+</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Calculadora;

import React, { useState } from 'react';
import { 
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonGrid, IonRow, IonCol, IonButton
 } from '@ionic/react';

import './Calculadora.css';

const Calculadora: React.FC = () => {

  
  const [ value, setValue ] = useState<string>("0");

  // 0 - Sem operacao, Qualquer outro valor indica a posicao da operacao
  const [ operationIndex, setOperationIndex ] = useState<number>(0);
  const [ disabledOperations, setDisableOperations ] = useState<boolean>(false);
  const [ equalOperation, setEqualOperation ] = useState<boolean>(true);

   
  function addValue(number: string): void {

    let newValue: string;
    if(value === "0"){
      newValue = number;
    }
    else {
      newValue = value + number
    }
    if(operationIndex === 0){
      setDisableOperations(false);
    }
    setValue(newValue);
    setEqualOperation(false);
  }

  function result(): void {
    const firstValue:number = +(value.slice(0, operationIndex));
    const secondValue:number = +(value.slice(operationIndex+1));
    let result: number = 0;
    
    // Se a pessoa clicar no igual sem ter selecionado uma operacao
    // O valor se mantem o digitado
    if(operationIndex === 0){
      result = +value;
    }
    
    const operator: string = value[operationIndex];
    switch(operator) {
      case "+": {
        result = firstValue + secondValue;
        break;
      }
      case "-": {
        result = firstValue - secondValue;
        break;
      }
      case "X": {
        result = firstValue  * secondValue;
        break;
      }
    }

    setValue(String(result));
    setDisableOperations(false);
    setOperationIndex(0);
  }

  function operation(operator: string): void{
    console.log(`Realizando operacao: ${operator}`);
    if(value === "0"){
      addValue("0" + operator);
    }
    else{
      addValue(operator);
    }
    setOperationIndex(value.length);
    setDisableOperations(true);
    setEqualOperation(true);
  }

  function backSpace(): void {
    //Verificar se o value apagado era uma operacao
    const reg = new RegExp('[0-9]');
    if(!reg.test(value[value.length-1])){
      setOperationIndex(0);
      setDisableOperations(false);
    }
    // Controle do botao de igual
    if(!reg.test(value[value.length-2])){
      setEqualOperation(true);
    }
    else{
      setEqualOperation(false);
    }

    let newValue:string = value.slice(0, value.length-1);
    if(newValue.length === 0){
      setValue("0");
    }
    else {
      setValue(newValue);
    }
  }

  function clear(): void {
    setValue("0");
    setOperationIndex(0);
    setDisableOperations(false);
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
              <IonButton onClick={() => clear()} expand="full" size="large" fill="default">Clear</IonButton>
            </IonCol>
            <IonCol>
              <IonButton onClick={() => backSpace()} expand="full" size="large" fill="default">Backspace</IonButton>
            </IonCol>
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
              <IonButton onClick={() => operation("X")} disabled={disabledOperations} expand="full" size="large" fill="default">X</IonButton>
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
              <IonButton onClick={() => operation("-")} disabled={disabledOperations} expand="full" size="large" fill="default">-</IonButton>
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
              <IonButton onClick={() => operation("+")} disabled={disabledOperations} expand="full" size="large" fill="default">+</IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="9">
              <IonButton onClick={() => addValue("0")} expand="full" size="large" fill="default">0</IonButton>
            </IonCol>
            <IonCol size="3">
              <IonButton onClick={() => result()} disabled={equalOperation} expand="full" size="large" fill="default">=</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Calculadora;

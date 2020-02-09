import React, { useState }  from 'react';
import { Disclaimer, TravelerInfo, AgencyDetails, FlightInfo, HiddenOnPrint } from '../components';
import { InputContext } from '../store';


const { Provider: ShowInputProvider } = InputContext;


export const ReceiptForm = (): JSX.Element => {
  const [showingInput, setShowingInput] = useState(true);
  window.onafterprint = () => {
    setShowingInput(true);
  };
  function handleSubmission() {
    setShowingInput(false);
    Promise.resolve()
      .then(window.print)
  }

  function resetForm() {
    window.location.reload();
  }
    return (
      <ShowInputProvider value={showingInput}>
        <HiddenOnPrint className="d-flex justufy-center my-2">
          <button 
          className="btn btn-primary" 
          onClick={handleSubmission}>
            Print Receipt
          </button>
          <button 
          className="ml-2 btn btn-danger" 
          onClick={resetForm}>
            Reset Form
          </button>
        </HiddenOnPrint>
        <TravelerInfo />
        <AgencyDetails />
        <FlightInfo />
        <Disclaimer />
      </ShowInputProvider>
    );
};


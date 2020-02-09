import React, { useContext, useState } from 'react';
import { DocSection } from '../components';
import styled from 'styled-components';
import { InputContext } from '../store';
import moment from 'moment';


const ResponsiveWrapper = styled.div`
    display: flex;

    & > * {
      max-width: 33.3%;
      margin: 0 0.4em;
    }

    @media (max-width: 700px) {
        flex-direction: column;

        & > * {
            max-width: 100%;
            margin: 0.5em;
        }
       
    }
`;

export const FlightInfo = (): JSX.Element => {
  const showInput = useContext(InputContext);
  const [flightName, setFlightName] = useState('');
  const [flightDate, setFlightDate] = useState(new Date().toISOString());

  return (
    <DocSection>
      <div className="d-flex flex-column">
        <ResponsiveWrapper>
          <div className="w-100">
           <span className="f-5">Flight</span>
          </div>
          {
            showInput ?
            <>
              <input 
              type="text"
              placeholder="ex: BA 082 - BRITISH AIRWAYS"
              onChange={evt => setFlightName(evt.target.value)}
              className="form-control"/>

              <input
              type="date"
              onChange={evt => setFlightDate(evt.target.value)}
              className="form-control"
              />
            </>
            
            : 

            <>
              <span className="lead" 
              style={ {wordBreak: 'break-all', width: '100%'} }>{ flightName }</span>

              <span className="lead text-right"
              style={{ wordBreak: 'break-all', width: '100%' }}
              >
                { moment(flightDate).format('dddd D MMMM YYYY') }
              </span>
            </>
          }
        </ResponsiveWrapper>
      </div>
    </DocSection>
  )
};

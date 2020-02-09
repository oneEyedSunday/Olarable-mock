import React from 'react';
import { DocSection, InputField } from '../components';
import styled from 'styled-components';

const ResponsiveWrapper = styled.div`
    display: flex;

    & > * {
        max-width: 25%;
    }

    @media (max-width: 700px) {
        flex-direction: column;

        & > * {
            max-width: 100%;
        }
       
    }
`;

export const TravelerInfo = (): JSX.Element => {
    return (
      <DocSection>
        <div className="d-flex flex-column">
          <div className="text-left mb-3">
            <span>Traveler</span>
          </div>
          <div className="d-flex flex-column">
            <ResponsiveWrapper className="w-100 justify-content-between">
              <InputField  fieldName="Passenger Name"  />
              <InputField  fieldName="Ticket Number"  />
              <InputField  fieldName="Reservation Number"  />
              <InputField  fieldName="Ticket Issue Name"  />
            </ResponsiveWrapper>
          </div>
        </div>
      </DocSection>
    );
};


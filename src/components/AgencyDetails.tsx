import React from 'react';
import { DocSection } from '../components';


export const Details = (): JSX.Element => {
    return (
        <DocSection>
            <div className="d-flex flex-column">
                <div className="text-left mb-3">
                    <span>Agency Details</span>
                </div>
                <div className="text-left mb-3">
                    <span className="f-5">
                    Agency Information:
                    </span>
                </div>
                <div className="text-left">
                    <span className="text-italic text-uppercase d-block">
                    OLARABLE TRAVELS AND TOURS LTD
                    </span>
                    <span className="text-italic d-block">
                    Plot 500b, 111 road,
                    </span>
                    <span className="text-italic d-block">
                    Gwarinpa 3rd avenue,
                    </span>
                    <span className="text-italic d-block">
                    Abuja, Nigeria.
                    </span>

                    <span className="text-italic d-block">
                    Telephone: +2348038634184, +2348130233012
                    </span>
                </div>
            </div>
        </DocSection>
    );
}

import React from 'react';
import { DocSection } from '../components';


export const Disclaimer = (): JSX.Element => {
    return (
        <DocSection>
            <div className="d-flex flex-column">
                <div className="text-left">
                    <span>Notes</span>
                </div>
                <div className="text-left mb-3">
                    <span>
                    Baggage discounts may apply based on frequent flyer status/online checkin/form of payment/military/etc.
                    </span>
                </div>
                <div className="text-left">
                    <span className="text-danger">
                    IMPORTANT INFORMATION FOR TRAVELERS WITH ELECTRONIC TICKETS ‐ PLEASE READ:
                    </span>
                </div>
                <div className="text-left">
                    <span className="">
                    Carriage and other services provided by the carrier are subject to conditions of carriage, which are hereby incorporated by reference. These conditions may be obtained from the issuing carrier. Passengers on a journey involving an ultimate destination or a stop in a country other than the country of departure are advised that international treaties known as the Montreal Convention, or its predecessor, the Warsaw Convention, including its amendments (the Warsaw Convention System), may apply to the entire journey, including any portion thereof within a country. For such passengers, the applicable treaty, including special contracts of carriage embodied in any applicable tariffs, governs and may limit the liability of the carrier. The carriage of certain hazardous materials, like aerosols, fireworks, and flammable liquids, aboard the aircraft is forbidden. If you do not understand these restrictions, further information may be obtained from your airline.
                    </span>
                </div>
            </div>
        </DocSection>
    );
}

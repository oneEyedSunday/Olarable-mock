import styled from 'styled-components';


export const HiddenOnPrint = styled.div`
    @media print {
       && {
        display: none !important;
       }  
    }
   
`

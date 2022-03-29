// import React, { useState } from 'react';
import data from './standData';
import styled from 'styled-components';


const StyledStand = styled.p`
  content: ${props => props.farmStand.name};
  z-index: 1;
  color: pink;
  background-color: #ffff;
  border: 3px solid red;
  

`;


const FarmStandList = () => {
  const farmStandList = data.map((stand) => {
    return (
      <StyledStand key={stand.id} farmStand={stand}>{stand.name}</StyledStand>)})
      console.log(data);
  return (
    <div>
      <ul>{farmStandList}</ul>
    </div>
  );
}


export default FarmStandList;
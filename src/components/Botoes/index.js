import React from 'react';
import { StyledButton } from './styled';

export default function Button({backColor, children}) {
  return (
   <StyledButton backColor={backColor}>
     {children}
   </StyledButton>
  )
}
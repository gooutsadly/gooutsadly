import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

const ShadowText = (props) => {
  return <StyledText style={{...props.style}}>{props.children}</StyledText>;
};

const StyledText = styled(Text)`
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
`;

export default ShadowText;

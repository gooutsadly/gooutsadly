import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

const ShadowText = (props) => {
  return <StyledText style={{...props.style}}>{props.children}</StyledText>;
};

const StyledText = styled(Text)`
  text-shadow: 0 0px 4px rgba(0, 0, 0, 0.75);
`;

export default ShadowText;

import styled from 'styled-components';
import Image from 'next/image';

export const LocationList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`

export const LocationItem = styled.li`
  font-size: 1rem;
  position: relative;
  padding-left: 15px;

  &:before {
    display: inline-block;
    content: '-';
    position: absolute;
    left: 0;
    top: -1px;
  }
`


export const ImageStyled = styled(Image)`
  max-width: 580px;
  width: 100%;
`


import styled from 'styled-components';
import Link from 'next/link';

export const LinkStyled = styled(Link)`
  font-size: 0.875rem;
  line-height: 1.43;
  color: #1976d2;
  text-decoration: none;
`

export const MenuWrapper = styled.ul`
  padding-left: 10px;
`

export const MenuItem = styled.li`
  margin-bottom: 10px;
  list-style-type: none;
`
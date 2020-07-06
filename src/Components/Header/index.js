import React from 'react';
import * as S from './styled';
import Contact from '../Contact';
const Header = () => (
  <S.HeaderWrapper>
    <S.HeaderTitle>
      Corona Virus (COVID-19) <span>Jordi Sanchez - Ceo Adijnor</span>
    </S.HeaderTitle>
    <S.HeaderSocialMedia>
      <Contact></Contact>
    </S.HeaderSocialMedia>
  </S.HeaderWrapper>
);

export default Header;

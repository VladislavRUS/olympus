import React from 'react';
import { Wrapper, StyledInput } from './Search.styles';
import { FiSearch } from 'react-icons/fi';
import { withTranslation, WithTranslation } from 'react-i18next';

export const Search: React.FC<WithTranslation> = ({ t }) => (
  <Wrapper>
    <StyledInput placeholder={t('main.header.searchPlaceholder')} />
    <FiSearch size={20} color={'#9a9fbf'} />
  </Wrapper>
);

export default withTranslation()(Search);

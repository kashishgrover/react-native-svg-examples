import React from 'react';
import { ScrollView } from 'react-native';
import FileIcon from './040-file-picture.svg';
import FilterExample from './filter-example.svg';
import Homer from './homer-simpson.svg';
import Tiger from './tiger.svg';

const Example3Screen = () => {
  return (
    <ScrollView>
      <FileIcon fill="#ff0000" />
      <FilterExample />
      <Homer height={300} width={300} />
      <Tiger height={300} width={300} />
    </ScrollView>
  );
};

export default Example3Screen;

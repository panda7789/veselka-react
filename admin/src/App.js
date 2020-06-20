import React from 'react';
import { render } from 'react-dom';
import { Admin, Resource } from 'react-admin';
import uploadCapableDataProvider from './add_upload';

import { ArticleList, ArticleEdit, ArticleCreate, ArticleIcon } from './articles';

export default () => {
  return (
    <Admin dataProvider={uploadCapableDataProvider}>
      <Resource name="articles" list={ArticleList} edit={ArticleEdit} create={ArticleCreate} icon={ArticleIcon} />
    </Admin>
  )
};
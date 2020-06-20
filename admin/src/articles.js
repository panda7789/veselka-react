import React from 'react';
import { List, Datagrid, Edit, Create, SimpleForm, TextField, EditButton, TextInput, ImageInput, ImageField } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';
import BookIcon from '@material-ui/icons/Book';
export const ArticleIcon = BookIcon;

export const ArticleList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="title" />
            <EditButton/>
        </Datagrid>
    </List>
);

const ArticleTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const ArticleEdit = (props) => (
    <Edit title={<ArticleTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id"/>
            <TextInput source="title" />
            <RichTextInput source="text" />
            <ImageInput source="images" multiple={true} label="Pictures" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Edit>
);

export const ArticleCreate = (props) => (
    <Create title="Create a Article" {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <TextInput multiline source="text" />
        </SimpleForm>
    </Create>
);
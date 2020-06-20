import simpleRestProvider from 'ra-data-simple-rest';
import addUploadFeature from './add_upload';

const dataProvider = simpleRestProvider('http://localhost:1337/api');
const uploadCapableDataProvider = addUploadFeature(dataProvider);

export default uploadCapableDataProvider;
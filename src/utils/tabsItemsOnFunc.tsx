import type { TabsProps } from 'antd';
import FileUpload from '../pages/FileUpload/FileUpload';
import URLUpload from '../pages/URLUpload/URLUpload';

const tabsItemsOnFunc = (func: Function) => {
  const tabsItems: TabsProps['items'] = [
    {
      key: '1',
      label: 'Upload File',
      children: <FileUpload onSuccessUpload={ (file) => { func(file) }}/>,
    },
    {
      key: '2',
      label: 'Upload URL',
      children: <URLUpload onSuccessUpload={ (file) => { func(file) }}/>,
    },
  ];
  return tabsItems;
}

export default tabsItemsOnFunc

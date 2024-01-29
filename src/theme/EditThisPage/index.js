import React from 'react';
import Translate from '@docusaurus/Translate';
import IconEdit from '@theme/Icon/Edit';
import axios from 'axios';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function EditThisPage({ editUrl }) {
  return (
    <BrowserOnly fallback={<div></div>}>
      {() => {
        return <button onClick={(() => {
          const Stackedit = require('stackedit-js');
          const stackedit = new Stackedit();
          const url = editUrl.replace('github.com', 'raw.githubusercontent.com').replace('tree/', '');
          axios.get(url).then(res => {
            stackedit.openFile({
              name: 'Test file',
              content: {
                text: res.data,
              },
            });
          }).catch(e => alert(e.toString() + url));
        })}>
          <IconEdit />
          <Translate id="theme.common.editThisPage" />
        </button>
      }}
    </BrowserOnly>
  );

}

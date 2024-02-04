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
          let originalContent = '';
          let content = '';
          axios.get(editUrl).then(res => {
            document.body.style.overflow = 'hidden';
            originalContent = res.data;
            stackedit.openFile({ content: { text: originalContent } });
          }).catch(e => alert(e.toString() + editUrl));
          stackedit.on('fileChange', file => content = file.content.text);
          stackedit.on('close', async () => {
            document.body.style.overflow = '';
            if (originalContent.charCodeAt(originalContent.length - 1) === 10) {
              // add an LF in the end of the file if there is an LF in the original file
              content += String.fromCharCode(10);
            }
          });
        })}>
          <IconEdit />
          <Translate id="theme.common.editThisPage" />
        </button>
      }}
    </BrowserOnly>
  );

}

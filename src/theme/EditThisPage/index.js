import React from 'react';
import Translate from '@docusaurus/Translate';
import IconEdit from '@theme/Icon/Edit';
import Stackedit from 'stackedit-js';
import axios from 'axios';

export default function EditThisPage({ editUrl }) {
  const stackedit = new Stackedit();

  const handleClick = () => {
    const url = editUrl.replace('github.com', 'raw.githubusercontent.com').replace('tree/', '');
    alert(url);
    // axios.get(url).then(res => {
    //   stackedit.openFile({
    //     name: 'Test file',
    //     content: {
    //       text: res.data,
    //     },
    //   });
    // });
  };
  return (
    <button onClick={handleClick}>
      <IconEdit />
      <Translate
        id="theme.common.editThisPage"
        description="The link label to edit the current page" />
    </button>
  );
}

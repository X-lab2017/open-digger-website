import React, { useState } from 'react';
import SimpleTable from '../SimpleTable';
import styles from '../Leaderboard/styles.module.css';

export default (): JSX.Element => {
  const [title, setTitle] = useState<string>('');
  const [data, setData] = useState<any[]>([]);
  const [options, setOptions] = useState<any[]>([]);
  const onDataInputBlur = e => {
    try {
      const inputValue = e.target.value;
      const newData = inputValue ? JSON.parse(inputValue) : { title: '', data: [], options: [] };
      setTitle(newData.title);
      setData(newData.data);
      setOptions(newData.options);
    } catch {
      alert('Not valid JSON');
    }
  };
  return (
    <div>
      <div className={styles.inputRow}>
        <input className={styles.dataInput} autoComplete='false' spellCheck='false' onBlur={onDataInputBlur} />
      </div>
      <SimpleTable title={title} data={data} options={options} />
    </div>
  );
};

import React, { useState } from 'react';
import { translate } from '@docusaurus/Translate';
import { InputColHeaderItem } from './InputColHeaderItem';
import styles from './styles.module.css';

export function InputArea({
  dataRef,
  tableTitleRef,
  headerDataRef,
  colCount,
  setColCount,
  onSubmit,
}) {

  const [fields, setFields] = useState([]);

  const onDataInputBlur = e => {
    try {
      setFields(Object.keys(JSON.parse(e.target.value)[0]));
    } catch (e) {
      setFields([]);
    }
  };

  const onColCountChange = e => {
    const newColCount = parseInt(e.target.value);
    setColCount(newColCount);
  };

  const inputColHeaderItems = Array(colCount).fill(undefined).map((_, i) =>
    <InputColHeaderItem
      key={i}
      width={`${100 / colCount}%`}
      fields={fields}
      data={headerDataRef.current}
      index={i}
    />);

  return (
    <>
      <div className={styles.inputDiv}>
        <div className={styles.inputRow}>
          <input ref={dataRef} className={styles.dataInput} placeholder={translate({ id: 'leaderboard.dataInputPlaceHolder' })} autoComplete='false' spellCheck='false' onBlur={onDataInputBlur} />
        </div>
        <div className={styles.inputRow}>
          <input ref={tableTitleRef} className={styles.titleInput} placeholder={translate({ id: 'leaderboard.titleInputPlaceHolder' })} autoComplete='false' spellCheck='false' />
          <input className={styles.columnCountInput} type='number' value={colCount} min='1' max='10' onChange={onColCountChange} />
        </div>
        <div className={styles.inputRow}>
          {inputColHeaderItems}
        </div>
        <div className={styles.inputRow}>
          <button className={styles.submitButton} onClick={onSubmit}>{translate({ id: 'leaderboard.submit' })}</button>
        </div>
      </div>
    </>
  );
}

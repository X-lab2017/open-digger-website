import { LeaderboardContext } from './context';
import React, { useContext } from 'react';
import { translate } from '@docusaurus/Translate';
import { InputColHeaderItem } from './InputColHeaderItem';
import styles from './styles.module.css';

export function InputArea() {
  const { leaderboardConfig, dispatch } = useContext(LeaderboardContext);
  const colCount = leaderboardConfig.columnOptions.length;

  const onDataInputBlur = e => {
    const inputValue = e.target.value;
    const newData = inputValue ? JSON.parse(inputValue) : [];
    dispatch({ type: 'updateInputData', payload: newData });
  };

  const onTitleChange = e => {
    dispatch({ type: 'updateTitle', payload: e.target.value });
  }

  const onNumberChange = e => {
    const number = parseInt(e.target.value);
    dispatch({ type: 'updateColumnNumber', payload: number });
  }

  const inputColHeaderItems = Array(colCount).fill(undefined).map((_, i) => <InputColHeaderItem key={i} index={i} />);

  return (
    <>
      <div className={styles.inputDiv}>
        <div className={styles.inputRow}>
          <input className={styles.dataInput} placeholder={translate({ id: 'leaderboard.dataInputPlaceHolder' })} autoComplete='false' spellCheck='false' onBlur={onDataInputBlur} />
        </div>
        <div className={styles.inputRow}>
          <input className={styles.titleInput} placeholder={translate({ id: 'leaderboard.titleInputPlaceHolder' })} autoComplete='false' spellCheck='false' onChange={onTitleChange} />
          <input className={styles.columnCountInput} type='number' value={colCount} min='1' max='10' onChange={onNumberChange} />
        </div>
        <div className={styles.inputColHeaderContainer}>
          {inputColHeaderItems}
        </div>
      </div>
    </>
  );
}

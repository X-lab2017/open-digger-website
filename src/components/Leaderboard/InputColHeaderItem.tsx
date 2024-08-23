import { LeaderboardContext } from './context';
import { COLUMN_TYPE_RULES } from '.';

import { useContext } from 'react';
import { translate } from '@docusaurus/Translate';
import styles from './styles.module.css';


function Select({ options, value, onChange }) {
  return (
    <select className={styles.inputSelect} value={value} onChange={onChange}>
      {options}
    </select>
  );
}

export function InputColHeaderItem({ index }): JSX.Element {
  const { leaderboardConfig, dispatch } = useContext(LeaderboardContext);
  const { inputData, columnOptions } = leaderboardConfig;
  const fields = inputData[0] ? Object.keys(inputData[0]) : [];
  const option = columnOptions[index];

  const updateColumnOption = (option) => {
    dispatch({ type: 'updateColumnOption', payload: { index, option } });
  }

  const onNameChange = e => {
    const newOption = { ...option, name: e.target.value };
    updateColumnOption(newOption);
  }

  const onWidthChange = e => {
    const newOption = { ...option, width: e.target.value };
    updateColumnOption(newOption);
  }

  const onTypeChange = e => {
    const newOption = { ...option, type: e.target.value };
    updateColumnOption(newOption);
  }

  const onFieldsChange = (e, index) => {
    const newFields = [...option.fields];
    newFields[index] = e.target.value;
    const newOption = { ...option, fields: newFields };
    updateColumnOption(newOption);
  }

  const fieldTypeOptions = COLUMN_TYPE_RULES.map(rule => <option key={rule.name} value={rule.name}>{translate({ id: `leaderboard.headerType.${rule.name}` })}</option>);
  const fieldOptions = fields.map(field => <option key={field} value={field}>{field}</option>);
  const fieldSelects = Array(COLUMN_TYPE_RULES.find(rule => rule.name === option.type).fieldsNeeded).fill(undefined).map((_, i) => {
    const field = option.fields[i];
    return (
      <Select key={i} options={fieldOptions} value={field} onChange={e => onFieldsChange(e, i)} />
    );
  })

  return (
    <div className={styles.inputColHeaderItem}>
      <div className={styles.inputRow}>
        <input placeholder={translate({ id: 'leaderboard.headerInput' })} onChange={onNameChange} />
        <input placeholder={translate({ id: 'leaderboard.headerWidth' })} onChange={onWidthChange} />
      </div>
      <div className={styles.inputRow}>
        <Select options={fieldTypeOptions} value={option.type} onChange={onTypeChange} />
      </div>
      <div className={styles.inputRow}>
        {fieldSelects}
      </div>
    </div>
  );
}

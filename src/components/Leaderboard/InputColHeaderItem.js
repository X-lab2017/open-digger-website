import { translate } from '@docusaurus/Translate';
import styles from './styles.module.css';
import { useState } from 'react';

export function InputColHeaderItem({ width, fields, data, index }) {
  const fieldTypes = ['String', 'StringWithIcon', 'NumberWithDelta'];
  if (!data[index]) data[index] = {};
  const ownData = data[index];
  if (!ownData.type) ownData.type = 'String';
  const [fieldType, setFieldType] = useState(ownData.type);

  const onFieldSelectChange = (e, i) => {
    ownData.fieldNames[i] = e.target.value;
  };

  const fieldTypeItem = {
    String: () => ({
      count: 1,
      item: <>
        <select className={styles.inputSelect} onChange={e => onFieldSelectChange(e, 0)}>
          {fields.map(f => <option key={f}>{f}</option>)}
        </select>
      </>
    }),
    StringWithIcon: () => ({
      count: 2,
      item: <>
        <select className={styles.inputSelect} onChange={e => onFieldSelectChange(e, 0)}>
          {fields.map(f => <option key={f}>{f}</option>)}
        </select>
        <select className={styles.inputSelect} onChange={e => onFieldSelectChange(e, 1)}>
          {fields.map(f => <option key={f}>{f}</option>)}
        </select>
      </>,
    }),
    NumberWithDelta: () => ({
      count: 2,
      item: <>
        <select className={styles.inputSelect} onChange={e => onFieldSelectChange(e, 0)}>
          {fields.map(f => <option key={f}>{f}</option>)}
        </select>
        <select className={styles.inputSelect} onChange={e => onFieldSelectChange(e, 1)}>
          {fields.map(f => <option key={f}>{f}</option>)}
        </select>
      </>,
    }),
  };

  return (<>
    <div style={{ width }}>
      <div className={styles.inputRow}>
        <input placeholder={translate({ id: 'leaderboard.headerInput' })} style={{ width: '50%' }} onChange={e => {
          ownData.name = e.target.value;
        }} />
        <input placeholder={translate({ id: 'leaderboard.headerWidth' })} style={{ width: '50%' }} onChange={e => {
          ownData.width = e.target.value + '%';
        }} />
      </div>
      <div className={styles.inputRow}>
        <select className={styles.inputSelect} style={{ width: '100%' }} onChange={e => {
          setFieldType(e.target.value);
          ownData.type = e.target.value;
        }} >
          {fieldTypes.map(t => <option key={t} value={t}>{translate({ id: `leaderboard.headerType.${t}` })}</option>)}
        </select>
      </div>
      <div className={styles.inputRow}>
        {(() => {
          const i = fieldTypeItem[fieldType]();
          if (!ownData.fieldNames || ownData.fieldNames.length !== i.count) {
            ownData.fieldNames = [...Array(i.count)].fill(fields[0]);
          }
          return i.item;
        })()}
      </div>
    </div>
  </>);
}

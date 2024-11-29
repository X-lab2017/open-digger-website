import { LeaderboardContext, intialLeaderboardConfig, leaderboardConfigReducer } from './context';
import { BaseBoard } from './BaseBoard';
import { BoardContainer } from './BoardContainer';
import { InputArea } from './InputArea';
import { NumberWithDelta } from './NumberWithDelta';
import { NameWithIcon } from './NameWithIcon';

import { useReducer } from 'react';
import { useReactTable, createColumnHelper, getCoreRowModel } from '@tanstack/react-table';
import styles from './styles.module.css';

export const COLUMN_TYPE_RULES: {
  name: string;
  fieldsNeeded: number;
  renderer: (...args: any[]) => JSX.Element;
}[] = [
    {
      name: 'String',
      fieldsNeeded: 1,
      renderer: (text) => <span className={styles.ellipsis} dangerouslySetInnerHTML={{ __html: text }}></span>,
    },
    {
      name: 'StringWithIcon',
      fieldsNeeded: 2,
      renderer: (text, icon) => <NameWithIcon icon={icon} name={text} />,
    },
    {
      name: 'NumberWithDelta',
      fieldsNeeded: 2,
      renderer: (num, delta) => <NumberWithDelta number={num} delta={delta} />,
    },
  ];

const helper = createColumnHelper<{ __index__: number }>();

export default (): JSX.Element => {
  const [leaderboardConfig, dispatch] = useReducer(leaderboardConfigReducer, intialLeaderboardConfig);
  const { inputData, title, columnOptions } = leaderboardConfig;

  const tableColumns = [helper.accessor(row => row, {
    id: `__index__`,
    header: () => '#',
    cell: info => <span>{info.getValue().__index__}</span>,
    size: 30,
  })];
  tableColumns.push(...columnOptions.map((option, index) => {
    const { name, width, type, fields } = option;
    const column = helper.accessor(row => row, {
      id: `${index}-${name}`,
      header: () => name,
      cell: info => {
        const columnTypeRule = COLUMN_TYPE_RULES.find(rule => rule.name === type);
        const renderProps = fields.map(field => info.getValue()[field]);
        return columnTypeRule.renderer(...renderProps);
      },
      size: width,
    });
    return column;
  }));

  const table = useReactTable({
    columns: tableColumns,
    data: inputData,
    getCoreRowModel: getCoreRowModel()
  });

  return (
    <LeaderboardContext.Provider value={{ leaderboardConfig, dispatch }}>
      <InputArea />
      <BoardContainer title={title}>
        <BaseBoard table={table} />
      </BoardContainer>
    </LeaderboardContext.Provider>
  );
};

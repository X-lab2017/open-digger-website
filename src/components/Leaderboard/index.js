import { LeaderboardContext, intialLeaderboardConfig, leaderboardConfigReducer } from './context';
import { BaseBoard } from './BaseBoard';
import { BoardContainer } from './BoardContainer';
import { InputArea } from './InputArea';

import { useReducer } from 'react';
import { useReactTable, createColumnHelper, getCoreRowModel } from '@tanstack/react-table';

const helper = createColumnHelper();

export default () => {
  const [leaderboardConfig, dispatch] = useReducer(leaderboardConfigReducer, intialLeaderboardConfig);
  const { inputData, title, columnOptions } = leaderboardConfig;

  const tableColumns = columnOptions.map((option, index) => {
    const { name, width, type } = option;
    const column = helper.accessor(name, {
      header: () => name,
      cell: info => {
        const value = info.getValue();
        switch (type) {
          case 'Text':
            return value;
          default:
            return value;
        }
      },
      size: width,
    });
    return column;
  })

  const table = useReactTable({ columns: tableColumns, data: inputData, getCoreRowModel: getCoreRowModel() });

  return (
    <LeaderboardContext.Provider value={{ leaderboardConfig, dispatch }}>
      <InputArea />
      <BoardContainer title={title}>
        <BaseBoard table={table} />
      </BoardContainer>
    </LeaderboardContext.Provider>
  );
};

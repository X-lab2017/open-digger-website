import React from 'react';
import { BoardContainer } from '../Leaderboard/BoardContainer';
import { BaseBoard } from '../Leaderboard/BaseBoard';
import { useReactTable, createColumnHelper, getCoreRowModel } from '@tanstack/react-table';
import { COLUMN_TYPE_RULES } from '../Leaderboard';

const helper = createColumnHelper<{ __index__: number }>();

export default (props: { title: string; data: any[]; options: any[] }): JSX.Element => {
  const tableColumns: any[] = [];
  if (props.data.length > 0 && props.data[0].__index__ !== undefined) {
    tableColumns.push(helper.accessor(row => row, {
      id: `__index__`,
      header: () => '#',
      cell: info => <span>{info.getValue().__index__}</span>,
      size: 30,
    }));
  }
  tableColumns.push(...props.options.map((option, index) => {
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
    data: props.data,
    getCoreRowModel: getCoreRowModel()
  });

  return (
    <BoardContainer title={props.title}>
      <BaseBoard table={table} />
    </BoardContainer>
  );
}

import { useRef, useState, useMemo } from 'react';
import { BaseBoard } from './BaseBoard';
import { BoardContainer } from './BoardContainer';
import { InputArea } from './InputArea';
import { useReactTable, createColumnHelper, getCoreRowModel } from '@tanstack/react-table';

export default () => {

  const dataRef = useRef(null);
  const tableTitleRef = useRef(null);
  const headerDataRef = useRef({});
  const [colCount, setColCount] = useState(3);
  const [forceUpdate, setForceUpdate] = useState(1);

  const columnWidth = (() => {
    const obj = {};
    Object.keys(headerDataRef.current).forEach((k, index) => obj[`id-${index}`] = headerDataRef.current[k].width);
    return obj;
  })();

  const helper = createColumnHelper();
  const columns = useMemo(() => {
    console.log('Re calculate columns', headerDataRef.current);
    return Object.keys(headerDataRef.current).map((k, index) => {
      const fields = [...headerDataRef.current[k].fieldNames];
      return helper.accessor(row => { console.log(fields); return fields.map(f => row[f]) }, {
        id: 'id-' + index,
        cell: info => <>{info.getValue()[0]}</>,
        header: headerDataRef.current[k].name,
      });
    });
  }, [headerDataRef.current]);
  const data = useMemo(() => JSON.parse(dataRef.current?.value ?? '[{}]'), [dataRef.current]);

  const table = useReactTable({ columns, data, getCoreRowModel: getCoreRowModel() });

  return (
    <>
      <InputArea
        dataRef={dataRef}
        tableTitleRef={tableTitleRef}
        headerDataRef={headerDataRef}
        colCount={colCount}
        setColCount={setColCount}
        onSubmit={() => {
          headerDataRef.current = JSON.parse(JSON.stringify(headerDataRef.current));
          table.setOptions({ columns, data });
          setForceUpdate(forceUpdate + 1);
        }}
      />
      <BoardContainer title={tableTitleRef.current}>
        <BaseBoard table={table} columnWidth={columnWidth} />
      </BoardContainer>
    </>
  );
};

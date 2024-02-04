import { flexRender } from '@tanstack/react-table';
import styles from './styles.module.css';

export function BaseBoard({ table }) {
  return (
    <div>
      <table className={styles.table}>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id} className={styles.thr}>
              {headerGroup.headers.map(header => (
                <th key={header.id} className={styles.th} style={{ width: header.getSize() }}>
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        {/* 分割线 */}
        {/* <div className={styles.divider} style={{ width: table.width }} /> */}
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id} className={styles.tr}>
              {row.getVisibleCells().map(cell => {
                return <td key={cell.id} className={styles.td} style={{ width: cell.column.getSize() }}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div >
  )
}

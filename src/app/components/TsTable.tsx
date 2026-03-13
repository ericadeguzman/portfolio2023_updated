"use client";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import React from "react";
import TwButton from "./buttons/TwButton";
import TwSearch from "./input/TwSearch";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function TsTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnVisibility, setColumnVisability] =
    React.useState<VisibilityState>({});
  console.log(rowSelection);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),

    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisability,
    onRowSelectionChange: setRowSelection,

    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });
  return (
    <>
      {/* input  */}
      <div className="cbt-table flex justify-between items-center">
        <TwSearch
          className="max-w-lg"
          placeholder="Filter first names"
          type="search"
          value={
            (table.getColumn("first_name")?.getFilterValue() as string) || ""
          }
          onChange={(e) => {
            table.getColumn("first_name")?.setFilterValue(e.target.value);
          }}
        />
      </div>
      <div className="w-full overflow-auto overflow-x-auto  max-h-[600px] overflow-y-auto mt-4 customScrollbar">
        {/* Table  */}
        <table className="cbt-table [&>*]:text-left text-base [&>*]:text-primary border-collapse rounded-tl-lg rounded-tr-lg w-full">
          <thead className="[&>th]:p-2 font-bold bg-white">
            {table.getHeaderGroups().map((headerGroup) => {
              return (
                <tr
                  key={headerGroup.id}
                  className="border-b border-neutral-200"
                >
                  {headerGroup.headers.map((header) => {
                    return (
                      <th
                        className="text-sm leading-[1rem] first-of-type:border-white dark:first-of-type:border-black border-l border-neutral-200  dark:bg-black dark:text-white "
                        key={header.id}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </th>
                    );
                  })}
                </tr>
              );
            })}
          </thead>
          <tbody
          // className='[&>*:nth-child(even)]:bg-surface [&>*:nth-child(odd)]:bg-white'
          >
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <tr
                  className="text-sm leading-[1rem] hover:bg-neutral-100 border-b bg-white border-neutral-200 dark:bg-black dark:text-white"
                  key={row.id}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td>No Results</td>
              </tr>
            )}
          </tbody>
        </table>
        {/* Pagination  */}
      </div>
      <div className="cbt-table flex flex-row justify-between mt-4">
        <div className="flex-1 text-sm text-black dark:text-white">
          {table.getFilteredSelectedRowModel().rows.length} of {""}
          {table.getFilteredRowModel().rows.length} row(s) selected
        </div>
        <div className="flex items-center justify-start space-x-2">
          <TwButton
            variant={"secondary"}
            size={"sm"}
            onClick={() => {
              table.previousPage();
            }}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </TwButton>
          <TwButton
            variant={"primary"}
            size={"sm"}
            onClick={() => {
              table.nextPage();
            }}
            disabled={!table.getCanNextPage()}
          >
            Next
          </TwButton>
        </div>
      </div>
    </>
  );
}
export default TsTable;

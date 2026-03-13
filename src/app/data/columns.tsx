import {
  DotsThreeOutlineVertical,
  CaretDown,
  CaretUp,
} from "@phosphor-icons/react";
import { Person } from "./people";
import { ColumnDef } from "@tanstack/react-table";
import React, { HTMLProps, ReactNode } from "react";
import { TwCheckbox } from "../components/input/checkbox";
import SortIcon from "../svg/sort.svg";
import Image from "next/image";

export const columns: ColumnDef<Person>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <div className="text-center">
        <TwCheckbox
          {...{
            checked: table.getIsAllRowsSelected(),
            // indeterminate: table.getIsSomeRowsSelected(),
            onChange: table.getToggleAllRowsSelectedHandler(),
          }}
        />
      </div>
    ),
    cell: ({ row }) => (
      <div className="text-center">
        <TwCheckbox
          {...{
            checked: row.getIsSelected(),
            disabled: !row.getCanSelect(),
            indeterminate: row.getIsSomeSelected(),
            onChange: row.getToggleSelectedHandler(),
          }}
        />
      </div>
    ),
    enableHiding: false,
    enableSorting: false,
  },
  {
    header: ({ column }) => {
      return (
        <div className="flex justify-between">
          Person ID
          <button
            className="flex row justify-between items-center"
            onClick={() => {
              column.toggleSorting(column.getIsSorted() === "asc");
            }}
          >
            {column.getIsSorted() === "asc" ? (
              <CaretDown
                className="ml-2"
                weight="regular"
                size={16}
                color="#007FAC"
              />
            ) : (
              <CaretUp
                className="ml-2"
                weight="regular"
                size={16}
                color="#007FAC"
              />
            )}
          </button>
        </div>
      );
    },
    accessorKey: "id",
  },
  {
    header: ({ column }) => {
      return (
        <div className="flex justify-between">
          <div className="flex gap-2 ">
            First name
            {/* <Image src={SortIcon} alt="sorticon" /> */}
          </div>
          <button
            className="flex row justify-between items-center"
            onClick={() => {
              column.toggleSorting(column.getIsSorted() === "asc");
            }}
          >
            {column.getIsSorted() === "asc" ? (
              <CaretDown
                className="ml-2"
                weight="regular"
                size={16}
                color="#007FAC"
              />
            ) : (
              <CaretUp
                className="ml-2"
                weight="regular"
                size={16}
                color="#007FAC"
              />
            )}
          </button>
        </div>
      );
    },
    accessorKey: "first_name",
  },
  {
    header: ({ column }) => {
      return (
        <div className="flex justify-between">
          Last name
          <button
            className="flex row justify-between items-center"
            onClick={() => {
              column.toggleSorting(column.getIsSorted() === "asc");
            }}
          >
            {column.getIsSorted() === "asc" ? (
              <CaretDown
                className="ml-2"
                weight="regular"
                size={16}
                color="#007FAC"
              />
            ) : (
              <CaretUp
                className="ml-2"
                weight="regular"
                size={16}
                color="#007FAC"
              />
            )}
          </button>
        </div>
      );
    },
    accessorKey: "last_name",
  },
  {
    header: "Email",
    accessorKey: "email",
    cell: (row) => {
      return (
        <>
          {row.getValue() as ReactNode}{" "}
          <i className="ph ph-copy-simple text-brand-600 w-[12.5px] cursor-pointer"></i>
        </>
      );
    },
    enableSorting: false,
  },
  {
    header: ({ column }) => {
      return (
        <div className="flex justify-between">
          <div className="flex gap-2 ">
            Date of birth
            {/* <Image src={SortIcon} alt="sorticon" /> */}
          </div>
          <button
            className="flex row justify-between items-center"
            onClick={() => {
              column.toggleSorting(column.getIsSorted() === "asc");
            }}
          >
            {column.getIsSorted() === "asc" ? (
              <CaretDown
                className="ml-2"
                weight="regular"
                size={16}
                color="#007FAC"
              />
            ) : (
              <CaretUp
                className="ml-2"
                weight="regular"
                size={16}
                color="#007FAC"
              />
            )}
          </button>
        </div>
      );
    },
    accessorKey: "date_of_birth",
    cell: ({ row }) => {
      const date_of_birth = row.getValue("date_of_birth");
      const formatted = new Date(date_of_birth as string).toLocaleDateString();
      return <div className="">{formatted}</div>;
    },
  },
  // {
  //   id: "actions",
  //   cell: () => {
  //     return (
  //       <DotsThreeOutlineVertical size={16} color="#1A304E" weight="fill" />
  //     );
  //   },
  //   enableSorting: false,
  // },
];

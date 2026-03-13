import { CaretDown } from '@phosphor-icons/react';
import { Person } from './people'
import { ColumnDef } from '@tanstack/react-table'
import React, { HTMLProps, ReactNode } from 'react';
import { TwCheckbox } from '../components/Checkbox';


export const columnsPeople: ColumnDef<Person>[] = [
    {
        id: 'select',
        header: ({ table }) => (
            <div className="px-2 mr-4">
                <TwCheckbox
                name="checkbox-header"
                    {...{
                        checked: table.getIsAllRowsSelected(),
                        // indeterminate: table.getIsSomeRowsSelected(),
                        onChange: table.getToggleAllRowsSelectedHandler(),
                    }}
                />
            </div>
        ),
        cell: ({ row }) => (
            <div className="px-2 mr-4">
                <TwCheckbox
                name="checkbox-row"
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
                <div className='flex justify-between'>
                    Person ID
                    <button className="flex row justify-between items-center mr-2" onClick={() => {
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }}>
                        <CaretDown className="ml-2" weight="regular" size={16} color="#007FAC" /></button>
                </div>
            )
        },
        accessorKey: 'id',
    },
    {
        header: 'First Name',
        accessorKey: 'first_name',
    },
    {
        header: 'Last Name',
        accessorKey: 'last_name',
    },
    {
        header: 'Email',
        accessorKey: 'email',
        cell: (row) => {
            return (
                <>{row.getValue() as ReactNode} <i className="ph ph-copy-simple text-brand-600 w-[12.5px]"></i></>
            );
        },
    },
    {
        header: 'Date of Birth',
        accessorKey: 'date_of_birth',
        cell: ({ row }) => {
            const date_of_birth = row.getValue('date_of_birth');
            const formatted = new Date(date_of_birth as string).toLocaleDateString();
            return <div className=''>{formatted}</div>;
        }
    },
    // {
    //     id: 'actions',
    //     cell: () => {
    //         return <DotsThreeOutlineVertical size={16} color="#1A304E" weight="fill" />

    //     }
    // }
]
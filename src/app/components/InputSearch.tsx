import { VariantProps, cva } from 'class-variance-authority';
import { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode, Ref } from 'react';
import { cn } from '../util/cn';
import React from 'react';

interface inputProps extends InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
    ref?: Ref<HTMLInputElement>,
}


export default function TwSearch({ className, inputSize, disabledInput, ...props }: inputProps) {
    return (
        <div className='relative'>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2">
                <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                    <i className='ph ph-magnifying-glass'></i>
                </button>
            </span>
            <input
                className={cn(inputVariants({ inputSize, className, disabledInput }))}
                {...props} />
        </div>
    );
}
const inputVariants = cva(["rounded leading-tight w-full border-[1px] border-neutral-300"], {
    variants: {
        inputSize: {
            sm: ["px-3 py-2 text-sm"],
            md: [],
            lg: ["text-base px-4 pt-[14px] pb-4 "]
        },
        disabledInput: {
            yes: ['text-neutral-400 bg-neutral-200 focus:border-neutral-200 focus:border-2  focus:outline-none'],
            no: ['text-black focus:border-brand-700 focus:border-2 focus:outline-none '],
        }
    },
    defaultVariants: {
        inputSize: "sm",
        disabledInput: "no",
    },
});

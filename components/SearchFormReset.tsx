"use client"

import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "./ui/button";

export const SearchFormReset = () => {
    const reset = () => {
        const form = document.querySelector('.search-form') as HTMLFormElement;

        if (form) form.reset();
    };

    return (
        <Button
            size="icon"
            onClick={reset}
            type="reset"
            className="search-btn text-white"
        >
            <Link href="/" className="search-btn text-white">
                <X className='size-6' />
            </Link>
        </Button>
    );
}
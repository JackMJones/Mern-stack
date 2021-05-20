import React, { HTMLAttributes } from 'react';
export interface COffcanvasHeaderProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * A string of all className you want applied to the base component. [docs]
     */
    className?: string;
}
export declare const COffcanvasHeader: React.ForwardRefExoticComponent<COffcanvasHeaderProps & React.RefAttributes<HTMLDivElement>>;

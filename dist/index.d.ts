import React from 'react';

declare const SYMBOL_KEY = "__wrap_b";
declare const SYMBOL_NATIVE_KEY = "__wrap_n";
declare const SYMBOL_OBSERVER_KEY = "__wrap_o";
interface WrapperElement extends HTMLElement {
    [SYMBOL_OBSERVER_KEY]?: ResizeObserver | undefined;
}
type RelayoutFn = (id: string | number, ratio: number, wrapper?: WrapperElement) => void;
declare global {
    interface Window {
        [SYMBOL_KEY]: RelayoutFn;
        [SYMBOL_NATIVE_KEY]?: number;
    }
}
interface BalancerOwnProps<ElementType extends React.ElementType = React.ElementType> extends React.HTMLAttributes<HTMLElement> {
    /**
     * The HTML tag to use for the wrapper element.
     * @default 'span'
     */
    as?: ElementType;
    /**
     * The balance ratio of the wrapper width (0 <= ratio <= 1).
     * 0 means the wrapper width is the same as the container width (no balance, browser default).
     * 1 means the wrapper width is the minimum (full balance, most compact).
     * @default 1
     */
    ratio?: number;
    /**
     * An option to skip the re-balance logic
     * and use the native CSS text-balancing if supported.
     * @default true
     */
    preferNative?: boolean;
    /**
     * The nonce attribute to allowlist inline script injection by the component.
     */
    nonce?: string;
}
type BalancerProps<ElementType extends React.ElementType> = BalancerOwnProps<ElementType> & Omit<React.ComponentPropsWithoutRef<ElementType>, keyof BalancerOwnProps>;
declare const Provider: React.FC<{
    /**
     * An option to skip the re-balance logic
     * and use the native CSS text-balancing if supported.
     * @default true
     */
    preferNative?: boolean;
    /**
     * The nonce attribute to allowlist inline script injection by the component
     */
    nonce?: string;
    children?: React.ReactNode;
}>;
declare const Balancer: <ElementType extends React.ElementType<any> = React.ElementType<any>>({ ratio, preferNative, nonce, children, ...props }: BalancerProps<ElementType>) => React.JSX.Element;

export { Balancer, Provider, Balancer as default };

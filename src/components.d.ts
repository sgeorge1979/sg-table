/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface SgContent {
        "dataUrl": string;
        "info": boolean;
        "ordering": boolean;
        "paging": boolean;
        "print": boolean;
        "searching": boolean;
        "theme": string;
    }
    interface SgTable {
        "dataUrl": string;
        "info": boolean;
        "ordering": boolean;
        "paging": boolean;
        "print": boolean;
        "searching": boolean;
        "theme": string;
    }
}
declare global {
    interface HTMLSgContentElement extends Components.SgContent, HTMLStencilElement {
    }
    var HTMLSgContentElement: {
        prototype: HTMLSgContentElement;
        new (): HTMLSgContentElement;
    };
    interface HTMLSgTableElement extends Components.SgTable, HTMLStencilElement {
    }
    var HTMLSgTableElement: {
        prototype: HTMLSgTableElement;
        new (): HTMLSgTableElement;
    };
    interface HTMLElementTagNameMap {
        "sg-content": HTMLSgContentElement;
        "sg-table": HTMLSgTableElement;
    }
}
declare namespace LocalJSX {
    interface SgContent {
        "dataUrl"?: string;
        "info"?: boolean;
        "ordering"?: boolean;
        "paging"?: boolean;
        "print"?: boolean;
        "searching"?: boolean;
        "theme"?: string;
    }
    interface SgTable {
        "dataUrl"?: string;
        "info"?: boolean;
        "ordering"?: boolean;
        "paging"?: boolean;
        "print"?: boolean;
        "searching"?: boolean;
        "theme"?: string;
    }
    interface IntrinsicElements {
        "sg-content": SgContent;
        "sg-table": SgTable;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "sg-content": LocalJSX.SgContent & JSXBase.HTMLAttributes<HTMLSgContentElement>;
            "sg-table": LocalJSX.SgTable & JSXBase.HTMLAttributes<HTMLSgTableElement>;
        }
    }
}

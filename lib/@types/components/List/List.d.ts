import * as React from 'react';
import { RouteComponentProps } from 'react-router';
export interface Properties extends RouteComponentProps<LooseObject> {
    data?: any;
    children: (data: QueryResult) => React.ReactNode;
    searchedText?: string;
}
export interface GetPage {
    (numberOfPage: number, paginationType: 'pagination' | 'infinite', pageSize: number): {
        items: Array<LooseObject>;
        lastPage: number;
    };
}
export interface GetPaginatingFunction {
    (items: Array<LooseObject>): GetPage;
}
export interface QueryResult {
    getPage: GetPage;
    data: Array<LooseObject>;
}
declare const _default: React.ComponentClass<Pick<Properties, "data" | "children" | "searchedText">, any>;
export default _default;

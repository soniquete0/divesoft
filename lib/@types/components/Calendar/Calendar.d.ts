import React from 'react';
export interface CalendarState {
    currentMonth: Date;
    selectedDate: Date;
    switch: boolean;
    mapCenter: {
        lat: number;
        lng: number;
    };
    countrySelectedValue: string;
    keywordSelectedValue: string;
    keywords: any;
    countries: any;
    currentDate: string;
}
export interface MyFormatOfDate {
    date: string;
    text: string;
    url: LooseObject;
    country: string;
    keyword: string;
    lat: string;
    lng: string;
}
export interface CalendarProps {
    data: {
        dates: MyFormatOfDate[];
    };
}
declare class Calendar extends React.Component<CalendarProps, CalendarState> {
    constructor(props: CalendarProps);
    getUniqControlProps(): void;
    componentDidMount: () => void;
    defineLocation(loc: string, type: string): {
        lat: number;
        lng: number;
    };
    renderHeader(): JSX.Element;
    renderDays(): JSX.Element;
    renderCells(data: any): JSX.Element;
    onSelectChange(event: React.FormEvent<HTMLSelectElement>, type?: string): void;
    search: (data: any) => void;
    renderControls(data: any): JSX.Element;
    renderMobileView(data: any): JSX.Element;
    onDateClick: (day: any) => void;
    nextMonth: () => void;
    prevMonth: () => void;
    render(): JSX.Element;
}
export default Calendar;

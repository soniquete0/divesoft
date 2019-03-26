import React from 'react';
export interface CalendarState {
    currentMonth: Date;
    selectedDate: Date;
    dates: Array<MyFormatOfDate>;
    switch: boolean;
    mapCenter: {
        lat: number;
        lng: number;
    };
    countrySelectedValue: string;
    keywordSelectedValue: string;
    dateSelectedValue: string;
    keywords: any;
    countries: any;
    uniqDates: any;
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
    componentDidMount: () => void;
    getUniqControlProps(): void;
    defineLocation(loc: string, type: string): {
        lat: number;
        lng: number;
    };
    renderHeader(): JSX.Element;
    renderDays(): JSX.Element;
    renderCells(): JSX.Element;
    onSelectChange(event: React.FormEvent<HTMLSelectElement>, type?: string): void;
    search: () => void;
    renderControls(): JSX.Element;
    renderMobileView(): JSX.Element;
    onDateClick: (day: any) => void;
    nextMonth: () => void;
    prevMonth: () => void;
    render(): JSX.Element;
}
export default Calendar;

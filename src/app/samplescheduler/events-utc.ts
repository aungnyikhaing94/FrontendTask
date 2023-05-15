import { SchedulerEvent } from '@progress/kendo-angular-scheduler';

/* eslint-disable */

const baseData: any[] = [
    {
      id: 1,
      title: "SKU A",
      start: new Date("2023-03-27T09:00:00"),
      duration: 2,
      color: ""
    },
    {
      id: 2,
      title: "SKU A",
      start: new Date("2023-03-29T09:00:00"),
      duration: 2,
      color: ""
    },
    {
      id: 3,
      title: "SKU C",
      start: new Date("2023-03-31T09:00:00"),
      duration: 1,
      color: ""
    },
    {
      id: 4,
      title: "SKU A",
      start: new Date("2023-03-27T10:00:00"),
      duration: 2,
      color: ""
    },
    {
      id: 5,
      title: "SKU A",
      start: new Date("2023-03-29T10:00:00"),
      duration: 2,
      color: ""
    },
    {
      id: 6,
      title: "SKU C",
      start: new Date("2023-03-31T10:00:00"),
      duration: 1,
      color: ""
    },
    {
      id: 7,
      title: "SKU D",
      start: new Date("2023-03-27T11:00:00"),
      duration: 2,
      color: ""
    },
    {
      id: 8,
      title: "SKU A",
      start: new Date("2023-03-29T11:00:00"),
      duration: 2,
      color: ""
    },
    {
      id: 9,
      title: "SKU C",
      start: new Date("2023-03-31T11:00:00"),
      duration: 1,
      color: ""
    },
    {
      id: 10,
      title: "SKU E",
      start: new Date("2023-03-27T12:00:00"),
      duration: 2,
      color: ""
    },
    {
      id: 11,
      title: "SKU F",
      start: new Date("2023-03-29T12:00:00"),
      duration: 2,
      color: ""
    },
    {
      id: 12,
      title: "SKU C",
      start: new Date("2023-03-31T12:00:00"),
      duration: 1,
      color: ""
    },
    {
      id: 13,
      title: "SKU A",
      start: new Date("2023-03-27T13:00:00"),
      duration: 2,
      color: ""
    },
    {
      id: 14,
      title: "SKU A",
      start: new Date("2023-03-29T13:00:00"),
      duration: 2,
      color: ""
    },
    {
      id: 15,
      title: "SKU C",
      start: new Date("2023-03-31T13:00:00"),
      duration: 1,
      color: ""
    },
    {
      id: 16,
      title: "SKU C",
      start: new Date("2023-03-27T14:00:00"),
      duration: 1,
      color: ""
    },
    {
      id: 17,
      title: "SKU A",
      start: new Date("2023-03-28T14:00:00"),
      duration: 2,
      color: ""
    },
    {
      id: 18,
      title: "SKU A",
      start: new Date("2023-03-30T14:00:00"),
      duration: 2,
      color: ""
    },
    {
      id: 19,
      title: "SKU C",
      start: new Date("2023-03-27T15:00:00"),
      duration: 1,
      color: ""
    },
    {
      id: 20,
      title: "SKU E",
      start: new Date("2023-03-28T15:00:00"),
      duration: 2,
      color: ""
    },
    {
      id: 21,
      title: "SKU E",
      start: new Date("2023-03-30T15:00:00"),
      duration: 2,
      color: ""
    },
    {
      id: 22,
      title: "SKU C",
      start: new Date("2023-03-27T16:00:00"),
      duration: 1,
      color: ""
    },
    {
      id: 23,
      title: "SKU E",
      start: new Date("2023-03-28T16:00:00"),
      duration: 2,
      color: ""
    },
    {
      id: 24,
      title: "SKU E",
      start: new Date("2023-03-30T16:00:00"),
      duration: 2,
      color: ""
    },
    {
      id: 25,
      title: "SKU C",
      start: new Date("2023-03-27T17:00:00"),
      duration: 1,
      color: ""
    },
    {
      id: 26,
      title: "SKU D",
      start: new Date("2023-03-28T17:00:00"),
      duration: 2,
      color: ""
    },
    {
      id: 27,
      title: "SKU D",
      start: new Date("2023-03-30T17:00:00"),
      duration: 2,
      color: ""
    },
    {
      id: 28,
      title: "SKU C",
      start: new Date("2023-03-27T18:00:00"),
      duration: 1,
      color: ""
    },
    {
      id: 29,
      title: "SKU D",
      start: new Date("2023-03-28T18:00:00"),
      duration: 2,
      color: ""
    },
    {
      id: 30,
      title: "SKU D",
      start: new Date("2023-03-30T18:00:00"),
      duration: 2,
      color: ""
    },
    {
      id: 31,
      title: "SKU D",
      start: new Date("2023-03-27T19:00:00"),
      duration: 2,
      color: ""
    },
    {
      id: 32,
      title: "SKU A",
      start: new Date("2023-03-29T19:00:00"),
      duration: 2,
      color: ""
    },
    {
      id: 33,
      title: "SKU C",
      start: new Date("2023-03-31T19:00:00"),
      duration: 1,
      color: ""
    },
    {
      id: 34,
      title: "SKU A",
      start: new Date("2023-03-27T20:00:00"),
      duration: 2,
      color: ""
    },
    {
      id: 35,
      title: "SKU A",
      start: new Date("2023-03-29T20:00:00"),
      duration: 2,
      color: ""
    },
    {
      id: 36,
      title: "SKU C",
      start: new Date("2023-03-31T20:00:00"),
      duration: 1,
      color: ""
    },
    {
      id: 37,
      title: "SKU D",
      start: new Date("2023-03-27T21:00:00"),
      duration: 2,
      color: ""
    },
    {
      id: 38,
      title: "SKU D",
      start: new Date("2023-03-29T21:00:00"),
      duration: 2,
      color: ""
    },
    {
      id: 39,
      title: "SKU C",
      start: new Date("2023-03-31T21:00:00"),
      duration: 1,
      color: ""
    },
    {
      id: 40,
      title: "SKU D",
      start: new Date("2023-03-27T22:00:00"),
      duration: 2,
      color: ""
    },
    {
      id: 41,
      title: "SKU A",
      start: new Date("2023-03-29T22:00:00"),
      duration: 2,
      color: ""
    },
    {
      id: 42,
      title: "SKU C",
      start: new Date("2023-03-31T22:00:00"),
      duration: 1,
      color: ""
    },
    {
      id: 43,
      title: "SKU A",
      start: new Date("2023-03-27T23:00:00"),
      duration: 2,
      color: ""
    },
    {
      id: 44,
      title: "SKU A",
      start: new Date("2023-03-29T23:00:00"),
      duration: 2,
      color: ""
    },
    {
      id: 45,
      title: "SKU C",
      start: new Date("2023-03-31T23:00:00"),
      duration: 1,
      color: ""
    }
  ];

const currentYear = new Date().getFullYear();
const parseAdjust = (eventDate: string): Date => {
    const date = new Date(eventDate);
    date.setFullYear(currentYear);
    return date;
};

export const sampleData = baseData.map(dataItem => (
    <SchedulerEvent> {
        id: dataItem.id,
        title: dataItem.title,
        start: parseAdjust(dataItem.start), 
        end: parseAdjust(dataItem.end),
        color: dataItem.color,
        duration: dataItem.duration
    }
));


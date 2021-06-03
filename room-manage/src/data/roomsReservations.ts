import moment from "moment";
import { v4 } from "uuid";
import { IRoom } from "../models";

export const roomsReservations: IRoom[] = [
  {
    id: 1,
    svgAttrs: {
      x: "360.5",
      y: "83.5",
      width: "47",
      height: "51",
    },
    reservations: [
      {
        id: v4(),
        roomId: 1,
        reservedBy: "Asim",
        from: moment().subtract(1, "hour").utc().format(),
        to: moment().add(1, "hour").utc().format(),
        notes: "",
      },
    ],
  },
  {
    id: 2,
    svgAttrs: {
      x: "411.5",
      y: "83.5",
      width: "48",
      height: "51",
    },
    reservations: [],
  },
  {
    id: 3,
    svgAttrs: {
      x: "360.5",
      y: "137.5",
      width: "47",
      height: "47",
    },
    reservations: [],
  },
  {
    id: 4,
    svgAttrs: {
      x: "411.5",
      y: "137.5",
      width: "48",
      height: "47",
    },
    reservations: [],
  },
  {
    id: 5,
    svgAttrs: {
      x: "205.5",
      y: "226.5",
      width: "48",
      height: "47",
    },
    reservations: [],
  },
  {
    id: 6,
    svgAttrs: {
      x: "256.5",
      y: "226.5",
      width: "46",
      height: "47",
    },
    reservations: [
      {
        id: v4(),
        roomId: 6,
        reservedBy: "Ceyhun",
        from: moment().subtract(1, "hour").utc().format(),
        to: moment().add(1, "hour").utc().format(),
        notes: "",
      },
    ],
  },
  {
    id: 7,
    svgAttrs: {
      x: "305.5",
      y: "226.5",
      width: "46",
      height: "47",
    },
    reservations: [],
  },
  {
    id: 8,
    svgAttrs: {
      x: "205.5",
      y: "276.5",
      width: "48",
      height: "47",
    },
    reservations: [],
  },
  {
    id: 9,
    svgAttrs: {
      x: "256.5",
      y: "276.5",
      width: "46",
      height: "47",
    },
    reservations: [],
  },
  {
    id: 10,
    svgAttrs: {
      x: "305.5",
      y: "276.5",
      width: "46",
      height: "47",
    },
    reservations: [],
  },
  {
    id: 11,
    svgAttrs: {
      x: "28.5",
      y: "17.5",
      width: "207",
      height: "145",
    },
    reservations: [],
  },
  {
    id: 12,
    svgAttrs: {
      x: "20.5",
      y: "202.5",
      width: "129",
      height: "86",
    },
    reservations: [],
  },
  {
    id: 13,
    svgAttrs: {
      x: "20.5",
      y: "292.5",
      width: "129",
      height: "65",
    },
    reservations: [],
  },
  {
    id: 14,
    svgAttrs: {
      x: "20.5",
      y: "361.5",
      width: "129",
      height: "61",
    },
    reservations: [],
  },
];

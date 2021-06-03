import { IReservation } from "../../../../models";
import { ROOMS_ACTIONS } from "./consts";

export function addReservation(reservation: IReservation) {
    return {
        type: ROOMS_ACTIONS.ADD_RESERVATION,
        payload: reservation,
    };
};
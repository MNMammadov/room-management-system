import { roomsReservations } from "../../../../data/roomsReservations";
import { IReservation } from "../../../../models";
import { ROOMS_ACTIONS } from "../actions/consts";

const initialState = roomsReservations;

interface IRoomsAction {
    type: string;
    payload: IReservation;
}

export function roomsReducers(state = initialState, action: IRoomsAction) {
    switch (action.type) {
        case ROOMS_ACTIONS.ADD_RESERVATION:
            const newState = state.map((room) => {
                if (room.id === action.payload.roomId) {
                    return {
                        ...room,
                        reservations: [
                            ...room.reservations,
                            action.payload,
                        ]
                    }
                }

                return room;
            });
            return newState;
        default:
            return state;
    }
}
import React from 'react';
import { IRoom } from '../../models';
import moment from 'moment';

import './Room.css';

interface IProps {
    room: IRoom;
    onClick: (roomId: number) => void;
}

export const Room: React.FC<IProps> = ({ room, onClick }) => {
    const isBusyNow = room.reservations.some((reservation) => {
        return moment().isAfter(reservation.from) && moment().isBefore(reservation.to);
    });

    let classes = 'room-item ';

    if (!isBusyNow) {
        classes += 'room-item--available';
    }

    return (
        <rect
            onClick={() => onClick(room.id)}
            className={classes}
            stroke="#979797"
            fill="#D8D8D8"
            x={room.svgAttrs.x}
            y={room.svgAttrs.y}
            width={room.svgAttrs.width}
            height={room.svgAttrs.height}
        >
        </rect>
    )
}
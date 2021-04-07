import React from "react";
import dayjs from "dayjs";
import { Card } from "react-native-paper";

import Text from "../../../ui/components/typography/TextComponent";
import { IReservations } from "../../../store/reservations/reservationsTypes";

interface ReservationCardComponentProps {
  reservation: IReservations;
}

const ReservationCardComponent = ({
  reservation,
}: ReservationCardComponentProps): JSX.Element => {
  const formatDates = (dateToFormat: string): string =>
    dayjs(dateToFormat).format("ddd MMM D YYYY h:mm A");

  const start: string = formatDates(reservation.start);
  const end: string = formatDates(reservation.end);

  const pluckFormattedDate = (temp: string, x: number, y: number): string =>
    temp.split(" ").splice(x, y).join(" ");

  const renderStartEndTime = (): JSX.Element => (
    <Text variant="body">
      {pluckFormattedDate(start, 4, 2)} - {pluckFormattedDate(end, 4, 2)}
    </Text>
  );

  const renderDate = (): JSX.Element => (
    <Text variant="body">{pluckFormattedDate(start, 0, 4)}</Text>
  );

  return (
    <Card>
      <Card.Content>
        <Text variant="body">{renderStartEndTime()}</Text>
        <Text variant="body">{renderDate()}</Text>
      </Card.Content>
    </Card>
  );
};

export default ReservationCardComponent;

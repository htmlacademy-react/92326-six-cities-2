import { OfferItem } from '../../../models/app.models.ts';
import OfferCard from '../offer-card/offer-card.tsx';
import { Fragment, MouseEventHandler } from 'react';

interface OfferListProps {
  offerList: OfferItem[];
  onHover: (offer: OfferItem) => MouseEventHandler<HTMLElement> | undefined;
}

export default function OfferList({offerList, onHover}: OfferListProps) {
  return (
    <Fragment>
      {
        offerList.map((offer: OfferItem) => (
          <OfferCard
            onHover={() => onHover(offer)}
            key={offer.id}
            offer={offer}
          />
        ))
      }
    </Fragment>
  );
}

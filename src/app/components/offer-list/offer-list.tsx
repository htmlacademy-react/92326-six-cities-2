import { OfferItem } from '../../../models/app.models.ts';
import Card from '../card/card.tsx';

interface OfferListProps {
  offerList: OfferItem[];
}

export default function OfferList(props: OfferListProps) {
  const {offerList} = props;
  return (
    offerList.map((offer: OfferItem) => (
      <Card
        key={offer.id}
        offer={offer}
      />
    ))
  );
}

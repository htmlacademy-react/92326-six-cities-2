import { OfferItem } from '../../../models/app.models.ts';
import Card from '../card/card.tsx';
import { Fragment } from 'react';

interface OfferListProps {
  offerList: OfferItem[];
}

export default function OfferList(props: OfferListProps) {
  // const [activeCardId, setActiveCardId] = useState(null);
  const {offerList} = props;

  return (
    <Fragment>
      {
        offerList.map((offer: OfferItem) => (
          <Card
            key={offer.id}
            offer={offer}
          />
        ))
      }
    </Fragment>
  );
}

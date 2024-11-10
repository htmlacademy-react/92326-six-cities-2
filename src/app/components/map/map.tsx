import { OfferItem } from '../../../models/app.models.ts';

interface MapProps {
  offerList: OfferItem[];
  // activeOffer: OfferItem | null;
}

export default function Map({offerList}: MapProps) {
  console.log(offerList);
  return (
    <div>Map</div>
  );
}

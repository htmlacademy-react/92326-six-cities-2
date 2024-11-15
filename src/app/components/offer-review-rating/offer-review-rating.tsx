import { Fragment } from 'react';

interface OfferReviewRatingProps {
  name: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RATING_VALS = [5, 4, 3, 2, 1];

export default function OfferReviewRating({name, value, onChange}: OfferReviewRatingProps) {
  return (
    <div className="reviews__rating-form form__rating">
      {RATING_VALS.map((rating: number) => (
        <Fragment key={rating}>

          {value === rating}
          <input
            className="form__rating-input visually-hidden"
            name={name}
            onChange={onChange}
            value={rating}
            checked={value === rating}
            id={`${rating}-stars`}
            type="radio"
          />
          <label
            htmlFor={`${rating}-stars`}
            className="reviews__rating-label form__rating-label"
            title="perfect"
          >
            <svg
              className="form__star-image"
              width={37}
              height={33}
            >
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
        </Fragment>
      ))}
    </div>
  );
}

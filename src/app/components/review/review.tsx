import { ReviewItem } from '../../../models/app.models.ts';

interface ReviewProps {
  review: ReviewItem;
}

const OPTIONS: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
};

const getStarsStyle = (rating:number): string =>`${(Math.round(rating) * 20).toString() }%`;

export default function Review({review}: ReviewProps) {
  return(
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={review.user.avatarUrl}
            width={54}
            height={54}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{review.user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: getStarsStyle(review.rating) }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime={review.date}>
          {new Date(review.date)
            .toLocaleString('en-US', OPTIONS)}
        </time>
      </div>
    </li>
  );
}

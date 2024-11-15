import Review from '../review/review.tsx';
import { ReviewItem } from '../../../models/app.models.ts';

interface ReviewListProps {
  reviews: ReviewItem[];
}

export default function ReviewList({reviews}: ReviewListProps) {
  return (
    <ul className="reviews__list">
      {reviews.map((review: ReviewItem) => (
        <Review
          key={review.id}
          review={review}
        />
      ))}
    </ul>
  );
}

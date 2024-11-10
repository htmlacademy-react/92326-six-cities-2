import { useState } from 'react';
import OfferReviewRating from '../offer-review-rating/offer-review-rating.tsx';

interface FormValue {
  review: string;
  rating: number;
}

const RATING_PROP_NAME = 'rating';

export default function OfferCommentForm() {
  const [formValue, setFormValue] = useState<FormValue>({review: '', rating: 1});
  console.log(formValue);

  const handleFormChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormValue((prevState: FormValue) => (
      {
        ...prevState,
        [name]: value
      }
    ));
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
    >
      <label
        className="reviews__label form__label"
        htmlFor="review"
      >
        Your review
      </label>
      <OfferReviewRating name={RATING_PROP_NAME} value={formValue.rating} onChange={handleFormChange} />
      <textarea
        className="reviews__textarea form__textarea"
        onChange={handleFormChange}
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formValue.review}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe
          your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled
        >
          Submit
        </button>
      </div>
    </form>
  );
}

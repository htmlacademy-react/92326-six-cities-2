import { SortTypes } from '../app.contants.tsx';
import { useEffect, useRef, useState } from 'react';
import { useAppDispatch } from '../store/hooks.ts';
import { actionSetSort } from '../store/actions.ts';
import { useActiveSortSelector } from '../store/selectors.ts';

interface SortProps {
  sortTypes: SortTypes[];
}

export default function Sort({sortTypes}: SortProps) {
  const dispatch = useAppDispatch();
  const [isSortTypeListVisible, setSortTypeListVisible] = useState(false);
  const activeSort: string = useActiveSortSelector();
  const sortRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const onEscKeydown = (evt: KeyboardEvent) => {
      evt.preventDefault();
      if (evt.key === 'Escape') {
        setSortTypeListVisible(!isSortTypeListVisible);
      }
    };

    document.addEventListener('keydown', onEscKeydown);

    return () => {
      document.removeEventListener('keydown', onEscKeydown);
    };
  }, [isSortTypeListVisible]);

  useEffect(() => {
    const onClickOutside = (evt: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(evt.target as Node)) {
        setSortTypeListVisible(false);
      }
    };

    document.addEventListener('click', onClickOutside);

    return () => {
      document.removeEventListener('click', onClickOutside);
    };
  }, []);

  const handleSort = () => {
    setSortTypeListVisible(!isSortTypeListVisible);
  };

  const handleSortSelect = (evt: MouseEvent) => {
    const selectedValue: string = (
      evt.currentTarget as HTMLElement
    ).innerText;
    dispatch(actionSetSort(selectedValue));
    setSortTypeListVisible(!isSortTypeListVisible);
  };

  return (
    <form
      className="places__sorting"
      action="#"
      method="get"
      ref={sortRef}
    >
      <span className="places__sorting-caption">Sort by</span>
      <span
        onClick={handleSort}
        className="places__sorting-type"
        tabIndex={0}
      >
        {activeSort}
        <svg
          className="places__sorting-arrow"
          width={7}
          height={4}
        >
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul
        className={isSortTypeListVisible ?
          'places__options places__options--custom places__options--opened' :
          'places__options places__options--custom'}
      >
        {sortTypes.map((type) => (
          <li
            onClick={handleSortSelect}
            key={type}
            className={type === activeSort ? 'places__option places__option--active' : 'places__option'}
            tabIndex={0}
          >
            {type}
          </li>
        ))}
      </ul>
    </form>
  );
}

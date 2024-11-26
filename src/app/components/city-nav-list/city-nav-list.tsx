import {Link} from 'react-router-dom';
import {MouseEvent} from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks.ts';
import { actionSelectCity } from '../../store/actions.ts';

type CitiesListProp = {
  cityList: string[];
}


export default function CityNavList({cityList}: CitiesListProp) {
  const dispatch = useAppDispatch();
  const selectedCity = useAppSelector((state) => state.city);


  const handleCitySelect = (event: MouseEvent<HTMLLIElement>)=>{
    const value = event.currentTarget.innerText;
    dispatch(actionSelectCity(value));
  };
  return(
    <ul className="locations__list tabs__list">
      {
        cityList.map((item)=>(
          <li
            onClick={handleCitySelect}
            key={item} className="locations__item"
          >
            <Link className={
              item === selectedCity ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'
            } to="#"
            >
              <span>{item}</span>
            </Link>
          </li>
        ))
      }
    </ul>
  );
}

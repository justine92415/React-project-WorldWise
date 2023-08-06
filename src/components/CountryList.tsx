import { useCities } from '../contexts/CitiesContext';
import { Country } from '../type/Country';
import { City } from '../type/city';
import CountryItem from './CountryItem';
import styles from './CountryList.module.css';
import Message from './Message';
import Spinner from './Spinner';

function CountryList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner></Spinner>;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map"></Message>
    );

  const countries: Country[] = cities.reduce((arr: Country[], city: City) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country: Country) => (
        <CountryItem country={country} key={country.country}></CountryItem>
      ))}
    </ul>
  );
}

export default CountryList;

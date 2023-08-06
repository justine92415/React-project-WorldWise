import { createContext, useContext, useEffect, useState } from 'react';
import { City } from '../type/city';

const BASE_URL = 'http://localhost:9000';

const CitiesContext = createContext({
  cities: [] as City[],
  isLoading: false,
  currentCity: {} as City,
  getCity: (id: string) => {
    id;
  },
});

function CitiesProvider({ children }: { children: React.ReactNode }) {
  const [cities, setCities] = useState<City[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState<City | undefined>(undefined); // provide a default value of undefined

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
        setCurrentCity(data[0]); // set the first city as the current city
      } catch {
        alert('There was an error loading data...');
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  async function getCity(id: string) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch {
      alert('There was an error loading data...');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity: currentCity || ({} as City),
        getCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (!context)
    throw new Error('CitiesContext was used outside the CitiesProvider');
  return context;
}

export { CitiesProvider, useCities };

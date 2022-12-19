import { createContext, useState } from "react";

const FavoriteContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (id) => {},
  isFavorite: (id) => {},
});

export function FavoriteContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  const addFavoriteHandler = (favoriteMeetup) => {
    setUserFavorites((prev) => {
      return prev.concat(favoriteMeetup);
    });
  };

  const removeFavoriteHandler = (id) => {
    setUserFavorites((prev) => {
      return prev.filter((meetup) => meetup.id !== id);
    });
  };

  const isFavoriteHandler = (id) => {
    return userFavorites.some((meetup) => meetup.id === id);
  };

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    isFavorite: isFavoriteHandler,
  };

  return (
    <FavoriteContext.Provider value={context}>
      {props.children}
    </FavoriteContext.Provider>
  );
}

export default FavoriteContext;

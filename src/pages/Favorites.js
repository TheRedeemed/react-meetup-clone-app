import { useContext } from "react";
import FavoriteContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
  const favoriteContext = useContext(FavoriteContext);

  let content =
    favoriteContext.totalFavorites === 0 ? (
      <p>You currently do not have any favorites.</p>
    ) : (
      <MeetupList meetupList={favoriteContext.favorites} />
    );

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;

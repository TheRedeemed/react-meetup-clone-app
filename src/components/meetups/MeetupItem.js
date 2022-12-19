import { useContext } from "react";
import FavoriteContext from "../../store/favorites-context";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

function MeetupItem(props) {
  const { id, image, title, address, description } = props;
  const favoriteContext = useContext(FavoriteContext);

  const isItemFavorite = favoriteContext.isFavorite(id);

  const toggleFavoriteStatusHandler = () => {
    if (isItemFavorite) {
      favoriteContext.removeFavorite(id);
    } else {
      favoriteContext.addFavorite({
        id: id,
        title: title,
        image: image,
        address: address,
        description: description,
      });
    }
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {isItemFavorite ? "Remove from favorites" : "Add to favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;

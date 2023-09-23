import { Destination } from "./styles/Home.styled";
import { places } from "../Data";

export const Destinations = () => {
  return (
    <Destination>
      <h1>Our Destinations</h1>
      <p>Choose Your Next Destination</p>
      <div className="places">

        {places.map(place => {
          return (
            <div className="place" style={{ backgroundImage: `url(${place.image})` }} key={place.id}>
              <p className="price">{place.price}</p>
              <p className="city">{place.city}</p>
              <div className="overlay"></div>
            </div>
          )
        })}
      </div>
    </Destination>
  );
}
import { useEffect } from "react";
import "./Form.css";

export default function Form({
  latitude,
  longitude,
  radius,
  setLatitude,
  setLongitude,
  setRadius,
  handleSubmit,
}) {
  return (
    <section>
      <form onSubmit={handleSubmit} className="form">
        <div className="form__location">
          <label className="form__label" htmlFor="lat">
            Latitude:
          </label>
          <input
            className="form__input"
            type="text"
            id="lat"
            value={latitude}
            onChange={(event) => setLatitude(event.target.value)}
            placeholder="Enter latitude"
          />
        </div>
        <div className="form__location">
          <label className="form__label" htmlFor="long">
            Longitude:
          </label>
          <input
            className="form__input"
            type="text"
            id="long"
            value={longitude}
            onChange={(event) => setLongitude(event.target.value)}
            placeholder="Enter longitude"
          />
        </div>
        <div className="form__location">
          <label className="form__label" htmlFor="radius">
            Radius:
          </label>
          <input
            className="form__input"
            type="text"
            id="radius"
            value={radius}
            onChange={(event) => setRadius(event.target.value)}
            placeholder="Enter radius"
          />
        </div>
        <button className="form__button" type="submit">
          Search
        </button>
      </form>
    </section>
  );
}

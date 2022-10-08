import React from "react";
import "./Maps.css";

export default function Maps({ isData, response }) {
  return (
    <div className="maps">
      <p>Please click name to open the map</p>

      {isData
        ? // <p>Please click name to open the map</p>

          response.map((res) => {
            if (res.hasOwnProperty("photos")) {
              const ref = res?.photos[0]?.html_attributions[0].split('"');
              console.log(ref);

              return (
                <a key={res.place_id} href={ref[1]}>
                  {ref[2]}
                </a>
              );
            } else {
              return null;
            }
          })
        : null}
    </div>
  );
}

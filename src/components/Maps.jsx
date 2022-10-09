import React from "react";
import "./Maps.css";

export default function Maps({ isData, response, isSearched }) {
  return (
    <div className="maps">
      {isData ? (
        <p className="maps__title">Please click name to open the map</p>
      ) : null}
      {isSearched ? <p className="maps__title">No results found</p> : null}
      {isData
        ? response.map((res) => {
            if (res.hasOwnProperty("photos")) {
              const ref = res?.photos[0]?.html_attributions[0].split('"');
              const linkName = ref[2].slice(1, -4);

              return (
                <a className="maps__maplink" key={res.place_id} href={ref[1]}>
                  {linkName}
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

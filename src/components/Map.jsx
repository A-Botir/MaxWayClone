import React, { useState, useEffect } from "react";

const Map = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (!mapLoaded) {
      setMapLoaded(true);
    }
  }, []);

  return (
    <section className="mb-20 mt-10">
      <div className="max-h-[700px] w-full">
        <div className="h-full w-full">
          {mapLoaded && (
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A7ac1c80756e7fc35c8536dca83504c5a0b183565c021c48c15f5b8286b3267d6&amp;source=constructor"
              width="100%"
              height="720"
              frameBorder="0"
            ></iframe>
          )}
        </div>
      </div>
    </section>
  );
};

export default Map;

import React from "react";
import styled from "styled-components";

export const DataBox = styled.div`
  color: grey;
  font-size: 12px;
  font-style: italic;
  text-align: left;
  display: flex;
  justify-content: space-between;
  border-color: grey;
  border-style: double;
  border-radius: 24px;
  width: 30%;
`;

export const CopyDate = styled.span`
  margin: 10px;
`;

const Figure = ({ data }) => {
  // const marsImage = martianData.photos.map((photo) => photo.img_src);
  // return <img src={marsImage[0]} />;

  return (
    <figure>
      <h2>{data.title}</h2>
      <img src={data.url} alt={data.title} />
      <DataBox>
        {data.copyright ? (
          <CopyDate>Copyright: {data.copyright}</CopyDate>
        ) : (
          <CopyDate>Copyright: Unknown</CopyDate>
        )}

        <CopyDate>{data.date}</CopyDate>
      </DataBox>
      <br />
      <span>{data.explanation}</span>
    </figure>
  );
};
export default Figure;

// {
//   "photos": [
//       {
//           "id": 102685,
//           "sol": 1004,
//           "camera": {
//               "id": 20,
//               "name": "FHAZ",
//               "rover_id": 5,
//               "full_name": "Front Hazard Avoidance Camera"
//           },
//           "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/fcam/FLB_486615455EDR_F0481570FHAZ00323M_.JPG",
//           "earth_date": "2015-06-03",
//           "rover": {
//               "id": 5,
//               "name": "Curiosity",
//               "landing_date": "2012-08-06",
//               "launch_date": "2011-11-26",
//               "status": "active"
//           }
//       },
//       {
//           "id": 102686,
//           "sol": 1004,
//           "camera": {
//               "id": 20,
//               "name": "FHAZ",
//               "rover_id": 5,
//               "full_name": "Front Hazard Avoidance Camera"
//           },
//           "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/fcam/FRB_486615455EDR_F0481570FHAZ00323M_.JPG",
//           "earth_date": "2015-06-03",
//           "rover": {
//               "id": 5,
//               "name": "Curiosity",
//               "landing_date": "2012-08-06",
//               "launch_date": "2011-11-26",
//               "status": "active"
//           }
//       },
//       {
//           "id": 102842,
//           "sol": 1004,
//           "camera": {
//               "id": 21,
//               "name": "RHAZ",
//               "rover_id": 5,
//               "full_name": "Rear Hazard Avoidance Camera"
//           },
//           "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/rcam/RLB_486615482EDR_F0481570RHAZ00323M_.JPG",
//           "earth_date": "2015-06-03",
//           "rover": {
//               "id": 5,
//               "name": "Curiosity",
//               "landing_date": "2012-08-06",
//               "launch_date": "2011-11-26",
//               "status": "active"
//           }
//       },
//       {
//           "id": 102843,
//           "sol": 1004,
//           "camera": {
//               "id": 21,
//               "name": "RHAZ",
//               "rover_id": 5,
//               "full_name": "Rear Hazard Avoidance Camera"
//           },
//           "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/rcam/RRB_486615482EDR_F0481570RHAZ00323M_.JPG",
//           "earth_date": "2015-06-03",
//           "rover": {
//               "id": 5,
//               "name": "Curiosity",
//               "landing_date": "2012-08-06",
//               "launch_date": "2011-11-26",
//               "status": "active"
//           }
//       }
//   ]
// }

import React from "react";

interface InfoListProps {
  data?: string[]
}

const InfoList: React.FC<InfoListProps> = ({data}) => (
  <ul className="ps-3">
    {data?.map(str =>
      <li key={str}>{str}</li>
    )}
  </ul>
);

export default InfoList;
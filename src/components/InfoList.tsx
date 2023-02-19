import React, {ReactNode} from "react";

interface InfoListProps {
  data?: ReactNode[];
}

const InfoList: React.FC<InfoListProps> = ({data}) => (
  <ul className="ps-3">
    {data?.map(str =>
      <li key={str?.toString()}>{str}</li>
    )}
  </ul>
);

export default InfoList;
import React from "react";

interface ProgressProps {
  value: number;
}

const Progress: React.FC<ProgressProps> = ({ value }) => {
  return (
    <div>
      <progress
        className="rounded-md progress progress-success"
        value={value}
        max="100"
      >{`${value}%`}</progress>
      <span className="ml-2 progress-value text-white p-1 bg-black text-sm rounded-full">{`${value}%`}</span>
    </div>
  );
};

export default Progress;

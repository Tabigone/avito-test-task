import React from "react";
import { Spin } from "antd";
import './LoadingContainer.css';

const LoadingContainer: React.FC = () => {
  return (
    <div className="loading-container">
      <Spin />
    </div>
  );
};

export default LoadingContainer;

import React, { PropsWithChildren } from 'react';

export default function LoaderWrapper({
  loading,
  children,
}: PropsWithChildren<{ loading: boolean }>) {
  return loading ? (
    <div className="progress-outer-container">
      <div className="progress-container">
        <div className="progress-inner"></div>
      </div>
    </div>
  ) : (
    <>{children}</>
  );
}

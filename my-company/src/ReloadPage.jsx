import React from 'react';

const ReloadPage = () => {
  // Function to reload the current page
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div>
      <button onClick={reloadPage}>Reload Page</button>
    </div>
  );
};

export default ReloadPage;
import React, { useEffect } from 'react';
import '../../App.scss';

function FourZeroFour() {
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      window.location.href = '/';
    }, 10);

    return () => clearTimeout(redirectTimer);
  }, []);

  return (
    <div>
      <p>Traffic on the 404</p>
    </div>
  );
}

export default FourZeroFour;

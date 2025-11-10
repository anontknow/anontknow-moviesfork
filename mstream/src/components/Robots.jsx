import { useEffect } from 'react';

function Robots() {
  useEffect(() => {
    window.location.href = '/robots.xml';
  }, []);

  return null;
}


export default Robots;
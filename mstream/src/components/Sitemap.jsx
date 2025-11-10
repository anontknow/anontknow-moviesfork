import { useEffect } from 'react';

function Sitemap() {
  useEffect(() => {
    window.location.href = '/sitemap.xml';
  }, []);

  return null;
}

export default Sitemap;
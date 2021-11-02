import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useLinkActive = (path: string) => {
  const [active, setActive] = useState<boolean>(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (path === pathname) return setActive(true);
    setActive(false);
  }, [pathname, path]);

  return active;
}

export default useLinkActive;
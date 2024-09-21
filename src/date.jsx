import React, { useState, useEffect } from 'react';

const CurrentYear = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const timer = setInterval(() => {
      const currentYear = new Date().getFullYear();
      setYear(currentYear);
    }, 1000 * 60 * 60 * 24); 

    return () => clearInterval(timer);
  }, []);

  return <span>{year}</span>;
};

export default CurrentYear;

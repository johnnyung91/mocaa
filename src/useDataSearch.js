import { useState, useEffect } from 'react';

export const useDataSearch = term => {
  const [employees, setEmployees] = useState(null);

  useEffect(() => {
    const obj = { term };

    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/JSON',
      },
      body: JSON.stringify(obj),
    };

    fetch('http://localhost:5000/api/get-employees', req)
      .then(res => res.json())
      .then(data => {
        setEmployees(data);
      });

  }, [term]);

  return { employees };
};

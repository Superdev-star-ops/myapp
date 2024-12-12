import { useEffect } from 'react';
import { getPerson } from './getPerson.ts';
import { useState } from 'react';
import React from 'react';

export function PersonScore() {
  const [name, setName] = useState<string | undefined>();
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPerson().then((person) => {
      setLoading(false);
      setName(person.name);
      console.log('State values', loading, name);
    });
  }, []);
  if (loading) {
    return <div>Loading ... </div>;
  }
  return (
    <div>
      <h3>
        {name}, {score}
      </h3>
      <button onClick={() => setScore(score + 1)}>Add</button>
      <button onClick={() => setScore(score - 1)}>Subtract</button>
      <button onClick={() => setScore(0)}>Reset</button>
    </div>
  );
}

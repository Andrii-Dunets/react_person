// export const Person = ({ person }) => ();
import React from 'react';

export function Person({
  person: {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  },
}) {
  const personPartner = (sex === 'm') ? `wife` : `husband`;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && <p className="Person__age">{`I am ${age}`}</p>}
      <p className="Person__partner">
        {
          isMarried ? `${partnerName} is my ${personPartner}` : `I am not married`
        }
      </p>
    </section>
  );
}

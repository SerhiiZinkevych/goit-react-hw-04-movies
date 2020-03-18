import React from 'react';

export default function NotFound({
  message = "Sorry... there's no such page",
}) {
  return (
    <p style={{ textAlign: 'center' }}>
      {message}
      <span role="img" aria-label="Pensive Face">
        😔
      </span>
    </p>
  );
}

"use client";

export default function Error({ error, reset }) {
  return (
    <div>
      {/* this aitnt loading up: {error.message} */}
      <button onClick={() => reset()}>Reload</button>
    </div>
  );
}

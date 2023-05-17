import { useRouter } from "next/router";
import React, { useState } from "react";

function EventList({ eventList }) {
  const [events, setEvents] = useState(eventList);
  const router = useRouter()
  const fetchSportEvents = async () => {
    const response = await fetch(
      "http://localhost:4000/events?category=sports"
    );
    const data = await response.json();
    setEvents(data);
    router.push('/events?category=sport', undefined, {shallow: true})
  };
  return (
    <div className="p-3">
      <button
        onClick={fetchSportEvents}
        className="bg-red-600 text-white p-1 rounded"
      >
        Sport events
      </button>
      <h1>List of events</h1>
      {events.map((event) => (
        <div key={event.id}>
          <h2>
            {event.id} {event.title} {event.date} | {event.category}
          </h2>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  );
}

export default EventList;

export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;
  const queryString = category ? 'category=sports' : ''
  const data = await fetch(`http://localhost:4000/events?${queryString}`);
  const jsonData = await data.json();

  return {
    props: {
      eventList: jsonData,
    },
  };
}

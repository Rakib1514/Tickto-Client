import React, { useEffect, useState } from 'react';
import SmallCard from '../../components/Shared/SmallCard.jsx';
import { GrLinkNext } from 'react-icons/gr';
import { Link } from 'react-router';
import CategorySection from '../../components/Shared/CategorySection';

const Travel = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('./event.json')
      .then((res) => res.json())
      .then((data) => setEvents(data.slice(6, 12)));
  }, []);

  return <CategorySection events={events} Title={'Easy Commutes'} />;
};

export default Travel;

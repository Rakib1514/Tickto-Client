import React from 'react';
import SmallCard from './SmallCard';
import { Link } from 'react-router';
import { GrLinkNext } from 'react-icons/gr';

const CategorySection = ({ events, Title, featured }) => {
  return (
    <div>
      <div className="mx-auto my-28 w-[96%] max-w-screen-2xl">
        <div className="flex items-center justify-between">
          <h1 className="my-10 text-4xl font-bold">{Title}</h1>
          <Link className="flex items-center gap-1 text-lg">
            Explore more <GrLinkNext />
          </Link>
        </div>

        <p className={`py-4 ${featured ? 'block' : 'hidden'} pb-8 md:w-[90%] lg:w-[70%]`}>
          These top-rated tickets are selling fast! Whether it’s an exclusive conference, a
          must-watch movie, or the perfect travel route, we’ve got the best picks right here. From
          inspiring business summits to blockbuster premieres and seamless travel options, these are
          the experiences people love the most. Book now and see why they’re a favorite!
        </p>

        <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-3">
          {events?.map((event) => (
            <SmallCard
              key={event.id}
              event={event}
              height={'h-72'}
              titletext={'text-2xl font-bold'}
              space={'bottom-4 left-3'}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;

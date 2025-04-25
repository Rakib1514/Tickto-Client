import { lazy } from 'react';
import LazyWrapper from '../../components/Shared/LazyWrapper';

const Banner = lazy(() => import('./Banner'));
const RecentView = lazy(() => import('./RecentView'));
const Feature = lazy(() => import('./Feature'));
const DataSafe = lazy(() => import('./DataSafe'));
const PopularNow = lazy(() => import('./PopularNow'));
const Events = lazy(() => import('./Events'));
const Travel = lazy(() => import('./Travel'));
const Reviews = lazy(() => import('./Reviews'));

const Home = () => {
  return (
    <div>
      <LazyWrapper><Banner /></LazyWrapper>
      <LazyWrapper><RecentView /></LazyWrapper>
      <LazyWrapper><Feature /></LazyWrapper>
      <LazyWrapper><DataSafe /></LazyWrapper>
      <LazyWrapper><PopularNow /></LazyWrapper>
      <LazyWrapper><Events /></LazyWrapper>
      <LazyWrapper><Travel /></LazyWrapper>
      <LazyWrapper><Reviews /></LazyWrapper>
    </div>
  );
};

export default Home;

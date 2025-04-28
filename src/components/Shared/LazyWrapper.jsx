import { useInView } from 'react-intersection-observer';
import { Suspense } from 'react';

const LazyWrapper = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref}>
      {inView ? (
        <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
          {children}
        </Suspense>
      ) : (
        <div style={{ minHeight: '300px' }} />
      )}
    </div>
  );
};

export default LazyWrapper;

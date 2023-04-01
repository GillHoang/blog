import React, { Fragment } from 'react';

const NotFoundPage = () => {
  return (
    <Fragment>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 text-center">
        <h1 className="text-9xl font-bold">404</h1>
        <h2 className="text-3xl font-semibold">Page Not Found</h2>

        <p className="text-lg mt-5">
          The page you are looking for might have been removed, had its name
          changed or is temporarily unavailable.
        </p>

        <div className="mt-5">
          <a href="/" className="bg-white text-backgroundColor text-semibold px-5 py-3 rounded-lg">
            Go to Homepage
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default NotFoundPage;

import React, { useState, useEffect } from "react";
import { CardsData } from "./CardsData";

function Page404() {
  return (
    <>
      <div className="page-wrapper">
        <div className="number-404">404</div>
        <div className="center-wrapper">
          <h1 className="not-found">Page not found</h1>
          <div className="smaller-text">
            Tha page you are looking for doesn't exist or has been moved.
          </div>
        </div>
      </div>
    </>
  );
}

export default Page404;

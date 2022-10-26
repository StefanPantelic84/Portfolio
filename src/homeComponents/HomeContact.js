import React from "react";
import { Link } from "react-router-dom";

function HomeContact() {
  return (
    <div className="home-contact">
      <div className="home-container">
        
        <div>
          <button>
            <Link to="/contact">CONTACT ME</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeContact;

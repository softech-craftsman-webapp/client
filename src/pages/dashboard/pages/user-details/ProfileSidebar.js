import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../../../../components/Button";

const styles = {
  li: {
    marginBottom: '.5rem',
  }
}
function ProfileSidebar() {
  return (
    <div>
      <img
        src="https://wiseeconomist.ru/kartinki/poleznoe/169.jpg"
        style={{ objectFit: "cover" }}
        alt="..."
      />
      <p style={{ fontSize: "160%" }}>John Smith</p>
      <p>Current rating: 4.4</p>
      <ul>
        <li styles={styles.li}>
          <Button>
            <button>My cases</button>
          </Button>
        </li>
        <li styles={styles.li}> 
          <Button>
            <button>My reviews</button>
          </Button>
        </li>
        <li styles={styles.li}>
          <Button>
            <button>Profile settings</button>
          </Button>
        </li>
      </ul>
    </div>
  );
}

export default ProfileSidebar;

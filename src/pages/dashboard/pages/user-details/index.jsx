import ProfileSidebar from "./ProfileSidebar";
import ProfileContent from "./ProfileContent";

function UserDetails() {
    return (
      <div class="h-64 grid grid-rows-1 grid-flow-col gap-4">
        <div><ProfileSidebar /></div>
        <div><ProfileContent /></div>
      </div>
    );
  }
  
export default UserDetails;  
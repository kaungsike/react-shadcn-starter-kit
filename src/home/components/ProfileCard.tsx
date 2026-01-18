import ProfileContent from "@/components/shadcn-studio/profile-content";
import ProfileHeader from "@/components/shadcn-studio/profile-header";

const ProfileCard = () => {
  return (
    <div className="mx-auto max-w-4xl space-y-6 px-4 py-10">
      <ProfileHeader />
      <ProfileContent />
    </div>
  );
};

export default ProfileCard;

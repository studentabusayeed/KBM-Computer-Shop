import { FaUserAlt } from "react-icons/fa";

const Avatar = () => {
//   const { user } = useAuth();
const user = false
  return (
    <div className="cursor-pointer">
      {user?.photoURL ? (
        <img alt="User" className="w-8 h-8 object-cover rounded-full ring ring-my-primary  ring-offset-2" src={user?.photoURL} />
      ) : (
        <p className="bg-stone-200 rounded-full p-2">
          <FaUserAlt className="text-xl kbm-primary w-6 h-6" />
        </p>
      )}
    </div>
  );
};

export default Avatar;
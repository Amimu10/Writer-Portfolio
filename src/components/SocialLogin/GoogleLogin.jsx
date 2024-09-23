import { FcGoogle } from "react-icons/fc";
// import { TERipple } from "tw-elements-react";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const GoogleLogin = () => {
  const navigate = useNavigate();
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();

  const handleGooleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
        };
        axiosPublic.post("/users", userInfo) 
        .then(res => {
        toast.success("User loggedin Successfully!", { duration: 3000 });    
        navigate("/");      
          console.log(res.data); 

        })

      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="flex items-center text-center justify-center">
      <button
        onClick={handleGooleSignIn}
        type="button"
        className=" bg-white shadow-lg p-2 rounded-full flex items-center px-3 py-2 gap-4  border border-1 border-neutral"
      >
        <FcGoogle className=" text-2xl" /> <p>Continue with Google </p>
      </button>
    </div>
  );
};

export default GoogleLogin;

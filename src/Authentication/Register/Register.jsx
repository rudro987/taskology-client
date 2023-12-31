import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";

const image_api_key = import.meta.env.VITE_IMAGE_HOSTING_TOKEN;
const image_api = `${
  import.meta.env.VITE_IMAGE_HOSTING_API
}?key=${image_api_key}`;

const Register = () => {
  const axiosPublic = useAxiosPublic();
  const { createNewUser, updateUser } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const imageFile = {
      image: data.image[0],
    };
    const res = await axiosPublic.post(image_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const image_url = res.data.data.display_url;

    createNewUser(data.email, data.password)
      .then((result) => {
        if (result) {
          updateUser(data.name, image_url)
            .then(() => {
              const userInfo = {
                name: data.name,
                email: data.email,
                image: image_url,
                role: "user",
                status: "active",
              };
              axiosPublic.post("/users", userInfo).then((res) => {
                if (res.data.insertedId) {
                  reset();
                  Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Registration successful!",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  navigate("/");
                }
              });
            })
            .catch((error) => console.log(error));
        }
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          reset();
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "This email is already in use. Please use a different email.",
          });
          navigate("/register");
        } else {
          console.error("Firebase authentication error:", error);
          reset();
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "An error occurred during registration. Please try again later.",
          });
          navigate("/register");
        }
      });
  };

  return (
    <>
      <Helmet>
        <title>Title of the site | Register</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-700 font-bold">
                    Name is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-menuText text-xl font-semibold">
                    Image
                  </span>
                </label>
                <label
                  htmlFor="image"
                  className="input input-bordered rounded-md h-[55px] focus:outline-none bg-[#E6E6E6] border-none flex items-center"
                >
                  <input
                    type="file"
                    {...register("image", { required: true })}
                    placeholder="Upload Image"
                    id="image"
                  />
                </label>
                {errors.image && (
                  <span className="text-red-700 font-bold">
                    Image is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-700 font-bold">
                    Email is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[\W_])[a-zA-Z\d\W_]/,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-700 font-bold">
                    Password is required
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-700 font-bold">
                    Password must be 6 characters.
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-700 font-bold">
                    Password must be less then 20 characters.
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-700 font-bold">
                    Password must have one Uppercase and one Special letter.
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Register"
                  className="btn btn-primary"
                />
              </div>
            </form>
            <p>
              <small>
                Already have an account? <Link to="/login">Log in here</Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

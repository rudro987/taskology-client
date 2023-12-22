import { Controller, useForm } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";

const AddTask = () => {
    const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    formState: { errors },
  } = useForm();

  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    const taskData = {
      title: data.title,
      description: data.description,
      priority: data.priority,
      deadline: data.deadline,
      status: "to-do",
      postedBy: user.email
    }

    const res = await axiosSecure.post('/addTask', taskData);
    console.log(res.data);
    
    if (res.data.insertedId) {
        reset();
        Swal.fire({
          title: "Success!",
          text: `${data.title} has been successfully added`,
          icon: "success",
        });
      }
    
  };

  return (
    <div>
      <Helmet>
        <title>TaskNinja | TaskBoard | Add Task</title>
      </Helmet>
      <h1 className="text-2xl font-semibold pb-10">Add a New Task</h1>
      <div className="bg-white w-full pt-2 pb-14 px-10 rounded-xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full mt-6">
            <label className="label">
              <span className="label-text text-lg">Task Title</span>
            </label>
            <input
              type="text"
              placeholder="Task Title"
              {...register("title", { required: "Title is required" })}
              className="input input-bordered w-full"
            />
            {errors.title && (
              <span className="text-red-700 font-bold mt-2">
                {errors.title.message}
              </span>
            )}
          </div>
          <div className="flex gap-6 items-center">
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text text-lg">Deadline</span>
              </label>
              <Controller
                name="deadline"
                control={control}
                defaultValue={new Date()}
                rules={{ required: "Date is required" }}
                render={({ field }) => (
                  <DatePicker
                    {...field}
                    selected={field.value}
                    minDate={new Date()}
                    onChange={(date) => {
                      field.onChange(date);
                      setValue("deadline", date);
                    }}
                    className="input input-bordered w-full"
                  />
                )}
              />
              {errors.date && (
                <span className="text-red-700 font-bold mt-2">
                  {errors.date.message}
                </span>
              )}
            </div>

            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text text-lg">
                  Priority
                </span>
              </label>
              <select
                {...register("priority", {
                  required: "Please select priority",
                })}
                aria-invalid={errors["priority"] ? "true" : "false"}
                placeholder="Select priority"
                defaultValue="default"
                className='input input-bordered w-full'
              >
                <option disabled value="default">
                  Select priority
                </option>
                <option value="Low">Low</option>
                <option value="Moderate">Moderate</option>
                <option value="High">High</option>
              </select>
              {errors["bloodGroup"] && (
                <span className="text-red-700 font-bold">
                  {errors["bloodGroup"]?.message}
                </span>
              )}
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg">Task description</span>
            </label>
            <textarea
              {...register("description", {
                required: "Task description is required",
              })}
              className="textarea textarea-bordered h-48"
              placeholder="Details of the task"
            ></textarea>
            {errors.description && (
              <span className="text-red-700 font-bold mt-2">
                {errors.description.message}
              </span>
            )}
          </div>

          <button className="btn bg-primary hover:bg-primaryHover w-full text-menuText font-bold text-lg lg:h-[60px]">
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { DragDropContext, Draggable } from "react-beautiful-dnd";
import { StrictModeDroppable as Droppable} from "./StrictModeDroppable"

const HandleTasks = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: tasks = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["allTasks"],
    queryFn: async () => {
      const res = await axiosSecure.get("/handleTasks");
      return res.data;
    },
  });

  console.log(tasks);

  const toDoList = tasks.filter((task) => task.status === "to-do");
  const ongoingList = tasks.filter((task) => task.status === "ongoing");
  const completedList = tasks.filter((task) => task.status === "completed");

  return (
    <div>
      <h1>Handle Tasks</h1>

      <div className="flex gap-3 w-full h-auto">
        <DragDropContext>
          <Droppable droppableId="to-do">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef} className="w-full flex gap-3">
                <div className="w-1/3 border border-gray-600 p-3">
                  {toDoList?.map((todo, index) => (
                    <Draggable
                      key={todo._id}
                      draggableId={todo._id.toString()}
                      index={index}
                    >
                      {(provided) => (
                        <h1
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                          className="border border-gray-400 rounded p-2"
                        >
                          {todo.title}
                        </h1>
                      )}
                    </Draggable>
                  ))}
                </div>

                <div className="w-1/3 border border-gray-600 p-3">
                {ongoingList?.map((ongoing, index) => (
                    <Draggable
                      key={ongoing._id}
                      draggableId={ongoing._id.toString()}
                      index={index}
                    >
                      {(provided) => (
                        <h1
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                          className="border border-gray-400 rounded p-2"
                        >
                          {ongoing.title}
                        </h1>
                      )}
                    </Draggable>
                  ))}
                </div>
                <div className="w-1/3 border border-gray-600 p-3">
                {completedList?.map((completed, index) => (
                    <Draggable
                      key={completed._id}
                      draggableId={completed._id.toString()}
                      index={index}
                    >
                      {(provided) => (
                        <h1
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                          className="border border-gray-400 rounded p-2"
                        >
                          {completed.title}
                        </h1>
                      )}
                    </Draggable>
                  ))}
                </div>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};

export default HandleTasks;

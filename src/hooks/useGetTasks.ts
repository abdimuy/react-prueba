import { useState, useEffect } from "react";
import ITask from "@/components/Task/ITask";
import getTasks from "@/services/getTasks";

const useGetTasks = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setLoading(true);
    getTasks()
      .then((tasks) => {
        setTasks(tasks);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { tasks, loading, totalTasks: tasks.length, error };
};

export default useGetTasks;

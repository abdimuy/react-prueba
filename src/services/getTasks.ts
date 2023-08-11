import API from "@/config/API";
import ITask from "@/components/Task/ITask";

const getTasks = (): Promise<ITask[]> => {
  return API.get<ITask[]>("").then((response) => {
    return response.data;
  });
};

export default getTasks;

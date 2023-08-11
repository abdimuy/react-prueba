import React from "react";
import ITask from "./ITask";
import { AVATAR_URL } from "@/config/contants";

const Task: React.FC<ITask> = (props) => {
  const { id, title, userId, completed } = props;
  return (
    <li className="flex items-center py-3 sm:py-4">
      <span className="w-6 h-6 text-gray-500 dark:text-gray-400 text-center">
        {" "}
        {id}{" "}
      </span>
      <div className="flex items-center space-x-3 w-full">
        <div className="flex-shrink-0">
          <img
            className="w-8 h-8 rounded-full"
            src={AVATAR_URL + userId}
            alt="Neil image"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-gray-900 truncate dark:text-white">
            {title}
          </p>
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            User:{" "}
            <span className="font-medium text-gray-900 dark:text-white">
              {userId}
            </span>
          </p>
        </div>
        {completed ? (
          <span className="inline-flex items-center bg-green-100 text-green-800 gap-1 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
            <span className="w-2 h-2 mr-1 bg-green-500 rounded-full"></span>
            Completed
          </span>
        ) : (
          <span className="inline-flex items-center bg-red-100 text-red-800 gap-1 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
            <span className="w-2 h-2 mr-1 bg-red-500 rounded-full"></span>
            Pending
          </span>
        )}
      </div>
    </li>
  );
};

export default Task;

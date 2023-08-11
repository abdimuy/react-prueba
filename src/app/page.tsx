"use client";

import Spinner from "@/components/Spinner/Spinner";
import Task from "@/components/Task/Task";
import useGetTasks from "@/hooks/useGetTasks";

export default function Home() {
  const { tasks, loading, totalTasks, error } = useGetTasks();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-4">
      {loading ? (
        <Spinner loading={loading} />
      ) : error ? (
        <p>Error</p>
      ) : (
        <div className="flex justify-between w-full max-w-xl">
          <p className="text-2xl font-semibold text-gray-900 dark:text-white">
            Tasks
          </p>
          <p>Total tasks: {totalTasks}</p>
        </div>
      )}
      <ul
        role="list"
        className="max-w-xl divide-y divide-gray-200 dark:divide-gray-700"
      >
        {tasks.map((task) => (
          <Task key={task.id} {...task} />
        ))}
      </ul>
    </main>
  );
}

import React from "react";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";

export default function TaskBaoard() {
  return (
    <section className="mb-20 container lg:px-20" id="tasks">
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask></SearchTask>
        </div>
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions></TaskActions>
          <TaskList></TaskList>
        </div>
      </div>
    </section>
  );
}

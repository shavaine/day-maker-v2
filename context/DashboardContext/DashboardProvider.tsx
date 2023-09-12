"use client";
import { FC, useEffect, useReducer } from "react";
import { Reducer } from "./DashboardReducer";
import { DashboardContext, initialDashboardState } from "./DashboardContext";
import Toast from "@/components/Toast/Toast";
import { InitialState } from "../Interfaces";

interface DashboardProviderProps {
  children: React.ReactNode;
}

export const DashboardProvider: FC<DashboardProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialDashboardState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/initialData");
        const data: InitialState = await response.json();
        const correctScheduleType = data.schedules.map((schedule) => {
          let correctDate = new Date(schedule.date);
          schedule.date = correctDate;
          return schedule;
        });
        data.schedules = correctScheduleType;
        dispatch({ type: "SET_INITIAL_STATE", payload: data });
      } catch (error) {
        console.error("Failed to fetch initial data:", error);
        dispatch({
          type: "SHOW_TOAST",
          payload: {
            message: `Failed to fetch initial data, please try refreshing the page`,
            type: "error",
          },
        });
      }
    };
    fetchData();
  }, []);

  return (
    <DashboardContext.Provider value={{ state, dispatch }}>
      <Toast message={state.toast.message} type={state.toast.type} />
      {children}
    </DashboardContext.Provider>
  );
};

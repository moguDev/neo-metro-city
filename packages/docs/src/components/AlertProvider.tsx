"use client";
import React, { createContext, useContext, useState, useCallback } from "react";
import Alert from "./Alert";

export type AlertType = "success" | "warning" | "danger";

interface AlertState {
  id: string;
  message: string;
  type: AlertType;
  duration: number;
}

interface AlertContextType {
  show: (message: string, type?: AlertType, duration?: number) => void;
}

const AlertContext = createContext<AlertContextType | null>(null);

export const AlertProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [alert, setAlert] = useState<AlertState | null>(null);

  const show = useCallback(
    (message: string, type: AlertType = "warning", duration = 3000) => {
      const id = crypto.randomUUID();
      setAlert({ id, message, type, duration });

      setTimeout(() => {
        setAlert((prev) => (prev?.id === id ? null : prev));
      }, duration);
    },
    []
  );

  return (
    <AlertContext.Provider value={{ show }}>
      {children}
      {alert && (
        <Alert
          message={alert.message}
          type={alert.type}
          duration={alert.duration}
        />
      )}
    </AlertContext.Provider>
  );
};

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context)
    throw new Error("useAlert must be used within an AlertProvider");
  return context;
};

import React from "react";

const LoadingPage = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center">
        <svg
          className="animate-spin h-10 w-10 text-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2.93 6.364A8.003 8.003 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3.93-1.574zM12 20a8.003 8.003 0 01-6.364-2.93l-3.93 1.574A11.95 11.95 0 0012 24v-4zm6.364-2.93A8.003 8.003 0 0120 12h4c0 3.042-1.135 5.824-3 7.938l-3.636-1.568zM20 12a8.003 8.003 0 01-2.93-6.364l3.636-1.568A11.95 11.95 0 0024 12h-4z"
          ></path>
        </svg>
        <p className="mt-4 text-lg text-gray-700">Cargando ...</p>
      </div>
    </div>
  );
};

export default LoadingPage;

import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router";
import Dashboard from "./Dashboard";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <div className="flex flex-grow">
          <aside className="w-1/4 p-4 bg-gray-300">
            <nav>
              <ul className="space-y-2">
                <li className="w-full">
                  <Link
                    to={`/`}
                    className="block w-full p-2 text-left bg-gray-200 border rounded-md"
                  >
                    Dashboard
                  </Link>
                </li>
              </ul>
            </nav>
          </aside>

          <Routes>
            <Route index path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

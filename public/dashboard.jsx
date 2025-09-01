import React, { useState } from "react";
import { LogOut, Trash2 } from "lucide-react"; // icons

export default function Dashboard() {
  const [notes, setNotes] = useState(["Note 1", "Note 2"]);

  const handleSignOut = () => {
    console.log("Sign out clicked!");
    // Add your sign out logic
  };

  const handleCreateNote = () => {
    const newNote = `Note ${notes.length + 1}`;
    setNotes([...notes, newNote]);
  };

  const handleDeleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-4">
      {/* Header */}
      <header className="w-full flex items-center justify-between px-2 py-4">
        <div className="flex items-center gap-2">
          <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-blue-500"></div>
          <h1 className="text-lg font-semibold">Dashboard</h1>
        </div>
        <button
          onClick={handleSignOut}
          className="text-blue-600 hover:underline flex items-center gap-1"
        >
          <LogOut className="w-4 h-4" /> Sign Out
        </button>
      </header>

      {/* User Info */}
      <div className="bg-white shadow-md rounded-xl p-4 w-full max-w-sm mb-4">
        <h2 className="text-lg font-semibold">
          Welcome, <span className="font-bold">Jonas Kahnwald</span> !
        </h2>
        <p className="text-gray-600">Email: xxxxxx@xxxx.com</p>
      </div>

      {/* Create Note Button */}
      <button
        onClick={handleCreateNote}
        className="bg-blue-500 text-white font-medium rounded-xl px-4 py-2 w-full max-w-sm mb-6 hover:bg-blue-600 transition"
      >
        Create Note
      </button>

      {/* Notes List */}
      <div className="w-full max-w-sm">
        <h3 className="text-lg font-medium mb-3">Notes</h3>
        <div className="flex flex-col gap-3">
          {notes.map((note, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg px-4 py-3 flex justify-between items-center"
            >
              <span>{note}</span>
              <button
                onClick={() => handleDeleteNote(index)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

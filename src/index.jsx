import React from "react";
import { createRoot } from "react-dom/client";

// import style untuk Note App
import "./utils/style.css";

// import Note app dari components
import NoteApp from "./components/NoteApp";

const root = createRoot(document.getElementById("root"));
root.render(<NoteApp />);

"use client"; // ทำให้ไฟล์นี้เป็น Client Component

import { useState } from "react";

export default function ContactPage() {
  const [message, setMessage] = useState("");

  return (
    <div>
      <h1>Contact</h1>
      <input
        type="text"
        placeholder="Enter your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <p>You typed: {message}</p>
    </div>
  );
}

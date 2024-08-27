
import React, { useState } from "react";

function FormPage() {
  const [company, setCompany] = useState("");//初期化
  const [name, setName] = useState("");//初期化


  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ company, name }),
    });

    if (response.ok) {
      alert("Data submitted successfully!");
    } else {
      alert("Failed to submit data.");
    }
  };

  return (
    <div>
      <h1>Company and Name Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>所属会社名:</label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        <div>
          <label>お名前:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormPage;

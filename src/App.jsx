// // import React from 'react'

// // const App = () => {
// //   return (
// //     <div>
    
// //     </div>
// //   )
// // }

// // export default App
// import React, { useState } from "react";
// import { PDFDocument, rgb } from "pdf-lib";
// import download from "downloadjs";

// const Form = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [contact, setContact] = useState("");
//   const [email, setEmail] = useState("");
//   const [error, setError] = useState("");

//   const fillPdf = async () => {
//     if (!firstName || !lastName || !contact || !email) {
//       setError("Please fill in all required fields.");
//       return;
//     } else if (!/^\d{10}$/.test(contact)) {
//       setError("Please enter a valid 10-digit contact number.");
//       return;
//     } else {
//       setError("");
//     }

//     const existingPdfBytes = await fetch("/pdf.pdf").then((res) =>
//       res.arrayBuffer()
//     );

//     const pdfDoc = await PDFDocument.load(existingPdfBytes);

//     const pages = pdfDoc.getPages();
//     const firstPage = pages[0];

//     firstPage.drawText(firstName, {
//       x: 50,
//       y: 700,
//       size: 12,
//       color: rgb(0, 0, 0),
//     });

//     firstPage.drawText(lastName, {
//       x: 50,
//       y: 670,
//       size: 12,
//       color: rgb(0, 0, 0),
//     });

//     firstPage.drawText(contact, {
//       x: 50,
//       y: 640,
//       size: 12,
//       color: rgb(0, 0, 0),
//     });

//     firstPage.drawText(email, {
//       x: 50,
//       y: 610,
//       size: 12,
//       color: rgb(0, 0, 0),
//     });

//     const pdfBytes = await pdfDoc.save();

//     download(pdfBytes, "filled_form.pdf", "application/pdf");

//     setFirstName("");
//     setLastName("");
//     setContact("");
//     setEmail("");
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//       <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
//         <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
//           Fill PDF Form
//         </h1>

//         {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">
//             First Name <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="text"
//             placeholder="Enter First Name"
//             value={firstName}
//             onChange={(e) => setFirstName(e.target.value)}
//             required
//             className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">
//             Last Name <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="text"
//             placeholder="Enter Last Name"
//             value={lastName}
//             onChange={(e) => setLastName(e.target.value)}
//             required
//             className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">
//             Contact Details <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="text"
//             placeholder="Enter Contact Details"
//             value={contact}
//             onChange={(e) => setContact(e.target.value)}
//             required
//             className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div className="mb-6">
//           <label className="block text-sm font-medium text-gray-700">
//             Email <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="email"
//             placeholder="Enter Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <button
//           onClick={fillPdf}
//           className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
//         >
//           Generate Filled PDF
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Form ;








import React, { useState } from "react";
import jsPDF from "jspdf";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const fillPdf = () => {
    if (!firstName || !lastName || !contact || !email) {
      setError("Please fill in all required fields.");
      return;
    } else if (!/^\d{10}$/.test(contact)) {
      setError("Please enter a valid 10-digit contact number.");
      return;
    } else {
      setError("");
    }

    const doc = new jsPDF();

    doc.text(20, 30, `First Name: ${firstName}`);
    doc.text(20, 40, `Last Name: ${lastName}`);
    doc.text(20, 50, `Contact: ${contact}`);
    doc.text(20, 60, `Email: ${email}`);

    doc.save("filled_form.pdf");

    setFirstName("");
    setLastName("");
    setContact("");
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Fill PDF Form
        </h1>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Contact Details <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter Contact Details"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          onClick={fillPdf}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Generate Filled PDF
        </button>
      </div>
    </div>
  );
};

export default Form;


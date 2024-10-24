// import React, { useState } from "react";
// import jsPDF from "jspdf";
// // import doc from '../public/doc.pdf';
// const Form = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [contact, setContact] = useState("");
//   const [email, setEmail] = useState("");
//   const [error, setError] = useState("");

//   const fillPdf = () => {
//     if (!firstName || !lastName || !contact || !email) {
//       setError("Please fill in all required fields.");
//       return;
//     } else if (!/^\d{10}$/.test(contact)) {
//       setError("Please enter a valid 10-digit contact number.");
//       return;
//     } else {
//       setError("");
//     }

//     const doc = new jsPDF();

//     doc.text(20, 30, `First Name: ${firstName}`);
//     doc.text(20, 40, `Last Name: ${lastName}`);
//     doc.text(20, 50, `Contact: ${contact}`);
//     doc.text(20, 60, `Email: ${email}`);

//     doc.save("filled_form.pdf");

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

// export default Form;




















// Internship Certificate


// import React, { useState } from "react";
// import { toPng } from 'html-to-image';

// const CertificateGenerator = () => {
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [seal, setSeal] = useState("Company Seal");

//   const handleDownload = () => {
//     const certificate = document.getElementById('certificate');
//     toPng(certificate)
//       .then((dataUrl) => {
//         const link = document.createElement('a');
//         link.download = 'certificate.png';
//         link.href = dataUrl;
//         link.click();
//       })
//       .catch((error) => {
//         console.error('Error generating image', error);
//       });
//   };

//   return (
//     <div className="flex flex-col items-center">
//       {/* Form to Input Data */}
//       <div className="w-96 p-4 shadow-lg rounded">
//         <label className="block">Name:</label>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="w-full p-2 border rounded"
//         />
//         <label className="block mt-4">Phone:</label>
//         <input
//           type="text"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           className="w-full p-2 border rounded"
//         />
//         <button
//           onClick={handleDownload}
//           className="bg-blue-500 text-white mt-4 p-2 rounded"
//         >
//           Download Certificate
//         </button>
//       </div>

     
//       <div
//         id="certificate"
//         className="border-2 p-10 mt-6 bg-white text-center"
//         style={{ width: '600px', height: '400px' }}
//       >
//         <h1 className="text-3xl font-bold">Internship Certificate</h1>
//         <p className="mt-6 text-xl">This certifies that</p>
//         <p className="text-2xl font-semibold">{name}</p>
//         <p className="mt-4 text-xl">has completed the internship</p>
//         <p className="mt-6 text-lg">Phone: {phone}</p>
//         <div className="mt-10">
//           <p>{seal}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CertificateGenerator;
















import React, { useState } from "react";
import { toPng } from 'html-to-image';

const Form = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [seal, setSeal] = useState("Company Seal");

  const handleDownload = () => {
    const certificate = document.getElementById('certificate');
    toPng(certificate)
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'certificate.png';
        link.href = dataUrl;
        link.click();
        
        // Clear form data after download
        setName("");
        setPhone("");
      })
      .catch((error) => {
        console.error('Error generating image', error);
      });
  };

  return (
    <div className="flex flex-col items-center p-4">
      {/* Form to Input Data */}
      <div className="w-full max-w-md p-4 shadow-lg rounded bg-white">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Fill the Details</h2>
        <label className="block text-gray-600">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          placeholder="Enter your name"
        />
        <label className="block text-gray-600">Phone:</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          placeholder="Enter your phone number"
        />
        <button
          onClick={handleDownload}
          className="bg-blue-500 text-white mt-4 p-2 rounded w-full hover:bg-blue-600"
        >
          Download Certificate
        </button>
      </div>

      {/* Certificate Display */}
      <div
        id="certificate"
        className="relative border-4 border-gray-500 bg-gradient-to-br from-white to-blue-100 p-10 mt-10 text-center w-full rounded-lg shadow-2xl"
        style={{ maxWidth: '600px', height: 'auto' }}
      >
        {/* Decorative Corners */}
        <div className="absolute top-0 left-0 w-10 h-10 bg-blue-500 rounded-bl-lg"></div>
        <div className="absolute top-0 right-0 w-10 h-10 bg-blue-500 rounded-br-lg"></div>
        <div className="absolute bottom-0 left-0 w-10 h-10 bg-blue-500 rounded-tl-lg"></div>
        <div className="absolute bottom-0 right-0 w-10 h-10 bg-blue-500 rounded-tr-lg"></div>

        <h1 className="text-3xl md:text-4xl font-bold text-blue-600">Certificate of Completion</h1>
        <p className="mt-6 text-lg md:text-xl italic text-gray-700">This is to certify that</p>
        <p className="text-xl md:text-2xl font-semibold text-gray-800">{name || "Recipient's Name"}</p>
        <p className="mt-4 text-lg md:text-xl italic text-gray-700">has successfully completed the internship.</p>
        
      
        <p className="mt-4 text-lg italic text-gray-700">Phone Number: {phone || "Not provided"}</p>
        
        <div className="flex justify-between mt-10 items-center">
          <p className="text-gray-700 text-lg font-semibold">{seal}</p>
          <div className="flex flex-col items-center">
            <p className="text-sm text-gray-600">Authorized Signature</p>
            <div className="h-10 w-32 border-t-2 border-gray-600 mt-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;

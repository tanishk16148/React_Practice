import React, { useState, useEffect } from "react";
import { PDFDocument, rgb } from "pdf-lib";
import { saveAs } from "file-saver";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "emailjs-com";
import "react-toastify/dist/ReactToastify.css";
import "./Unknownuserofindia.css";

function Updatedmailsender() {
    const [name, setName] = useState("");
    const [event, setEvent] = useState("");
    const [college, setCollege] = useState("");
    const [email, setEmail] = useState("");
    const [pdfBlob, setPdfBlob] = useState(null);
    const [pdfUrl, setPdfUrl] = useState(""); // PDF preview URL

    const driveFolderLink = "https://drive.google.com/drive/folders/1TX5WRCzEaV3JoClrmdcMzA-ucsBCECmR?usp=sharing";

    useEffect(() => {
        return () => {
            if (pdfUrl) URL.revokeObjectURL(pdfUrl); // Cleanup
        };
    }, [pdfUrl]);

    const handleGenerate = async () => {
        if (!name || !event || !college || !email) {
            toast.error("❌ Please fill all the fields!");
            return;
        }

        try {
            const existingPdfBytes = await fetch(`${process.env.PUBLIC_URL}/Participation.pdf`).then(res => res.arrayBuffer());
            const pdfDoc = await PDFDocument.load(existingPdfBytes);
            const firstPage = pdfDoc.getPages()[0];

            firstPage.drawText(name, { x: 345, y: 313, size: 30, color: rgb(0, 0, 0) });
            firstPage.drawText(college, { x: 100, y: 280, size: 25, color: rgb(0, 0, 0) });
            firstPage.drawText(event, { x: 295, y: 247, size: 24, color: rgb(0, 0, 0) });

            const pdfBytes = await pdfDoc.save();
            const pdfBlob = new Blob([pdfBytes], { type: "application/pdf" });

            setPdfBlob(pdfBlob);
            const pdfUrl = URL.createObjectURL(pdfBlob);
            setPdfUrl(pdfUrl);

            toast.success(`🎉 Certificate Generated for ${name}`);
            console.log("✅ PDF Generated Successfully");

            sendEmail(email, pdfBlob);
        } catch (error) {
            console.error("❌ Error generating certificate:", error);
            toast.error("Failed to generate certificate!");
        }
    };

    const sendEmail = (recipientEmail, pdfBlob) => {
        if (!recipientEmail || !recipientEmail.includes("@")) {
            toast.error("❌ Invalid email address!");
            return;
        }

        const reader = new FileReader();
        reader.readAsDataURL(pdfBlob);
        reader.onloadend = () => {
            const base64Pdf = reader.result.split(',')[1];

            emailjs.send(
                "service_wgep7ie",  
                "template_v5eyhub", 
                {
                    to_email: recipientEmail,
                    name: name, 
                    event: event,
                    college: college,
                    certificate_url: pdfUrl,
                    drive_folder: driveFolderLink,
                },
                "BmRr1jYRnTxxKQQ50"
            ).then(() => {
                toast.success("📧 Email Sent Successfully to " + recipientEmail);
                console.log("✅ Email Sent to:", recipientEmail);
            }).catch(error => {
                console.error("❌ Email sending error:", error);
                toast.error("❌ Failed to send email.");
            });
        };
    };

    return (
        <div className="container">
            <h1 className="title">Certificate Generator</h1>
            <div className="content center-content">
                <div className="input-section">
                    <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} className="input-field" />
                    
                    <select value={college} onChange={(e) => setCollege(e.target.value)} className="input-field-select">
                        <option value="">Select College</option>
                        <option value="Panimalar Engineering College">Panimalar Engineering College</option>
                        <option value="Saveetha Engineering College">Saveetha Engineering College</option>
                        <option value="Rajalakshmi Institute of Technology">Rajalakshmi Institute of Technology</option>
                        <option value="SRM Easwari Engineering College">SRM Easwari Engineering College</option>
                        <option value="VELS University">VELS University</option>
                        <option value="Sri Sairam Institute of Technology">Sri Sairam Institute of Technology</option>
                        <option value="Sri Sairam Engineering College">Sri Sairam Engineering College</option>
                        <option value="Rajalakshmi Engineering College">Rajalakshmi Engineering College</option>
                        <option value="Chennai Institute of Technology">Chennai Institute of Technology</option>
                        <option value="Sathyabama Institute of Science and Technology">Sathyabama Institute of Science and Technology</option>
                        <option value="SSN College of Engineering">SSN College of Engineering</option>
                        <option value="RMK Engineering College">RMK Engineering College</option>
                        <option value="RMD Engineering College">RMD Engineering College</option>
                        <option value="RMK College Of Engineering And Technology">RMK College Of Engineering And Technology</option>
                        <option value="T.J.S. Engineering College">T.J.S. Engineering College</option>
                        <option value="Velammal Institute of Technology">Velammal Institute of Technology</option>
                    </select>

                    <select value={event} onChange={(e) => setEvent(e.target.value)} className="input-field-select">
                        <option value="">Select Event</option>
                        <option value="Code Gamble">Code Gamble</option>
                        <option value="The Pensieve Papers">The Pensieve Papers</option>
                        <option value="Chase the Dementors">Chase the Dementors</option>
                        <option value="Horcrux Hunt">Horcrux Hunt</option>
                        <option value="SpellBound Connections">SpellBound Connections</option>
                        <option value="Wizards' World Cup">Wizards' World Cup</option>
                    </select>

                    <input type="email" placeholder="Enter Recipient Email" value={email} onChange={(e) => setEmail(e.target.value)} className="input-field" />
                    
                    <button onClick={handleGenerate} className="button">Generate & Send</button>
                </div>

                {pdfBlob && (
                    <div className="preview-section">
                        <h2>Certificate Preview</h2>
                        <iframe src={pdfUrl} width="100%" height="400px" title="Certificate Preview"></iframe>
                        <button onClick={() => saveAs(pdfBlob, `${name}_Certificate.pdf`)} className="button_certificate">Download Certificate</button>
                    </div>
                )}
            </div>
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
        </div>
    );
}

export default Updatedmailsender;

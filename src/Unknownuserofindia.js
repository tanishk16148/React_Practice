import React, { useState } from "react";
import { PDFDocument, rgb } from "pdf-lib";
import { saveAs } from "file-saver";
import "./Unknownuserofindia.css";
import { toast, ToastContainer } from 'react-toastify'

function CertificateGenerator() {
    const [name, setName] = useState("");
    const [event, setEvent] = useState("");
    const [college, setCollege] = useState("");
    const [pdfPreview, setPdfPreview] = useState(null);
    const [loading, setLoading] = useState(false);
    
    const handleGenerate = async () => {
        if (!name || !event || !college ) {
            toast.error("PLEASE FILL THE FIELDS!!!!");
            return;
        }
        setLoading(true);
        try {
            const existingPdfBytes = await fetch("/Participation.pdf").then(res => res.arrayBuffer());

            const pdfDoc = await PDFDocument.load(existingPdfBytes);
            const pages = pdfDoc.getPages();
            const firstPage = pages[0];
            
            //color:rgb(0, 0, 0)
            const textColor = rgb(0 / 255, 0 / 255, 0 / 255);

            // Input names
            firstPage.drawText(name, { x: 345, y: 315, size: 30, color: textColor }); // Name Position
            firstPage.drawText(college, { x: 100, y: 282, size: 25, color: textColor }); // College Position
            firstPage.drawText(event, { x: 295, y: 250, size: 24, color: textColor }); // Event Position

            const pdfBytes = await pdfDoc.save();

            // Create Blob URL for preview
            const pdfBlob = new Blob([pdfBytes], { type: "application/pdf" });
            const pdfUrl = URL.createObjectURL(pdfBlob);
            setPdfPreview(pdfUrl);
        } catch (error) {
            console.error("Error generating certificate", error);
            toast.error("Failed to generate certificate!");
        }
        toast.success("Your Certificate Has been Generated "+ name)
    };

    const handleDownload = () => {
        if (pdfPreview) {
            saveAs(pdfPreview, name +"'s "+"Certificate.pdf");
        toast.success("Downloading...!!! Please waitt!!!")
        }
    };

    return (
        <div className="container">
            <h1 className="title">Certificate Generator</h1>
            <div className="content center-content">
                <div className="input-section">
                    <input
                        type="text"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="input-field"
                    />
                    {/* <input
                        type="text"
                        placeholder="Enter Event Name"
                        value={event}
                        onChange={(e) => setEvent(e.target.value)}
                        className="input-field"
                    />
                    <input
                        type="text"
                        placeholder="Enter College Name"
                        value={college}
                        onChange={(e) => setCollege(e.target.value)}
                        className="input-field"
                    /> */}

                    <select value={college} onChange={(e) => setCollege(e.target.value)} className="input-field-select">
                        <option value="">Select College</option>
                        <option value="Panimalar Engineering College">Panimalar Engineering College</option>
                        <option value="Saveetha Engineering College">Saveetha Engineering College</option>
                        <option value="Rajalakshmi Institute of Technology">Rajalakshmi Institute of Technology</option>
                        <option value="SRM Easwari Engineering College">SRM Easwari Engineering College</option>
                        <option value="VELS University">VELS University</option>
                        <option value="Sri Sairam Engineering College">Sri Sairam Engineering College</option>
                        <option value="Rajalakshmi Engineering College">Rajalakshmi Engineering College</option>
                        <option value="Chennai Institute of Technology">Chennai Institute of Technology</option>
                        <option value="Sathyabama Institute of Science and Technology">Sathyabama Institute of Science and Technology</option>
                        <option value="SSN College of Engineering">SSN College of Engineering</option>
                        <option value="RMK Engineering College">RMK Engineering College</option>
                        <option value="RMD Engineering College">RMD Engineering College</option>
                        <option value="RMK College Of Engineering And Technology">RMK College Of Engineering And Technology</option>
                        <option value="T.J.S. Engineering college">T.J.S. Engineering college</option>
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

                    <button onClick={handleGenerate} className="button">Generate Certificate</button>
                </div>
                {pdfPreview && (
                    <div className="preview-section">
                        <h2>Preview</h2>
                        <embed src={pdfPreview} className="embed-pdf" type="application/pdf" />
                        <button onClick={handleDownload} className="button_certificate">Download Certificate</button>
                    </div>
                )}
            </div>
            <ToastContainer/>
        </div>
    );
}

export default CertificateGenerator;

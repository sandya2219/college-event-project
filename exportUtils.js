// Event Report Generation System - PDF and Word Export

// Comprehensive PDF Generator with all pages and proper formatting
async function generateAndDownloadPDF() {
    console.log('🚀 Comprehensive PDF Download Starting...');

    try {
        // Check if jsPDF is available
        if (!window.jspdf) {
            alert('PDF library loading... Please wait a moment and try again.');
            return;
        }

    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF('p', 'mm', 'a4');
    // Set default font to Times New Roman for all text
    pdf.setFont('times', 'normal');

        // Load header image - using the working v.jpeg header
        const headerImg = await loadImageAsBase64('assets/images/v.jpeg');

        // Page 1: Event Summary (Dean-SA Format)
        await generatePage1EventSummary(pdf, headerImg);

        // Page 2: Circular (Remove box, add signature fields)
        pdf.addPage();
        await generatePage2Circular(pdf, headerImg);

        // Page 3: About the Event (Add brochure if missing, signature fields)
        pdf.addPage();
        await generatePage3AboutEvent(pdf, headerImg);

        // Page 4: Event Report (Remove this page as requested)
        // Skipping Page 4 as per user request

        // Page 5: Brochure (if available)
        if (uploadedBrochureBase64) {
            pdf.addPage();
            await generatePage5Brochure(pdf, headerImg);
        }

        // Page 6: Geo-Tagged Photos (Add header, signature fields)
        if (uploadedGeoPhotosBase64.length > 0) {
            pdf.addPage();
            await generatePage6GeoPhotos(pdf, headerImg);
        }

        // Page 7: News Paper Cutting (Add header, signature fields)
        if (uploadedNewsPaperBase64.length > 0) {
            pdf.addPage();
            await generatePage7NewsPaper(pdf, headerImg);
        }

        // Page 8: List of Students (Add header, signature fields)
        if (uploadedStudentListHtml) {
            pdf.addPage();
            await generatePage8StudentList(pdf, headerImg);
        }

        // Page 9: List of Faculty (Add header, signature fields)
        if (uploadedFacultyListHtml) {
            pdf.addPage();
            await generatePage9FacultyList(pdf, headerImg);
        }

        // Generate filename
        const eventName = currentFormData.eventName ?
            currentFormData.eventName.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '_') : 'Event_Report';
        const date = new Date().toISOString().split('T')[0];
        const fileName = `${eventName}_${date}.pdf`;

        // Download PDF
        pdf.save(fileName);

        console.log('✅ PDF Downloaded Successfully!');
        alert('✅ PDF Downloaded Successfully!');

    } catch (error) {
        console.error('❌ Error:', error);
        alert('❌ PDF generation failed: ' + error.message);
    }
}

// Add signature fields helper
// function addSignatureFields(pdf, y, includeAll = true) {
//     // Place signature fields at the bottom of the page (A4: 297mm height, so y ~ 265 for signatures)
//     const pageHeight = 297; // mm
//     const sigY = 265;
//     const sigs = [];
//     let x = 20;
//     if (currentFormData.signatureField1 && currentFormData.signatureField1 !== 'Not applicable') {
//         sigs.push({ value: currentFormData.signatureField1, x });
//         x += 60;
//     }
//     if (currentFormData.signatureField2 && currentFormData.signatureField2 !== 'Not applicable') {
//         sigs.push({ value: currentFormData.signatureField2, x });
//         x += 60;
//     }
//     if (currentFormData.signatureField3 && currentFormData.signatureField3 !== 'Not applicable') {
//         sigs.push({ value: currentFormData.signatureField3, x });
//         x += 60;
//     }
//     // Draw only signature labels (no lines)
//     sigs.forEach(sig => {
//         pdf.setFont('times', 'bold');
//         pdf.setFontSize(10);
//         pdf.text(sig.value, sig.x, sigY + 7, { maxWidth: 50 });
//         pdf.setFont('times', 'normal'); // reset for other text
//     });
//     return sigY + 15;
// }
function addSignatureFields(pdf, y, includeAll = true) {
    // Place signature fields at the bottom of the page
    const sigY = 265; // baseline Y
    const sigs = [];

    if (currentFormData.signatureField1 && currentFormData.signatureField1 !== 'Not applicable') {
        // Left side
        sigs.push({ value: currentFormData.signatureField1, x: 40 });
    }

    if (currentFormData.signatureField2 && currentFormData.signatureField2 !== 'Not applicable') {
        // Center
        sigs.push({ value: currentFormData.signatureField2, x: 105 }); // page center (A4 width ~210mm)
    }

    if (currentFormData.signatureField3 && currentFormData.signatureField3 !== 'Not applicable') {
        // Right side (adjust 160–175 to move further right)
        sigs.push({ value: currentFormData.signatureField3, x: 190 });
    }

    // Draw only signature labels
    sigs.forEach(sig => {
        pdf.setFont('times', 'bold');
        pdf.setFontSize(10);
        pdf.text(sig.value, sig.x, sigY + 7, { maxWidth: 50, align: 'center' });
        pdf.setFont('times', 'normal'); // reset
    });

    return sigY + 15;
}

// Page 1: Event Summary (Dean-SA Format) - Keep as is
async function generatePage1EventSummary(pdf, headerImg) {
    // Add header image
    if (headerImg) {
       pdf.addImage(headerImg, 'JPEG', 15, 10, 180, 22);
    }

    // Title
    pdf.setFontSize(18);
    pdf.setFont('times', 'bold');
    pdf.text('EVENT SUMMARY', 105, 55, { align: 'center' });

    // Table data
    const tableData = [
        ['a', 'Event Name', currentFormData.eventName || ''],
        ['b', 'Date and Time', `${currentFormData.eventDate || ''} & ${currentFormData.eventTime || ''}`],
        ['c', 'Venue', currentFormData.venue || ''],
        ['d', 'Resource Person', currentFormData.resourcePerson || ''],
        ['e', 'Students Participated', currentFormData.students || ''],
        ['f', 'Faculty Participated', currentFormData.faculty || 'N/A'],
        ['g', 'Event Coordinator', currentFormData.eventCoordinator || ''],
        ['h', 'Organized by', currentFormData.organisedBy || '']
    ];

    // Create table with margin so right border does not overlap page border
    pdf.autoTable({
    startY: 65,
    body: tableData,
    theme: 'grid',
    styles: {
        fontSize: 10,
        font: 'times',
        cellPadding: 4,
        lineColor: [0, 0, 0],
        lineWidth: 0.5
    },
    columnStyles: {
        0: { cellWidth: 15, halign: 'center', fontStyle: 'bold' },
        1: { cellWidth: 70, fontStyle: 'bold' },
        2: { cellWidth: 95 }
    },
    margin: { left: 12, right: 12 },
    didDrawCell: (data) => {
        // Remove extra line on the rightmost column
        if (data.column.index === data.table.columns.length - 1) {
            data.cell.styles.lineWidth = { right: 0, left: 0.5, top: 0.5, bottom: 0.5 };
        }
    }
});




    // Signature section
    const finalY = pdf.lastAutoTable.finalY + 40;
    addSignatureFields(pdf, finalY, true);
}

// Page 2: Circular (Remove box, add signature fields)
async function generatePage2Circular(pdf, headerImg) {
    // Add thin outer border for entire page
    pdf.setLineWidth(0.5);
    pdf.rect(10, 5, 195, 287); // A4 page border

    // Add header image
    if (headerImg) {
        pdf.addImage(headerImg, 'JPEG', 15, 10, 180, 22);
    }

    // Add underline below header
    pdf.setLineWidth(0.5);
    pdf.line(10, 42, 205, 42);

    // Title
        pdf.setFontSize(20);
        pdf.setFont('times', 'normal');
    pdf.text('CIRCULAR', 105, 55, { align: 'center' });

    // Underline for title
    pdf.line(80, 57, 130, 57);

    let y = 75;
    pdf.setFontSize(14);
    pdf.setFont('times', 'normal');

    // Date
    pdf.text(`Date: ${currentFormData.eventDate || ''}`, 170, y, { align: 'right' });
    y += 20;

    // To
        pdf.setFont('times', 'normal');
    pdf.text(`To: ${currentFormData.recipient || ''}`, 20, y);
    y += 15;

    // Subject
    pdf.text(`Subject: ${currentFormData.eventName || ''}`, 20, y);
    y += 20;

    // Body
    pdf.setFont('times', 'normal');
    // Try to justify the letter body (jsPDF supports align: 'justify' in recent versions)
    const circularBody = currentFormData.letterBody || '';
    if (pdf.text && typeof pdf.text === 'function') {
        try {
            pdf.text(circularBody, 20, y, { maxWidth: 170, align: 'justify' });
        } catch (e) {
            // Fallback: split to size and left align
            const bodyLines = pdf.splitTextToSize(circularBody, 170);
            pdf.text(bodyLines, 20, y, { align: 'left' });
        }
    } else {
        const bodyLines = pdf.splitTextToSize(circularBody, 170);
        pdf.text(bodyLines, 20, y, { align: 'left' });
    }
    y += (pdf.splitTextToSize(circularBody, 170).length * 6) + 20;

    // Event details (without box as requested)
        pdf.setFont('times', 'normal');
    pdf.text(`Venue: ${currentFormData.circularVenue || ''}`, 20, y);
    y += 10;
    pdf.text(`Time: ${currentFormData.circularTime || ''}`, 20, y);
    y += 10;
    pdf.text(`Event Coordinator: ${currentFormData.circularCoordinator || ''}`, 20, y);
    y += 10;

    if (currentFormData.studentCoordinator) {
        pdf.text(`Student Coordinator: ${currentFormData.studentCoordinator}`, 20, y);
        y += 10;
    }

    // Copy To section with signature fields
    if (currentFormData.copyTo) {
        y += 15;
        pdf.text('Copy To:', 20, y);
        y += 8;
        pdf.setFont('times', 'normal');
        const copyLines = pdf.splitTextToSize(currentFormData.copyTo, 170);
        pdf.text(copyLines, 40, y);
        y += copyLines.length * 6;
    }

    // // Add signature fields
    y = Math.max(y + 30, 220);
    addSignatureFields(pdf, y, true);
}

// Helper function to load image as base64
async function loadImageAsBase64(imagePath) {
    try {
        const response = await fetch(imagePath);
        const blob = await response.blob();
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
    } catch (error) {
        console.warn('Could not load header image:', error);
        return null;
    }
}

// // Add signature fields helper
// function addSignatureFields(pdf, y, includeAll = true) {
//     const signatures = [];
//     if (includeAll) {
//         signatures.push(
//             { label: 'Event Coordinator', name: currentFormData.eventCoordinatorName || '', x: 20 },
//             { label: 'HOD', name: currentFormData.hod || '', x: 70 },
//             { label: 'Principal', name: currentFormData.principal || '', x: 120 },
//             { label: 'Dean-SA', name: currentFormData.deanSA || '', x: 170 }
//         );
//     }

//     signatures.forEach(sig => {
//         // Label (no signature line)
//         pdf.setFontSize(10);
//         pdf.text(sig.label, sig.x, y + 5);
//         if (sig.name) {
//             pdf.setFontSize(8);
//             pdf.text(sig.name, sig.x, y + 10);
//         }
//     });

//     return y + 15;
// }

// Page 1: Event Summary (Dean-SA Format) - Keep as is
async function generatePage1EventSummary(pdf, headerImg) {
    // Add thin outer border for entire page
    pdf.setLineWidth(0.5);
    pdf.rect(10, 5, 195, 287); // A4 page border

    // Add header image with fallback
    if (headerImg) {
        try {
            pdf.addImage(headerImg, 'JPEG', 15, 10, 180, 22);
            console.log('Header image added successfully');
        } catch (error) {
            console.error('Error adding header image:', error);
            // Fallback: Add text header
            pdf.setFontSize(16);
            pdf.setFont('times', 'bold');
            pdf.text("VIGNAN'S INSTITUTE OF INFORMATION TECHNOLOGY", 105, 25, { align: 'center' });
        }
    } else {
        console.warn('No header image loaded, using text fallback');
        // Fallback: Add text header
        pdf.setFontSize(16);
        pdf.setFont('times', 'bold');
        pdf.text("VIGNAN'S INSTITUTE OF INFORMATION TECHNOLOGY", 105, 25, { align: 'center' });
    }

    // Add underline below header
    pdf.setLineWidth(0.5);
    pdf.line(10, 42, 205, 42);

    // Title
    pdf.setFontSize(18);
    pdf.setFont('times', 'bold');
    pdf.text('EVENT SUMMARY', 105, 55, { align: 'center' });

    // Underline for title
    pdf.line(70, 57, 140, 57);

    // Table data
    const tableData = [
        ['a', 'Event Name', currentFormData.eventName || ''],
        ['b', 'Date and Time', `${currentFormData.eventDate || ''} & ${currentFormData.eventTime || ''}`],
        ['c', 'Venue', currentFormData.venue || ''],
        ['d', 'Resource Person', currentFormData.resourcePerson || ''],
        ['e', 'Students Participated', currentFormData.students || ''],
        ['f', 'Faculty Participated', currentFormData.faculty || 'N/A'],
        ['g', 'Event Coordinator', currentFormData.eventCoordinator || ''],
        ['h', 'Organized by', currentFormData.organisedBy || '']
    ];

    // Create table with reduced font and padding to fit single page
    pdf.autoTable({
    startY: 65,
    body: tableData,
    theme: 'grid',
    styles: {
        fontSize: 10,
        font: 'times',
        cellPadding: 4,
        lineColor: [0, 0, 0],
        lineWidth: 0.5
    },
    columnStyles: {
        0: { cellWidth: 15, halign: 'center', fontStyle: 'bold' },
        1: { cellWidth: 70, fontStyle: 'bold' },
        2: { cellWidth: 95 }
    },
    margin: { left: 12, right: 12 },
    didDrawCell: (data) => {
        // Remove extra line on the rightmost column
        if (data.column.index === data.table.columns.length - 1) {
            data.cell.styles.lineWidth = { right: 0, left: 0.5, top: 0.5, bottom: 0.5 };
        }
    }
});

    // Signature section
    const finalY = pdf.lastAutoTable.finalY + 40;
    addSignatureFields(pdf, finalY, true);
}

// Page 3: About the Event (Add brochure if missing, signature fields)
async function generatePage3AboutEvent(pdf, headerImg) {
    // Add thin outer border for entire page
    pdf.setLineWidth(0.5);
    pdf.rect(10, 5, 195, 287); // A4 page border

    // Add header image
    if (headerImg) {
        pdf.addImage(headerImg, 'JPEG', 15, 10, 180, 22);
    }

    // Add underline below header
    pdf.setLineWidth(0.5);
    pdf.line(10, 42, 205, 42);

    // Title
        pdf.setFontSize(20);
        pdf.setFont('times', 'normal');
    pdf.text('ABOUT THE EVENT', 105, 55, { align: 'center' });

    // Underline for title
    pdf.line(60, 57, 150, 57);

    let y = 75;

    // Do not add brochure image or placeholder here

    // About event content (no border)
    pdf.setFontSize(14);
    pdf.setFont('times', 'normal');
    // Try to justify About the Event text (jsPDF supports align: 'justify' in recent versions)
    const aboutText = currentFormData.aboutEvent || '';
    if (pdf.text && typeof pdf.text === 'function') {
        try {
            pdf.text(aboutText, 20, y + 10, { maxWidth: 170, align: 'justify' });
        } catch (e) {
            // Fallback: split to size and left align
            const aboutLines = pdf.splitTextToSize(aboutText, 170);
            pdf.text(aboutLines, 20, y + 10, { align: 'left' });
        }
    } else {
        const aboutLines = pdf.splitTextToSize(aboutText, 170);
        pdf.text(aboutLines, 20, y + 10, { align: 'left' });
    }
    y += (pdf.splitTextToSize(aboutText, 170).length * 6) + 20;

    // Add signature fields at the end of About the Event page
    addSignatureFields(pdf, y + 30, true);
}

// Page 5: Brochure (Header lines missing, remove box, signature fields)
async function generatePage5Brochure(pdf, headerImg) {
    // Add thin outer border for entire page
    pdf.setLineWidth(0.5);
    pdf.rect(10, 5, 195, 287); // A4 page border

    // Add header image
    if (headerImg) {
        pdf.addImage(headerImg, 'JPEG', 15, 10, 180, 22);
    }

    // Add underline below header
    pdf.setLineWidth(0.5);
    pdf.line(10, 42, 205, 42);

    // Add header lines for venue as requested
    pdf.setFontSize(14);
        pdf.setFont('times', 'normal');
    pdf.text(`Venue: ${currentFormData.venue || ''}`, 20, 50);
    pdf.text(`Date: ${currentFormData.eventDate || ''}`, 20, 60);
    pdf.text(`Time: ${currentFormData.eventTime || ''}`, 20, 70);

    // Title
    pdf.setFontSize(18);
    pdf.text('EVENT BROCHURE', 105, 90, { align: 'center' });

    // Underline for title
    pdf.line(60, 92, 150, 92);

    // Add brochure image (without box)
    if (uploadedBrochureBase64) {
        try {
            pdf.addImage(uploadedBrochureBase64, 'JPEG', 20, 100, 170, 120);
        } catch (error) {
            console.warn('Could not add brochure image:', error);
            pdf.setFontSize(12);
            pdf.text('Brochure: [Missing - To be attached]', 20, 120);
        }
    } else {
        pdf.setFontSize(12);
        pdf.setFont('times', 'italic');
        pdf.text('Brochure: [Missing - To be attached]', 20, 120);
    }

    // Add signature fields
    addSignatureFields(pdf, 240, true);
}

// Page 6: Geo-Tagged Photos (Add missing header, signature fields)
async function generatePage6GeoPhotos(pdf, headerImg) {
    // Add thin outer border for entire page
    pdf.setLineWidth(0.5);
   pdf.rect(10, 5, 195, 287); // A4 page border

    // Add header image
    if (headerImg) {
        pdf.addImage(headerImg, 'JPEG', 15, 10, 180, 22);
    }

    // Add underline below header
    pdf.setLineWidth(0.5);
    pdf.line(10, 42, 205, 42);

    // Add missing header as requested
    pdf.setFontSize(14);
    pdf.setFont('times', 'bold');
    pdf.text(`Event: ${currentFormData.eventName || ''}`, 20, 50);
    pdf.text(`Date: ${currentFormData.eventDate || ''}`, 20, 60);

    // Title
    pdf.setFontSize(18);
    pdf.text('GEO-TAGGED PHOTOS', 105, 80, { align: 'center' });

    // Underline for title
    pdf.line(50, 82, 160, 82);

    let y = 90;
    let photosPerRow = 2;
    let photoWidth = 80;
    let photoHeight = 60;

    for (let i = 0; i < uploadedGeoPhotosBase64.length; i++) {
        const col = i % photosPerRow;
        const row = Math.floor(i / photosPerRow);

        const x = 20 + col * (photoWidth + 10);
        const photoY = y + row * (photoHeight + 15);

        try {
            pdf.addImage(uploadedGeoPhotosBase64[i], 'JPEG', x, photoY, photoWidth, photoHeight);
            // Add thin border around each photo
            pdf.setLineWidth(0.3);
            pdf.rect(x, photoY, photoWidth, photoHeight);

            pdf.setFontSize(8);
            pdf.text(`Photo ${i + 1}`, x + photoWidth/2, photoY + photoHeight + 8, { align: 'center' });
        } catch (error) {
            console.warn(`Could not add geo photo ${i + 1}:`, error);
        }
    }

    // Add signature fields
    addSignatureFields(pdf, 240, true);
}

// Page 7: News Paper Cutting (Add missing header, signature fields)
async function generatePage7NewsPaper(pdf, headerImg) {
    // Add thin outer border for entire page
    pdf.setLineWidth(0.5);
    pdf.rect(10, 5, 195, 287); // A4 page border

    // Add header image
    if (headerImg) {
        pdf.addImage(headerImg, 'JPEG', 15, 10, 180, 22);
    }

    // Add underline below header
    pdf.setLineWidth(0.5);
    pdf.line(10, 42, 205, 42);

    // Add missing header as requested
    pdf.setFontSize(14);
    pdf.setFont('times', 'bold');
    pdf.text(`Event: ${currentFormData.eventName || ''}`, 20, 50);
    pdf.text(`Date: ${currentFormData.eventDate || ''}`, 20, 60);

    // Title
    pdf.setFontSize(18);
    pdf.text('NEWS PAPER CUTTING', 105, 80, { align: 'center' });

    // Underline for title
    pdf.line(50, 82, 160, 82);

    let startY = 100;
    let imagesPerRow = 2;
    let imageWidth = 85;
    let imageHeight = 60;
    let gap = 10;
    let startX = 10;

    let lastY = startY;
    for (let i = 0; i < uploadedNewsPaperBase64.length; i++) {
        const col = i % imagesPerRow;
        const row = Math.floor(i % 4 / imagesPerRow); // 0 or 1 for 2 rows per page
        const page = Math.floor(i / 4);
        const x = startX + col * (imageWidth + gap);
        const y = startY + row * (imageHeight + 25);

        // Start a new page every 4 images
        if (i > 0 && i % 4 === 0) {
            // Before new page, update lastY for signature placement
            lastY = y + imageHeight + 20;
            addSignatureFields(pdf, lastY, true);

            pdf.addPage();
            pdf.setLineWidth(0.5);
            pdf.rect(10, 5, 195, 287);
            if (headerImg) {
                pdf.addImage(headerImg, 'JPEG', 15, 10, 180, 22);
                pdf.setLineWidth(1);
                pdf.line(10, 42, 205, 42);
            }
        }

        try {
            pdf.addImage(uploadedNewsPaperBase64[i], 'JPEG', x, y, imageWidth, imageHeight);
            pdf.setLineWidth(0.3);
            pdf.rect(x, y, imageWidth, imageHeight);
            pdf.setFontSize(10);
            pdf.text(`News Cutting ${i + 1}`, x + imageWidth / 2, y + imageHeight + 10, { align: 'center' });
            // Track lastY for signature placement
            if (i % 4 === 3 || i === uploadedNewsPaperBase64.length - 1) {
                lastY = y + imageHeight + 20;
            }
        } catch (error) {
            console.warn(`Could not add news paper image ${i + 1}:`, error);
        }
    }

    // Add signature fields after last set of images on last page
    addSignatureFields(pdf, lastY, true);
}

// Page 8: List of Students (Add missing header, signature fields)
async function generatePage8StudentList(pdf, headerImg) {
    // Add thin outer border for entire page
    pdf.setLineWidth(0.5);
   pdf.rect(10, 5, 195, 287); // A4 page border

    // Add header image
    if (headerImg) {
        pdf.addImage(headerImg, 'JPEG', 15, 10, 180, 22);
    }

    // Add underline below header
    pdf.setLineWidth(0.5);
    pdf.line(10, 42, 205, 42);

    // Add missing header as requested
    pdf.setFontSize(14);
    pdf.setFont('times', 'bold');
    pdf.text(`Event: ${currentFormData.eventName || ''}`, 20, 50);
    pdf.text(`Date: ${currentFormData.eventDate || ''}`, 20, 60);

    // Title
    pdf.setFontSize(18);
    pdf.text('LIST OF STUDENTS PARTICIPATED', 105, 80, { align: 'center' });

    // Underline for title
    pdf.line(40, 82, 170, 82);

    // Parse student list HTML and create table
// Inside generatePage8StudentList
if (uploadedStudentListJson) {
    try {
        const tableData = uploadedStudentListJson;
         pdf.autoTable({
    startY: 90,
    head: tableData.length > 0 ? [tableData[0]] : [],
    body: tableData.slice(1),
    theme: 'grid',
    styles: {
        fontSize: 8,
        cellPadding: 3,
        lineColor: [0, 0, 0],
        lineWidth: 0.3,
        overflow: 'linebreak'
    },
    headStyles: {
        fillColor: [220, 220, 220],
        fontStyle: 'bold',
        lineColor: [0, 0, 0],
        lineWidth: 0.3,
        textColor: [0, 0, 0]
    },
    didDrawPage: (data) => {
        // 🔹 Add outer border on every page
        pdf.setLineWidth(0.5);
       pdf.rect(10, 5, 195, 287);

        // 🔹 Re-draw header image on every page if needed
        // if (headerImg) {
        //     pdf.addImage(headerImg, 'JPEG', 10, 10, 190, 30);
        //     pdf.setLineWidth(0.5);
        //     pdf.line(10, 42, 200, 42);
        // }

        // // 🔹 Page Title for multi-page tables
        // pdf.setFontSize(14);
        // pdf.setFont('times', 'bold');
        // pdf.text('LIST OF STUDENTS PARTICIPATED', 105, 55, { align: 'center' });
    }
});

    } catch (error) {
        console.warn('Could not parse student list:', error);
        pdf.setFontSize(12);
        pdf.text('Student list data could not be processed', 20, 100);
    }
}


    // Add signature fields
    addSignatureFields(pdf, 240, true);
}

// Page 9: List of Faculty (Add missing header, signature fields)
async function generatePage9FacultyList(pdf, headerImg) {
    // Add thin outer border for entire page
    pdf.setLineWidth(0.5);
    pdf.rect(10, 5, 195, 287); // A4 page border

    // Add header image
    if (headerImg) {
        pdf.addImage(headerImg, 'JPEG', 15, 10, 180, 22);
    }

    // Add underline below header
    pdf.setLineWidth(0.5);
    pdf.line(10, 42, 205, 42);

    // Add missing header as requested
    pdf.setFontSize(14);
    pdf.setFont('times', 'bold');
    pdf.text(`Event: ${currentFormData.eventName || ''}`, 20, 50);
    pdf.text(`Date: ${currentFormData.eventDate || ''}`, 20, 60);

    // Title
    pdf.setFontSize(18);
    pdf.text('LIST OF FACULTY PARTICIPATED', 105, 80, { align: 'center' });

    // Underline for title
    pdf.line(35, 82, 175, 82);

    // Parse faculty list HTML and create table
    
if (uploadedFacultyListJson) {
    try {
        const tableData = uploadedFacultyListJson;
        pdf.autoTable({
            startY: 90,
            head: tableData.length > 0 ? [tableData[0]] : [],
            body: tableData.slice(1),
            theme: 'grid',
            styles: {
                fontSize: 8,
                cellPadding: 3,
                lineColor: [0, 0, 0],
                lineWidth: 0.3,
                overflow: 'linebreak'
            },
            headStyles: {
                fillColor: [220, 220, 220], // Light gray background
                fontStyle: 'bold',
                lineColor: [0, 0, 0],
                lineWidth: 0.3,
                textColor: [0, 0, 0] // Black header text
            },
            didDrawPage: (data) => {
        // 🔹 Add outer border on every page
        pdf.setLineWidth(0.5);
        pdf.rect(10, 5, 195, 287);

        // 🔹 Re-draw header image on every page if needed
        // if (headerImg) {
        //     pdf.addImage(headerImg, 'JPEG', 10, 10, 190, 30);
        //     pdf.setLineWidth(0.5);
        //     pdf.line(10, 42, 200, 42);
        // }

        // // 🔹 Page Title for multi-page tables
        // pdf.setFontSize(14);
        // pdf.setFont('times', 'bold');
        // pdf.text('LIST OF STUDENTS PARTICIPATED', 105, 55, { align: 'center' });
    }

        });
    } catch (error) {
        console.warn('Could not parse faculty list:', error);
        pdf.setFontSize(12);
        pdf.text('Faculty list data could not be processed', 20, 100);
    }
}

    // Add signature fields
    addSignatureFields(pdf, 240, true);
}

async function downloadWord() {
    try {
        console.log('📄 Starting Word document generation...');

        const previewContent = document.getElementById('preview-content');
        if (!previewContent) {
            alert('Preview content not found. Please generate a report first.');
            return;
        }

        const pages = previewContent.querySelectorAll('.report-page');
        if (pages.length === 0) {
            alert('No pages found to export. Please generate a report first.');
            return;
        }

        console.log(`Found ${pages.length} pages to export to Word`);

        // Create a simple HTML content for Word
        let htmlContent = `
        <html>
        <head>
            <meta charset="utf-8">
            <style>
                body { font-family: 'Times New Roman', Times, serif; margin: 0; padding: 20px; }
                .page { page-break-after: always; margin-bottom: 50px; }
                .page:last-child { page-break-after: avoid; }
                img { max-width: 100%; height: auto; }
                table { width: 100%; border-collapse: collapse; font-family: 'Times New Roman', Times, serif; }
                th, td { border: 1px solid #000; padding: 8px; text-align: left; font-family: 'Times New Roman', Times, serif; }
                .about-event-justified { text-align: justify !important; text-indent: 40px; }
                .circular-justified { text-align: justify !important; text-indent: 40px; }
            </style>
        </head>
        <body>
        `;

        // Add each page content
        for (let i = 0; i < pages.length; i++) {
            console.log(`Processing page ${i + 1} for Word...`);

            // Get the HTML content of each page
            let pageContent = pages[i].innerHTML;

            // Remove border from About the Event section if present
            pageContent = pageContent.replace(/<div[^>]*border[^>]*>(.*?)<\/div>/gs, '<div style="padding:10px;margin-bottom:20px;">$1</div>');

            htmlContent += `
            <div class="page">
                ${pageContent}
            </div>
            `;
        }

        htmlContent += `
        </body>
        </html>
        `;

        // Create blob and download
        const blob = new Blob([htmlContent], {
            type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        });

        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;

        // Generate filename
        const eventName = currentFormData.eventName ?
            currentFormData.eventName.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '_') : 'Event';
        const date = new Date().toISOString().split('T')[0];
        const fileName = `${eventName}_Report_${date}.doc`;

        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        console.log('✅ Word document downloaded:', fileName);

        // Clean up
        setTimeout(() => URL.revokeObjectURL(url), 1000);

    } catch (error) {
        console.error('❌ Error generating Word document:', error);
        alert('Error generating Word document: ' + error.message + '. Please try PDF download instead.');
    }
}

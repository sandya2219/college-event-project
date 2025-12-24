// Event Report Generation System - File Handling Utilities

// Function to read an image file
function readImage(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve(e.target.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

// Function to read an Excel file
// ✅ fileHandler.js (Excel → JSON instead of HTML)

// ✅ fileHandler.js (Excel → JSON + HTML)

function readExcel(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const data = e.target.result;
            const workbook = XLSX.read(data, { type: 'binary' });
            const firstSheet = workbook.Sheets[workbook.SheetNames[0]];

            // Convert to array of arrays
            const json = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });
            const cleaned = json.filter(row => row.some(cell => cell && cell.toString().trim() !== ""));

            // Build HTML for preview
            let html = "<table border='1'><thead><tr>";
            if (cleaned.length > 0) {
                cleaned[0].forEach(col => {
                    html += `<th>${col || ''}</th>`;
                });
                html += "</tr></thead><tbody>";
                for (let i = 1; i < cleaned.length; i++) {
                    html += "<tr>";
                    cleaned[i].forEach(col => {
                        html += `<td>${col || ''}</td>`;
                    });
                    html += "</tr>";
                }
                html += "</tbody></table>";
            }

            resolve({
                json: cleaned,  // For PDF
                html: html      // For Preview
            });
        };
        reader.onerror = reject;
        reader.readAsBinaryString(file);
    });
}


// Generate report function
async function generateReport() {
    const form = document.getElementById('event-form');
    const formData = new FormData(form);

    // List of required fields with labels
    const requiredFields = [
        { name: 'eventDate', label: 'Date' },
        { name: 'eventTime', label: 'Time' },
        { name: 'eventName', label: 'Name of the Event' },
        { name: 'venue', label: 'Venue' },
        { name: 'resourcePerson', label: 'Name of the Resource Person' },
        { name: 'students', label: 'No of Students Participated' },
        { name: 'eventCoordinator', label: 'Name of the Event Coordinator' },
        { name: 'organisedBy', label: 'Organised by' },
        { name: 'recipient', label: 'Recipient' },
        { name: 'letterBody', label: 'Body of the Letter' },
        { name: 'circularVenue', label: 'Circular Venue' },
        { name: 'circularTime', label: 'Circular Time' },
        { name: 'circularCoordinator', label: 'Circular Event Coordinator' },
        { name: 'aboutEvent', label: 'About the Event' },
        { name: 'signatureField1', label: 'Signature field1' },
        { name: 'signatureField2', label: 'Signature field2' },
        { name: 'signatureField3', label: 'Signature field3' }
    ];

    // Check if all required fields are filled
    for (let field of requiredFields) {
        if (!formData.get(field.name)) {
            alert(`Please fill in the "${field.label}" field.`);
            return;
        }
    }

    // Read uploaded files
    const brochureInput = form.querySelector('input[name="brochure"]');
    const geoPhotosInput = form.querySelector('input[name="geoPhotos"]');
    const newsPaperInput = form.querySelector('input[name="newsPaper"]');
    const studentListInput = form.querySelector('input[name="studentList"]');
    const facultyListInput = form.querySelector('input[name="facultyList"]');

    if (brochureInput && brochureInput.files && brochureInput.files[0]) {
        uploadedBrochureBase64 = await readImage(brochureInput.files[0]).catch(console.error);
    }

    if (geoPhotosInput && geoPhotosInput.files && geoPhotosInput.files.length > 0) {
        uploadedGeoPhotosBase64 = [];
        for (let i = 0; i < geoPhotosInput.files.length; i++) {
            uploadedGeoPhotosBase64.push(await readImage(geoPhotosInput.files[i]).catch(console.error));
        }
    }

    if (newsPaperInput && newsPaperInput.files && newsPaperInput.files.length > 0) {
        uploadedNewsPaperBase64 = [];
        for (let i = 0; i < newsPaperInput.files.length; i++) {
            uploadedNewsPaperBase64.push(await readImage(newsPaperInput.files[i]).catch(console.error));
        }
    }

if (studentListInput && studentListInput.files && studentListInput.files[0]) {
    const result = await readExcel(studentListInput.files[0]).catch(console.error);
    uploadedStudentListHtml = result.html;   // For preview
    uploadedStudentListJson = result.json;   // For PDF
}

if (facultyListInput && facultyListInput.files && facultyListInput.files[0]) {
    const result = await readExcel(facultyListInput.files[0]).catch(console.error);
    uploadedFacultyListHtml = result.html;   // For preview
    uploadedFacultyListJson = result.json;   // For PDF
}



    // Format date and time
    const [yyyy, mm, dd] = formData.get('eventDate').split('-');
    const formattedDate = `${dd}/${mm}/${yyyy}`;
    const eventTime = formData.get('eventTime');
    const formattedEventTime = eventTime ? eventTime : '';
    const circularTime = formData.get('circularTime');
    const formattedCircularTime = circularTime ? circularTime : '';

    // Store form data
    currentFormData = {
        eventDate: formattedDate,
        eventTime: formattedEventTime,
        eventName: formData.get('eventName'),
        venue: formData.get('venue'),
        resourcePerson: formData.get('resourcePerson'),
        students: formData.get('students'),
        faculty: formData.get('faculty'),
        eventCoordinator: formData.get('eventCoordinator'),
        organisedBy: formData.get('organisedBy'),
        recipient: formData.get('recipient'),
        letterBody: formData.get('letterBody'),
        circularVenue: formData.get('circularVenue'),
        circularTime: formattedCircularTime,
        circularCoordinator: formData.get('circularCoordinator'),
        studentCoordinator: formData.get('studentCoordinator'),
        copyTo: formData.get('copyTo'),
        inAssociationWith: formData.get('inAssociationWith'),
        aboutEvent: formData.get('aboutEvent'),
        signatureField1: formData.get('signatureField1'),
        signatureField2: formData.get('signatureField2'),
        signatureField3: formData.get('signatureField3')
    };

    // Show preview
    showPreview();
}

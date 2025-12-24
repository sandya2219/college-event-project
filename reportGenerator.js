// Event Report Generation System - Report Preview Generator

// EXACT Vignan Header Image - Your exact header with all logos
const deanSAHeaderImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABdwAAAAyCAYAAABVwpGKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4SU";

// Show preview function with complete Dean-SA format with borders
function showPreview() {
    document.querySelectorAll('.form-section').forEach(el => el.classList.add('hidden'));
    document.getElementById('preview-section').classList.remove('hidden');
    const previewContent = document.getElementById('preview-content');
    const headerImageBase64 = getHeaderImageBase64();
    // Remove border from About the Event section in preview if present
    if (previewContent) {
        previewContent.innerHTML = previewContent.innerHTML.replace(/<div[^>]*border[^>]*>(.*?)<\/div>/gs, '<div style="padding:10px;margin-bottom:20px;">$1</div>');
    }

    const eventSummaryHTML = `
        <!-- Page 1: Event Summary - Dean-SA Format -->
        <div class="report-page">
            <div class="report-content">
                <!-- YOUR EXACT HEADER IMAGE - v.jpeg -->
                <div style="width: 100%; background: white; padding: 0; margin: 0; text-align: center; overflow: hidden;">
                    <img src="assets/images/v.jpeg" style="width: 100%; height: auto; max-height: 120px; object-fit: contain; display: block; margin: 0 auto;">
                    <!-- Header underline -->
                    <div style="width: 100%; height: 1px; background-color: #000; margin: 5px 0;"></div>
                </div>
                
                <!-- EXACT Dean-SA Content Format -->
                <div style="margin: 15px; padding: 0;">
                    <h3 style="color: #000; font-size: 18px; font-weight: bold; text-align: center; margin: 20px 0; text-decoration: underline; font-family: 'Times New Roman', serif;">
                        EVENT SUMMARY
                    </h3>

                    <!-- EXACT Dean-SA Table Format -->
                    <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin: 20px 0; font-family: 'Times New Roman', serif; border: 2px solid #000;">
                        <tr>
                            <td style="border: 2px solid #000; padding: 12px; width: 10%; text-align: center; font-weight: bold; background-color: #ffffff; vertical-align: middle;">a</td>
                            <td style="border: 2px solid #000; padding: 12px; width: 35%; font-weight: bold; background-color: #ffffff; vertical-align: middle;">Event Name</td>
                            <td style="border: 2px solid #000; padding: 12px; width: 55%; background-color: #ffffff; vertical-align: middle;">${currentFormData.eventName}</td>
                        </tr>
                        <tr>
                            <td style="border: 2px solid #000; padding: 12px; text-align: center; font-weight: bold; background-color: #ffffff; vertical-align: middle;">b</td>
                            <td style="border: 2px solid #000; padding: 12px; font-weight: bold; background-color: #ffffff; vertical-align: middle;">Date and Time</td>
                            <td style="border: 2px solid #000; padding: 12px; background-color: #ffffff; vertical-align: middle;">${currentFormData.eventDate} & ${currentFormData.eventTime}</td>
                        </tr>
                        <tr>
                            <td style="border: 2px solid #000; padding: 12px; text-align: center; font-weight: bold; background-color: #ffffff; vertical-align: middle;">c</td>
                            <td style="border: 2px solid #000; padding: 12px; font-weight: bold; background-color: #ffffff; vertical-align: middle;">Venue</td>
                            <td style="border: 2px solid #000; padding: 12px; background-color: #ffffff; vertical-align: middle;">${currentFormData.venue}</td>
                        </tr>
                        <tr>
                            <td style="border: 2px solid #000; padding: 12px; text-align: center; font-weight: bold; background-color: #ffffff; vertical-align: middle;">d</td>
                            <td style="border: 2px solid #000; padding: 12px; font-weight: bold; background-color: #ffffff; vertical-align: middle;">Resource Person</td>
                            <td style="border: 2px solid #000; padding: 12px; background-color: #ffffff; vertical-align: middle;">${currentFormData.resourcePerson}</td>
                        </tr>
                        <tr>
                            <td style="border: 2px solid #000; padding: 12px; text-align: center; font-weight: bold; background-color: #ffffff; vertical-align: middle;">e</td>
                            <td style="border: 2px solid #000; padding: 12px; font-weight: bold; background-color: #ffffff; vertical-align: middle;">Students Participated</td>
                            <td style="border: 2px solid #000; padding: 12px; background-color: #ffffff; vertical-align: middle;">${currentFormData.students}</td>
                        </tr>
                        <tr>
                            <td style="border: 2px solid #000; padding: 12px; text-align: center; font-weight: bold; background-color: #ffffff; vertical-align: middle;">f</td>
                            <td style="border: 2px solid #000; padding: 12px; font-weight: bold; background-color: #ffffff; vertical-align: middle;">Faculty Participated</td>
                            <td style="border: 2px solid #000; padding: 12px; background-color: #ffffff; vertical-align: middle;">${currentFormData.faculty || 'N/A'}</td>
                        </tr>
                        <tr>
                            <td style="border: 2px solid #000; padding: 12px; text-align: center; font-weight: bold; background-color: #ffffff; vertical-align: middle;">g</td>
                            <td style="border: 2px solid #000; padding: 12px; font-weight: bold; background-color: #ffffff; vertical-align: middle;">Event Coordinator</td>
                            <td style="border: 2px solid #000; padding: 12px; background-color: #ffffff; vertical-align: middle;">${currentFormData.eventCoordinator}</td>
                        </tr>
                        <tr>
                            <td style="border: 2px solid #000; padding: 12px; text-align: center; font-weight: bold; background-color: #ffffff; vertical-align: middle;">h</td>
                            <td style="border: 2px solid #000; padding: 12px; font-weight: bold; background-color: #ffffff; vertical-align: middle;">Organized by</td>
                            <td style="border: 2px solid #000; padding: 12px; background-color: #ffffff; vertical-align: middle;">${currentFormData.organisedBy}</td>
                        </tr>
                    </table>

                    <!-- Signature Fields Section (Dynamic) -->
                    <div>
                        <table style="width: 100%; border-collapse: collapse; font-family: 'Times New Roman', serif;">
                            <tr>
                                ${currentFormData.signatureField1 && currentFormData.signatureField1 !== 'Not applicable' ? `<td style="width: 20%; text-align: center; padding: 20px; vertical-align: bottom;"><span style='font-size: 14px; font-weight: normal;'>${currentFormData.signatureField1}</span></td>` : ''}
                                ${currentFormData.signatureField2 && currentFormData.signatureField2 !== 'Not applicable' ? `<td style="width: 20%; text-align: center; padding: 20px; vertical-align: bottom;"><span style='font-size: 14px; font-weight: normal;'>${currentFormData.signatureField2}</span></td>` : ''}
                                ${currentFormData.signatureField3 && currentFormData.signatureField3 !== 'Not applicable' ? `<td style="width: 20%; text-align: center; padding: 20px; vertical-align: bottom;"><span style='font-size: 14px; font-weight: normal;'>${currentFormData.signatureField3}</span></td>` : ''}
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="page-break"></div>
        <!-- Page 2: Circular -->
        <div class="report-page">
            <div class="report-content">
                <!-- YOUR EXACT HEADER IMAGE - v.jpeg -->
                <div style="width: 100%; background: white; padding: 0; margin: 0; text-align: center; overflow: hidden;">
                    <img src="assets/images/v.jpeg" style="width: 100%; height: auto; max-height: 120px; object-fit: contain; display: block; margin: 0 auto;">
                    <!-- Header underline -->
                    <div style="width: 100%; height: 1px; background-color: #000; margin: 5px 0;"></div>
                </div>
                <!-- EXACT Dean-SA Circular Content -->
                <div style="margin: 15px; padding: 0;">
                    <h3 style="color: #000; font-size: 20px; font-weight: normal; margin: 25px 0; text-align: center; font-family: 'Times New Roman', serif; text-decoration: underline;">
                        CIRCULAR
                    </h3>
                    <div style="font-size: 14px; line-height: 1.8; font-family: 'Times New Roman', serif; color: #000;">
                        <p style="margin: 20px 0; text-align: right; font-weight: normal;">Date: ${currentFormData.eventDate}</p>
                        <p style="margin: 25px 0; font-weight: normal;">To: ${currentFormData.recipient}</p>
                        <p style="margin: 25px 0; font-weight: normal;">Subject: ${currentFormData.eventName}</p>
                        <div class="circular-justified" style="margin: 30px 0; text-align: justify; text-indent: 40px; line-height: 2;">
                            <p style="margin: 0;">${currentFormData.letterBody}</p>
                        </div>
                        <div style="margin: 30px 0; border: 2px solid #000; padding: 20px; background-color: #ffffff;">
                            <p style="margin: 10px 0; font-weight: normal;">Venue: ${currentFormData.circularVenue}</p>
                            <p style="margin: 10px 0; font-weight: normal;">Time: ${currentFormData.circularTime}</p>
                            <p style="margin: 10px 0; font-weight: normal;">Event Coordinator: ${currentFormData.circularCoordinator}</p>
                            ${currentFormData.studentCoordinator ? `<p style="margin: 10px 0; font-weight: normal;">Student Coordinator: ${currentFormData.studentCoordinator}</p>` : ''}
                        </div>
                        ${currentFormData.copyTo ? `
                        <div style="margin: 30px 0;">
                            <p style="margin-bottom: 15px; font-weight: normal;">Copy To:</p>
                            <p style="margin-left: 40px; font-style: italic;">${currentFormData.copyTo}</p>
                        </div>` : ''}
                    </div>
                </div>
            </div>
        </div>
        <div class="page-break"></div>

        <!-- Page 3: About the Event -->
        <div class="report-page">
            <div class="report-content">
                <!-- YOUR EXACT HEADER IMAGE - v.jpeg -->
                <div style="width: 100%; background: white; padding: 0; margin: 0; text-align: center; overflow: hidden;">
                    <img src="assets/images/v.jpeg" style="width: 100%; height: auto; max-height: 120px; object-fit: contain; display: block; margin: 0 auto;">
                    <!-- Header underline -->
                    <div style="width: 100%; height: 1px; background-color: #000; margin: 5px 0;"></div>
                </div>
                <!-- EXACT Dean-SA About Event Content -->
                <div style="margin: 15px; padding: 0;">
                    <h3 style="color: #000; font-size: 20px; font-weight: normal; margin: 25px 0; text-align: center; font-family: 'Times New Roman', serif; text-decoration: underline;">
                        ABOUT THE EVENT
                    </h3>
                    <div style="font-size: 14px; line-height: 2; font-family: 'Times New Roman', serif; color: #000;">
                        <div class="about-event-justified" style="margin: 30px 0; border: 2px solid #000; padding: 20px; background-color: #ffffff; text-align: justify; text-indent: 40px;">
                            <p style="margin: 0;">${currentFormData.aboutEvent}</p>
                        </div>
                    </div>
                    <!-- Signature Fields Section (Dynamic) -->
                    <div>
                        <table style="width: 100%; border-collapse: collapse; font-family: 'Times New Roman', serif;">
                            <tr>
                                ${currentFormData.signatureField1 && currentFormData.signatureField1 !== 'Not applicable' ? `<td style="width: 20%; text-align: center; padding: 20px; vertical-align: bottom;"><span style='font-size: 14px; font-weight: normal;'>${currentFormData.signatureField1}</span></td>` : ''}
                                ${currentFormData.signatureField2 && currentFormData.signatureField2 !== 'Not applicable' ? `<td style="width: 20%; text-align: center; padding: 20px; vertical-align: bottom;"><span style='font-size: 14px; font-weight: normal;'>${currentFormData.signatureField2}</span></td>` : ''}
                                ${currentFormData.signatureField3 && currentFormData.signatureField3 !== 'Not applicable' ? `<td style="width: 20%; text-align: center; padding: 20px; vertical-align: bottom;"><span style='font-size: 14px; font-weight: normal;'>${currentFormData.signatureField3}</span></td>` : ''}
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="page-break"></div>
         <!-- Page 4: Brochure (if available) -->
        ${uploadedBrochureBase64 ? `
        <div class="report-page">
            <div class="report-content">
                <div style="width: 100%; background: white; padding: 0; margin: 0; text-align: center; overflow: hidden;">
                    <img src="assets/images/v.jpeg" style="width: 100%; height: auto; max-height: 120px; object-fit: contain; display: block; margin: 0 auto;">
                    <div style="width: 100%; height: 1px; background-color: #000; margin: 5px 0;"></div>
                </div>
                <div style="margin: 15px; padding: 0;">
                    <h3 style="color: #000; font-size: 18px; font-weight: bold; text-align: center; margin: 20px 0; text-decoration: underline; font-family: 'Times New Roman', serif;">
                        EVENT BROCHURE
                    </h3>
                    <div style="margin: 20px 0; text-align: center;">
                        <img src="${uploadedBrochureBase64}" alt="Event Brochure" style="max-width: 90%; max-height: 500px; border: 1px solid #ccc; box-shadow: 0 2px 8px #eee;" />
                    </div>
                </div>
            </div>
        </div>
        <div class="page-break"></div>
        ` : ''}

        ${uploadedGeoPhotosBase64.length > 0 ? `
        <div class="page-break"></div>
        <!-- Geo-Tagged Photos Page -->
        <div class="report-page">
            <div class="report-content">
                <!-- YOUR EXACT HEADER IMAGE - v.jpeg -->
                <div style="width: 100%; background: white; padding: 0; margin: 0; text-align: center; overflow: hidden;">
                    <img src="assets/images/v.jpeg" style="width: 100%; height: auto; max-height: 120px; object-fit: contain; display: block; margin: 0 auto;">
                    <!-- Header underline -->
                    <div style="width: 100%; height: 1px; background-color: #000; margin: 5px 0;"></div>
                </div>
                <div style="margin: 0 20px;">
                    <h3 style="color: #002d72; font-size: 18px; font-weight: bold; margin-bottom: 20px; border-bottom: 2px solid #c9082a; padding-bottom: 8px; text-align: center;">GEO-TAGGED PHOTOS</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 20px 0;">
                        ${uploadedGeoPhotosBase64.map((src, index) => `
                            <div style="text-align: center; border: 1px solid #ddd; padding: 10px; background-color: #f9f9f9;">
                                <img src="${src}" style="width: 100%; height: auto; max-height: 200px; object-fit: cover;">
                                <p style="font-size: 10px; margin: 5px 0; color: #666;">Photo ${index + 1}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>` : ''}
        ${uploadedNewsPaperBase64.length > 0 ? `
        <div class="page-break"></div>
        <!-- News Paper Cutting Page -->
        <div class="report-page">
            <div class="report-content">
                <!-- YOUR EXACT HEADER IMAGE - v.jpeg -->
                <div style="width: 100%; background: white; padding: 0; margin: 0; text-align: center; overflow: hidden;">
                    <img src="assets/images/v.jpeg" style="width: 100%; height: auto; max-height: 120px; object-fit: contain; display: block; margin: 0 auto;">
                    <!-- Header underline -->
                    <div style="width: 100%; height: 1px; background-color: #000; margin: 5px 0;"></div>
                </div>
                <div style="margin: 0 20px;">
                    <h3 style="color: #002d72; font-size: 18px; font-weight: bold; margin-bottom: 20px; border-bottom: 2px solid #c9082a; padding-bottom: 8px; text-align: center;">NEWS PAPER CUTTING</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin: 20px 0;">
                        ${uploadedNewsPaperBase64.map((src, index) => `
                            <div style="text-align: center; border: 1px solid #ddd; padding: 10px; background-color: #f9f9f9;">
                                <img src="${src}" style="width: 100%; height: auto; max-height: 400px; object-fit: contain;">
                                <p style="font-size: 10px; margin: 5px 0; color: #666;">News Cutting ${index + 1}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>` : ''}
        ${uploadedStudentListHtml ? `
        <div class="page-break"></div>
        <!-- List of Students Page -->
        <div class="report-page">
            <div class="report-content">
                <!-- YOUR EXACT HEADER IMAGE - v.jpeg -->
                <div style="width: 100%; background: white; padding: 0; margin: 0; text-align: center; overflow: hidden;">
                    <img src="assets/images/v.jpeg" style="width: 100%; height: auto; max-height: 120px; object-fit: contain; display: block; margin: 0 auto;">
                    <!-- Header underline -->
                    <div style="width: 100%; height: 1px; background-color: #000; margin: 5px 0;"></div>
                </div>
                <div style="margin: 0 20px;">
                    <h3 style="color: #002d72; font-size: 18px; font-weight: bold; margin-bottom: 20px; border-bottom: 2px solid #c9082a; padding-bottom: 8px; text-align: center;">LIST OF STUDENTS PARTICIPATED</h3>
                    <div style="overflow-x: auto; margin: 20px 0;">
                        ${uploadedStudentListHtml.replace(/<table/g, '<table style="width: 100%; border-collapse: collapse; font-size: 11px;"').replace(/<th/g, '<th style="border: 1px solid #000; padding: 8px; background-color: #f8f9fa; font-weight: bold;"').replace(/<td/g, '<td style="border: 1px solid #000; padding: 8px;"')}
                    </div>
                </div>
            </div>
        </div>` : ''}
        ${uploadedFacultyListHtml ? `
        <div class="page-break"></div>
        <!-- List of Faculty Page -->
        <div class="report-page">
            <div class="report-content">
                <!-- YOUR EXACT HEADER IMAGE - v.jpeg -->
                <div style="width: 100%; background: white; padding: 0; margin: 0; text-align: center; overflow: hidden;">
                    <img src="assets/images/v.jpeg" style="width: 100%; height: auto; max-height: 120px; object-fit: contain; display: block; margin: 0 auto;">
                    <!-- Header underline -->
                    <div style="width: 100%; height: 1px; background-color: #000; margin: 5px 0;"></div>
                </div>
                <div style="margin: 0 20px;">
                    <h3 style="color: #002d72; font-size: 18px; font-weight: bold; margin-bottom: 20px; border-bottom: 2px solid #c9082a; padding-bottom: 8px; text-align: center;">LIST OF FACULTY PARTICIPATED</h3>
                    <div style="overflow-x: auto; margin: 20px 0;">
                        ${uploadedFacultyListHtml.replace(/<table/g, '<table style="width: 100%; border-collapse: collapse; font-size: 11px;"').replace(/<th/g, '<th style="border: 1px solid #000; padding: 8px; background-color: #f8f9fa; font-weight: bold;"').replace(/<td/g, '<td style="border: 1px solid #000; padding: 8px;"')}
                    </div>
                </div>
            </div>
        </div>` : ''}
       
    `;

    previewContent.innerHTML = eventSummaryHTML;
}

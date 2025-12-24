// Event Report Generation System - Report Preview Generator

// Show preview function with complete Dean-SA format with borders
function showPreview() {
    document.querySelectorAll('.form-section').forEach(el => el.classList.add('hidden'));
    document.getElementById('preview-section').classList.remove('hidden');
    const previewContent = document.getElementById('preview-content');
    const headerImageBase64 = getHeaderImageBase64();

    const eventSummaryHTML = `
        <!-- Page 1: Event Summary - Dean-SA Format -->
        <div class="report-page">
            <div class="report-content">
                <div class="report-header" style="text-align: center; margin-bottom: 30px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                        <img src="${headerImageBase64}" style="height: 50px; width: auto;">
                        <div style="flex: 1; text-align: center; margin: 0 20px;">
                            <h2 style="color: #002d72; font-size: 16px; font-weight: bold; margin: 0; margin-bottom: 5px;">Vignan's Institute of Information Technology (Autonomous)</h2>
                            <p style="font-size: 10px; margin: 2px 0; color: #333;">(Approved by AICTE-New Delhi & Affiliated to JNTU-GV, Vizianagaram)</p>
                            <p style="font-size: 10px; margin: 2px 0; color: #333;">Beside VSEZ, Duvvada, Vadlapudi Post, Gajuwaka, Visakhapatnam - 530 049.</p>
                        </div>
                        <img src="${headerImageBase64}" style="height: 50px; width: auto;">
                    </div>
                    <hr style="border: 1px solid #000; margin: 15px 0;">
                </div>
                
                <div style="margin: 0 20px;">
                    <h3 style="color: #000; font-size: 16px; font-weight: bold; text-align: center; margin-bottom: 25px; text-decoration: underline;">Event Summary</h3>
                    
                    <table style="width: 100%; border-collapse: collapse; font-size: 12px; margin-bottom: 40px; margin-left: auto; margin-right: auto;">
                        <tr>
                            <td style="border: 1px solid #000; padding: 10px; width: 8%; text-align: center; font-weight: bold; background-color: #f8f9fa;">a</td>
                            <td style="border: 1px solid #000; padding: 10px; width: 30%; font-weight: bold; background-color: #f8f9fa;">Event Name</td>
                            <td style="border: 1px solid #000; padding: 10px; width: 62%;">${currentFormData.eventName}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 10px; text-align: center; font-weight: bold; background-color: #f8f9fa;">b</td>
                            <td style="border: 1px solid #000; padding: 10px; font-weight: bold; background-color: #f8f9fa;">Date and Time</td>
                            <td style="border: 1px solid #000; padding: 10px;">${currentFormData.eventDate} & ${currentFormData.eventTime}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 10px; text-align: center; font-weight: bold; background-color: #f8f9fa;">c</td>
                            <td style="border: 1px solid #000; padding: 10px; font-weight: bold; background-color: #f8f9fa;">Venue</td>
                            <td style="border: 1px solid #000; padding: 10px;">${currentFormData.venue}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 10px; text-align: center; font-weight: bold; background-color: #f8f9fa;">d</td>
                            <td style="border: 1px solid #000; padding: 10px; font-weight: bold; background-color: #f8f9fa;">Resource Person</td>
                            <td style="border: 1px solid #000; padding: 10px;">${currentFormData.resourcePerson}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 10px; text-align: center; font-weight: bold; background-color: #f8f9fa;">e</td>
                            <td style="border: 1px solid #000; padding: 10px; font-weight: bold; background-color: #f8f9fa;">Students Participated</td>
                            <td style="border: 1px solid #000; padding: 10px;">${currentFormData.students}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 10px; text-align: center; font-weight: bold; background-color: #f8f9fa;">f</td>
                            <td style="border: 1px solid #000; padding: 10px; font-weight: bold; background-color: #f8f9fa;">Faculty Participated</td>
                            <td style="border: 1px solid #000; padding: 10px;">${currentFormData.faculty || 'N/A'}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 10px; text-align: center; font-weight: bold; background-color: #f8f9fa;">g</td>
                            <td style="border: 1px solid #000; padding: 10px; font-weight: bold; background-color: #f8f9fa;">Event Coordinator</td>
                            <td style="border: 1px solid #000; padding: 10px;">${currentFormData.eventCoordinator}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 10px; text-align: center; font-weight: bold; background-color: #f8f9fa;">h</td>
                            <td style="border: 1px solid #000; padding: 10px; font-weight: bold; background-color: #f8f9fa;">Organized by</td>
                            <td style="border: 1px solid #000; padding: 10px;">${currentFormData.organisedBy}</td>
                        </tr>
                    </table>
                    
                    <div style="display: flex; justify-content: space-between; align-items: flex-end">
                        <div style="text-align: center; min-width: 180px;">
                            
                            <p style="font-size: 12px; margin: 0; font-weight: bold;">Event Coordinator</p>
                            <p style="font-size: 10px; margin: 2px 0; color: #666;">${currentFormData.eventCoordinatorName || ''}</p>
                        </div>
                        <div style="text-align: center; min-width: 180px;">
                            
                            <p style="font-size: 12px; margin: 0; font-weight: bold;">HOD</p>
                            <p style="font-size: 10px; margin: 2px 0; color: #666;">${currentFormData.hod || ''}</p>
                        </div>
                        <div style="text-align: center; min-width: 180px;">
                            
                            <p style="font-size: 12px; margin: 0; font-weight: bold;">Principal</p>
                            <p style="font-size: 10px; margin: 2px 0; color: #666;">${currentFormData.principal || ''}</p>
                        </div>
                        <div style="text-align: center; min-width: 180px;">
                           
                            <p style="font-size: 12px; margin: 0; font-weight: bold;">Dean-SA</p>
                            <p style="font-size: 10px; margin: 2px 0; color: #666;">${currentFormData.deanSA || ''}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="page-break"></div>

        <!-- Page 2: Circular -->
        <div class="report-page">
            <div class="report-content">
                <div class="report-header" style="text-align: center; margin-bottom: 30px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                        <img src="${headerImageBase64}" style="height: 50px; width: auto;">
                        <div style="flex: 1; text-align: center; margin: 0 20px;">
                            <h2 style="color: #002d72; font-size: 16px; font-weight: bold; margin: 0; margin-bottom: 5px;">Vignan's Institute of Information Technology (Autonomous)</h2>
                            <p style="font-size: 10px; margin: 2px 0; color: #333;">(Approved by AICTE-New Delhi & Affiliated to JNTU-GV, Vizianagaram)</p>
                            <p style="font-size: 10px; margin: 2px 0; color: #333;">Beside VSEZ, Duvvada, Vadlapudi Post, Gajuwaka, Visakhapatnam - 530 049.</p>
                        </div>
                        <img src="${headerImageBase64}" style="height: 50px; width: auto;">
                    </div>
                    <hr style="border: 1px solid #c9082a; margin: 15px 0;">
                </div>
                <div style="margin: 0 20px;">
                    <h3 style="color: #002d72; font-size: 18px; font-weight: bold; margin-bottom: 20px; border-bottom: 2px solid #c9082a; padding-bottom: 8px; text-align: center;">CIRCULAR</h3>
                    <div style="font-size: 13px; line-height: 1.6;">
                        <p style="margin: 15px 0; text-align: right;"><strong>Date:</strong> ${currentFormData.eventDate}</p>
                        <p style="margin: 20px 0;"><strong>To:</strong> ${currentFormData.recipient}</p>
                        <p style="margin: 20px 0;"><strong>Subject:</strong> ${currentFormData.eventName}</p>
                        <div style="margin: 25px 0; text-align: justify; text-indent: 30px;">
                            <p>${currentFormData.letterBody}</p>
                        </div>
                        <div style="margin: 25px 0; background-color: #f8f9fa; padding: 15px; border-left: 4px solid #002d72;">
                            <p style="margin: 8px 0;"><strong>Venue:</strong> ${currentFormData.circularVenue}</p>
                            <p style="margin: 8px 0;"><strong>Time:</strong> ${currentFormData.circularTime}</p>
                            <p style="margin: 8px 0;"><strong>Event Coordinator:</strong> ${currentFormData.circularCoordinator}</p>
                            ${currentFormData.studentCoordinator ? `<p style="margin: 8px 0;"><strong>Student Coordinator:</strong> ${currentFormData.studentCoordinator}</p>` : ''}
                        </div>
                        ${currentFormData.copyTo ? `
                        <div style="margin: 25px 0;">
                            <p style="margin-bottom: 10px;"><strong>Copy To:</strong></p>
                            <p style="margin-left: 30px; font-style: italic;">${currentFormData.copyTo}</p>
                        </div>` : ''}
                    </div>
                </div>
            </div>
        </div>
        <div class="page-break"></div>

        <!-- Page 3: About the Event -->
        <div class="report-page">
            <div class="report-content">
                <div class="report-header" style="text-align: center; margin-bottom: 30px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                        <img src="${headerImageBase64}" style="height: 50px; width: auto;">
                        <div style="flex: 1; text-align: center; margin: 0 20px;">
                            <h2 style="color: #002d72; font-size: 16px; font-weight: bold; margin: 0; margin-bottom: 5px;">Vignan's Institute of Information Technology (Autonomous)</h2>
                            <p style="font-size: 10px; margin: 2px 0; color: #333;">(Approved by AICTE-New Delhi & Affiliated to JNTU-GV, Vizianagaram)</p>
                            <p style="font-size: 10px; margin: 2px 0; color: #333;">Beside VSEZ, Duvvada, Vadlapudi Post, Gajuwaka, Visakhapatnam - 530 049.</p>
                        </div>
                        <img src="${headerImageBase64}" style="height: 50px; width: auto;">
                    </div>
                    <hr style="border: 1px solid #c9082a; margin: 15px 0;">
                </div>
                <div style="margin: 0 20px;">
                    <h3 style="color: #002d72; font-size: 18px; font-weight: bold; margin-bottom: 20px; border-bottom: 2px solid #c9082a; padding-bottom: 8px; text-align: center;">ABOUT THE EVENT</h3>
                    <div style="font-size: 13px; line-height: 1.6; text-align: justify; text-indent: 30px; margin: 20px 0;">
                        <p>${currentFormData.aboutEvent}</p>
                    </div>
                    <div style="margin-top: 50px;">
                        <div style="display: inline-block; text-align: center;">
                            <div style="border-bottom: 2px solid #000; width: 200px; margin-bottom: 8px; height: 40px;"></div>
                            <p style="font-size: 12px; margin: 0; font-weight: bold;">Dean - Student Affairs</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="page-break"></div>

        <!-- Page 4: Event Report -->
        <div class="report-page">
            <div class="report-content">
                <div class="report-header" style="text-align: center; margin-bottom: 30px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                        <img src="${headerImageBase64}" style="height: 50px; width: auto;">
                        <div style="flex: 1; text-align: center; margin: 0 20px;">
                            <h2 style="color: #002d72; font-size: 16px; font-weight: bold; margin: 0; margin-bottom: 5px;">Vignan's Institute of Information Technology (Autonomous)</h2>
                            <p style="font-size: 10px; margin: 2px 0; color: #333;">(Approved by AICTE-New Delhi & Affiliated to JNTU-GV, Vizianagaram)</p>
                            <p style="font-size: 10px; margin: 2px 0; color: #333;">Beside VSEZ, Duvvada, Vadlapudi Post, Gajuwaka, Visakhapatnam - 530 049.</p>
                        </div>
                        <img src="${headerImageBase64}" style="height: 50px; width: auto;">
                    </div>
                    <hr style="border: 1px solid #c9082a; margin: 15px 0;">
                </div>
                <div style="margin: 0 20px;">
                    <h3 style="color: #002d72; font-size: 18px; font-weight: bold; margin-bottom: 20px; border-bottom: 2px solid #c9082a; padding-bottom: 8px; text-align: center;">EVENT REPORT</h3>
                    <div style="font-size: 13px; line-height: 1.6;">
                        <div style="margin: 20px 0;">
                            <h4 style="color: #002d72; font-size: 14px; margin: 15px 0; border-bottom: 1px solid #ddd; padding-bottom: 5px;">Event Details</h4>
                            <p style="margin: 10px 0;"><strong>Event Name:</strong> ${currentFormData.eventName}</p>
                            <p style="margin: 10px 0;"><strong>Date & Time:</strong> ${currentFormData.eventDate} at ${currentFormData.eventTime}</p>
                            <p style="margin: 10px 0;"><strong>Venue:</strong> ${currentFormData.venue}</p>
                            <p style="margin: 10px 0;"><strong>Organized by:</strong> ${currentFormData.organisedBy}</p>
                            ${currentFormData.inAssociationWith ? `<p style="margin: 10px 0;"><strong>In Association with:</strong> ${currentFormData.inAssociationWith}</p>` : ''}
                        </div>
                        
                        <div style="margin: 20px 0;">
                            <h4 style="color: #002d72; font-size: 14px; margin: 15px 0; border-bottom: 1px solid #ddd; padding-bottom: 5px;">Resource Person</h4>
                            <p style="margin: 10px 0; text-align: justify;">${currentFormData.resourcePerson}</p>
                        </div>
                        
                        <div style="margin: 20px 0;">
                            <h4 style="color: #002d72; font-size: 14px; margin: 15px 0; border-bottom: 1px solid #ddd; padding-bottom: 5px;">Participation</h4>
                            <p style="margin: 10px 0;"><strong>Number of Students Participated:</strong> ${currentFormData.students}</p>
                            ${currentFormData.faculty ? `<p style="margin: 10px 0;"><strong>Number of Faculty Participated:</strong> ${currentFormData.faculty}</p>` : ''}
                            <p style="margin: 10px 0;"><strong>Event Coordinator:</strong> ${currentFormData.eventCoordinator}</p>
                        </div>
                        
                        <div style="margin: 20px 0;">
                            <h4 style="color: #002d72; font-size: 14px; margin: 15px 0; border-bottom: 1px solid #ddd; padding-bottom: 5px;">About the Event</h4>
                            <p style="margin: 10px 0; text-align: justify; text-indent: 20px;">${currentFormData.aboutEvent}</p>
                        </div>
                    </div>
                    
                    <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-top: 60px; margin-bottom: 20px;">
                        <div style="text-align: center; min-width: 180px;">
                            
                            <p style="font-size: 12px; margin: 0; font-weight: bold;">Event Coordinator</p>
                            <p style="font-size: 10px; margin: 2px 0; color: #666;">${currentFormData.eventCoordinatorName || ''}</p>
                        </div>
                        <div style="text-align: center; min-width: 180px;">
                            
                            <p style="font-size: 12px; margin: 0; font-weight: bold;">HOD</p>
                            <p style="font-size: 10px; margin: 2px 0; color: #666;">${currentFormData.hod || ''}</p>
                        </div>
                        <div style="text-align: center; min-width: 180px;">
                            
                            <p style="font-size: 12px; margin: 0; font-weight: bold;">Principal</p>
                            <p style="font-size: 10px; margin: 2px 0; color: #666;">${currentFormData.principal || ''}</p>
                        </div>
                        <div style="text-align: center; min-width: 180px;">
                            
                            <p style="font-size: 12px; margin: 0; font-weight: bold;">Dean-SA</p>
                            <p style="font-size: 10px; margin: 2px 0; color: #666;">${currentFormData.deanSA || ''}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ${uploadedGeoPhotosBase64.length > 0 ? `
        <div class="page-break"></div>
        <!-- Geo-Tagged Photos Page -->
        <div class="report-page">
            <div class="report-content">
                <div class="report-header" style="text-align: center; margin-bottom: 30px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                        <img src="${headerImageBase64}" style="height: 50px; width: auto;">
                        <div style="flex: 1; text-align: center; margin: 0 20px;">
                            <h2 style="color: #002d72; font-size: 16px; font-weight: bold; margin: 0; margin-bottom: 5px;">Vignan's Institute of Information Technology (Autonomous)</h2>
                            <p style="font-size: 10px; margin: 2px 0; color: #333;">(Approved by AICTE-New Delhi & Affiliated to JNTU-GV, Vizianagaram)</p>
                            <p style="font-size: 10px; margin: 2px 0; color: #333;">Beside VSEZ, Duvvada, Vadlapudi Post, Gajuwaka, Visakhapatnam - 530 049.</p>
                        </div>
                        <img src="${headerImageBase64}" style="height: 50px; width: auto;">
                    </div>
                    <hr style="border: 1px solid #c9082a; margin: 15px 0;">
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
                    <!-- Signature fields for this page -->
                    <div style="margin-top: 40px; display: flex; justify-content: space-between;">
                        <div style="text-align: center; min-width: 180px;">
                            
                            <p style="font-size: 12px; margin: 0; font-weight: bold;">Event Coordinator</p>
                            <p style="font-size: 10px; margin: 2px 0; color: #666;">${currentFormData.eventCoordinatorName || ''}</p>
                        </div>
                        <div style="text-align: center; min-width: 180px;">
                            
                            <p style="font-size: 12px; margin: 0; font-weight: bold;">HOD</p>
                            <p style="font-size: 10px; margin: 2px 0; color: #666;">${currentFormData.hod || ''}</p>
                        </div>
                        <div style="text-align: center; min-width: 180px;">
                            
                            <p style="font-size: 12px; margin: 0; font-weight: bold;">Principal</p>
                            <p style="font-size: 10px; margin: 2px 0; color: #666;">${currentFormData.principal || ''}</p>
                        </div>
                        <div style="text-align: center; min-width: 180px;">
                            
                            <p style="font-size: 12px; margin: 0; font-weight: bold;">Dean-SA</p>
                            <p style="font-size: 10px; margin: 2px 0; color: #666;">${currentFormData.deanSA || ''}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>` : ''}
        ${uploadedNewsPaperBase64.length > 0 ? `
        <div class="page-break"></div>
        <!-- News Paper Cutting Page -->
        <div class="report-page">
            <div class="report-content">
                <div class="report-header" style="text-align: center; margin-bottom: 30px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                        <img src="${headerImageBase64}" style="height: 50px; width: auto;">
                        <div style="flex: 1; text-align: center; margin: 0 20px;">
                            <h2 style="color: #002d72; font-size: 16px; font-weight: bold; margin: 0; margin-bottom: 5px;">Vignan's Institute of Information Technology (Autonomous)</h2>
                            <p style="font-size: 10px; margin: 2px 0; color: #333;">(Approved by AICTE-New Delhi & Affiliated to JNTU-GV, Vizianagaram)</p>
                            <p style="font-size: 10px; margin: 2px 0; color: #333;">Beside VSEZ, Duvvada, Vadlapudi Post, Gajuwaka, Visakhapatnam - 530 049.</p>
                        </div>
                        <img src="${headerImageBase64}" style="height: 50px; width: auto;">
                    </div>
                    <hr style="border: 1px solid #c9082a; margin: 15px 0;">
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
                <div class="report-header" style="text-align: center; margin-bottom: 30px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                        <img src="${headerImageBase64}" style="height: 50px; width: auto;">
                        <div style="flex: 1; text-align: center; margin: 0 20px;">
                            <h2 style="color: #002d72; font-size: 16px; font-weight: bold; margin: 0; margin-bottom: 5px;">Vignan's Institute of Information Technology (Autonomous)</h2>
                            <p style="font-size: 10px; margin: 2px 0; color: #333;">(Approved by AICTE-New Delhi & Affiliated to JNTU-GV, Vizianagaram)</p>
                            <p style="font-size: 10px; margin: 2px 0; color: #333;">Beside VSEZ, Duvvada, Vadlapudi Post, Gajuwaka, Visakhapatnam - 530 049.</p>
                        </div>
                        <img src="${headerImageBase64}" style="height: 50px; width: auto;">
                    </div>
                    <hr style="border: 1px solid #c9082a; margin: 15px 0;">
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
                <div class="report-header" style="text-align: center; margin-bottom: 30px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                        <img src="${headerImageBase64}" style="height: 50px; width: auto;">
                        <div style="flex: 1; text-align: center; margin: 0 20px;">
                            <h2 style="color: #002d72; font-size: 16px; font-weight: bold; margin: 0; margin-bottom: 5px;">Vignan's Institute of Information Technology (Autonomous)</h2>
                            <p style="font-size: 10px; margin: 2px 0; color: #333;">(Approved by AICTE-New Delhi & Affiliated to JNTU-GV, Vizianagaram)</p>
                            <p style="font-size: 10px; margin: 2px 0; color: #333;">Beside VSEZ, Duvvada, Vadlapudi Post, Gajuwaka, Visakhapatnam - 530 049.</p>
                        </div>
                        <img src="${headerImageBase64}" style="height: 50px; width: auto;">
                    </div>
                    <hr style="border: 1px solid #c9082a; margin: 15px 0;">
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

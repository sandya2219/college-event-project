// Event Report Generation System - Main JavaScript

// Global variables
let currentFormData = {};
let uploadedBrochureBase64 = null;
let uploadedGeoPhotosBase64 = [];
let uploadedNewsPaperBase64 = [];
let uploadedStudentListHtml = null;
let uploadedFacultyListHtml = null;
let headerImageBase64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABLAAAACgCAYAAAAmwflKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPeus852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4SU";
// Function to get the EXACT Dean-SA header as IMAGE ONLY
function getDeanSAHeaderHTML() {
    return `
    <div style="width: 100%; background: white; padding: 0; margin: 0; text-align: center;">
        <img src="assets/images/dean_sa_header.png" style="width: 100%; height: auto; max-height: 120px; object-fit: contain; display: block;">
    </div>`;
}

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeSplashScreen();
    initializeCarousel();
    initializeDateTimePickers();
});

// Splash screen initialization
function initializeSplashScreen() {
    // Initialize Lottie animation
    const animation = lottie.loadAnimation({
        container: document.getElementById('lottie-animation'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://assets9.lottiefiles.com/packages/lf20_5wnxhb7m.json'
    });

    // Hide splash screen after 3 seconds
    setTimeout(() => {
        document.getElementById('splash-screen').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('splash-screen').style.display = 'none';
        }, 1000);
    }, 3000);
}

// Carousel functionality
let currentSlide = 0;
let totalSlides = 0;

function initializeCarousel() {
    const slides = document.querySelectorAll('.carousel-item');
    totalSlides = slides.length;
    updateCarousel();
    
    // Auto-advance carousel
    setInterval(nextSlide, 3000);
}

function updateCarousel() {
    document.getElementById('carouselInner').style.transform = `translateX(-${currentSlide * 100}%)`;
    const dots = document.getElementById('carouselDots');
    dots.innerHTML = '';
    
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('button');
        dot.className = `w-3 h-3 rounded-full ${i === currentSlide ? 'bg-[#c9082a]' : 'bg-gray-300'}`;
        dot.onclick = () => {
            currentSlide = i;
            updateCarousel();
        };
        dots.appendChild(dot);
    }
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

// Date and time picker initialization
function initializeDateTimePickers() {
    flatpickr("#eventTimePicker", {
        enableTime: true,
        noCalendar: true,
        dateFormat: "h:i K",
        time_24hr: false,
        defaultHour: 12,
        minuteIncrement: 1,
    });

    flatpickr("#circularTimePicker", {
        enableTime: true,
        noCalendar: true,
        dateFormat: "h:i K",
        time_24hr: false,
        defaultHour: 12,
        minuteIncrement: 1,
    });
}

// Navigation functions
function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(`${dropdownId}-dropdown`);
    dropdown.classList.toggle('hidden');
}

function selectEvent(eventName) {
    // Do not auto-fill event name. Just show the event section.
    showSection('event');
}

function showSection(section) {
    document.querySelectorAll('.form-section').forEach(el => el.classList.add('hidden'));
    document.getElementById('preview-section').classList.add('hidden');
    document.getElementById(section + '-section').classList.remove('hidden');
}

// Utility function to get header image
function getHeaderImageBase64() {
    return headerImageBase64;
}

// Auto-generate "About the Event" text
function generateAboutEventText() {
    const form = document.getElementById('event-form');
    const eventName = form.eventName.value;
    const resourcePerson = form.resourcePerson.value;

    if (!eventName) {
        alert("Please enter the Event Name first.");
        return;
    }

    let autoText = "";
    if (eventName.toLowerCase().includes("blood")) {
        autoText = `The "${eventName}" was organized to create awareness about the importance of blood donation and provide an opportunity for students and faculty to contribute to society. ${resourcePerson ? `Esteemed guests such as ${resourcePerson} shared their insights and motivated the participants.` : ""} The event included blood donation drives, awareness sessions by medical professionals, and distribution of certificates to donors.`;
    } else if (eventName.toLowerCase().includes("technical") || eventName.toLowerCase().includes("hackathon")) {
        autoText = `The "${eventName}" event provided a platform for participants to showcase their technical skills and innovation. ${resourcePerson ? `Experts like ${resourcePerson} guided the attendees through workshops and discussions.` : ""} The event encouraged collaboration, problem-solving, and the development of cutting-edge solutions.`;
    } else if (eventName.toLowerCase().includes("cultural") || eventName.toLowerCase().includes("fest")) {
        autoText = `The "${eventName}" event was a vibrant celebration of culture, talent, and creativity. Participants engaged in performances, competitions, and exhibitions that highlighted the rich diversity of our community. ${resourcePerson ? `Special guests, including ${resourcePerson}, graced the occasion and inspired everyone with their presence.` : ""}`;
    } else if (eventName.toLowerCase().includes("sports")) {
        autoText = `The "${eventName}" event brought together athletes and sports enthusiasts for a day of competition, teamwork, and fun. ${resourcePerson ? `Guests such as ${resourcePerson} encouraged the participants and emphasized the importance of sportsmanship and fitness.` : ""} The event featured a variety of sports activities and promoted a healthy and active lifestyle.`;
    } else {
        autoText = `The "${eventName}" event was a resounding success, bringing together students, faculty, and guests for a day of learning and engagement. ${resourcePerson ? `Distinguished speakers like ${resourcePerson} shared valuable insights and inspired the audience.` : ""} The event included discussions, activities, and networking opportunities that enriched the experience for all attendees.`;
    }

    form.aboutEvent.value = autoText;
}

// Generate Report function - Main entry point
function generateReport() {
    console.log('Generate Report button clicked!');

    // Get form data
    const form = document.getElementById('event-form');
    const formData = new FormData(form);

    // Store form data globally
    currentFormData = {
        eventName: formData.get('eventName'),
        eventDate: formData.get('eventDate'),
        eventTime: formData.get('eventTime'),
        venue: formData.get('venue'),
        resourcePerson: formData.get('resourcePerson'),
        students: formData.get('students'),
        faculty: formData.get('faculty'),
        eventCoordinator: formData.get('eventCoordinator'),
        aboutEvent: formData.get('aboutEvent'),
        organisedBy: formData.get('organisedBy'),
        inAssociationWith: formData.get('inAssociationWith'),
        signatureField1: formData.get('signatureField1'),
        signatureField2: formData.get('signatureField2'),
        signatureField3: formData.get('signatureField3'),
        // Circular fields
        recipient: formData.get('recipient'),
        letterBody: formData.get('letterBody'),
        circularVenue: formData.get('circularVenue'),
        circularTime: formData.get('circularTime'),
        circularCoordinator: formData.get('circularCoordinator'),
        studentCoordinator: formData.get('studentCoordinator'),
        copyTo: formData.get('copyTo')
    };

    console.log('Form data collected:', currentFormData);

    // Validate required fields
    if (!currentFormData.eventName || !currentFormData.eventDate) {
        alert('Please fill in at least Event Name and Event Date');
        return;
    }

    // Call the showPreview function from reportGenerator.js
    showPreview();
}

// Edit report function
function editReport() {
    document.getElementById('preview-section').classList.add('hidden');
    document.getElementById('event-section').classList.remove('hidden');
}

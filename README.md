# Vignan's Institute Event Review System

A comprehensive web application for managing and reviewing various events at Vignan's Institute of Information Technology.

## 📋 Features

- **Dashboard Navigation**: Organized sidebar with 4 main categories
- **Dynamic Forms**: Comprehensive event submission forms
- **Document Generation**: PDF and Word document export capabilities
- **Responsive Design**: Mobile-first approach with clean UI
- **File Management**: Image and Excel file upload functionality
- **Print-Friendly**: Optimized for document generation and printing

## 🏗️ Project Structure

```
vignan-event-system/
├── index.html              # Main application file
├── assets/
│   ├── css/
│   │   └── styles.css      # Main stylesheet
│   ├── js/
│   │   └── main.js         # Main JavaScript file
│   └── images/
│       └── logo.png        # Institute logo
├── package.json            # Node.js package configuration
├── firebase.json           # Firebase deployment config
├── manifest.json           # PWA manifest
├── .gitignore             # Git ignore rules
├── LICENSE                # MIT License
├── CHANGELOG.md           # Version history
└── CONTRIBUTING.md        # Contribution guidelines
```

## 🚀 Quick Start

### Option 1: Direct Usage
1. Open `index.html` in any modern web browser
2. No additional setup required - all dependencies are included

### Option 2: Development Setup
```bash
# Clone or download the project
cd vignan-event-system

# If using Node.js for development
npm install

# Serve locally (optional)
npx http-server .
```

## 📱 Categories & Features

### 🏠 Home
Welcome page with institute information and system overview.

### 📚 Curricular Activities
- Classroom lectures (theory)
- Laboratory sessions
- Tutorials/problem-solving sessions
- Mini/Major Projects
- Internships (credit-based)
- Industrial visits (curriculum-embedded)
- Curriculum-based MOOC/SWAYAM/NPTEL courses
- Internal & External Examinations
- Value Added Courses in curriculum

### 🎯 Co-Curricular Activities
- Coding competitions / hackathons
- Technical clubs (IEEE, CSI, SAE)
- Guest lectures & expert talks
- Industrial visits (beyond curriculum)
- Project exhibitions
- Patent filing workshops
- Entrepreneurship & innovation activities
- Certification programs (Python, AI, CAD)
- Research paper writing & publishing
- Technical paper presentations

### 🎨 Extra-Curricular Activities
- Sports competitions
- Cultural fests & annual day
- NSS/NCC activities
- Yoga & wellness programs
- Literary competitions (debate, poetry)
- Art & craft exhibitions
- Photography & theatre clubs
- Social service projects
- Environmental awareness drives
- National/International Day celebrations

### 🏛️ Non-Statutory Committees
- Planning and Monitoring Committee (P&MC)
- Academic Planning & Monitoring Committee (AP&MC)
- Admission Advisory Committee (AAC)
- Research and Development Advisory Committee (R&D AC)
- Examination and Evaluation Committee (EEC)
- Training & Placement Committee (T&PC)
- Code of Conduct Monitoring Committee (CCMC)
- Grievances Redressal Committee (GRC)
- Internal Complaints Committee (ICC)
- Purchase Committee (PC)
- Library Advisory Committee (LAC)
- Hostel Management Committee (HMC)
- Research Ethics Committee (REC)
- SC&ST Committee (SC&ST C)
- Student Activity Council (SAC)
- Student Welfare Committee (SWC)
- Anti-Ragging Committee (ARC)
- Academic & Administrative Audit Committee (AAA)
- Dept. Development Committee & PAQIC

## 📝 Form Fields

Each event form includes:
- **Theme** (Mandatory)
- **Activity Name** (Mandatory)
- **Mode of Conduct** (Online/Offline - Mandatory)
- **Level of Activity** (Optional)
- **Participants** (Students & Faculty - Mandatory)
- **Brochure** (Image Upload - Optional)
- **Description** (Mandatory)
- **Objectives** (Mandatory)
- **Photos** (Multiple Image Upload - Mandatory)
- **Feedback** (Optional)
- **Student List** (Excel Upload - Mandatory)
- **Faculty Coordinators** (Dynamic Table)

## 🔧 Technical Details

### Technologies Used
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with responsive design
- **PDF Generation**: jsPDF library
- **Word Generation**: docx library
- **File Handling**: HTML5 File API
- **Storage**: localStorage for form persistence

### Browser Compatibility
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📦 Deployment

### Firebase Hosting (Recommended)
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

### Other Hosting Options
- GitHub Pages
- Netlify
- Vercel
- Any static web hosting service

## 🛠️ Customization

### Branding
- Update colors in the CSS file
- Replace logo in `assets/images/`
- Modify institute name in HTML

### Adding Categories
1. Update the navigation structure in `index.html`
2. Add corresponding dropdown options
3. Update the JavaScript navigation handlers

### Form Fields
Modify the form generation function in the JavaScript section to add/remove fields.

## 🤝 Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Create an issue in the project repository
- Contact the development team
- Check the documentation

## 🔄 Version History

See [CHANGELOG.md](CHANGELOG.md) for a complete version history.

---

**Vignan's Institute of Information Technology**  
*Empowering Education Through Technology*

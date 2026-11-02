/* ==========================================================================
   LPU Academic Bookstore — vanilla JavaScript
   All catalogue entries are illustrative sample data.
   ========================================================================== */

const books = [
  { id: 1, title: "Engineering Mathematics I", author: "B. S. Grewal", department: "COMMON", semester: 1, category: "Textbook", subject: "Calculus, matrices and differential equations", price: 620, description: "An illustrative first-year mathematics resource covering foundational engineering mathematics topics.", coverColor: "#345747", keywords: "maths mathematics calculus algebra first year" },
  { id: 2, title: "Programming with Python", author: "John V. Guttag", department: "CSE", semester: 1, category: "Reference", subject: "Programming fundamentals and problem solving", price: 540, description: "A sample programming reference for learners building a foundation in computational thinking and Python.", coverColor: "#a16f43", keywords: "python coding programming computer science" },
  { id: 3, title: "Engineering Physics", author: "H. K. Malik and A. K. Singh", department: "COMMON", semester: 1, category: "Textbook", subject: "Physics principles for engineers", price: 480, description: "A sample first-year physics entry.", coverColor: "#405e7a", keywords: "physics optics semiconductor mechanics" },
  { id: 4, title: "Introduction to Electrical Engineering", author: "D. P. Kothari", department: "ECE", semester: 1, category: "Textbook", subject: "Electrical circuits and fundamentals", price: 690, description: "An illustrative introduction to electrical concepts and basic circuits.", coverColor: "#a05d49", keywords: "electrical circuits current voltage" },
  { id: 5, title: "Engineering Graphics", author: "N. D. Bhatt", department: "ME", semester: 1, category: "Practical & Lab Manual", subject: "Technical drawing and projections", price: 390, description: "A sample drawing resource for practising engineering graphics.", coverColor: "#6c7452", keywords: "drawing graphics projections workshop" },
  { id: 6, title: "C Programming and Data Structures", author: "Reema Thareja", department: "CSE", semester: 2, category: "Textbook", subject: "C, arrays, pointers, and data structures", price: 590, description: "An illustrative text for learning C programming and data structures.", coverColor: "#345c67", keywords: "c language data structures coding" },
  { id: 7, title: "Discrete Mathematics", author: "Kenneth H. Rosen", department: "CSE", semester: 2, category: "Reference", subject: "Logic, sets, relations and graphs", price: 760, description: "A reference-style sample for discrete mathematics.", coverColor: "#785b7b", keywords: "logic graph theory sets proofs" },
  { id: 8, title: "Electronic Devices and Circuits", author: "Boylestad and Nashelsky", department: "ECE", semester: 2, category: "Textbook", subject: "Semiconductors, diodes and transistors", price: 820, description: "A sample electronics title covering fundamental electronic devices.", coverColor: "#7a5a42", keywords: "electronics semiconductor transistor diode" },
  { id: 9, title: "Engineering Thermodynamics", author: "P. K. Nag", department: "ME", semester: 2, category: "Textbook", subject: "Energy, heat and thermodynamic systems", price: 720, description: "An illustrative mechanical-engineering resource.", coverColor: "#8a6a36", keywords: "heat energy thermodynamics" },
  { id: 10, title: "Strength of Materials", author: "R. K. Bansal", department: "CE", semester: 2, category: "Textbook", subject: "Stress, strain and structural behaviour", price: 680, description: "A sample civil-engineering text.", coverColor: "#496c5c", keywords: "civil structures stress strain materials" },
  { id: 11, title: "Data Structures and Algorithms", author: "E. Horowitz and S. Sahni", department: "CSE", semester: 3, category: "Reference", subject: "Algorithm analysis, trees and graphs", price: 650, description: "A sample reference for data structures and algorithms.", coverColor: "#354a70", keywords: "algorithms dsa trees graphs complexity" },
  { id: 12, title: "Object-Oriented Programming with C++", author: "E. Balagurusamy", department: "CSE", semester: 3, category: "Textbook", subject: "Classes, inheritance and polymorphism", price: 560, description: "An illustrative C++ resource.", coverColor: "#8a594d", keywords: "cpp c++ object oriented classes" },
  { id: 13, title: "Signals and Systems", author: "Alan V. Oppenheim", department: "ECE", semester: 3, category: "Reference", subject: "Signals, systems and transforms", price: 880, description: "A sample reference for signals and systems.", coverColor: "#3e6b68", keywords: "signals systems transforms communication" },
  { id: 14, title: "Kinematics of Machines", author: "R. S. Khurmi", department: "ME", semester: 3, category: "Textbook", subject: "Mechanisms, gears and motion", price: 610, description: "An illustrative mechanical-engineering title.", coverColor: "#82663f", keywords: "mechanics motion machines gears" },
  { id: 15, title: "Structural Analysis", author: "C. S. Reddy", department: "CE", semester: 3, category: "Textbook", subject: "Analysis of beams and structures", price: 710, description: "A sample text for structural analysis.", coverColor: "#57674b", keywords: "civil structural beams loads" },
  { id: 16, title: "Operating System Concepts", author: "Silberschatz, Galvin and Gagne", department: "CSE", semester: 4, category: "Reference", subject: "Processes, memory and file systems", price: 840, description: "An operating-systems reference.", coverColor: "#334b3c", keywords: "os linux processes memory file system" },
  { id: 17, title: "Database System Concepts", author: "Silberschatz, Korth and Sudarshan", department: "CSE", semester: 4, category: "Textbook", subject: "Relational databases, SQL and transactions", price: 790, description: "An illustrative database resource.", coverColor: "#715d82", keywords: "database sql dbms data" },
  { id: 18, title: "Digital Signal Processing", author: "John G. Proakis", department: "ECE", semester: 4, category: "Reference", subject: "Discrete signals and digital filters", price: 920, description: "A sample reference for digital signal processing.", coverColor: "#3e6577", keywords: "dsp digital signal filters" },
  { id: 19, title: "Fluid Mechanics", author: "R. K. Bansal", department: "ME", semester: 5, category: "Textbook", subject: "Fluid properties, flow and applications", price: 740, description: "An illustrative fluid mechanics resource.", coverColor: "#3b6b70", keywords: "fluid flow pressure mechanical" },
  { id: 20, title: "Computer Networks", author: "Andrew S. Tanenbaum and David Wetherall", department: "CSE", semester: 5, category: "Reference", subject: "Network layers, protocols and communication", price: 890, description: "A sample networking reference.", coverColor: "#2e594b", keywords: "networking tcp ip dns internet security" },
  { id: 21, title: "Software Engineering", author: "Ian Sommerville", department: "CSE", semester: 6, category: "Textbook", subject: "Software processes, requirements and testing", price: 810, description: "An illustrative software engineering resource.", coverColor: "#796344", keywords: "software engineering agile testing" },
  { id: 22, title: "Control Systems Engineering", author: "Norman S. Nise", department: "ECE", semester: 6, category: "Textbook", subject: "Feedback, modelling and system response", price: 970, description: "A sample control systems entry.", coverColor: "#6a4e62", keywords: "control systems feedback electronics" },
  { id: 23, title: "Introduction to Machine Learning", author: "Ethem Alpaydin", department: "CSE", semester: 7, category: "Reference", subject: "Learning algorithms and model evaluation", price: 1050, description: "A sample advanced computing reference.", coverColor: "#4b6653", keywords: "ai machine learning data models" },
  { id: 24, title: "Cybersecurity Essentials Lab Manual", author: "Academic Bookstore Project Team", department: "CSE", semester: 8, category: "Practical & Lab Manual", subject: "Security principles and safe lab exercises", price: 320, description: "A fictional sample lab-manual entry.", coverColor: "#263e38", keywords: "cybersecurity security lab practical" },
  {
    id: 25,
    title: "HTML & CSS: Design and Build Websites",
    author: "Jon Duckett",
    department: "CSE",
    semester: 1,
    category: "Reference",
    subject: "HTML5 fundamentals, web page structure and CSS styling",
    price: 650,
    description: "A beginner-friendly visual guide to HTML and CSS, covering web page structure, elements, attributes, selectors and styling.",
    coverColor: "#d96b35",
    keywords: "html html5 web development elements tags hyperlinks css frontend"
  },

  {
    id: 26,
    title: "CSS: The Definitive Guide",
    author: "Eric A. Meyer and Estelle Weyl",
    department: "CSE",
    semester: 1,
    category: "Reference",
    subject: "CSS selectors, properties, layouts and responsive design",
    price: 850,
    description: "A detailed CSS reference covering selectors, typography, layouts, positioning, responsive design and visual styling.",
    coverColor: "#3576a8",
    keywords: "css styling selectors flexbox grid responsive design frontend"
  },

  {
    id: 27,
    title: "JavaScript and jQuery: Interactive Front-End Web Development",
    author: "Jon Duckett",
    department: "CSE",
    semester: 1,
    category: "Reference",
    subject: "JavaScript fundamentals, programming logic and DOM interaction",
    price: 750,
    description: "A visual introduction to JavaScript covering variables, functions, objects, events and interactive web page behaviour.",
    coverColor: "#d6a52d",
    keywords: "javascript js programming functions events dom frontend web development"
  },
  // CSE — add one book each for semesters 5, 6, 7 and 8
  { id: 28, title: "Introduction to Algorithms", author: "Thomas H. Cormen et al.", department: "CSE", semester: 5, category: "Reference", subject: "Algorithm design and analysis", price: 850, description: "A reference for studying algorithms and computational problem solving.", coverColor: "#354a70", keywords: "cse algorithms dsa" },
  { id: 29, title: "Computer Organization and Architecture", author: "William Stallings", department: "CSE", semester: 5, category: "Textbook", subject: "Computer architecture and organization", price: 780, description: "An introduction to processor and computer-system organization.", coverColor: "#496c5c", keywords: "cse architecture hardware" },
  { id: 30, title: "Design Patterns", author: "Erich Gamma et al.", department: "CSE", semester: 6, category: "Reference", subject: "Reusable software design patterns", price: 820, description: "A reference to common object-oriented software design patterns.", coverColor: "#785b7b", keywords: "cse software design patterns" },
  { id: 31, title: "Web Technologies", author: "Uttam K. Roy", department: "CSE", semester: 6, category: "Textbook", subject: "Web development and internet technologies", price: 650, description: "An illustrative resource on web technologies.", coverColor: "#3576a8", keywords: "cse web html css javascript internet" },
  { id: 32, title: "Artificial Intelligence: A Modern Approach", author: "Stuart Russell and Peter Norvig", department: "CSE", semester: 7, category: "Reference", subject: "Artificial intelligence concepts and methods", price: 1050, description: "A broad reference on artificial intelligence.", coverColor: "#4b6653", keywords: "cse ai artificial intelligence" },
  { id: 33, title: "Introduction to Information Security", author: "Michael E. Whitman and Herbert J. Mattord", department: "CSE", semester: 7, category: "Textbook", subject: "Information security principles", price: 890, description: "An introduction to information security concepts and practices.", coverColor: "#263e38", keywords: "cse cybersecurity security" },
  { id: 34, title: "Cryptography and Network Security", author: "William Stallings", department: "CSE", semester: 8, category: "Reference", subject: "Cryptography and network security", price: 920, description: "A reference covering cryptographic methods and network protection.", coverColor: "#334b3c", keywords: "cse cryptography cybersecurity networks" },
  { id: 35, title: "Cloud Computing", author: "Rajkumar Buyya et al.", department: "CSE", semester: 8, category: "Textbook", subject: "Cloud architecture and distributed systems", price: 850, description: "An introduction to cloud platforms and distributed computing.", coverColor: "#3e6577", keywords: "cse cloud computing distributed systems" },

  // ECE — add one book for semesters 1, 2, 3, 4 and 6; two for 5, 7 and 8
  { id: 36, title: "Basic Electrical Engineering", author: "D. C. Kulshreshtha", department: "ECE", semester: 1, category: "Textbook", subject: "Electrical engineering fundamentals", price: 580, description: "A foundational introduction to electrical engineering.", coverColor: "#a05d49", keywords: "ece electrical circuits" },
  { id: 37, title: "Digital Electronics", author: "Morris Mano", department: "ECE", semester: 2, category: "Textbook", subject: "Digital logic and circuit design", price: 720, description: "An introduction to digital systems and logic circuits.", coverColor: "#7a5a42", keywords: "ece digital electronics logic gates" },
  { id: 38, title: "Microelectronic Circuits", author: "Adel S. Sedra and Kenneth C. Smith", department: "ECE", semester: 3, category: "Reference", subject: "Electronic circuit analysis", price: 950, description: "A reference on semiconductor and electronic circuits.", coverColor: "#3e6b68", keywords: "ece microelectronics circuits" },
  { id: 39, title: "Communication Systems", author: "Simon Haykin", department: "ECE", semester: 4, category: "Textbook", subject: "Analog and digital communication", price: 860, description: "A study resource for communication-system fundamentals.", coverColor: "#3e6577", keywords: "ece communication signals" },
  { id: 40, title: "Electromagnetic Waves and Antennas", author: "Sophocles J. Orfanidis", department: "ECE", semester: 5, category: "Reference", subject: "Electromagnetic fields and antennas", price: 900, description: "A reference on electromagnetic waves and antenna principles.", coverColor: "#496c5c", keywords: "ece electromagnetic antennas" },
  { id: 41, title: "VLSI Design", author: "Douglas A. Pucknell and Kamran Eshraghian", department: "ECE", semester: 5, category: "Textbook", subject: "Integrated circuit design", price: 820, description: "An introduction to VLSI design concepts.", coverColor: "#715d82", keywords: "ece vlsi integrated circuits" },
  { id: 42, title: "Digital Communication", author: "John G. Proakis and Masoud Salehi", department: "ECE", semester: 6, category: "Reference", subject: "Digital communication systems", price: 940, description: "A reference on digital communication techniques.", coverColor: "#405e7a", keywords: "ece digital communication" },
  { id: 43, title: "Wireless Communications", author: "Andrea Goldsmith", department: "ECE", semester: 7, category: "Reference", subject: "Wireless communication networks", price: 880, description: "An introduction to wireless communication theory.", coverColor: "#3b6b70", keywords: "ece wireless communication" },
  { id: 44, title: "Embedded Systems", author: "Raj Kamal", department: "ECE", semester: 7, category: "Textbook", subject: "Embedded hardware and software", price: 760, description: "A study resource on embedded-system design.", coverColor: "#82663f", keywords: "ece embedded systems microcontrollers" },
  { id: 45, title: "Optical Fiber Communications", author: "Gerd Keiser", department: "ECE", semester: 8, category: "Textbook", subject: "Optical communication systems", price: 790, description: "An introduction to optical-fiber communication.", coverColor: "#6a4e62", keywords: "ece optical fiber communication" },
  { id: 46, title: "Antenna Theory", author: "Constantine A. Balanis", department: "ECE", semester: 8, category: "Reference", subject: "Antenna analysis and design", price: 980, description: "A detailed reference on antenna theory and design.", coverColor: "#354a70", keywords: "ece antenna electromagnetic" },

  // ME — add one book for semesters 1, 2, 3 and 5; two for 4, 6, 7 and 8
  { id: 47, title: "Engineering Mechanics", author: "R. C. Hibbeler", department: "ME", semester: 1, category: "Textbook", subject: "Statics and dynamics", price: 680, description: "An introduction to mechanics for engineering students.", coverColor: "#6c7452", keywords: "me mechanics statics dynamics" },
  { id: 48, title: "Manufacturing Technology", author: "P. N. Rao", department: "ME", semester: 2, category: "Textbook", subject: "Manufacturing processes", price: 740, description: "A study resource on manufacturing methods and processes.", coverColor: "#8a6a36", keywords: "me manufacturing workshop" },
  { id: 49, title: "Theory of Machines", author: "R. S. Khurmi and J. K. Gupta", department: "ME", semester: 3, category: "Textbook", subject: "Mechanisms and machine dynamics", price: 690, description: "An introduction to machine mechanisms and motion.", coverColor: "#82663f", keywords: "me machines mechanisms" },
  { id: 50, title: "Engineering Materials", author: "Kenneth G. Budinski and Michael K. Budinski", department: "ME", semester: 4, category: "Textbook", subject: "Properties of engineering materials", price: 720, description: "A resource on material properties and applications.", coverColor: "#57674b", keywords: "me materials metallurgy" },
  { id: 51, title: "Machine Design", author: "R. S. Khurmi and J. K. Gupta", department: "ME", semester: 4, category: "Reference", subject: "Design of machine elements", price: 850, description: "A reference on mechanical component design.", coverColor: "#715d82", keywords: "me machine design" },
  { id: 52, title: "Heat and Mass Transfer", author: "Yunus A. Cengel", department: "ME", semester: 5, category: "Textbook", subject: "Heat transfer principles", price: 820, description: "A study resource on heat-transfer processes.", coverColor: "#3b6b70", keywords: "me heat transfer thermal" },
  { id: 53, title: "Internal Combustion Engines", author: "V. Ganesan", department: "ME", semester: 6, category: "Textbook", subject: "Engine design and performance", price: 780, description: "An introduction to internal combustion engines.", coverColor: "#8a594d", keywords: "me engines combustion" },
  { id: 54, title: "Refrigeration and Air Conditioning", author: "C. P. Arora", department: "ME", semester: 6, category: "Reference", subject: "Cooling and refrigeration systems", price: 760, description: "A reference on refrigeration and air-conditioning systems.", coverColor: "#405e7a", keywords: "me refrigeration air conditioning" },
  { id: 55, title: "Finite Element Analysis", author: "S. S. Rao", department: "ME", semester: 7, category: "Reference", subject: "Numerical methods for engineering analysis", price: 920, description: "An introduction to finite-element methods.", coverColor: "#496c5c", keywords: "me finite element analysis" },
  { id: 56, title: "Automobile Engineering", author: "Kirpal Singh", department: "ME", semester: 7, category: "Textbook", subject: "Automotive systems and engineering", price: 690, description: "A study resource on automobile systems.", coverColor: "#a05d49", keywords: "me automobile automotive" },
  { id: 57, title: "Robotics and Control", author: "R. K. Mittal and I. J. Nagrath", department: "ME", semester: 8, category: "Textbook", subject: "Robotics and control systems", price: 840, description: "An introduction to robotics and control.", coverColor: "#334b3c", keywords: "me robotics control automation" },
  { id: 58, title: "Computational Fluid Dynamics", author: "John D. Anderson", department: "ME", semester: 8, category: "Reference", subject: "Numerical fluid-flow analysis", price: 960, description: "A reference on computational fluid dynamics.", coverColor: "#3e6577", keywords: "me cfd fluid dynamics" },

  // CE — add two books for semester 1; one for semesters 2 and 3;
  // two books for semesters 4, 5, 6, 7 and 8
  { id: 59, title: "Building Materials", author: "S. K. Duggal", department: "CE", semester: 1, category: "Textbook", subject: "Construction materials and properties", price: 620, description: "An introduction to materials used in civil engineering.", coverColor: "#496c5c", keywords: "ce building materials construction" },
  { id: 60, title: "Surveying", author: "B. C. Punmia", department: "CE", semester: 1, category: "Textbook", subject: "Surveying principles and techniques", price: 680, description: "A foundational resource on land surveying.", coverColor: "#57674b", keywords: "ce surveying land measurement" },
  { id: 61, title: "Concrete Technology", author: "M. S. Shetty", department: "CE", semester: 2, category: "Reference", subject: "Concrete properties and technology", price: 720, description: "A resource on concrete materials and applications.", coverColor: "#8a6a36", keywords: "ce concrete cement" },
  { id: 62, title: "Geotechnical Engineering", author: "B. C. Punmia", department: "CE", semester: 3, category: "Textbook", subject: "Soil mechanics and foundations", price: 750, description: "An introduction to soil and foundation engineering.", coverColor: "#82663f", keywords: "ce soil geotechnical foundation" },
  { id: 63, title: "Environmental Engineering", author: "S. K. Garg", department: "CE", semester: 4, category: "Textbook", subject: "Water supply and environmental systems", price: 790, description: "A study resource on environmental engineering.", coverColor: "#3b6b70", keywords: "ce environment water pollution" },
  { id: 64, title: "Transportation Engineering", author: "L. R. Kadiyali", department: "CE", semester: 4, category: "Reference", subject: "Highway and transportation systems", price: 820, description: "An introduction to transportation infrastructure.", coverColor: "#715d82", keywords: "ce transportation highways" },
  { id: 65, title: "Hydrology", author: "K. Subramanya", department: "CE", semester: 5, category: "Textbook", subject: "Water resources and hydrological processes", price: 760, description: "A resource on hydrology and water systems.", coverColor: "#405e7a", keywords: "ce hydrology water resources" },
  { id: 66, title: "Design of Steel Structures", author: "S. K. Duggal", department: "CE", semester: 5, category: "Reference", subject: "Steel structure analysis and design", price: 850, description: "An introduction to steel structural design.", coverColor: "#334b3c", keywords: "ce steel structures design" },
{
    id: 67,
    title: "Reinforced Concrete Design",
    author: "S. Unnikrishna Pillai and Devdas Menon",
    department: "CE",
    semester: 6,
    category: "Textbook",
    price: 850,
    keywords: "civil reinforced concrete structures design"
},
{
    id: 68,
    title: "Foundation Engineering",
    author: "B. C. Punmia",
    department: "CE",
    semester: 6,
    category: "Reference",
    price: 780,
    keywords: "civil foundation soil engineering"
},
{
    id: 69,
    title: "Irrigation Engineering and Hydraulic Structures",
    author: "S. K. Garg",
    department: "CE",
    semester: 7,
    category: "Textbook",
    price: 820,
    keywords: "civil irrigation hydraulic structures"
},
{
    id: 70,
    title: "Estimation and Costing in Civil Engineering",
    author: "B. N. Dutta",
    department: "CE",
    semester: 7,
    category: "Reference",
    price: 760,
    keywords: "civil estimation costing"
},
{
    id: 71,
    title: "Construction Planning and Management",
    author: "P. S. Gahlot and B. M. Dhir",
    department: "CE",
    semester: 8,
    category: "Textbook",
    price: 790,
    keywords: "civil construction planning management"
},
{
    id: 72,
    title: "Remote Sensing and GIS",
    author: "Anji Reddy",
    department: "CE",
    semester: 8,
    category: "Reference",
    price: 880,
    keywords: "civil remote sensing GIS"
}



];

const DEPARTMENT_NAMES = {
  CSE: "Computer Science & Engineering",
  ECE: "Electronics & Communication",
  ME: "Mechanical Engineering",
  CE: "Civil Engineering",
  COMMON: "Common / First-year"
};

const CART_KEY = "lpuBookstoreCart";
const THEME_KEY = "lpuBookstoreTheme";

let cart = loadCart();
let toastTimer = null;
let previousFocus = null;

document.addEventListener("DOMContentLoaded", () => {
  applySavedTheme();
  setupNavigation();
  setupThemeToggle();
  setupCart();
  setupModal();
  setupCatalogue();
  updateCartCount();
});

function safeReadJSON(key, fallback) {
  try {
    const parsed = JSON.parse(localStorage.getItem(key));
    return parsed ?? fallback;
  } catch {
    return fallback;
  }
}

function loadCart() {
  const stored = safeReadJSON(CART_KEY, []);

  if (!Array.isArray(stored)) return [];

  return stored
    .filter(item => books.some(book => book.id === Number(item.id)))
    .map(item => ({
      id: Number(item.id),
      condition: item.condition === "used" ? "used" : "new",
      quantity: Math.max(1, Number(item.quantity) || 1)
    }));
}

function saveCart() {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  } catch {
    // Storage may be disabled.
  }
}

function applySavedTheme() {
  let theme = "light";

  try {
    theme = localStorage.getItem(THEME_KEY) || "light";
  } catch {
    // Use light mode if storage is blocked.
  }

  document.body.classList.toggle("dark-mode", theme === "dark");
  updateThemeButtons(theme);
}

function setupThemeToggle() {
  document.querySelectorAll("[data-theme-toggle]").forEach(button => {
    button.addEventListener("click", () => {
      const isDark = !document.body.classList.contains("dark-mode");

      document.body.classList.toggle("dark-mode", isDark);

      try {
        localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
      } catch {
        // Theme still works for this page.
      }

      updateThemeButtons(isDark ? "dark" : "light");
    });
  });
}

function updateThemeButtons(theme) {
  document.querySelectorAll("[data-theme-toggle]").forEach(button => {
    const dark = theme === "dark";

    button.innerHTML = dark
      ? "☀ <span>Light mode</span>"
      : "☾ <span>Dark mode</span>";

    button.setAttribute(
      "aria-label",
      dark ? "Switch to light theme" : "Switch to dark theme"
    );
  });
}

function setupNavigation() {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("primary-nav");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");

    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute(
      "aria-label",
      open ? "Close navigation" : "Open navigation"
    );

    toggle.textContent = open ? "×" : "☰";
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation");
      toggle.textContent = "☰";
    });
  });
}

/* =========================
   CATALOGUE AND FILTERS
   ========================= */

function setupCatalogue() {
  const grid = document.getElementById("books-grid");

  if (!grid) return;

  const department = document.getElementById("department-filter");
  const semester = document.getElementById("semester-filter");
  const category = document.getElementById("category-filter");
  const search = document.getElementById("book-search");
  const price = document.getElementById("price-filter");
  const sort = document.getElementById("sort-filter");
  const condition = document.getElementById("condition-filter");

  [department, semester, category, search, price, sort, condition]
    .forEach(control => {
      control?.addEventListener(
        control === search || control === price ? "input" : "change",
        renderCatalogue
      );
    });

  document.getElementById("reset-filters")?.addEventListener("click", () => {
    department.value = "All";
    semester.value = "All";
    category.value = "All";

    if (condition) condition.value = "All";

    search.value = "";
    price.value = "1500";
    sort.value = "featured";

    renderCatalogue();
  });

  price?.addEventListener("input", () => {
    const value = document.getElementById("price-value");

    if (value) {
      value.textContent = `Up to ${formatPrice(Number(price.value))}`;
    }
  });

  const queryDepartment =
    new URLSearchParams(window.location.search).get("department");

  if (
    queryDepartment &&
    ["CSE", "ECE", "ME", "CE", "COMMON"].includes(queryDepartment)
  ) {
    department.value = queryDepartment;
  }

  renderCatalogue();
}

function renderCatalogue() {
    const grid = document.getElementById("books-grid");
    if (!grid) return;

    const department = document.getElementById("department-filter")?.value || "All";
    const semester = document.getElementById("semester-filter")?.value || "All";
    const category = document.getElementById("category-filter")?.value || "All";
    const query = document.getElementById("book-search")?.value.trim().toLowerCase() || "";
    const maxPrice = Number(document.getElementById("price-filter")?.value || 1500);
    const sort = document.getElementById("sort-filter")?.value || "featured";
    const condition = document.getElementById("condition-filter")?.value || "All";


let results = books.filter(book => {
    const matchesDepartment =
        department === "All" || book.department === department;

    const matchesSemester =
        semester === "All" || String(book.semester) === semester;

    const matchesCategory =
        category === "All" || book.category === category;

    const searchable =
        `${book.title} ${book.author} ${book.subject} ${book.keywords} ${book.department} ${DEPARTMENT_NAMES[book.department]}`
        .toLowerCase();

    const matchesPrice =
        (condition === "used" ? usedPrice(book) : book.price) <= maxPrice;

    return (
        matchesDepartment &&
        matchesSemester &&
        matchesCategory &&
        matchesPrice &&
        searchable.includes(query)
    );
});

let usingFallback = false;

if (results.length === 0 && query === "" && books.length > 0) {
    const closestBook = [...books].sort((a, b) => {
        function calculateScore(book) {
            let score = 0;
            const bookPrice = condition === "used" ? usedPrice(book) : book.price;

            if (department !== "All" && book.department === department) score += 100;
            if (semester !== "All" && String(book.semester) === semester) score += 100;
            if (category !== "All" && book.category === category) score += 25;
            if (bookPrice <= maxPrice) score += 15;

            score += Math.max(0, 10 - Math.abs(bookPrice - maxPrice) / 150);

            return score;
        }

        return calculateScore(b) - calculateScore(a);
    });

    results = [closestBook[0]];
    usingFallback = true;
}


  if (sort === "price-asc") {
    results.sort((a, b) => a.price - b.price);
  }

  if (sort === "price-desc") {
    results.sort((a, b) => b.price - a.price);
  }

  if (sort === "title") {
    results.sort((a, b) => a.title.localeCompare(b.title));
  }

  const count = document.getElementById("results-count");

 
if (count) {
    count.textContent = usingFallback
        ? "No exact matches · Showing closest book"
        : `${results.length} ${results.length === 1 ? "resource" : "resources"} found`;
}

  document.getElementById("price-value").textContent =
    `Up to ${formatPrice(maxPrice)}`;

  if (!results.length) {
    grid.innerHTML = `
      <div class="empty-state">
        <span>⌕</span>
        <h3>No books found.</h3>
        <p>Try another search or reset your filters.</p>
        <button type="button" id="empty-reset">Reset filters ↺</button>
      </div>
    `;

    document.getElementById("empty-reset")
      .addEventListener("click", () => {
        document.getElementById("reset-filters").click();
      });

    return;
  }

 
grid.innerHTML = `
    ${usingFallback ? `
        <div class="fallback-notice">
            <strong>✨ Here's an alternative for you!</strong>
            <span>No exact match for all your filters. We've picked the closest available book based on your selections.</span>
        </div>
    ` : ""}
    ${results.map(book => `

    <article class="book-card">
    }
      ${coverMarkup(book)}

      <div class="book-card-body">

        <div class="book-tags">
          <span class="book-tag">${escapeHTML(book.category)}</span>
          <span class="book-tag">SEM ${book.semester}</span>
        </div>

        <h3>${escapeHTML(book.title)}</h3>

        <p class="book-author">
          By ${escapeHTML(book.author)}
        </p>

        <p class="book-subject">
          ${escapeHTML(book.subject)}
        </p>

        <div class="book-price-stack">

          <div class="book-price-line">
            <span class="book-price">
              ${formatPrice(book.price)}
            </span>

            <span class="book-price-note">
              New · ${escapeHTML(book.department)}
            </span>
          </div>

          <div class="book-price-line">
            <span class="book-old-price">
              ${formatPrice(book.price)}
            </span>

            <strong class="book-used-price">
              ${formatPrice(usedPrice(book))}
            </strong>

            <span class="book-saving">
              40% OFF USED
            </span>
          </div>

        </div>

        <div class="book-actions">
          <button
            class="details-button"
            type="button"
            data-details="${book.id}">
            Details
          </button>
        </div>

        <div class="book-condition-actions">

          ${condition !== "used" ? `
            <button
              type="button"
              data-add="${book.id}"
              data-condition="new">
              Add new · ${formatPrice(book.price)}
            </button>
          ` : ""}

          ${condition !== "new" ? `
            <button
              type="button"
              data-add="${book.id}"
              data-condition="used">
              Add used · ${formatPrice(usedPrice(book))}
            </button>
          ` : ""}

        </div>

      </div>
    </article>
       `).join("")}
`;

  grid.querySelectorAll("[data-details]").forEach(button => {
    button.addEventListener("click", () => {
      openBookModal(Number(button.dataset.details));
    });
  });

  grid.querySelectorAll("[data-add]").forEach(button => {
    button.addEventListener("click", () => {
      addToCart(
        Number(button.dataset.add),
        button.dataset.condition
      );
    });
  });
}

/* =========================
   BOOK COVER
   ========================= */

function coverMarkup(book) {
  const dept =
    book.department === "COMMON" ? "FOUNDATIONS" : book.department;

  return `
    <div class="book-cover" style="--cover:${book.coverColor}">

      <span class="cover-dept">
        ${escapeHTML(dept)} · VOL. ${String(book.semester).padStart(2, "0")}
      </span>

      <strong class="cover-title">
        ${escapeHTML(book.title)}
      </strong>

      <span class="cover-meta">
        ACADEMIC SERIES
      </span>

    </div>
  `;
}

/* =========================
   BOOK DETAILS MODAL
   ========================= */

function setupModal() {
  const backdrop = document.getElementById("book-modal");

  if (!backdrop) return;

  backdrop.addEventListener("click", event => {
    if (
      event.target === backdrop ||
      event.target.closest("[data-close-modal]")
    ) {
      closeBookModal();
    }
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !backdrop.hidden) {
      closeBookModal();
    }
  });
}

function openBookModal(id) {
  const book = books.find(item => item.id === id);

  if (!book) return;

  const backdrop = document.getElementById("book-modal");
  const content = document.getElementById("modal-content");

  previousFocus = document.activeElement;

  content.innerHTML = `
    <div class="modal-book-layout">

      ${coverMarkup(book)}

      <div class="modal-book-copy">

        <p class="eyebrow">
          ${escapeHTML(book.category)} · SEMESTER ${book.semester}
        </p>

        <h2 id="modal-title">
          ${escapeHTML(book.title)}
        </h2>

        <p>By ${escapeHTML(book.author)}</p>

        <p>${escapeHTML(book.description)}</p>

        <div class="modal-details-list">

          <div>
            <span>Department</span>
            <strong>${escapeHTML(DEPARTMENT_NAMES[book.department])}</strong>
          </div>

          <div>
            <span>Semester</span>
            <strong>${book.semester}</strong>
          </div>

          <div>
            <span>Subject</span>
            <strong>${escapeHTML(book.subject)}</strong>
          </div>

          <div>
            <span>Category</span>
            <strong>${escapeHTML(book.category)}</strong>
          </div>

        </div>

        <div class="modal-condition-actions">

          <button type="button" id="modal-add-new">
            New copy · ${formatPrice(book.price)}
          </button>

          <button type="button" id="modal-add-used">
            Used copy · ${formatPrice(usedPrice(book))} (40% off)
          </button>

        </div>

      </div>
    </div>
  `;

  backdrop.hidden = false;
  document.body.style.overflow = "hidden";

  document.getElementById("modal-add-new")
    .addEventListener("click", () => {
      addToCart(id, "new");
      closeBookModal();
    });

  document.getElementById("modal-add-used")
    .addEventListener("click", () => {
      addToCart(id, "used");
      closeBookModal();
    });

  backdrop.querySelector("[data-close-modal]").focus();
}

function closeBookModal() {
  const backdrop = document.getElementById("book-modal");

  if (!backdrop || backdrop.hidden) return;

  backdrop.hidden = true;
  document.body.style.overflow = "";

  if (previousFocus && typeof previousFocus.focus === "function") {
    previousFocus.focus();
  }
}

/* =========================
   SHOPPING CART
   ========================= */

function setupCart() {

  document.getElementById("open-cart")
    ?.addEventListener("click", openCart);

  document.getElementById("close-cart")
    ?.addEventListener("click", closeCart);

  document.getElementById("cart-backdrop")
    ?.addEventListener("click", closeCart);

  document.getElementById("clear-cart")
    ?.addEventListener("click", () => {
      cart = [];
      saveCart();
      renderCart();
      showToast("Your study bag has been cleared.");
    });

  document.getElementById("checkout-button")
    ?.addEventListener("click", () => {
      showToast(
        cart.length
          ? "Demo only — no order or payment has been processed."
          : "Add a book before trying the demo checkout."
      );
    });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeCart();
  });

  renderCart();
}

function openCart() {
  const drawer = document.getElementById("cart-drawer");
  const backdrop = document.getElementById("cart-backdrop");

  if (!drawer || !backdrop) return;

  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");

  backdrop.hidden = false;
  document.body.style.overflow = "hidden";

  document.getElementById("close-cart")?.focus();
}

function closeCart() {
  const drawer = document.getElementById("cart-drawer");
  const backdrop = document.getElementById("cart-backdrop");

  if (
    !drawer ||
    !backdrop ||
    !drawer.classList.contains("open")
  ) return;

  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");

  backdrop.hidden = true;

  if (document.getElementById("book-modal")?.hidden !== false) {
    document.body.style.overflow = "";
  }
}

/* =========================
   NEW AND USED BOOK PRICING
   ========================= */

// Used books cost 60% of the original price.
// This means the customer receives a 40% discount.

function usedPrice(book) {
  return Math.round(book.price * 0.60);
}

function itemPrice(book, condition) {
  return condition === "used"
    ? usedPrice(book)
    : book.price;
}

function addToCart(id, condition = "new") {
  const book = books.find(item => item.id === id);

  if (!book) return;

  const existing = cart.find(item =>
    item.id === id &&
    (item.condition || "new") === condition
  );

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id,
      condition,
      quantity: 1
    });
  }

  saveCart();
  renderCart();
  updateCartCount();

  showToast(
    `Added “${book.title}” (${condition} copy) to your study bag.`
  );
}

function changeQuantity(id, condition, delta) {
  const item = cart.find(entry =>
    entry.id === id &&
    (entry.condition || "new") === condition
  );

  if (!item) return;

  item.quantity += delta;

  if (item.quantity <= 0) {
    cart = cart.filter(entry =>
      !(entry.id === id && (entry.condition || "new") === condition)
    );
  }

  saveCart();
  renderCart();
  updateCartCount();
}

function removeFromCart(id, condition) {
  cart = cart.filter(item =>
    !(item.id === id && (item.condition || "new") === condition)
  );

  saveCart();
  renderCart();
  updateCartCount();

  showToast("Book removed from your study bag.");
}

/* =========================
   DISPLAY CART ITEMS
   ========================= */

function renderCart() {
  const container = document.getElementById("cart-items");

  if (!container) return;

  if (!cart.length) {

    container.innerHTML = `
      <p class="cart-empty">
        Your bag is waiting for its first book.
      </p>
    `;

  } else {

    container.innerHTML = cart.map(item => {

      const book = books.find(entry => entry.id === item.id);

      if (!book) return "";

      const condition = item.condition || "new";

      const price = itemPrice(book, condition);

      const key = `${book.id}-${condition}`;

      return `
        <article class="cart-item">

          <div>

            <h3>${escapeHTML(book.title)}</h3>

            <p>${formatPrice(price)} each</p>

            <span class="cart-condition">
              ${condition === "used"
                ? "Used copy · 40% off"
                : "New copy"}
            </span>

            <div class="quantity-controls">

              <button
                type="button"
                data-quantity="${key}"
                data-id="${book.id}"
                data-condition="${condition}"
                data-delta="-1"
                aria-label="Decrease quantity">
                −
              </button>

              <span>${item.quantity}</span>

              <button
                type="button"
                data-quantity="${key}"
                data-id="${book.id}"
                data-condition="${condition}"
                data-delta="1"
                aria-label="Increase quantity">
                +
              </button>

              <button
                class="remove-item"
                type="button"
                data-remove="${key}"
                data-id="${book.id}"
                data-condition="${condition}"
                aria-label="Remove ${escapeHTML(book.title)}">
                ×
              </button>

            </div>

          </div>

          <strong class="cart-item-price">
            ${formatPrice(price * item.quantity)}
          </strong>

        </article>
      `;

    }).join("");

    container.querySelectorAll("[data-quantity]")
      .forEach(button => {
        button.addEventListener("click", () => {
          changeQuantity(
            Number(button.dataset.id),
            button.dataset.condition,
            Number(button.dataset.delta)
          );
        });
      });

    container.querySelectorAll("[data-remove]")
      .forEach(button => {
        button.addEventListener("click", () => {
          removeFromCart(
            Number(button.dataset.id),
            button.dataset.condition
          );
        });
      });
  }

  const total = cart.reduce((sum, item) => {

    const book = books.find(entry => entry.id === item.id);

    return sum + (
      book
        ? itemPrice(book, item.condition || "new") * item.quantity
        : 0
    );

  }, 0);

  const totalElement = document.getElementById("cart-total");

  if (totalElement) {
    totalElement.textContent = formatPrice(total);
  }

  updateCartCount();
}

function updateCartCount() {

  const count = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  document.querySelectorAll("[data-cart-count]")
    .forEach(element => {
      element.textContent = String(count);
    });
}

/* =========================
   HELPER FUNCTIONS
   ========================= */

function formatPrice(amount) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(amount);
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[character]));
}

function showToast(message) {

  const toast = document.getElementById("toast");

  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}
// Definire elemente
const navbar = document.querySelector("nav");
const itemList = document.getElementById("item-list");
const listaProiecte = document.getElementById("lista-proiecte");
const contactForm = document.getElementById("contact-form");
const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuList = document.getElementById("mobile-menu-list");
const mobileContainer = document.getElementById("mobile-container");
const numeInput = document.getElementById("nume")
const emailInput = document.getElementById("email")
const subiectInput = document.getElementById("subiect")
const mesajInput = document.getElementById("mesaj")


// Stari pentru navbar
let isScrolled = window.scrollY > 50;
let isMobileMenuOpen = false;
let isMobile = window.matchMedia("(max-width: 1024)").matches; // 768px md breakpoint pe tailwind
let navPosition = "absolute " | "fixed";

// Linkurile navbar
const navItems = [
  {
    name: "Acasă",
    href: "#hero",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house-icon lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`,
  },
  {
    name: "Despre",
    href: "#despre",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  },
  {
    name: "Proiecte",
    href: "#proiecte",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap-icon lucide-zap"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>`,
  },
  {
    name: "Contact",
    href: "#contact",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>`,
  },
];

// Lista de proiecte
const proiecte = [
  {
    title: "Exemplu de titlu",
    description: "Exemplu de descriere",
    image:
      "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
  },
  {
    title: "Exemplu de titlu",
    description: "Exemplu de descriere",
    image:
      "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
  },
  {
    title: "Exemplu de titlu",
    description: "Exemplu de descriere",
    image:
      "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
  },
  {
    title: "Exemplu de titlu",
    description: "Exemplu de descriere",
    image:
      "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
  },
  {
    title: "Exemplu de titlu",
    description: "Exemplu de descriere",
    image:
      "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
  },
  {
    title: "Exemplu de titlu",
    description: "Exemplu de descriere",
    image:
      "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
  },
];

// Functie scroll pt linkuri
const scrollToSection = (href) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

// Mapare desktop
itemList.innerHTML = navItems
  .map(
    (item) => `
    <button
    key=${item.name}
    onclick="scrollToSection('${item.href}')"
    class="flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer text-white hover:bg-white/10"
    >
    ${item.icon}
    <span class=""font-medium>${item.name}</span>
    </button>
`
  )
  .join("");

// Mapare mobil
mobileMenuList.innerHTML = navItems
  .map(
    (item) => `
    <button
    key=${item.name}
    onclick='scrollToSection("${item.href}")'
    class="cursor-pointer flex items-center space-x-3 px-4 py-3 rounded-lg text-white hover:bg-white/15 hover:text-indigo-100 transition-colors duration-200 text-left group"
    >
      ${item.icon}
      <span class="font-medium text-lg">${item.name}</span>
    </button>
  `
  )
  .join("");

// Mapare proiecte
listaProiecte.innerHTML = proiecte
  .map((proiect, index) => {
    return `
    <div
    key = ${index}
    class = "text-center hover:hover:shadow-xl cursor-pointer transition-all duration-300 rounded-lg hover:-translate-y-2 border border-gray-700 bg-gray-800 shadow-sm"
    >
        <div class="h-48  flex items-center justify-center">
          <img class="object-cover rounded-t-lg w-full h-full" src="${proiect.image}">
        </div>
        <div class="text-xl font-boldleading-none tracking-tight">
            <h2 class="text-xl font-bold text-gray-200">${proiect.title}</h2>
        </div>
        <div class="p-6 pt-0">
            <p class="text-amber-400 text-sm">${proiect.description}</p>
        </div>
    </div>
    `;
  })
  .join("");

const handleMobileMenu = () => {
  if (isMobileMenuOpen) {
    mobileMenu.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" 
    width="32" 
    height="32" 
    viewBox="0 0 24 24" 
    fill="none" stroke="white" 
    stroke-width="2" 
    stroke-linecap="round" 
    stroke-linejoin="round" 
    class="lucide lucide-x-icon lucide-x lg:hidden">
    <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
  </svg>`;
    mobileContainer.classList.add("opacity-100", "max-h-screen", "mt-8");
    mobileContainer.classList.remove("opacity-0", "max-h-0");
    navbar.classList.add(
      "bg-slate-900/90",
      "backdrop-blur-sm",
      "w-full",
      "top-0"
    );
    navbar.classList.remove("bg-transparent", "w-11/12", "top-1");
  } else {
    mobileMenu.innerHTML = `<svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-menu-icon lucide-menu lg:hidden"
            >
              <path d="M4 12h16" />
              <path d="M4 18h16" />
              <path d="M4 6h16" />
            </svg>`;
    mobileContainer.classList.add("opacity-0", "max-h-0");
    mobileContainer.classList.remove("opacity-100", "max-h-screen", "mt-8");
    navbar.classList.add("bg-transparent", "w-11/12", "top-1");
    navbar.classList.remove(
      "bg-slate-900/90",
      "backdrop-blur-sm",
      "w-full",
      "top-0"
    );
  }
};

const resetMobileMenu = () => {
  isMobileMenuOpen = false;
  handleMobileMenu();
};
const resetNavbar = () => {
  navbar.classList.remove(
    "fixed",
    "top-0",
    "bg-slate-900/90",
    "backdrop-blur-sm",
    "shadow-2xl",
    "rounded-b-2xl",
    "border",
    "border-cyan-500/20"
  );
  navbar.classList.add("absolute", "top-1", "bg-transparent");
};

const handleResize = () => {
  isMobile = window.matchMedia("(max-width: 1024px)").matches;
  resetMobileMenu();
  resetNavbar();
};

// Handlerul de scroll
const handleScroll = () => {
  isScrolled = window.scrollY > 50;
  resetMobileMenu();
  if (!isMobile) {
    if (isScrolled) {
      navbar.classList.remove("absolute", "top-1", "bg-transparent");
      navbar.classList.add(
        "fixed",
        "top-0",
        "bg-slate-900/60",
        "backdrop-blur-sm",
        "shadow-2xl",
        "rounded-b-2xl",
        "border",
        "border-cyan-500/20"
      );
    } else {
      navbar.classList.remove(
        "fixed",
        "top-0",
        "bg-slate-900/90",
        "backdrop-blur-sm",
        "shadow-2xl",
        "rounded-b-2xl",
        "border",
        "border-cyan-500/20"
      );
      navbar.classList.add("absolute", "top-1", "bg-transparent");
    }
  }
};
const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const submitForm = () => {
  if (!numeInput.value || !emailInput.value || !subiectInput.value || !mesajInput.value){
    alert("Te rog sa completezi tot formularul!")
    return
  } else if (!emailRegex.test(emailInput.value)){
    alert("Te rog introdu un email valid!")
    return
  }else {
  document.forms["contact-form"].submit();
  contactForm.reset()}
};
window.addEventListener("scroll", handleScroll);
window.addEventListener("resize", handleResize);
mobileMenu.addEventListener("click", () => {
  isMobileMenuOpen = !isMobileMenuOpen;
  handleMobileMenu();
});

// npx @tailwindcss/cli -i ./style.css -o ./output.css --watch

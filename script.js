const navbar = document.querySelector("nav");
const itemList = document.getElementById("item-list");
const listaProiecte = document.getElementById("lista-proiecte");
const contactForm = document.getElementById("contact-form");
const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuList = document.getElementById("mobile-menu-list");
const mobileContainer = document.getElementById("mobile-container");
let isScrolled = false;
let isMobileMenuOpen = false;

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
const scrollToSection = (href) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

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

listaProiecte.innerHTML = proiecte
  .map((proiect, index) => {
    return `
    <div
    key = ${index}
    class = "text-center hover:hover:shadow-xl cursor-pointer transition-all duration-300 rounded-lg hover:-translate-y-2 border border-zinc-200 bg-white shadow-sm"
    >
        <div class="h-48 bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center">
          <img class="object-cover w-full h-full" src="${proiect.image}">
        </div>
        <div class="text-xl font-bold text-gray-800 leading-none tracking-tight">
            <h2 class="text-xl font-bold text-gray-800">${proiect.title}</h2>
        </div>
        <div class="p-6 pt-0">
            <p class="text-gray-600 text-sm">${proiect.description}</p>
        </div>
    </div>
    `;
  })
  .join("");

window.addEventListener("scroll", () => {
  if (window.matchMedia("(min-width: 768px)").matches) {
    if (window.scrollY > 50) {
      navbar.classList.remove("absolute", "top-8", "bg-transparent");
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
      navbar.classList.add("absolute", "top-8", "bg-transparent");
    }
  }
});

const submitForm = () => {
  document.forms["contact-form"].submit();
  contactForm.reset();
};

const handleMobileMenu = () => {
  isMobileMenuOpen = !isMobileMenuOpen;
  mobileMenu.innerHTML = isMobileMenuOpen
    ? `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x lg:hidden md:hidden"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`
    : `<svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-menu-icon lucide-menu lg:hidden md:hidden"
            >
              <path d="M4 12h16" />
              <path d="M4 18h16" />
              <path d="M4 6h16" />
            </svg>`;
};

mobileMenu.addEventListener("click", () => {
  handleMobileMenu();
  console.log(isMobileMenuOpen);
  if (isMobileMenuOpen) {
    mobileContainer.classList.add("opacity-100", "max-h-screen", "mt-8");
    mobileContainer.classList.remove("opacity-0", "max-h-0");
    navbar.classList.add("bg-slate-900/90", "backdrop-blur-sm","w-full","top-0");
    navbar.classList.remove("bg-transparent","w-11/12","top-8");
  } else {
    mobileContainer.classList.add("opacity-0", "max-h-0");
    mobileContainer.classList.remove("opacity-100", "max-h-screen", "mt-8");
    navbar.classList.add("bg-transparent","w-11/12","top-8");
    navbar.classList.remove("bg-slate-900/90", "backdrop-blur-sm","w-full","top-0");
  }
});

// npx @tailwindcss/cli -i ./style.css -o ./output.css --watch

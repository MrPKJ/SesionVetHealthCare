# Season Health Care — Website Project

## 📁 Project Structure

```
season-healthcare/
│
├── index.html                  ← Home Page
│
├── pages/
│   ├── about.html              ← About Us Page
│   ├── contact.html            ← Contact Page
│   ├── products.html           ← Products Listing Page
│   ├── product-detail.html     ← Single Product Detail Page
│   └── visuals.html            ← Visuals / Gallery Page
│
├── css/
│   ├── style.css               ← Global styles, design system, navbar, footer
│   ├── home.css                ← Home page styles (hero slider, sections)
│   ├── about.css               ← About page styles
│   ├── contact.css             ← Contact page styles
│   ├── products.css            ← Products grid styles
│   ├── product-detail.css      ← Product detail styles
│   └── visuals.css             ← Visuals / gallery styles
│
├── js/
│   ├── main.js                 ← Shared JS (navbar, search, scroll-to-top, animations)
│   └── home.js                 ← Home page slider JS
│
├── images/                     ← (Add your product & logo images here)
│
└── README.md                   ← This file
```

---

## 🌐 Pages Overview

| Page | File | Key Features |
|------|------|-------------|
| Home | `index.html` | Hero slider (5 images, 15s), Intro, Why Choose Us, Product Range, Innovation, Quality, Stats |
| About Us | `pages/about.html` | Welcome, What We Do, Products, Quality Control, Vision & Mission, Product Showcase |
| Contact | `pages/contact.html` | Contact form (Name, Email, Subject, Message), Image slider, Contact info card |
| Products | `pages/products.html` | 4-per-row product grid with image, name, "Read More" button |
| Product Detail | `pages/product-detail.html` | Product image, description table (Name, Ingredients, Used For), Reviews + Review Form |
| Visuals | `pages/visuals.html` | 3:1 grid layout, 3 banners per row, sidebar with category filters |

---

## 🎨 Design System

- **Primary Color:** `#2d7a47` (Green)
- **Dark Green:** `#1a4d2e`
- **Accent Gold:** `#c9a84c`
- **Display Font:** Playfair Display (serif)
- **Body Font:** DM Sans (sans-serif)

---

## 🚀 How to Run

1. Open `index.html` in any browser — no build tools required
2. All CSS and JS are plain files, no frameworks needed
3. Replace placeholder images in `images/` folder with real product photos
4. Update contact details in each page's footer

---

## 📝 To Customize

- **Logo:** Replace the URL in `<img src="...logo.png">` with your local logo file
- **Product Images:** Add real product photos to `images/` and update `<img src>` in product cards
- **Content:** Update all text content with real product names, descriptions, and ingredients
- **Colors:** Change CSS variables in `css/style.css` under `:root {}`

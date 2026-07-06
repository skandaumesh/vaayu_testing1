# Vaayu Chest & Sleep Specialists Website — Project Handover README

This document explains how to use, edit, run, maintain, and deploy the Vaayu Chest & Sleep Specialists website project after handover.

---

## 1. Project Overview

This website is built for **Vaayu Chest & Sleep Specialists**. It includes pages for the clinic, doctors, specialty services, patient-focused content, and contact/appointment actions.

The project is built using:

- **React** for frontend components
- **Vite** for fast development and build
- **React Router** for page routing
- **CSS / Tailwind-style utility classes** depending on the page structure
- **Framer Motion** where animations are used
- Static assets such as doctor images, clinic images, icons, and banners

---

## 2. System Requirements

Before using the project, install the following:

- **Node.js**: Recommended version 18 or above
- **npm**: Comes with Node.js
- **Code Editor**: Visual Studio Code recommended
- **Git**: Required for version control and deployment workflow

To check installation:

```bash
node -v
npm -v
git --version
```

---

## 3. How to Run the Project Locally

Open the project folder in VS Code or terminal.

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

After running this command, Vite will show a local URL such as:

```bash
http://localhost:5173/
```

Open that URL in the browser to view the website.

---

## 4. How to Build the Project

Before deploying, always run a production build:

```bash
npm run build
```

This creates a `dist` folder containing the final production-ready website files.

To preview the production build locally:

```bash
npm run preview
```

---

## 5. Common Project Structure

The folder structure may look like this:

```bash
src/
  assets/
    img/
      doctor-images
      service-images
      banner-images
  components/
    Navbar.jsx
    Footer.jsx
    Buttons.jsx
    Cards.jsx
  pages/
    Home.jsx
    Doctors/
    Services/
    Contact.jsx
    Careers.jsx
  App.jsx
  main.jsx
  index.css
public/
package.json
vite.config.js
```

### Important Files

| File / Folder | Purpose |
|---|---|
| `src/App.jsx` | Main routing file. Add or update page routes here. |
| `src/main.jsx` | React app entry point. Usually does not need frequent changes. |
| `src/pages/` | Contains main website pages. |
| `src/components/` | Reusable website sections like navbar, footer, cards, buttons. |
| `src/assets/img/` | Stores images used in the website. |
| `public/` | Stores public files such as favicon, robots.txt, or static assets. |
| `package.json` | Contains scripts and dependencies. |

---

## 6. How to Edit Website Content

Most text content is inside page files under:

```bash
src/pages/
```

Example:

- Homepage content: `src/pages/Home.jsx`
- Doctor pages: `src/pages/Doctors/`
- Service pages: `src/pages/Services/`
- Contact page: `src/pages/Contact.jsx`

To update text:

1. Open the required page file.
2. Search for the heading or paragraph you want to change.
3. Edit the text directly.
4. Save the file.
5. Check the browser preview.

---

## 7. How to Add or Replace Images

Images are usually stored inside:

```bash
src/assets/img/
```

To replace an image:

1. Add the new image to the correct folder.
2. Keep the image name simple, for example:

```bash
dr-rasheeka.jpg
clinic-front.jpg
asthma-care.jpg
```

3. Import the image in the page/component file:

```jsx
import doctorImage from '../assets/img/dr-rasheeka.jpg';
```

4. Use it in the image tag:

```jsx
<img src={doctorImage} alt="Doctor Name" />
```

### Recommended Image Sizes

| Usage | Recommended Size |
|---|---|
| Doctor profile images | 800 × 800 px, square |
| Hero/banner images | 1920 × 900 px or similar wide ratio |
| Service cards | 800 × 600 px |
| Social preview images | 1200 × 630 px |

Always compress images before uploading to keep the website fast.

---

## 8. How to Add a New Page

Create a new page file inside `src/pages/`.

Example:

```bash
src/pages/NewService.jsx
```

Basic page structure:

```jsx
import React from 'react';

const NewService = () => {
  return (
    <main>
      <section>
        <h1>New Service Title</h1>
        <p>Service description goes here.</p>
      </section>
    </main>
  );
};

export default NewService;
```

Then add the route in `src/App.jsx`:

```jsx
import NewService from './pages/NewService';
```

Add route:

```jsx
<Route path="/new-service" element={<NewService />} />
```

If needed, add the menu link in the Navbar component.

---

## 9. How to Update Navigation Menu

Navigation links are usually inside:

```bash
src/components/Navbar.jsx
```

To add a new menu item:

```jsx
<NavLink to="/new-service">New Service</NavLink>
```

Make sure the route exists in `App.jsx`. If the route is missing, the page will not open.

---

## 10. How to Update Doctor Profiles

Doctor profile pages are usually stored in:

```bash
src/pages/Doctors/
```

For each doctor, update:

- Name
- Qualification
- Experience
- Specialization
- Short bio
- Conditions treated
- Profile image
- Appointment CTA

If a new doctor is added, also update the doctors listing/grid page.

Recommended doctor image size:

```bash
800 × 800 px
```

---

## 11. How to Update Contact / Appointment Details

Contact details may be present in:

- `src/pages/Contact.jsx`
- `src/components/Footer.jsx`
- CTA sections across service pages
- Navbar appointment button

Check and update:

- Phone number
- Email address
- Clinic address
- Google Maps link
- Appointment booking link
- WhatsApp link
- EkaCare or other booking button links

---

## 12. Styling Guidelines

Please maintain the existing Vaayu brand style:

- Clean medical layout
- Professional and patient-friendly tone
- Soft rounded cards
- Calm Vaayu-inspired colors
- Consistent spacing
- Mobile-friendly layout
- Avoid unnecessary icons, emojis, and clutter

Before adding new sections, compare with the homepage design so the site remains visually consistent.

---

## 13. Responsive Testing Checklist

After every major update, test the website on:

- Desktop screen
- Laptop screen
- Tablet view
- Mobile view
- iPhone/Safari if possible
- Android/Chrome if possible

Check:

- Navbar opens correctly on mobile
- Images are not stretched or cropped badly
- Text is readable
- Buttons are clickable
- Forms or booking links work
- No section overlaps another section

---

## 14. SEO Checklist

For every important page, maintain:

- Proper page title
- Clear H1 heading
- Patient-friendly content
- Internal links to related pages
- Image `alt` text
- Fast-loading images
- Correct canonical URL if used
- Sitemap updates if new pages are added

If a new page is added, update the sitemap if the project contains one.

---

## 15. Deployment Notes

The website can be deployed using platforms such as:

- Hostinger
- Vercel
- Netlify
- Any static hosting provider

### For Static Hosting

Run:

```bash
npm run build
```

Upload the contents of the `dist` folder to the hosting server.

### Important for React Router

If the website uses React Router, direct page refresh may show a 404 error on some hosts.

For Apache/Hostinger, add or confirm this `.htaccess` file inside the deployment root:

```apache
RewriteEngine On
RewriteBase /

RewriteRule ^index\.html$ - [L]

RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d

RewriteRule . /index.html [L]
```

This ensures routes like `/doctors`, `/services/asthma`, or `/contact` open correctly on refresh.

---

## 16. Git Workflow

Before making changes:

```bash
git pull
```

After making changes:

```bash
git status
git add .
git commit -m "Update website content"
git push
```

Use clear commit messages, for example:

```bash
git commit -m "Update doctor profile content"
git commit -m "Add new asthma service section"
git commit -m "Fix mobile navbar spacing"
```

---

## 17. Common Issues and Fixes

### Issue: Page not opening

Check whether the route is added in `src/App.jsx`.

### Issue: Image not showing

Check:

- Image path is correct
- Image is imported properly
- File name spelling matches exactly
- File extension is correct: `.jpg`, `.png`, `.webp`

### Issue: Build failed

Run:

```bash
npm install
npm run build
```

If the error shows a missing file, check whether the import path is correct.

### Issue: Website works locally but not after deployment

Check:

- `dist` folder was uploaded correctly
- `.htaccess` file is present for React Router
- Hosting root folder is correct
- Domain DNS is pointing to the correct server

---

## 18. Maintenance Checklist

Monthly checks recommended:

- Test all appointment buttons
- Test all contact links
- Check mobile layout
- Update doctor/service content if needed
- Replace outdated images
- Check page speed
- Check Google Search Console errors
- Backup the latest code

---

## 19. Handover Notes

At the time of handover:

- The project code is ready for client use.
- Future edits can be done by updating files in `src/pages`, `src/components`, and `src/assets`.
- Always run `npm run build` before deployment.
- Keep the design consistent with the existing Vaayu brand style.
- For any new service or doctor page, add both the page file and route in `App.jsx`.

---

## 20. Useful Commands

```bash
npm install        # Install project dependencies
npm run dev        # Start local development server
npm run build      # Create production build
npm run preview    # Preview production build locally
git status         # Check changed files
git add .          # Stage all changes
git commit -m "message"   # Commit changes
git push           # Push code to repository
```

---

## 21. Final Note

This README is intended to help the client or future developer understand and continue working on the Vaayu website without depending on the original development team.

Please keep this file inside the project root folder as:

```bash
README.md
```

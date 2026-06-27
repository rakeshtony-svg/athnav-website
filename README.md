# Athnav Integrated Solutions — Website

> React + Vite frontend + Node.js/Express backend for athnav.com

---

## 🗂 Project Structure

```
athnav-website/         ← Frontend (React + Vite + Tailwind)
├── src/
│   ├── App.jsx         ← Routes
│   ├── pages/          ← All page components
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── services/   ← 5 individual service pages
│   │   ├── Countries.jsx
│   │   ├── CountryPage.jsx  ← Dynamic (India/UAE/SG/PH/UK/USA)
│   │   ├── Resources.jsx
│   │   ├── Blog.jsx + BlogPost.jsx
│   │   ├── Calculators.jsx  ← Income Tax, Gratuity, NPS
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   ├── components/
│   │   ├── layout/Layout.jsx  ← Navbar + Footer
│   │   └── ui/index.jsx       ← Reusable UI components
│   └── index.css       ← Tailwind + custom styles

athnav-backend/         ← Backend (Node.js + Express)
├── server.js           ← Express app entry
├── config/db.js        ← MySQL pool (Hostinger)
├── routes/
│   ├── contact.js      ← Contact form + email sending
│   ├── newsletter.js   ← Newsletter subscription
│   └── health.js       ← Health check endpoint
└── .env.example        ← Environment variable template
```

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18 + Vite 5 |
| Styling | Tailwind CSS 3 |
| Routing | React Router DOM 6 |
| Backend | Node.js + Express 4 |
| Database | MySQL via Hostinger Premium |
| Email | Nodemailer (SMTP) |
| Authentication | Clerk (for future portals) |
| Deployment | Hostinger Premium |
| Domain | athnav.com |

---

## 📄 Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/services` | Services Overview |
| `/services/payroll-management` | Payroll Management |
| `/services/hr-operations` | HR Operations |
| `/services/compliance-support` | Compliance Support |
| `/services/advisory-services` | Advisory Services |
| `/services/system-implementation` | System Implementation |
| `/countries` | Countries Overview |
| `/countries/india` | India Payroll |
| `/countries/uae` | UAE Payroll |
| `/countries/singapore` | Singapore Payroll |
| `/countries/philippines` | Philippines Payroll |
| `/countries/uk` | UK Payroll |
| `/countries/usa` | USA Payroll |
| `/resources` | Resources Hub |
| `/resources/blog` | Blog Listing |
| `/resources/blog/:slug` | Blog Post |
| `/resources/calculators` | Tax/Gratuity/NPS Calculators |
| `/about` | About Athnav |
| `/contact` | Contact Form |

---

## 🚀 Local Development

### Frontend

```bash
cd athnav-website
npm install
npm run dev
# → http://localhost:5173
```

### Backend

```bash
cd athnav-backend
npm install
cp .env.example .env
# Edit .env with your DB and SMTP credentials
npm run dev
# → http://localhost:5000
```

---

## 🌐 Hostinger Deployment

### Frontend (Static Build)

```bash
cd athnav-website
npm run build
# Upload /dist contents to public_html/ on Hostinger
```

#### .htaccess for React Router SPA (put in public_html/)

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### Backend (Node.js on Hostinger)

Hostinger Premium supports Node.js via their Node.js Manager:

1. Go to **hPanel → Hosting → Node.js**
2. Create a new Node.js app:
   - Node.js version: 20.x (LTS)
   - App root: `/home/user/athnav-backend`
   - Entry file: `server.js`
   - Port: 5000
3. Upload backend files via File Manager or Git
4. In SSH terminal: `npm install --production`
5. Set environment variables in hPanel Node.js app settings
6. Point API subdomain `api.athnav.com` → Node.js app port

### Database (Hostinger MySQL)

1. Create database in hPanel → Databases → MySQL Databases
2. Note: Host, DB name, username, password
3. Import schema (optional) or let `initDB()` auto-create tables
4. Update `.env` with your database credentials

---

## 🔑 Environment Variables (.env)

```env
PORT=5000
NODE_ENV=production

# Hostinger MySQL
DB_HOST=srv1234.hstgr.io
DB_PORT=3306
DB_NAME=u123456789_athnav
DB_USER=u123456789_user
DB_PASSWORD=your_password

# Hostinger Email (SMTP)
SMTP_HOST=mail.athnav.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=info@athnav.com
SMTP_PASS=your_email_password
EMAIL_FROM="Athnav <info@athnav.com>"
EMAIL_TO=info@athnav.com

# CORS
ALLOWED_ORIGINS=https://athnav.com,https://www.athnav.com

# JWT (for future admin features)
JWT_SECRET=your_256bit_random_secret
JWT_EXPIRES_IN=7d
```

---

## 🔒 Security Features

- **Helmet.js** — HTTP security headers
- **CORS** — Whitelist-only origins
- **Rate limiting** — 100 req/15min global, 10/hour on contact/newsletter
- **Input validation** — express-validator on all form endpoints
- **SQL injection** — Parameterized queries via mysql2
- **XSS protection** — JSON body limit + Helmet CSP

---

## 📧 Contact Form Flow

1. User submits form on `/contact`
2. Frontend validates fields
3. POST to `/api/contact`
4. Backend validates + stores in MySQL `contact_submissions`
5. Sends admin notification email (HTML template)
6. Sends auto-reply to user
7. Returns success/error JSON

---

## 🧮 Calculators (Client-side only)

All calculators run entirely in the browser — no API calls:

- **India Income Tax** — Old & New Regime FY2025-26 with rebate u/s 87A
- **Gratuity** — Payment of Gratuity Act, 1972 formula
- **NPS Corpus** — SIP future value with annuity split

---

## 📌 Future Enhancements

- [ ] Clerk authentication for client/ESS portals
- [ ] Admin dashboard for lead management
- [ ] Cloudinary for blog image uploads  
- [ ] Supabase alternative for DB (real-time features)
- [ ] WhatsApp floating chat widget
- [ ] LinkedIn social feed integration
- [ ] Multi-language support (Hindi, Arabic)

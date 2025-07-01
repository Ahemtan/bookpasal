# 📚 BookPasal – A Full Stack Book Recycling App

BookPasal is a full-stack web application designed to make book recycling easy and accessible. Users can list, buy, and manage recycled books with a clean UI and modern features.

Built with:

- **Next.js 15 (App Router)**
- **ShadCN UI**
- **Tailwind CSS**

---

## 🌟 Features

### ✅ Completed (Frontend)

- 🖼️ Modern UI using ShadCN and Tailwind
- 📖 Book listing page
- 🧭 Navigation and routing with App Router

### 🔧 In Progress (Backend)

- 🔐 **Authentication** (Better Auth / Clerk)
- 💾 **Database integration** (PostgreSQL)
- 🔄 **CRUD operations** for books
- 💳 **Purchase flow** – Payment Gateway (Khalti) and Cash on Delivery
- 📊 **User Dashboard** – track purchases, sales, and listed books

---

## 🚧 Project Structure (WIP)

```
/app
  /books       → Book list, detail, add/edit
  /dashboard   → User dashboard (planned)
  /auth        → Sign in / Sign up (planned)
  /api         → Backend API routes (planned)

/components     → Reusable UI components (ShadCN)
/lib            → Utilities (e.g. db, auth, helpers)
```

---

## 📌 TODO

- [ ] Setup authentication
- [ ] Integrate database
- [ ] Add book CRUD APIs
- [ ] Implement purchase flow (Khalti/COD)
- [ ] Build user dashboard

---

## 🛠 Tech Stack

| Tech         | Use                       |
| ------------ | ------------------------- |
| Next.js      | Framework                 |
| Tailwind CSS | Styling                   |
| ShadCN       | UI Components             |
| PostgreSQL   | (Planned) Database        |
| Khalti       | (Planned) Payment Gateway |
| Vercel       | Deployment                |
| Auth         | Better Auth (planned)     |

---

## 🚀 Getting Started

```bash
git clone https://github.com/ahemtan/bookpasal.git
cd bookpasal
npm install
npm run dev
```

---

## 🧠 Contributing

Have ideas or want to help? PRs are welcome!

---

## 📄 License

MIT License

---

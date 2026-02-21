# TKH TECH Inc. — Company Website

Production website for **TKH TECH Inc.**, a Montreal-based custom SaaS development group.
Live at: **[https://tkhtech.com](https://tkhtech.com)**

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (Pages Router) + TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Icons | Heroicons |
| Hosting | AWS Amplify (ca-central-1) |
| CDN + SSL | CloudFront + ACM (auto-managed by Amplify) |
| DNS | AWS Route 53 |
| Email | AWS SES + Lambda + API Gateway |
| CI/CD | GitHub → Amplify auto-deploy on push to `main` |

---

## Project Structure

```
├── components/
│   ├── sections/
│   │   ├── Hero.tsx             # Dark hero, "We Build the SaaS You Need"
│   │   ├── About.tsx            # Mission, pillars, demand-driven SaaS
│   │   ├── HowItWorks.tsx       # 3-step process section
│   │   ├── Services.tsx         # 4 service cards (dark background)
│   │   ├── Portfolio.tsx        # 4 shipped products showcase
│   │   ├── RequestProject.tsx   # Full project request form
│   │   └── Contact.tsx          # Simple Name/Email/Message form
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── Layout.tsx
├── pages/
│   ├── api/
│   │   └── contact.ts           # Fallback Next.js API route (nodemailer)
│   ├── _app.tsx
│   ├── _document.tsx
│   └── index.tsx                # Page composition
├── aws/
│   ├── lambda/
│   │   └── index.js             # Lambda: internal notify + client auto-reply via SES
│   └── contact-lambda.zip       # Deployment package (auto-generated)
├── config/
│   └── contact.ts               # AWS endpoint config + form helpers
├── styles/
│   └── globals.css
├── amplify.yml                  # Amplify build config
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

---

## Page Sections (in order)

1. **Hero** — Bold headline + "Request a Project" / "See Our Work" CTAs
2. **About** — Mission statement + 4 company pillars
3. **How It Works** — 3-step process: Submit → Scope → Build
4. **Services** — Custom SaaS Dev, MVP Prototyping, Product Design, Support
5. **Portfolio** — LiveIt, MedConnect, EduCore, SecurePay
6. **Request a Project** — Full form (name, email, company, type, description, budget)
7. **Contact** — Simple inquiry form

---

## Local Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
# → http://localhost:3000

# Build for production
npm run build
```

**Environment variable for local development:**
Create a `.env.local` file:
```
NEXT_PUBLIC_AWS_CONTACT_ENDPOINT=https://89e0poya3f.execute-api.ca-central-1.amazonaws.com/prod/contact
```

---

## AWS Infrastructure

### Email Flow
- Form submission → API Gateway → Lambda (`tkhtech-contact-handler`)
- Lambda sends two emails via SES:
  1. Internal notification to `info@tkhtech.com`
  2. Auto-reply confirmation to the client from `noreply@tkhtech.com`

### Resources (ca-central-1)
| Resource | Name / ID |
|---|---|
| Amplify App | `tkhtechapp` / `d1t8nsogivok9q` |
| Lambda | `tkhtech-contact-handler` |
| API Gateway | `tkhtech-contact-api` / `89e0poya3f` |
| IAM Role | `tkhtech-contact-lambda-role` |
| SES Domain | `tkhtech.com` (verified + DKIM enabled) |
| Route 53 Zone | `tkhtech.com` / `Z05907853H0W2ZZD00WEY` |

### Deployment
Every push to `main` triggers an automatic Amplify build and deploy.
To manually trigger a build:
```bash
aws amplify start-job --app-id d1t8nsogivok9q --branch-name main --job-type RELEASE --region ca-central-1
```

---

## Colors

| Role | Value |
|---|---|
| Primary (orange) | `#f97316` |
| Secondary (dark) | `#2c3e50` |
| Background dark | `#111827` / `#1f2937` |

---

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## License

Proprietary — TKH TECH Inc. All rights reserved.

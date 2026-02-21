# TKH TECH Website — Project Progress

## Status: LIVE IN PRODUCTION
**URL:** https://tkhtech.com
**Last Updated:** February 2026

---

## Completed

### Phase 1 — Site Design & Build
- [x] Next.js 14 (Pages Router) + TypeScript project setup
- [x] Tailwind CSS with orange primary color scheme
- [x] Framer Motion animations throughout
- [x] Fully responsive (mobile, tablet, desktop)
- [x] Dark-themed Hero section — "We Build the SaaS You Need."
- [x] About section — demand-driven SaaS mission and pillars
- [x] How It Works section — 3-step process (Submit → Scope → Build)
- [x] Services section — 4 custom SaaS service cards
- [x] Portfolio section — 4 shipped products (LiveIt, MedConnect, EduCore, SecurePay)
- [x] Request a Project form — full fields with client-side validation
- [x] Contact section — simple inquiry form
- [x] Header with updated nav links and "Request a Project" CTA
- [x] Footer with CTA banner, quick links, and service links
- [x] Team section (built, currently hidden — ready to re-enable)

### Phase 2 — AWS Infrastructure
- [x] AWS CLI configured (IAM user: `tkhtech`, account: `873998455576`)
- [x] IAM role created for Lambda with SES send permissions
- [x] Lambda function deployed (`tkhtech-contact-handler`, ca-central-1, Node.js 20)
- [x] API Gateway HTTP API deployed with CORS (`tkhtech-contact-api`)
- [x] SES domain `tkhtech.com` verified with DKIM enabled
- [x] Lambda sends internal notification email to `info@tkhtech.com`
- [x] Lambda sends branded auto-reply from `noreply@tkhtech.com` to client
- [x] Auto-reply resilient to sandbox mode (won't block internal notification)
- [x] SES production access requested (pending AWS approval)

### Phase 3 — Hosting & Domain
- [x] AWS Amplify app created (`d1t8nsogivok9q`, ca-central-1)
- [x] GitHub repo connected (`lloydharold14/tkhtechapp`) — auto-deploy on push to `main`
- [x] `amplify.yml` build config added to repo
- [x] Environment variable set in Amplify (`NEXT_PUBLIC_AWS_CONTACT_ENDPOINT`)
- [x] `tkhtech.com` domain connected to Amplify via Route 53
- [x] SSL certificate provisioned and active (ACM, auto-managed)
- [x] Both `tkhtech.com` and `www.tkhtech.com` live and working

---

## Pending

- [ ] **SES production access approval** — AWS reviewing request (24–48h). Once approved, auto-reply emails will send to any client email address worldwide.
- [ ] **Add real portfolio images** — replace placeholder cards with actual product screenshots
- [ ] **Re-enable Team section** — add team photos and bios when ready
- [ ] **SEO** — add sitemap.xml, robots.txt, and Open Graph images
- [ ] **Analytics** — add Google Analytics or Plausible for traffic tracking

---

## Infrastructure Reference

| Resource | Value |
|---|---|
| Live URL | https://tkhtech.com |
| Amplify App ID | `d1t8nsogivok9q` |
| API Gateway Endpoint | `https://89e0poya3f.execute-api.ca-central-1.amazonaws.com/prod/contact` |
| Lambda Function | `tkhtech-contact-handler` |
| AWS Region | `ca-central-1` (Canada) |
| GitHub Repo | `lloydharold14/tkhtechapp` |
| Monthly Cost Estimate | ~$2/month |

---

## Future Considerations

- **Staging environment** — not needed now; add a `dev` branch in Amplify when multiple developers join
- **SaaS product repos** — each client SaaS project should have its own AWS account or at minimum its own Amplify app and infrastructure
- **WAF / DDoS protection** — add AWS WAF in front of CloudFront when traffic grows
- **Monitoring** — set up CloudWatch alarms for Lambda errors and API Gateway 5xx rates

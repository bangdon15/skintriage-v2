# Skin Triage — Spot Early. Live Fully.

A modern, hospital-grade telehealth platform for clinical skin cancer triage, early detection, and dermatological guidance.

**Live Deployment:** [https://skintriage-v2.vercel.app](https://skintriage-v2.vercel.app)

---

## Overview

Skin Triage connects patients with concerning moles, spots, or evolving lesions to state-licensed dermatology clinicians for rapid clinical review (<48h), helping close the care gap in regions facing severe specialist shortages.

## Key Features

- **Clinical Guidance & Early Detection**: Grounded in SEER melanoma epidemiological survival data and JAMA dermatology workforce statistics.
- **Interactive ABCDE Clinical Assessment**: Standardized diagnostic self-check framework (Asymmetry, Border, Color, Diameter, Evolving) optimized for both desktop and mobile viewports.
- **Dermatological Photographic Comparisons**: Comparative clinical photography for Melanoma, Basal Cell Carcinoma (BCC), and Squamous Cell Carcinoma (SCC).
- **Multi-Step Screening Submission Flow**: Step-by-step submission with interactive body mapping and photo upload guide.
- **Real-Time Screening Status Tracker**: Instant case status lookup and provider notes via serverless tracking API (`/api/track/:id`).
- **Clinician & Employer Programs**: Dedicated portals and workflows for dermatologists (`/for-dermatologists`) and workplace employee wellness programs (`/for-employers`).
- **Fully Responsive & Mobile-App Ready**: Slide-out navigation drawer and native-style bottom app bar.

---

## Project Structure

```
├── about.html                 # Mission & clinical approach
├── contact.html               # Department inquiries & clinical support
├── for-dermatologists.html     # Provider network onboarding & workflow
├── for-employers.html          # Workplace preventative skin wellness
├── index.html                 # Main landing page & interactive assessment
├── my-screenings.html         # Patient portal & case tracker
├── privacy.html               # HIPAA & privacy disclosures
├── submit.html                # Telehealth screening submission workflow
├── terms.html                 # Terms & conditions of service
├── index.css                  # Design system & responsive styles
├── server.js                  # Local Express development server
├── vercel.json                # Vercel routing, clean URLs & headers
└── api/
    └── track/
        └── [id].js            # Serverless case lookup API
```

---

## Local Development

```bash
# Install dependencies
npm install

# Start local server
npm start
# Server runs at http://localhost:3001
```

---

## Deployment

The project is configured for static hosting with serverless functions on Vercel:

```bash
npx vercel --prod
```

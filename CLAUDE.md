# Ahmed Abdel Gawad — Personal Website

## Project Overview

Ahmed's personal professional website, rebuilt from Wix onto a free self-hosted stack.
Replacing a ~$447 CAD/year Wix Premium plan.

**Live domain:** www.ahmedabdelgawad.com (not yet connected — see Phase 6)
**Preview URL:** https://clever-beignet-03da58.netlify.app
**GitHub repo:** https://github.com/amagawad/ahmedabdelgawad-website
**Domain registrar:** GoDaddy — renew before **June 6, 2026**
**Wix plan ends:** ~May 22, 2026 — site must be live before then

---

## Tech Stack

| Layer | Tool | Cost |
|---|---|---|
| Code & version control | GitHub (user: amagawad) | Free |
| Hosting & deployment | Netlify | Free |
| Contact form | Netlify Forms | Free (100 submissions/month) |
| Analytics | Google Analytics 4 | Free (not yet configured) |
| Domain | GoDaddy | ~$20–25 CAD/year |

**No build process.** Plain HTML + CSS + JS — files deploy as-is directly to Netlify.

---

## File Structure

```
Website/
├── CLAUDE.md               ← This file
├── .gitignore
├── index.html              ← Home page
├── about.html              ← About page
├── blog.html               ← Blog listing
├── blog/
│   ├── mastering-fpa.html  ← Post 1 (⚠ placeholder content — needs Ahmed's original text)
│   ├── what-is-fpa.html    ← Post 2 (⚠ placeholder content — needs Ahmed's original text)
│   └── _template.html      ← Template for future blog posts
├── css/
│   └── style.css           ← All styling
├── js/
│   └── main.js             ← Mobile menu + transparent nav scroll behaviour
└── assets/
    ├── images/
    │   └── headshot.jpg    ← ✓ Added
    └── files/
        └── resume.pdf      ← ✓ Added
```

---

## Design

- **Theme:** Monochromatic with navy hero
- **Hero section:** Deep navy background (`#0F2044`), white text, photo with shadow
- **Nav:** Transparent over the dark hero, transitions to white on scroll
- **Rest of site:** White background, black text, light gray alternating sections
- **Font:** Inter (Google Fonts)
- **Max content width:** 1100px

---

## What Still Needs to Be Done

### Immediate (before going live)

- [ ] **Content vetting** — All page text should be reviewed by Ahmed. Blog posts in particular
      are placeholder content written by Claude based only on the preview text from Wix.
      Ahmed needs to paste in his original article text.
- [ ] **Contact form testing** — Submit the form and confirm the email arrives at
      `aabdelgawad.mba2007@ivey.ca`. Netlify Forms requires at least one successful submission
      via the Netlify dashboard to activate.
- [ ] **Button & link audit** — Test every clickable element:
      - "Download Resume" in nav → should download resume.pdf ✓ (file is there, not yet tested)
      - "Download Resume" in hero → same
      - "Get in Touch" hero button → scrolls to contact form
      - "Read Full Bio" → goes to about.html
      - "Connect on LinkedIn" → opens LinkedIn profile in new tab
      - All nav links across all pages
      - Blog post links from blog.html and from index.html cards
      - "← All Articles" back link on each blog post
      - Footer links on every page
- [ ] **Google Analytics** — Ahmed to create a GA4 property at analytics.google.com,
      get the Measurement ID (G-XXXXXXXXXX), and tell Claude to add it to all 6 HTML files
- [ ] **Domain cutover** (Phase 6):
      1. In Netlify dashboard: Add custom domain `ahmedabdelgawad.com`
      2. In GoDaddy DNS: Set A record to `75.2.60.5`, CNAME `www` → `[site].netlify.app`
      3. Netlify auto-provisions free HTTPS/SSL
- [ ] **Renew domain at GoDaddy** before June 6, 2026

### Nice to Have (after going live)

- [ ] Review and refresh the About page bio text (currently copied from Wix)
- [ ] Update the homepage blog preview to always show the 2 most recent posts
- [ ] Add Open Graph meta tags (so the site previews nicely when shared on LinkedIn)

---

## Contact Details Used in Site

- **Form submissions sent to:** aabdelgawad.mba2007@ivey.ca (via Netlify Forms)
- **LinkedIn:** linkedin.com/in/ahmedabdelgawad
- **Location:** Toronto, Ontario, Canada

---

## How to: Add a New Blog Post

**Option A — Ask Claude:**
Paste your article text into chat and say "Add this as a new blog post titled X." Claude will create the HTML file and update the blog listing.

**Option B — Do it yourself:**
1. Copy `blog/_template.html`, rename it (e.g. `my-new-post.html`)
2. Replace the CAPS placeholders with your content
3. Add a line to `blog.html` in the `<nav class="blog-list">` section (there's a comment showing exactly where)

---

## How to: Deploy a Change

Once a change is made and saved in VS Code:

1. In VS Code, click the **Source Control** icon (branch icon, left sidebar)
2. Type a short commit message (e.g. "Fix typo on about page")
3. Click the **✓ checkmark** to commit
4. Click **Sync Changes** to push to GitHub
5. Netlify detects the push and redeploys in ~30 seconds

---

## How to: Activate Netlify Forms (Contact Form)

The contact form uses Netlify Forms. To activate it:
1. Go to netlify.com → your site → **Forms** tab
2. If no forms appear, submit the contact form once from the live site
3. Netlify will then capture all submissions and forward them to `aabdelgawad.mba2007@ivey.ca`
4. To set up email notifications: Forms → Settings → "Email notifications" → add the email

---

## Session Log

**2026-05-10 — Session 1**
- Built all site files from scratch (index, about, blog listing, 2 blog posts, template, CSS, JS)
- Set up GitHub repo (github.com/amagawad/ahmedabdelgawad-website)
- Connected Netlify — site live at clever-beignet-03da58.netlify.app
- Added headshot.jpg and resume.pdf
- Design updated: navy hero (#0F2044), transparent-to-white scrolling nav, photo shadow
- Added .gitignore, removed .claude/ settings from public repo
- **Paused:** Content needs vetting, contact form untested, domain not yet connected

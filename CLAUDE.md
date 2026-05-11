# Ahmed Abdel Gawad — Personal Website

## Project Overview

This is Ahmed's personal professional website, rebuilt from Wix onto a free, self-hosted stack. It replaces a ~$447 CAD/year Wix Premium plan with a fully free setup.

**Live domain:** www.ahmedabdelgawad.com  
**Domain registrar:** GoDaddy (renew before June 6, 2026)  
**Hosting:** Netlify (free tier)  
**GitHub repo:** TBD (create during setup)

---

## Tech Stack

| Layer | Tool | Cost |
|---|---|---|
| Code & version control | GitHub | Free |
| Hosting & deployment | Netlify | Free |
| Contact form | Netlify Forms | Free (100 submissions/month) |
| Analytics | Google Analytics 4 | Free |
| Domain | GoDaddy | ~$20–25 CAD/year |

**No build process.** The site is plain HTML + CSS + JavaScript — files are deployed as-is. No Node.js, no npm, no terminal commands needed after initial setup.

---

## File Structure

```
Website/
├── CLAUDE.md               ← This file (project guide)
├── index.html              ← Home page
├── about.html              ← Full bio page
├── blog.html               ← Blog listing page
├── blog/
│   ├── mastering-fpa.html  ← Blog post: Mastering FP&A
│   ├── what-is-fpa.html    ← Blog post: What is FP&A?
│   └── _template.html      ← Template: copy this to add new posts
├── css/
│   └── style.css           ← All styling (monochromatic theme)
├── js/
│   └── main.js             ← Mobile menu + active nav link
└── assets/
    ├── images/
    │   └── headshot.jpg    ← Ahmed's professional photo (add this file)
    └── files/
        └── resume.pdf      ← Ahmed's resume (add this file)
```

---

## Contact & Social

- **Email (for contact form):** aabdelgawad.mba2007@ivey.ca
- **LinkedIn:** linkedin.com/in/ahmedabdelgawad
- **Location:** Toronto, Ontario, Canada

---

## How to: Add Your Headshot Photo

1. Name your photo file exactly: `headshot.jpg`
2. Drag it into the `assets/images/` folder
3. That's it — the site will show it automatically

The site is built to handle any aspect ratio, but a portrait (taller than wide) photo works best.

---

## How to: Add Your Resume PDF

1. Name your PDF exactly: `resume.pdf`
2. Drag it into the `assets/files/` folder
3. The "Download Resume" button in the nav and hero will work automatically

---

## How to: Add a New Blog Post

**Option A — Ask Claude:**
Paste your article text into this chat and say "Add this as a new blog post." Claude will create the file and update the blog listing for you.

**Option B — Do it yourself:**
1. Open the `blog/` folder
2. Copy `_template.html` and rename it (e.g. `my-new-post.html`)
3. Open the new file in any text editor (VS Code works great)
4. Replace all CAPS placeholders with your actual content
5. Open `blog.html` and add a new line in the blog list (there's a comment showing exactly where and how)

---

## How to: Update the Blog Listing (after adding a post)

Open `blog.html`. Find this section:

```html
<nav class="blog-list" aria-label="Blog posts">
```

Add a new line at the top (newest post first):

```html
<a href="blog/your-new-post.html" class="blog-list-item">
  <span class="blog-list-title">Your Post Title Here</span>
  <span class="blog-list-date">Month DD, YYYY &nbsp;·&nbsp; X min</span>
</a>
```

Also update `index.html` if you want the homepage to show the latest 2 posts.

---

## How to: Set Up Google Analytics

1. Go to analytics.google.com (sign in with your Gmail)
2. Create a new property called "ahmedabdelgawad.com"
3. Copy your **Measurement ID** (looks like `G-XXXXXXXXXX`)
4. In every HTML file, find the commented-out GA block:
   ```html
   <!-- Google Analytics — replace GA_MEASUREMENT_ID with your actual ID -->
   <!-- <script async src="...
   ```
5. Remove the `<!--` and `-->` comment markers, and replace `GA_MEASUREMENT_ID` with your actual ID
6. Or simply tell Claude: "Add Google Analytics ID G-XXXXXXXXXX" and it will do it for you

---

## How to: Deploy Changes (after initial setup)

Once the site is connected to GitHub and Netlify (done during Phase 3):

1. Open VS Code
2. Make your edits (or ask Claude to make them)
3. In VS Code, click the Source Control icon (the branching icon on the left)
4. Type a commit message (e.g. "Add new blog post")
5. Click the checkmark to commit
6. Click "Sync Changes" (or "Push")
7. Netlify detects the change and redeploys automatically within ~30 seconds

---

## Setup Phases (track progress here)

- [ ] **Phase 1:** Create GitHub account
- [ ] **Phase 1:** Create Netlify account (sign up with GitHub)
- [ ] **Phase 1:** Create Google Analytics 4 property
- [ ] **Phase 2:** Site files built ✓ (done)
- [ ] **Phase 3:** Create GitHub repository and push all files
- [ ] **Phase 3:** Connect Netlify to GitHub repo
- [ ] **Phase 3:** Confirm site loads at *.netlify.app URL
- [ ] **Phase 4:** Add headshot.jpg to assets/images/
- [ ] **Phase 4:** Add resume.pdf to assets/files/
- [ ] **Phase 5:** Add GA4 Measurement ID to all HTML files
- [ ] **Phase 6:** In Netlify, add custom domain ahmedabdelgawad.com
- [ ] **Phase 6:** In GoDaddy, update DNS to point to Netlify
- [ ] **Phase 6:** Confirm HTTPS / padlock is active
- [ ] **Phase 6:** Renew domain at GoDaddy before June 6, 2026
- [ ] **Phase 7:** Paste original blog post content from Wix into blog files

---

## DNS Settings (GoDaddy → Netlify)

When going live, set these records in GoDaddy's DNS manager:

| Type | Name | Value |
|---|---|---|
| A | @ | 75.2.60.5 |
| CNAME | www | [your-site].netlify.app |

Netlify will provide the exact values and step-by-step instructions in their dashboard.

---

## Hosting Details

- **Netlify free tier limits:** 100 GB bandwidth/month, 300 build minutes/month — more than sufficient for this site
- **Netlify Forms free tier:** 100 form submissions/month
- **SSL:** Netlify auto-provisions a free Let's Encrypt certificate once the custom domain is connected

---

## Design Reference

- **Theme:** Monochromatic — black, white, light gray only
- **Font:** Inter (Google Fonts)
- **Primary color:** #111111 (near-black)
- **Background:** #ffffff (white)
- **Secondary text:** #555555
- **Borders:** #e5e5e5
- **Alt section bg:** #f7f7f7
- **Max content width:** 1100px

---

## Session Notes

*This section is updated by Claude after each working session.*

**2026-05-10** — Initial build complete. All pages created. Assets (headshot + resume) still need to be added. GitHub + Netlify setup not yet done. Blog post content is placeholder — Ahmed to provide original text from Wix.

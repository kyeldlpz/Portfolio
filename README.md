# Portfolio
My Portfolio

## Deployment Guide (MADE BY CURSOR)

This portfolio is built with Next.js and can be deployed to various platforms. Here are the recommended deployment options:

### Option 1: Vercel (Recommended - Easiest for Next.js)

#### Step 1: Prepare Your Code for Git

1. **Initialize Git (if not already done):**
   ```bash
   git init
   ```

2. **Add all files:**
   ```bash
   git add .
   ```

3. **Commit your code:**
   ```bash
   git commit -m "Initial commit"
   ```

#### Step 2: Push to GitHub

1. **Create a new repository on GitHub:**
   - Go to [github.com](https://github.com) and create a new repository
   - Don't initialize it with a README (you already have one)

2. **Connect and push:**
   
   **If remote doesn't exist yet:**
   ```bash
   git remote add origin <your-github-repo-url>
   git branch -M main
   git push -u origin main
   ```
   
   **If remote already exists:**
   ```bash
   # Check current remote
   git remote -v
   
   # Update remote URL if needed
   git remote set-url origin <your-github-repo-url>
   
   # If push is rejected, pull and merge first
   git pull origin main --no-rebase
   # Resolve any conflicts, then:
   git add .
   git commit -m "Merge remote changes"
   git push origin main
   ```

#### Step 3: Deploy to Vercel

1. **Go to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Sign up or log in (use "Continue with GitHub" for easiest setup)

2. **Import your project:**
   - Click "Add New..." → "Project"
   - Find and select your GitHub repository
   - Click "Import"

3. **Configure (usually auto-detected):**
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `./` (default)
   - **Build Command:** `npm run build` (auto-detected)
   - **Output Directory:** `.next` (auto-detected)
   - **Install Command:** `npm install` (auto-detected)

4. **Deploy:**
   - Click "Deploy"
   - Wait 1-2 minutes for the build to complete
   - Your site will be live at: `https://your-project-name.vercel.app`

#### Step 4: Custom Domain (Optional)

1. In your Vercel project dashboard, go to **Settings** → **Domains**
2. Enter your custom domain
3. Follow the DNS configuration instructions
4. Vercel will automatically provision an SSL certificate

#### Automatic Deployments

- Every push to `main` branch = automatic production deployment
- Pull requests = automatic preview deployments
- All deployments are instant and include:
  - Automatic HTTPS
  - Global CDN
  - Analytics (optional)

### Option 2: Netlify

1. **Push your code to GitHub** (same as above)

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login with your GitHub account
   - Click "Add new site" → "Import an existing project"
   - Select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy site"

### Option 3: GitHub Pages (Requires Static Export)

If you want to use GitHub Pages, you'll need to configure Next.js for static export:

1. Update `next.config.js` (create if it doesn't exist):
   ```javascript
   module.exports = {
     output: 'export',
     images: {
       unoptimized: true
     }
   }
   ```

2. Build and deploy:
   ```bash
   npm run build
   # The output will be in the 'out' directory
   ```

### Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

### Build for Production

```bash
npm run build
npm start
```

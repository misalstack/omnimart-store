# TecShop - Vercel Deployment Guide

## 🚀 Deploy to Vercel (Free Plan)

### Prerequisites
- Vercel account (sign up at [vercel.com](https://vercel.com))
- Sanity.io project with `projectId` and `token`
- GitHub account (optional but recommended)

---

## Method 1: Deploy via Vercel Dashboard (Recommended)

### Step 1: Prepare Your Repository

1. **Create a GitHub repository** (if you haven't already):
   - Go to [github.com/new](https://github.com/new)
   - Name it: `tecshop`
   - Make it public or private
   - Don't initialize with README (we already have one)

2. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit - TecShop with red and black theme"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/tecshop.git
   git push -u origin main
   ```

### Step 2: Import to Vercel

1. **Go to Vercel Dashboard**: https://vercel.com/new
2. **Click "Import Project"** or "Add New Project"
3. **Import Git Repository**:
   - Select your GitHub account
   - Find and select your `tecshop` repository
   - Click "Import"

### Step 3: Configure Project

1. **Framework Preset**: Next.js (should auto-detect)
2. **Root Directory**: `./` (leave as default)
3. **Build Command**: `npm run build` (auto-filled)
4. **Install Command**: `npm install --legacy-peer-deps`
   - Click "Override" next to Install Command
   - Enter: `npm install --legacy-peer-deps`

### Step 4: Add Environment Variables

Click "Environment Variables" and add:

| Name | Value |
|------|-------|
| `NEXT_PUBLIC_SANITY_TOKEN` | Your Sanity token from `.env` file |

**To get your Sanity token:**
- Check your local `.env` file
- Or get it from [sanity.io/manage](https://www.sanity.io/manage)

### Step 5: Deploy

1. Click **"Deploy"**
2. Wait 2-3 minutes for the build to complete
3. Your site will be live at: `https://tecshop-xxxxx.vercel.app`

---

## Method 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

### Step 3: Deploy

```bash
vercel
```

Follow the prompts:
- **Set up and deploy?** Yes
- **Which scope?** Your account
- **Link to existing project?** No
- **Project name?** tecshop
- **Directory?** ./
- **Override settings?** Yes
  - **Install Command**: `npm install --legacy-peer-deps`

### Step 4: Add Environment Variables

```bash
vercel env add NEXT_PUBLIC_SANITY_TOKEN
```

Paste your Sanity token when prompted.

### Step 5: Deploy to Production

```bash
vercel --prod
```

---

## Method 3: Deploy from Vercel Dashboard (No GitHub)

### Step 1: Go to Vercel

1. Visit: https://vercel.com/new
2. Click on "Import Git Repository"
3. At the bottom, click "Or, import from a different Git provider"

### Step 2: Manual Upload

Since you're already on the Vercel new project page:

1. **Option A - Import from Git**:
   - Click "Import Git Repository"
   - Enter your repository URL
   
2. **Option B - Use Vercel CLI** (easier):
   - Open terminal in your project
   - Run: `npm install -g vercel`
   - Run: `vercel`
   - Follow the prompts

---

## 🔧 Configuration Details

### Build Settings

```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "installCommand": "npm install --legacy-peer-deps",
  "outputDirectory": ".next"
}
```

### Environment Variables Required

```
NEXT_PUBLIC_SANITY_TOKEN=your_sanity_token_here
```

**Where to find your Sanity token:**
1. Go to [sanity.io/manage](https://www.sanity.io/manage)
2. Select your project
3. Go to "API" tab
4. Create a new token or copy existing one
5. Use "Editor" or "Admin" permissions

---

## 📝 Post-Deployment Steps

### 1. Custom Domain (Optional)

1. Go to your project in Vercel Dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

### 2. Update Sanity CORS

Add your Vercel domain to Sanity CORS settings:

1. Go to [sanity.io/manage](https://www.sanity.io/manage)
2. Select your project
3. Go to "API" → "CORS Origins"
4. Add: `https://your-project.vercel.app`
5. Check "Allow credentials"

### 3. Test Your Deployment

Visit your deployed site and check:
- ✅ Homepage loads
- ✅ Red and black theme is applied
- ✅ Logo displays correctly
- ✅ Products load from Sanity
- ✅ Navigation works
- ✅ Language switcher works
- ✅ Dark/light mode toggle works

---

## 🐛 Troubleshooting

### Build Fails

**Error: "Cannot find module 'next'"**
- Solution: Make sure install command is set to `npm install --legacy-peer-deps`

**Error: "NEXT_PUBLIC_SANITY_TOKEN is not defined"**
- Solution: Add the environment variable in Vercel dashboard

### Products Not Loading

**Issue: Products don't appear**
- Check Sanity token is correct
- Verify Sanity project ID in `lib/client.ts`
- Add Vercel domain to Sanity CORS settings

### Images Not Loading

**Issue: Product images broken**
- Check `next.config.js` has `cdn.sanity.io` in domains
- Verify Sanity CDN is accessible

---

## 💰 Vercel Free Plan Limits

✅ **Included in Free Plan:**
- Unlimited deployments
- Automatic HTTPS
- 100 GB bandwidth per month
- Serverless functions
- Preview deployments
- Custom domains

⚠️ **Limits:**
- 100 GB bandwidth/month
- 100 GB-hours serverless function execution
- 6,000 build minutes/month

**TecShop should easily fit within these limits!**

---

## 🔄 Continuous Deployment

Once connected to GitHub:
- Every push to `main` branch = automatic deployment
- Pull requests = preview deployments
- Rollback to previous versions anytime

---

## 📊 Monitoring

### Vercel Analytics (Free)

1. Go to your project dashboard
2. Click "Analytics"
3. View:
   - Page views
   - Performance metrics
   - Top pages
   - Visitor locations

---

## 🎉 Your TecShop is Live!

After deployment, your site will be available at:
- **Production**: `https://tecshop-xxxxx.vercel.app`
- **Custom Domain**: `https://yourdomain.com` (if configured)

Share your techy red and black e-commerce store with the world! 🚀

---

## 📞 Support

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Sanity Docs**: https://www.sanity.io/docs

---

**Built with ❤️ by MisalStack**  
**Theme**: Techy Red & Black  
**Deployed on**: Vercel

# 🚀 Deploy TecShop to Vercel NOW!

## Quick Deployment Steps

You're already on Vercel! Here's what to do:

### Option 1: Deploy via Vercel CLI (Fastest - 2 minutes)

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```
   - Enter your email: `salman17546@gmail.com`
   - Check your email for verification link
   - Click the link to verify

3. **Deploy**:
   ```bash
   vercel
   ```
   
   Answer the prompts:
   - **Set up and deploy?** → Press Enter (Yes)
   - **Which scope?** → Select your account
   - **Link to existing project?** → N (No)
   - **Project name?** → `tecshop` (or press Enter)
   - **Directory?** → Press Enter (current directory)
   - **Override settings?** → Y (Yes)
   - **Install Command?** → Type: `npm install --legacy-peer-deps`
   - **Build Command?** → Press Enter (use default)
   - **Output Directory?** → Press Enter (use default)

4. **Add Environment Variable**:
   ```bash
   vercel env add NEXT_PUBLIC_SANITY_TOKEN
   ```
   - Select: **Production**
   - Paste your Sanity token (from your `.env` file)

5. **Deploy to Production**:
   ```bash
   vercel --prod
   ```

**Done! Your site will be live in 2-3 minutes!** 🎉

---

### Option 2: Deploy via GitHub + Vercel Dashboard (5 minutes)

Since you're already on the Vercel dashboard, let's use it!

#### Step 1: Create GitHub Repository

1. Go to: https://github.com/new
2. Repository name: `tecshop`
3. Make it **Public** or **Private** (your choice)
4. **Don't** check "Initialize with README"
5. Click **Create repository**

#### Step 2: Push Code to GitHub

Open your terminal and run:

```bash
git remote add origin https://github.com/YOUR_USERNAME/tecshop.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

#### Step 3: Import to Vercel

1. In the Vercel tab you have open, click **"Import Git Repository"**
2. If not connected, click **"Connect GitHub"**
3. Authorize Vercel to access your GitHub
4. Find and select your `tecshop` repository
5. Click **"Import"**

#### Step 4: Configure Build Settings

1. **Framework Preset**: Next.js (auto-detected)
2. **Root Directory**: `./` (leave default)
3. **Build Command**: `npm run build` (auto-filled)
4. **Install Command**: 
   - Click **"Override"** button
   - Enter: `npm install --legacy-peer-deps`

#### Step 5: Add Environment Variables

1. Click **"Environment Variables"** section
2. Add variable:
   - **Name**: `NEXT_PUBLIC_SANITY_TOKEN`
   - **Value**: Your Sanity token (check your `.env` file)
3. Click **"Add"**

#### Step 6: Deploy!

1. Click **"Deploy"** button
2. Wait 2-3 minutes for build to complete
3. Your site will be live! 🚀

---

## Where to Find Your Sanity Token

### Option A: Check Your Local .env File

Look for `.env` file in your project root. It should have:
```
NEXT_PUBLIC_SANITY_TOKEN=your_token_here
```

### Option B: Get from Sanity Dashboard

1. Go to: https://www.sanity.io/manage
2. Select your project
3. Click **"API"** tab
4. Under **"Tokens"**, create a new token or copy existing one
5. Use **"Editor"** or **"Admin"** permissions

---

## After Deployment

### 1. Your Live URL

Vercel will give you a URL like:
```
https://tecshop-xxxxx.vercel.app
```

### 2. Update Sanity CORS

**Important!** Add your Vercel URL to Sanity CORS:

1. Go to: https://www.sanity.io/manage
2. Select your project
3. Go to **"API"** → **"CORS Origins"**
4. Click **"Add CORS origin"**
5. Enter: `https://tecshop-xxxxx.vercel.app` (your actual URL)
6. Check **"Allow credentials"**
7. Click **"Save"**

### 3. Test Your Site

Visit your deployed site and check:
- ✅ Homepage loads with red/black theme
- ✅ Logo displays correctly
- ✅ Products load from Sanity
- ✅ Navigation works
- ✅ Language switcher works

---

## Troubleshooting

### Build Fails with "Cannot find module"
**Solution**: Make sure install command is `npm install --legacy-peer-deps`

### Products Don't Load
**Solution**: 
1. Check Sanity token is correct
2. Add Vercel domain to Sanity CORS settings

### Images Don't Load
**Solution**: Verify `cdn.sanity.io` is in `next.config.js` domains

---

## Need Help?

Check the detailed guide: `VERCEL_DEPLOYMENT_GUIDE.md`

---

## Your Project is Ready! 🎉

- ✅ Git initialized
- ✅ Code committed
- ✅ Vercel config created
- ✅ Ready to deploy

**Just run `vercel` in your terminal or use the Vercel dashboard!**

---

**Built by**: MisalStack  
**Theme**: Techy Red & Black  
**Ready to Deploy**: YES! 🚀

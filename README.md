# ViaVia Landing Page

Landing page for ViaVia - a platform for booking entire multi-city trips in one checkout.

## Development

```bash
npm install
npm run dev
```

The site will be available at http://localhost:3000

## Database Setup (Supabase)

This project uses Supabase to store form submissions. Follow these steps to set it up:

### 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign up/login
2. Create a new project
3. Wait for the project to be set up (takes ~2 minutes)

### 2. Set Up the Database Table

1. In your Supabase dashboard, go to **SQL Editor**
2. Open the file `supabase-setup.sql` from this repository
3. Copy and paste the entire SQL script into the SQL Editor
4. Click **Run** to execute the script
5. This will create the `form_submissions` table and necessary policies

### 3. Get Your API Keys

1. In Supabase dashboard, go to **Settings** → **API**
2. Copy your **Project URL** and **anon/public key**

### 4. Configure Environment Variables

1. Create a `.env.local` file in the root directory:
   ```bash
   cp .env.local.example .env.local
   ```

2. Add your Supabase credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

3. Restart your dev server:
   ```bash
   npm run dev
   ```

### 5. View Submissions

You can view form submissions in your Supabase dashboard:
- Go to **Table Editor** → `form_submissions`
- Or use the SQL Editor to query:
  ```sql
  SELECT * FROM form_submissions ORDER BY submitted_at DESC;
  ```

## Deployment

This project is configured for GitHub Pages deployment using GitHub Actions.

### Setup GitHub Pages

1. Go to your repository Settings → Pages
2. Under "Source", select **GitHub Actions**
3. The workflow will automatically build and deploy on every push to `main`

The site will be available at: `https://klemenkocic.github.io/Multi-City-Trip/`

### Environment Variables for GitHub Pages

Since GitHub Pages is a static site, you'll need to add your Supabase credentials to the build process:

1. Go to your repository Settings → Secrets and variables → Actions
2. Add the following secrets:
   - `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anon key

3. Update `.github/workflows/deploy.yml` to use these secrets (already configured)

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Instrument Serif font
- Supabase (PostgreSQL database)

## Project Structure

- `/app` - Next.js app directory (pages, layout)
- `/components` - React components
- `/lib` - Utility functions (database, etc.)
- `/types` - TypeScript type definitions


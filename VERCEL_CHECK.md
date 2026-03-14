# Vercel deployment checklist

If the site still shows 404 or blank after pushing:

1. **Root Directory**  
   Project → Settings → General → **Root Directory** must be **empty** (or `.`).  
   If it points to a subfolder, Vercel will 404 the app.

2. **Framework**  
   Should be **Next.js** (auto-detected). Don’t set Output Directory for Next.js.

3. **Build logs**  
   Deployments → select the latest → open **Building** and **Runtime** logs.  
   Check for red errors (build failure, missing env, wrong Node version).

4. **Which URL you open**  
   Use the **Production** URL from the project overview (e.g. `portfolio2023-updated.vercel.app`),  
   not an old preview URL like `...-fm39fbd11-....vercel.app`.

5. **Redeploy**  
   After changing Root Directory or other settings, use **Redeploy** on the latest deployment so the new config is used.

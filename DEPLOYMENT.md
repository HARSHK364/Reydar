# Reydar Website Deployment Guide

## Domain Configuration for https://www.reydar.in

This guide explains how to deploy your Reydar website to your domain.

## Prerequisites
- Domain: https://www.reydar.in
- Hosting provider (Netlify, Vercel, or any static hosting)

## Deployment Steps

### Option 1: Netlify Deployment
1. Build the project:
   ```bash
   npm run build
   ```
2. Upload the `dist` folder to Netlify
3. Configure custom domain to `www.reydar.in`
4. The `_redirects` file is already configured for SPA routing

### Option 2: Vercel Deployment
1. Connect your GitHub repository to Vercel
2. Configure custom domain to `www.reydar.in`
3. The `vercel.json` file is already configured

### Option 3: Manual Deployment
1. Build the project:
   ```bash
   npm run build:prod
   ```
2. Upload the contents of `dist` folder to your web server
3. Configure your web server to:
   - Serve `index.html` for all routes (SPA routing)
   - Set proper MIME types for assets

## Domain DNS Configuration
Make sure your DNS is configured:
- A record pointing to your hosting provider's IP
- CNAME record for `www` pointing to your hosting provider

## SSL Certificate
Ensure HTTPS is enabled on your hosting provider for security.

## Environment Variables
No environment variables are required for this static site.

## Performance Optimizations
- Gzip compression enabled
- Asset caching configured (31536000 seconds for static assets)
- Code splitting implemented for vendor libraries

## SEO Configuration
- Meta tags configured for search engines
- Open Graph tags for social media sharing
- Robots.txt and sitemap.xml included
- Proper page titles and descriptions

## Support
For technical support, contact your hosting provider or web developer.

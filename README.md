# Premium 3D Portfolio

A premium, animated 3D portfolio built with Next.js, featuring Spline 3D animations, Spotlight effects, and smooth Framer Motion transitions.

## 🚀 Features

- **3D Animations**: Interactive Spline 3D scenes
- **Spotlight Effects**: Aceternity and Ibelick spotlight animations
- **Smooth Animations**: Framer Motion for premium transitions
- **Glassmorphism**: Modern glass-effect UI components
- **Responsive Design**: Fully responsive across all devices
- **Dark Mode**: Premium dark theme with gradient accents
- **TypeScript**: Fully typed for better development experience

## 📦 Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Shadcn UI**
- **Framer Motion**
- **Spline 3D**
- **Lucide React** (Icons)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
```bash
npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── sections/
│   │   │   │   ├── hero.tsx
│   │   │   │   ├── about.tsx
│   │   │   │   ├── projects.tsx
│   │   │   │   ├── experience.tsx
│   │   │   │   └── contact.tsx
│   │   │   └── navigation.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   └── ui/
│   │       ├── card.tsx
│   │       ├── splite.tsx
│   │       ├── spotlight-aceternity.tsx
│   │       ├── spotlight-ibelick.tsx
│   │       └── demo.tsx
│   └── lib/
│       └── utils.ts
├── public/
├── components.json
├── next.config.ts
├── package.json
└── tsconfig.json
```

## 🎨 Customization

### Update Your Information

1. **Hero Section** (`src/app/components/sections/hero.tsx`)
   - Update name, title, and description
   - Replace Spline scene URL with your own

2. **About Section** (`src/app/components/sections/about.tsx`)
   - Update bio and values
   - Modify skills array with your technical skills

3. **Projects Section** (`src/app/components/sections/projects.tsx`)
   - Replace placeholder projects with your actual projects
   - Update project details, links, and images

4. **Experience Section** (`src/app/components/sections/experience.tsx`)
   - Replace placeholder experience with your CV experience
   - Update job titles, companies, and descriptions

5. **Contact Section** (`src/app/components/sections/contact.tsx`)
   - Update contact information
   - Modify social media links

### Spline 3D Scenes

1. Create your 3D scene in [Spline](https://spline.design)
2. Export and publish your scene
3. Copy the scene URL
4. Replace the scene URL in the Hero section component

### Colors & Styling

- Customize colors in `src/app/globals.css`
- Modify glassmorphism effects in the CSS utilities
- Adjust animations in component files

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**

2. **Import project to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository

3. **Configure environment variables** (if needed)
   - Add any API keys or environment variables in Vercel dashboard

4. **Deploy**
   - Vercel will automatically deploy your project
   - Your site will be live at `your-project.vercel.app`

### Other Deployment Options

- **Netlify**: Connect your GitHub repo and deploy
- **AWS Amplify**: Follow AWS Amplify deployment guide
- **Self-hosted**: Build and deploy using `npm run build` and `npm start`

## 📝 Adding Your CV

1. **Create a PDF of your CV**
   - Save it as `resume.pdf` or `cv.pdf`

2. **Place it in the public folder**
   ```
   public/resume.pdf
   ```

3. **Update the download link** in `hero.tsx`
   ```tsx
   <Link href="/resume.pdf" download>
   ```

## 🎯 Performance Optimization

- Images are optimized using Next.js Image component
- 3D scenes are lazy-loaded with React Suspense
- Animations use GPU acceleration
- Code splitting for optimal bundle size

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

Muhammed Riswan - [contact@riswan.site](mailto:contact@riswan.site)

Project Link: [https://github.com/riswan-dev/portfolio](https://github.com/riswan-dev/portfolio)

---

Built with ❤️ using Next.js and modern web technologies.

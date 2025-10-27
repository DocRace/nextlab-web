# ZJU NEXT Lab Official Website

Official website of Zhejiang University NEXT Lab. We are dedicated to forging a future—NEXT Lab, where technology transcends its role as a cold tool, becoming a **Narrative**-driven partner with deep **Empathetic** capacity. By exploring novel interaction design paradigms across **X-reality** boundaries, we aim to achieve a fundamental **Transformation** in the relationship between humans, society, and the digital realm.

## 🚀 Quick Start

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build

# Start production server
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

### Pages (`src/app/`)
- **Home** (`page.tsx`) - Main page with banner and navigation
- **Researches** (`researches/`) - Research groups list and detail pages
- **Publications** (`publications/`) - Publications list and detail pages  
- **Courses** (`courses/`) - Courses list and detail pages
- **Gallery** (`gallery/`) - Works showcase and competition entries
- **Team** (`team/`) - Team members list and detail pages
- **Introduction** (`introduction/`) - Lab overview and mission
- **Contact** (`contact/`) - Contact information

### Data Sources (`src/data/`)
- `team.ts` - Team member information
- `publications.ts` - Publication data
- `competitions.ts` - Competition award entries

### Components (`src/components/`)
- `BannerOptimized.tsx` - Homepage carousel banner
- `Navbar.tsx` - Navigation bar
- `Footer.tsx` - Footer
- `TeamAvatar.tsx` - Team member avatars
- `GalleryImage.tsx` - Gallery image components

## 🔧 Content Update Guide

### Team Members Update
Edit `src/data/team.ts` file to add/modify member information:
```typescript
{
  id: 'member-id',
  name: 'Chinese Name',
  englishName: 'English Name',
  category: 'Researchers' | 'Staff' | 'PhD Students' | 'Master Students' | 'Undergraduates' | 'Alumni',
  position: 'Position/Grade',
  avatar: '/avatars/avatar.jpg',
  email: 'email@zju.edu.cn'
}
```

### Publications Update
Edit `src/data/publications.ts` file to add/modify publication information:
```typescript
{
  id: 'paper-id',
  title: 'Paper Title',
  authors: 'Author List',
  venue: 'Journal/Conference',
  year: 2024,
  image: '/images/paper-cover.jpg',
  wechatLink: 'https://mp.weixin.qq.com/s/...' // optional
}
```

### Competition Entries Update
Edit `src/data/competitions.ts` file to add/modify award entries:
```typescript
{
  id: 'work-id',
  title: 'Work Title',
  year: 2024,
  winners: 'Winners',
  award: 'Award Name',
  description: 'Work Description',
  image: '/images/work-cover.jpg',
  externalLink: 'https://award-page.com'
}
```

### Image Resources
- Team member avatars: `public/avatars/`
- Publication covers: `public/images/`
- Competition works: `public/images/`
- Team photos: `public/images/`

## 🎨 Tech Stack

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling framework
- **Vercel** - Deployment platform

## 📝 Lab Mission

**"Design Driven, Technology Empowered"**

Specializing in interaction design with three research directions:
- **Auditory Intelligence (AI Group)** - Music and audio AI
- **Visual Intelligence (VI Group)** - Font and visual design
- **Emotional Intelligence (EI Group)** - Design and innovation

## 🌐 Deployment

Deploy using [Vercel Platform](https://vercel.com/new).

Check out [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
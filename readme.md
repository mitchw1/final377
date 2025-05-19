# BaseStat Pro

**BaseStat Pro** is a full-stack web application that allows baseball fans and fantasy sports players to visualize team performance, track MLB stats, and gain player insights. Built with Node.js, Supabase, and Chart.js, this application provides a modern, interactive dashboard backed by real-time and user-submitted data.

## Live Demo

[Your Vercel deployment link goes here]

---

## Target Browsers

Chrome (Desktop & Mobile)
Firefox (Desktop)
Safari (iOS & macOS)
Edge (Latest version)

---

## Developer Manual

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/basestat-pro.git
   cd basestat-pro
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file and add your Supabase credentials:
   ```env
   SUPABASE_URL=your_supabase_url
   SUPABASE_KEY=your_anon_key
   ```

### Running the App

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

### API Overview

#### `/final/scores` - Handles team score submissions

`GET`: Returns all submitted scores (used in dashboard line chart)
`POST`: Accepts a JSON body with `course`, `score`, and `date`

#### `/final/recommendations` *(expected)*

Returns average score and performance-based recommendations

### Frontend Visualizations

**Chart.js Line Chart**: Displays trends in user-submitted scores
**Live MLB Home Run Leaders**: Fetches top HR leaders from the MLB Stats API
**Radar Chart** (on optimizer.html): Shows fantasy team optimization profiles
**Bar Charts** (on player-insights.html): Visualizes MLB player stat performance

### Known Bugs
Some player images may not load if not available via MLB static image endpoint
External APIs (like MLB) may fail on rate limits or network interruptions

### Future Roadmap

- Add OAuth login for saving favorite players
- Integrate more MLB stat categories (e.g., ERA, AVG)
- Add mobile responsive enhancements
- Export stats to CSV or PDF

---

## Contributors
Mitch Willoughby – Frontend + MLB API Integration


## Project Structure

```
/public
  ├── index.html
  ├── dashboard.html
  ├── player-insights.html
  ├── optimizer.html
  ├── tracker.html
  ├── help.html
  ├── style.css
/api
  ├── scores.js
  ├── recommendations.js (optional)
README.md
```

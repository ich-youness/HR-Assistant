# HR-Assistant

HR-Assistant is a full-stack application designed to streamline HR processes with an AI-powered assistant. The project consists of a Python backend and a modern React (Vite + TypeScript + Tailwind CSS) frontend.

## Project Structure

```
HR-Assistant/
│
├── BackEnd.py                # Python backend (API, business logic)
│
└── FrontEnd/                 # Frontend (React, Vite, TypeScript, Tailwind CSS)
    ├── public/               # Static assets
    ├── src/                  # Source code
    │   ├── components/       # Reusable UI components
    │   ├── hooks/            # Custom React hooks
    │   ├── lib/              # Utility functions
    │   ├── pages/            # App pages (Chat, Index, NotFound, etc.)
    │   └── services/         # API and service logic
    ├── index.html            # Main HTML file
    ├── package.json          # Frontend dependencies and scripts
    ├── tailwind.config.ts    # Tailwind CSS configuration
    └── ...                   # Other config and setup files
```

## Features
- AI-powered HR assistant chat interface
- Modern, responsive UI with reusable components
- Voice and text input support
- Modular, scalable codebase

## Getting Started

### Backend (Python)
1. Ensure you have Python 3.8+ installed.
2. Install required packages (if any):
   ```sh
   pip install -r requirements.txt
   ```
3. Run the backend:
   ```sh
   python BackEnd.py
   ```

### Frontend (React + Vite)
1. Navigate to the `FrontEnd` directory:
   ```sh
   cd FrontEnd
   ```
2. Install dependencies (using bun, npm, or yarn):
   ```sh
   bun install
   # or
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```sh
   bun run dev
   # or
   npm run dev
   # or
   yarn dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Configuration
- Environment variables for the frontend can be set in `FrontEnd/.env`.
- Backend configuration can be added to `BackEnd.py` or a separate config file as needed.

## Scripts
- **Frontend**: See `FrontEnd/package.json` for available scripts (dev, build, preview, etc.).
- **Backend**: Run `python BackEnd.py` to start the server.

## License
This project is licensed under the MIT License.

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

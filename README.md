# KlimaMetrix - Carbon Emissions Calculator

A demo application for tracking and visualizing carbon emissions data.

## Features

- 📊 Real-time carbon emissions calculator
- 📈 Historical emissions visualization
- 📱 Responsive design
- 🔄 State management with Zustand
- 📝 TypeScript for type safety

## Tech Stack

### Frontend
- React with TypeScript
- Vite for build tooling
- TailwindCSS for styling
- Chart.js for data visualization
- Zustand for state management
- React Query for API integration
- Jest for testing

### Backend
- NestJS framework
- TypeORM for database
- PostgreSQL database
- Jest for testing
- Swagger for API documentation

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/mattburnett-repo/klimametrix.git
cd klimametrix
```

2. Install dependencies locally (for IDE support):
```bash
# Using Yarn 4.6
yarn install
```

3. Start the application using Docker:
```bash
docker-compose up
```

4. Open http://localhost:5173 in your browser

### Note on Dependencies
- Local `yarn install` is needed for IDE functionality (TypeScript, autocomplete, etc.)
- Docker containers handle their own dependency installation for runtime
- We use Yarn 4.6 as our package manager

### Yarn Configuration

The project uses Yarn 4.6 with the following configuration:

```yaml
# .yarnrc.yml
nodeLinker: node-modules
yarnPath: .yarn/releases/yarn-4.6.0.cjs
enableGlobalCache: false
```

To ensure consistent package management:
- Use `yarn install` instead of `npm install`
- The correct Yarn version is enforced through `packageManager` field in package.json
- Workspaces are configured for monorepo support

## Project Structure

```
klimametrix/
├── apps/
│   ├── client/              # React frontend
│   │   ├── src/
│   │   │   ├── components/  # React components
│   │   │   ├── services/    # API services
│   │   │   ├── store/      # State management
│   │   │   └── types/      # TypeScript types
│   │   └── test/           # Frontend tests
│   │
│   └── server/             # NestJS backend
│       ├── src/
│       │   ├── emissions/  # Emissions module
│       │   └── common/     # Shared utilities
│       └── test/          # Backend tests
```

## Testing

```bash
# Run client tests
cd apps/client
npm test

# Run server tests
cd apps/server
npm test
```

## Environment Variables

### Client (.env)
```
VITE_API_URL=http://localhost:3000
```

### Server (.env)
```
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=klimametrix
```

## Contributing

This is a demo project, but feel free to fork and modify for your own use.

## License

MIT 
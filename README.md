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

2. Set up Yarn:
```bash
# Create Yarn directory and download required binary
mkdir -p .yarn/releases
curl -L -o .yarn/releases/yarn-4.6.0.cjs https://repo.yarnpkg.com/4.6.0/packages/yarnpkg-cli/bin/yarn.js

# Create yarn.lock to mark project boundary
touch yarn.lock

# Install dependencies
yarn install
```

3. Start the application:
```bash
docker-compose up
```

4. Open http://localhost:5173 in your browser

## Project Structure

```
klimametrix/
├── apps/
│   ├── client/              # React frontend
│   └── server/             # NestJS backend
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

## Environment Configuration

The project uses environment-specific configuration files:

- `.env` in project root: Controls which environment the application runs in
  ```env
  # Use 'development' for local development
  # Use 'production' for production deployment
  NODE_ENV=development
  ```

- `apps/server/.env.development`: Development environment variables
- `apps/server/.env.production`: Production environment variables
- `apps/client/.env.development`: Client development variables
- `apps/client/.env.production`: Client production variables

## Development

1. Create `.env` file in project root and set `NODE_ENV=development`
2. Run `docker-compose up` to start all services
3. Access the application at http://localhost

## Contributing

This is a demo project, but feel free to fork and modify for your own use.

## License

MIT # klimametrix-client
# klimametrix-client
# klimametrix-client

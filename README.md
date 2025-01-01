#### Example Request:
```bash
GET /api?url=https://example.com/video
```

#### Example Response:
```json
{
  "title": "Video Title",
  "url": "https://example.com/video",
  "size": "100MB"
}
```

#### Example Response:
```json
{
  "response": "Paris"
}
```

---

## Running the Application

### Prerequisites
- Node.js (version 14.x or higher)
- npm (Node package manager)

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/ARYAN-BOT-404/alldl-apis.git
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

   This will start the server on [http://localhost:3000](http://localhost:3000).

---

## File Structure

```
/project-root
|-- /public
|   |-- index.html      # Homepage of the application
|   |-- docs.html       # Documentation page
|-- /views              # Static assets served to the client
|-- server.js           # Main application logic
|-- package.json        # Node.js project dependencies and scripts
|-- README.md           # Project documentation
```

---

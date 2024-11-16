# Gourmet-Go - Food Ordering Website

Gourmet-Go is a multi-page food ordering website built using React JS. It offers a seamless user experience with its home page, cart page, place order page, and a display-only login/signup popup. The site features category-based food item filtering, allowing users to sort items by categories such as salads, rolls, desserts, and more. The website leverages Context API for efficient state management and Tailwind CSS for responsive design.

## Features

- **Home Page**: Browse the menu and view featured items.
- **Cart Page**: View selected items, adjust quantities, and remove items.
- **Place Order Page**: Complete the order by providing necessary details.
- **Category Filtering**: Filter food items by categories like salads, rolls, desserts, etc.
- **Login/Signup Popup**: A non-functional popup designed to display login or signup options.
- **State Management**: Utilizes Context API to manage the state effectively across components.
- **Styling**: Fully responsive and styled using Tailwind CSS.

## Tech Stack

- **React JS**: Front-end library for building user interfaces.
- **Context API**: For global state management.
- **Tailwind CSS**: For styling and responsiveness.

## Getting Started

### Prerequisites

- Node.js
- npm
```bash
sudo apt update
sudo apt install -y nodejs
```

To run this project locally:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/ArpitRathi1/Gourmet-Go.git
    cd Gourmet-Go
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Run the app:**
    ```bash
    npm run dev
    ```

4. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## Folder structure

```plaintext
Gourmet-Go/
│
├── index.html
│
├── src/
│   ├── components/       # Reusable components
│   ├── context/          # Context API setup
│   ├── pages/            # Home, Cart, and Place Order pages
│   ├── App.jsx           # Main App component
│   ├── index.jsx         # Entry point
│
├── tailwind.config.js    # Tailwind CSS configuration
├── package.json
└── README.md
```

## Contributing

Contributions are welcome! Please fork this repository and open a pull request to suggest improvements or new features.

## Contact

For any inquiries, please contact [rathi844@gmail.com](mailto:rathi844@gmail.com).
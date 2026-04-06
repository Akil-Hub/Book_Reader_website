import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import AutoImport from "unplugin-auto-import/vite";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    AutoImport({
      imports: [
        "react",
        {
          "react-router-dom": [
            "Link", "NavLink", "Routes", "Route",
            "useNavigate", "useParams", "useLocation",
          ],
        },
        {
          "react-redux": ["useSelector", "useDispatch"],
        },
      ],
      dts: false,              // ✅ kills auto-imports.d.ts
      eslintrc: { enabled: false }, // ✅ kills .eslintrc-auto-import.json
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
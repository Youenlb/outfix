import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider, defaultSystem} from "@chakra-ui/react";
import { ClothesProvider } from "./provider/ClothesProvider.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* TODO : value obsoléte pourquoi ça me mets une erreur si je le mets pas ?*/}
    <ChakraProvider value={defaultSystem}>
      <ClothesProvider>
        <App />
      </ClothesProvider>
    </ChakraProvider>
  </StrictMode>
);

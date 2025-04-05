import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import ContactModal from "./components/Modals/ContactModal";
import { useState, createContext, Dispatch, SetStateAction } from "react";

export const modalContext = createContext<Dispatch<SetStateAction<boolean>>>(
  () => {}
);
const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <modalContext.Provider value={setShowModal}>
        <Header />
        <Main />
        <Footer />
        {showModal && (
          <ContactModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
          />
        )}
      </modalContext.Provider>
    </div>
  );
};

export default App;

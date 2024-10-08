import logo from './logo.svg';
import './App.css';
import Main from './main';
import { MoralisProvider } from "react-moralis";
import Footer from './Footer';
import { WalletProvider } from './WalletContext';


function App() {
  return (
    <>
    <div className="bg-black text-white px-[3vw] text-center min-h-screen">
      <section className="max-w-[650px] mx-auto">
        <WalletProvider>
          <Main />
          <Footer />
        </WalletProvider>
      </section>
    </div>
   </>
  );
}

export default App;

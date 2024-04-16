import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import Header from "./components/Header";


function App() {
  return (
    <>
      <div style = {{height: '100vh', background : 'red'}}>
        {/* Header */}
        <Header />

        {/* Body */}
        <Body />

        {/* Footer */}
        <Footer />
        
      </div>
    </>
  );
}

export default App;

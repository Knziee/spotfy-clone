import Banner from '../../Components/Banner';
import '../../Assets/styles/global.css';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';


function Home() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Footer/>
    </div>
  );
}

export default Home;

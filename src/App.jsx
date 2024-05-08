
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Pricing from './components/Pricing/Pricing';
import Testimonials from './components/Testimonials/Testimonials';
import Workflow from './components/Workflow/Workflow';

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
        <Features />
        <Workflow />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}

export default App;

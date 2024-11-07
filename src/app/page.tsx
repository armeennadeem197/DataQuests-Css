// src/app/page.tsx
import Navbar from '@/app/Navbar/page'
import Hero from '@/app/Hero/page'
import About from '@/app/about/page'
import Services from '@/app/Services/page'
import Footer from '@/app/Footer/page'

function Page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services/>
      <Footer />
    </div>
  );
}

export default Page;

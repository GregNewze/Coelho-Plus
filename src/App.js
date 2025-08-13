import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { GiEnergyArrow, GiMeditation, GiClockwork } from 'react-icons/gi';
import { FaArrowRight, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const CoelhoPlusLanding = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [email, setEmail] = useState('');
  const controls = useAnimation();

  // Dados simulados
  const benefits = [
    { icon: <GiEnergyArrow size={40} />, title: "Energia Gradual", description: "Cafeína natural do chá verde" },
    { icon: <GiMeditation size={40} />, title: "Calma Integrada", description: "L-teanina e magnésio" },
    { icon: <GiClockwork size={40} />, title: "Sem Crash", description: "Energia sustentável" }
  ];

  const testimonials = [
    { id: 1, quote: "É melhor que qualquer energético fuleiro que já tomei!", author: "Angeliny" },
    { id: 2, quote: "Me concentrei 4 horas seguidas estudando pra recuperação!", author: "Letícia" },
    { id: 3, quote: "Fiquei ligadão, telezé", author: "Big Dog (Gabriel S.)" }
  ];

  const blogPosts = [
    { id: 1, title: "Como manter foco sem ansiedade", excerpt: "Descubra técnicas para produtividade saudável" },
    { id: 2, title: "O que é L-teanina e por que é útil", excerpt: "O aminoácido que combina com cafeína" },
    { id: 3, title: "Cafeína: amiga ou vilã?", excerpt: "Como consumir de forma inteligente" }
  ];

  const faqs = [
    { id: 1, question: "Posso tomar à noite?", answer: "Não recomendamos devido à cafeína" },
    { id: 2, question: "Tem açúcar?", answer: "Não, é adoçado naturalmente" },
    { id: 3, question: "Quanto tempo dura o efeito?", answer: "Entre 4-6 horas, dependendo do metabolismo" },
    { id: 4, question: "Pode substituir o café?", answer: "Sim, é uma alternativa mais equilibrada" },
    { id: 5, question: "Tem contraindicações?", answer: "Consulte seu médico se gestante ou com condições cardíacas" }
  ];

  const toggleFaq = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    controls.start({
      scale: [1, 1.05, 1],
      transition: { duration: 0.3 }
    });
    alert(`Obrigado por assinar! Email: ${email}`);
    setEmail('');
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="coelho-plus">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <span>Coelho</span>
            <span className="plus">+</span>
          </div>
          
          <nav className="nav">
            <ul>
              <li><button onClick={() => scrollToSection('hero')} className="nav-link">Início</button></li>
              <li><button onClick={() => scrollToSection('benefits')} className="nav-link">Benefícios</button></li>
              <li><button onClick={() => scrollToSection('how-to-use')} className="nav-link">Como Usar</button></li>
              <li><button onClick={() => scrollToSection('testimonials')} className="nav-link">Depoimentos</button></li>
              <li><button onClick={() => scrollToSection('faq')} className="nav-link">FAQ</button></li>
            </ul>
          </nav>
          
          <motion.button 
            className="cta-button header-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Comprar agora
          </motion.button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Mais energia. Mais foco. No seu tempo.</h1>
            <p>Suplemento natural que combina energia e calma para máxima produtividade sem ansiedade.</p>
            <motion.button
              className="cta-button primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Experimente o Coelho+
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="product-placeholder"></div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="benefits">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Benefícios do Coelho+</h2>
            <p className="subtitle">Por que nosso produto é diferente</p>
          </motion.div>
          
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="benefit-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="benefit-icon">
                  {benefit.icon}
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How To Use Section */}
      <section id="how-to-use" className="how-to-use">
        <div className="container">
          <div className="section-header">
            <h2>Seu ritmo ideal</h2>
            <p className="subtitle">Como usar o Coelho+ para melhores resultados</p>
          </div>
          
          <div className="usage-content">
            <div className="usage-rules">
              <motion.div 
                className="rule"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3>Máximo por dia</h3>
                <p>2 unidades (cápsula ou gummy)</p>
              </motion.div>
              
              <motion.div 
                className="rule"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3>Intervalo mínimo</h3>
                <p>4 horas entre doses</p>
              </motion.div>
              
              <motion.div 
                className="rule"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3>Motivo</h3>
                <p>Evita sobreposição de cafeína</p>
              </motion.div>
            </div>
            
            <motion.div 
              className="clock-visual"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="clock">
                <div className="hand"></div>
                <div className="time-indicator">4h</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2>Quem usa recomenda</h2>
            <p className="subtitle">Depoimentos reais de clientes</p>
          </div>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="testimonial-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="avatar"></div>
                <p className="quote">"{testimonial.quote}"</p>
                <p className="author">— {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="blog">
        <div className="container">
          <div className="section-header">
            <h2>Conhecimento é poder</h2>
            <p className="subtitle">Aprenda mais sobre produtividade saudável</p>
          </div>
          
          <div className="blog-grid">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                className="post-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="post-image"></div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <a href="#" className="read-more">
                  Ler mais <FaArrowRight />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq">
        <div className="container">
          <div className="section-header">
            <h2>Dúvidas frequentes</h2>
            <p className="subtitle">Tire suas principais dúvidas sobre o Coelho+</p>
          </div>
          
          <div className="faq-list">
            {faqs.map((faq) => (
              <div key={faq.id} className="faq-item">
                <div 
                  className="faq-question"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <h3>{faq.question}</h3>
                  <span className={`toggle-icon ${activeFaq === faq.id ? 'active' : ''}`}>+</span>
                </div>
                <div className={`faq-answer ${activeFaq === faq.id ? 'active' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h2>Receba dicas exclusivas</h2>
              <p>Assine nossa newsletter e receba conteúdos sobre produtividade saudável</p>
            </div>
            
            <motion.form 
              onSubmit={handleSubmit}
              animate={controls}
              className="newsletter-form"
            >
              <input
                type="email"
                placeholder="Seu melhor email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="cta-button secondary">
                Assinar
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo">
                <span>Coelho</span>
                <span className="plus">+</span>
              </div>
              <p>Energia e foco no seu ritmo</p>
              <div className="social-links">
                <a href="#"><FaFacebook /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaTwitter /></a>
              </div>
            </div>
            
            <div className="footer-links">
              <div className="links-column">
                <h3>Produto</h3>
                <ul>
                  <li><a href="#benefits">Benefícios</a></li>
                  <li><a href="#how-to-use">Como usar</a></li>
                  <li><a href="#faq">FAQ</a></li>
                </ul>
              </div>
              
              <div className="links-column">
                <h3>Empresa</h3>
                <ul>
                  <li><a href="#">Sobre nós</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Contato</a></li>
                </ul>
              </div>
              
              <div className="links-column">
                <h3>Legal</h3>
                <ul>
                  <li><a href="#">Termos</a></li>
                  <li><a href="#">Privacidade</a></li>
                  <li><a href="#">Cookies</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Coelho+. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Estilos CSS */}
      <style jsx global>{`
        :root {
          --snow-white: #F9F9F9;
          --pearl: #E8E8E8;
          --crystal: #D1E5E8;
          --soft-lavender: #B8B8D1;
          --gentle-mint: #9BE8D8;
          --warm-peach: #FFB7A0;
          --deep-ink: #2D2D42;
          --shadow: rgba(45, 45, 66, 0.1);
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Montserrat', sans-serif;
          color: var(--deep-ink);
          line-height: 1.6;
          background-color: var(--snow-white);
          overflow-x: hidden;
        }

        h1, h2, h3, h4 {
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
        }

        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Header */
        .header {
          position: fixed;
          top: 0;
          width: 100%;
          background-color: var(--snow-white);
          box-shadow: 0 2px 10px var(--shadow);
          z-index: 1000;
          padding: 15px 0;
        }

        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .logo {
          display: flex;
          align-items: center;
          font-size: 24px;
          font-weight: bold;
        }

        .logo .plus {
          color: var(--warm-peach);
          font-size: 28px;
          position: relative;
          top: -5px;
        }

        .nav ul {
          display: flex;
          list-style: none;
          gap: 20px;
        }

        .nav-link {
          background: none;
          border: none;
          color: var(--deep-ink);
          font-weight: 500;
          font-family: 'Montserrat', sans-serif;
          font-size: 16px;
          cursor: pointer;
          padding: 5px 0;
          position: relative;
          transition: all 0.3s ease;
        }

        .nav-link:hover {
          color: var(--soft-lavender);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: var(--warm-peach);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        /* Buttons */
        .cta-button {
          background: linear-gradient(135deg, var(--gentle-mint) 0%, var(--soft-lavender) 100%);
          color: var(--deep-ink);
          border: none;
          padding: 12px 25px;
          border-radius: 30px;
          font-weight: 600;
          cursor: pointer;
          font-size: 16px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(155, 232, 216, 0.3);
          position: relative;
          overflow: hidden;
          display: inline-block;
          text-align: center;
          text-decoration: none;
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(155, 232, 216, 0.4);
        }

        .cta-button.primary {
          animation: pulse 2s infinite;
        }

        .cta-button.secondary {
          background: linear-gradient(135deg, var(--soft-lavender) 0%, var(--warm-peach) 100%);
        }

        .header-button {
          margin-left: 20px;
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }

        /* Hero Section */
        .hero {
          padding: 150px 0 100px;
          background: linear-gradient(135deg, var(--snow-white) 0%, var(--crystal) 100%);
          position: relative;
          overflow: hidden;
        }

        .hero .container {
          display: flex;
          align-items: center;
          min-height: 80vh;
        }

        .hero-content {
          flex: 1;
          padding-right: 40px;
          z-index: 2;
        }

        .hero-content h1 {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .hero-content p {
          font-size: 1.2rem;
          margin-bottom: 2.5rem;
          opacity: 0.9;
          max-width: 500px;
        }

        .hero-image {
          flex: 1;
          position: relative;
          z-index: 1;
        }

        .product-placeholder {
          width: 100%;
          max-width: 500px;
          height: 400px;
          background-color: var(--pearl);
          border-radius: 20px;
          margin: 0 auto;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0); }
        }

        /* Sections */
        section {
          padding: 100px 0;
          scroll-margin-top: 100px;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-header h2 {
          font-size: 2.5rem;
          margin-bottom: 15px;
        }

        .section-header .subtitle {
          font-size: 1.1rem;
          opacity: 0.8;
          max-width: 600px;
          margin: 0 auto;
        }

        /* Benefits Section */
        .benefits {
          background-color: var(--pearl);
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-top: 50px;
        }

        .benefit-card {
          background-color: var(--snow-white);
          border-radius: 15px;
          padding: 30px;
          text-align: center;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
        }

        .benefit-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }

        .benefit-icon {
          width: 80px;
          height: 80px;
          background-color: rgba(155, 232, 216, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          color: var(--gentle-mint);
        }

        .benefit-card h3 {
          font-size: 1.5rem;
          margin-bottom: 15px;
          color: var(--deep-ink);
        }

        .benefit-card p {
          color: var(--deep-ink);
          opacity: 0.8;
        }

        /* How To Use Section */
        .how-to-use {
          background-color: var(--snow-white);
        }

        .usage-content {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 50px;
          justify-content: center;
        }

        .usage-rules {
          flex: 1;
          min-width: 300px;
          max-width: 500px;
        }

        .rule {
          margin-bottom: 30px;
          padding: 25px;
          background-color: var(--pearl);
          border-radius: 15px;
          transition: transform 0.3s;
        }

        .rule:hover {
          transform: translateY(-5px);
        }

        .rule h3 {
          color: var(--warm-peach);
          margin-bottom: 10px;
          font-size: 1.3rem;
        }

        .clock-visual {
          flex: 1;
          min-width: 300px;
          max-width: 400px;
          display: flex;
          justify-content: center;
        }

        .clock {
          width: 250px;
          height: 250px;
          border: 10px solid var(--gentle-mint);
          border-radius: 50%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hand {
          position: absolute;
          width: 100px;
          height: 6px;
          background-color: var(--warm-peach);
          top: 50%;
          left: 50%;
          transform-origin: left center;
          animation: rotate 8s linear infinite;
        }

        .time-indicator {
          font-size: 1.5rem;
          font-weight: bold;
          color: var(--soft-lavender);
        }

        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Testimonials Section */
        .testimonials {
          background-color: var(--gentle-mint);
          color: var(--deep-ink);
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-top: 50px;
        }

        .testimonial-card {
          background-color: var(--snow-white);
          border-radius: 15px;
          padding: 30px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          transition: transform 0.3s;
        }

        .testimonial-card:hover {
          transform: translateY(-5px);
        }

        .avatar {
          width: 80px;
          height: 80px;
          background-color: var(--pearl);
          border-radius: 50%;
          margin: 0 auto 20px;
        }

        .quote {
          font-style: italic;
          margin-bottom: 20px;
          font-size: 1.1rem;
        }

        .author {
          font-weight: bold;
          color: var(--soft-lavender);
        }

        /* Blog Section */
        .blog {
          background-color: var(--snow-white);
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-top: 50px;
        }

        .post-card {
          background-color: var(--pearl);
          border-radius: 15px;
          overflow: hidden;
          transition: transform 0.3s;
        }

        .post-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }

        .post-image {
          height: 200px;
          background-color: rgba(155, 232, 216, 0.3);
        }

        .post-card:nth-child(2) .post-image {
          background-color: rgba(184, 184, 209, 0.3);
        }

        .post-card h3 {
          padding: 20px 20px 10px;
          font-size: 1.3rem;
        }

        .post-card p {
          padding: 0 20px 20px;
          color: var(--deep-ink);
          opacity: 0.8;
        }

        .read-more {
          display: inline-flex;
          align-items: center;
          padding: 0 20px 20px;
          color: var(--warm-peach);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s;
        }

        .read-more:hover {
          color: var(--soft-lavender);
        }

        .read-more svg {
          margin-left: 5px;
          transition: transform 0.3s;
        }

        .read-more:hover svg {
          transform: translateX(5px);
        }

        /* FAQ Section */
        .faq {
          background-color: var(--soft-lavender);
          color: white;
        }

        .faq-list {
          max-width: 800px;
          margin: 50px auto 0;
        }

        .faq-item {
          margin-bottom: 15px;
          border-radius: 10px;
          overflow: hidden;
          transition: transform 0.3s;
        }

        .faq-item:hover {
          transform: translateY(-3px);
        }

        .faq-question {
          background-color: rgba(255,255,255,0.1);
          padding: 20px;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: background-color 0.3s;
        }

        .faq-question:hover {
          background-color: rgba(255,255,255,0.2);
        }

        .faq-question h3 {
          color: white;
          font-size: 1.2rem;
        }

        .toggle-icon {
          font-size: 1.5rem;
          transition: transform 0.3s;
        }

        .toggle-icon.active {
          transform: rotate(45deg);
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease-out;
          background-color: rgba(255,255,255,0.05);
        }

        .faq-answer.active {
          max-height: 200px;
          padding: 20px;
        }

        .faq-answer p {
          color: rgba(255,255,255,0.9);
        }

        /* Newsletter Section */
        .newsletter {
          background-color: var(--warm-peach);
          color: white;
          padding: 80px 0;
        }

        .newsletter-content {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
        }

        .newsletter-text {
          flex: 1;
          min-width: 300px;
        }

        .newsletter-text h2 {
          color: white;
          margin-bottom: 15px;
          font-size: 2rem;
        }

        .newsletter-form {
          flex: 1;
          min-width: 300px;
          display: flex;
          gap: 10px;
        }

        .newsletter-form input {
          flex: 1;
          padding: 15px 20px;
          border: none;
          border-radius: 25px;
          font-size: 16px;
          min-width: 200px;
        }

        /* Footer */
        .footer {
          background-color: var(--deep-ink);
          color: white;
          padding: 100px 0 30px;
          position: relative;
        }

        .footer::before {
          content: '';
          display: block;
          height: 100px;
          width: 100%;
          background: url("data:image/svg+xml,%3Csvg viewBox='0 0 1200 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z' fill='%23FFB7A0' opacity='.25'/%3E%3Cpath d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z' fill='%23FFB7A0' opacity='.5'/%3E%3Cpath d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z' fill='%23FFB7A0'/%3E%3C/svg%3E");
          background-size: cover;
          background-repeat: no-repeat;
          position: absolute;
          top: -100px;
          left: 0;
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 50px;
          margin-bottom: 50px;
        }

        .footer-brand {
          margin-bottom: 30px;
        }

        .footer .logo .plus {
          color: var(--warm-peach);
        }

        .footer p {
          margin-bottom: 20px;
          opacity: 0.8;
        }

        .social-links {
          display: flex;
          gap: 15px;
        }

        .social-links a {
          color: white;
          font-size: 20px;
          opacity: 0.7;
          transition: all 0.3s;
        }

        .social-links a:hover {
          opacity: 1;
          transform: translateY(-3px);
        }

        .footer-links {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 30px;
        }

        .links-column h3 {
          color: white;
          margin-bottom: 20px;
          font-size: 1.2rem;
        }

        .links-column ul {
          list-style: none;
        }

        .links-column li {
          margin-bottom: 10px;
        }

        .links-column a {
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          transition: color 0.3s;
        }

        .links-column a:hover {
          color: white;
        }

        .footer-bottom {
          text-align: center;
          padding-top: 30px;
          border-top: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.5);
          font-size: 14px;
        }

        /* Responsive Styles */
        @media (max-width: 992px) {
          .hero .container {
            flex-direction: column;
            text-align: center;
          }
          
          .hero-content {
            margin-bottom: 50px;
            padding-right: 0;
          }
          
          .hero-content p {
            margin: 0 auto;
          }
        }

        @media (max-width: 768px) {
          .header-container {
            flex-direction: column;
            gap: 15px;
          }

          .nav ul {
            flex-wrap: wrap;
            justify-content: center;
          }

          .header-button {
            margin: 15px 0 0;
          }

          .hero {
            padding-top: 180px;
          }

          .hero-content h1 {
            font-size: 2.2rem;
          }

          section {
            padding: 80px 0;
          }

          .section-header h2 {
            font-size: 2rem;
          }

          .usage-content {
            flex-direction: column;
          }

          .usage-rules {
            margin-bottom: 40px;
          }

          .newsletter-form {
            flex-direction: column;
          }
        }

        @media (max-width: 480px) {
          .hero-content h1 {
            font-size: 1.8rem;
          }

          .section-header h2 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default CoelhoPlusLanding;
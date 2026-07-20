import { Link } from 'react-router-dom';
import { LuInstagram, LuMail, LuShoppingBag, LuClock, LuMapPin } from 'react-icons/lu';
import { FaTiktok } from "react-icons/fa6";
import { FaWhatsapp } from 'react-icons/fa6';
import Container from '@/components/common/Container/Container';
import { businessInfo } from '@/data/businessInfo';
import styles from './Footer.module.scss';

const socialLinks = [
  { href: 'https://wa.me/573133439887', label: 'WhatsApp', icon: FaWhatsapp },
  { href: 'https://www.instagram.com/nemovinylart?igsh=MXUwNnE2amh1cHB3ZA==', label: 'Instagram', icon: LuInstagram },
  { href: 'https://www.tiktok.com/@nemo.vinyl.art?_r=1&_t=ZS-98CU9MNz6zl', label: 'Facebook', icon: FaTiktok },
  { href: `mailto:${businessInfo.correo}`, label: 'Correo', icon: LuMail },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <div>
          <p className={styles.brand}>Nemo Vinyl Art</p>
          <p className={styles.tagline}>Personalización automotriz y decoración de alta gama.</p>
        </div>

        <nav className={styles.links}>
          <Link to="/catalogo">Catálogo</Link>
          <Link to="/servicios">Servicios</Link>
          <Link to="/galeria">Trabajos</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>

        <div className={styles.info}>
          <p className={styles.infoRow}>
            <LuClock size={16} /> {businessInfo.horario}
          </p>
          <p className={styles.infoRow}>
            <LuMapPin size={16} /> {businessInfo.ubicacion}
          </p>
          <p className={styles.infoRow}>
            <LuMail size={16} /> {businessInfo.correo}
          </p>
        </div>

        <div className={styles.social}>
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
              <Icon size={20} />
            </a>
          ))}
          <a href="https://listado.mercadolibre.com.co/_CustId_1559114525?item_id=MCO3915522046&category_id=MCO402996&seller_id=1559114525&client=recoview-selleritems&recos_listing=true#origin=vip&component=sellerData&typeSeller=classic" target="_blank" rel="noreferrer" aria-label="MercadoLibre">
            <LuShoppingBag size={20} />
          </a>
        </div>
      </Container>
      <p className={styles.copy}>© {new Date().getFullYear()} Nemo Vinyl Art. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;

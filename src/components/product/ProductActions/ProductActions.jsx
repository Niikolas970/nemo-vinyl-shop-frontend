import { useState } from 'react';
import { LuMessageCircle, LuShoppingBag } from 'react-icons/lu';
import Button from '@/components/common/Button/Button';
import QuantitySelector from '@/components/common/QuantitySelector/QuantitySelector';
import { getWhatsAppQuoteUrl } from '@/services/whatsapp';
import { formatPrice } from '@/utils/formatPrice';
import styles from './ProductActions.module.scss';

function ProductActions({ product }) {
  const [metros, setMetros] = useState(1);
  const total = product.precioPorMetro * metros;

  return (
    <div className={styles.actions}>
      <div className={styles.breakdown}>
        <div className={styles.row}>
          <span>Precio por metro</span>
          <strong>{formatPrice(product.precioPorMetro)}</strong>
        </div>

        <div className={styles.row}>
          <span>Cantidad</span>
          <QuantitySelector defaultValue={metros} onChange={setMetros} />
        </div>

        <div className={styles.total}>
          <span>Precio aproximado</span>
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>

      <p className={styles.helper}>Solicita tu cotización sin compromiso. Te asesoramos para elegir el mejor material.</p>

      <div className={styles.buttons}>
        <Button
          as="a"
          href={getWhatsAppQuoteUrl(product, metros)}
          target="_blank"
          rel="noreferrer"
          variant="primary"
        >
          <LuMessageCircle /> Cotizar por WhatsApp
        </Button>

        {product.mercadoLibre ? (
          <Button as="a" href={product.mercadoLibre} target="_blank" rel="noreferrer" variant="secondary">
            <LuShoppingBag /> Ver en MercadoLibre
          </Button>
        ) : (
          <Button variant="secondary" disabled>
            <LuShoppingBag /> Próximamente en MercadoLibre
          </Button>
        )}
      </div>

      <p className={styles.note}>Los precios en MercadoLibre pueden variar debido a las comisiones de la plataforma.</p>
    </div>
  );
}

export default ProductActions;

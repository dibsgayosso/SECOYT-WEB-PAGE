# SECOYT · sitio corporativo

Sitio estático en español de México, sin dependencias de ejecución ni proceso de compilación. Publicar los HTML, `assets/`, `robots.txt` y `sitemap.xml` en la raíz del dominio **https://secoytmexico.com/**. Las rutas de navegación y recursos son absolutas desde la raíz; GitHub Pages bajo un subdirectorio requiere adaptar esas rutas.

## Cambios

- Diseño responsive, navegación completa en todas las páginas, menú accesible con cierre mediante Escape, pie de página y acceso rápido a contacto.
- Imagen original generada del Zócalo, cámara y texto C5, en WebP de escritorio y móvil. C5 se presenta como elemento de una composición ilustrativa; no implica afiliación o conexión operativa de SECOYT con una dependencia gubernamental.
- 21 páginas, incluidos servicios, guías, cobertura local y privacidad del contacto.
- Títulos y descripciones únicos, canonicals, Open Graph, Twitter Card, imagen social JPG, Organization/WebPage y breadcrumbs estructurados.
- Sitemap completo en el mismo dominio que los canonicals. Enlaces internos a las páginas locales y guías.
- Formulario de cotización que abre WhatsApp con los campos codificados. No necesita backend y no envía mensajes automáticamente.

## Contacto

Se conservó el número del repositorio: **55 6422 1858** y su enlace WhatsApp `5215564221858`. Para cambiarlo, reemplazar enlaces `wa.me`, `tel:`, el JSON-LD y `assets/js/site.js` de forma consistente.

## Fuentes de logotipos reales

Archivos guardados localmente en `assets/img/brands/`; se conservan proporciones y colores. Reducción y recorte de espacio transparente solo para optimización.

| Marca | Fuente |
| --- | --- |
| Dahua | https://tvc.mx/images/store/our-brands/dahua.png |
| ZKTeco | https://tvc.mx/images/store/our-brands/zkt.png |
| Hikvision | https://iberia.hikvision.com/hubfs/Hikvision%20Logo%20white-2-Jan-24-2024-03-53-17-4118-PM.png |
| DSC | https://dsc.tvc.mx/hubfs/DSC-blue.png |
| Intec | https://www.intec.com.mx/web/image/website/1/logo |
| TVC en Línea | https://dsc.tvc.mx/hubfs/TVC-LOGO-rgb.png |

Las marcas identifican tecnologías integradas; el sitio no declara una relación de distribuidor autorizado. Los datos de trayectoria y formación se conservaron del contenido previo y deben corresponder a la documentación de SECOYT.

## SEO y operación

Registrar el sitemap en Google Search Console y mantener actualizada la ficha de Google Business Profile desde las cuentas de la empresa. El código no garantiza posiciones en Google. No se agregaron identificadores ficticios de analítica ni testimonios o proyectos inventados. Los ejemplos de aplicación se identifican como tales.

Para previsualizar: `python -m http.server 8080` desde la raíz y abrir `http://localhost:8080/`. Verificar las páginas de escritorio y móvil, el menú y los enlaces de contacto antes de desplegar en el alojamiento final.

## Evitar mezcla de versiones en producción

El HTML incluye el CSS compartido de forma embebida. Así una copia HTML nueva lleva su diseño completo y no puede combinarse con una copia antigua de `styles.css` almacenada por el navegador/CDN. La fuente de estilos sigue siendo `assets/css/styles.css`; después de editarla ejecutar `python tools/prepare_static.py`. El mismo comando agrega una versión por contenido al enlace de JavaScript. Publicar todos los HTML y recursos del mismo commit, conservando las imágenes WebP y los logotipos.

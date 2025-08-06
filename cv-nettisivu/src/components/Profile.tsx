import { motion } from 'framer-motion';

const Profile = () => {
  const highlightKeywords = (text: string) => {
    const keywords = [
      'ohjelmistokehitystä',
      'motivaatio',
      'työkokemusta',
      'metallialalta',
      'koneistuksesta',
      'kiinteistöhuollosta',
      'ongelmanratkaisutaitojani',
      'tarkkuutta',
      'vastuullisuutta',
      'huolellinen',
      'oma-aloitteinen',
      'määrätietoinen',
      'positiivisena',
      'ahkerana',
      'asenne',
      'omaksua',
      'varusmiespalveluksen',
      'sotilaspoliisina',
      'paineen alla',
      'vastuunkantoa'
    ];

    let highlightedText = text;
    keywords.forEach(keyword => {
      const regex = new RegExp(`(${keyword})`, 'gi');
      highlightedText = highlightedText.replace(regex, '<span class="highlight-keyword">$1</span>');
    });

    return highlightedText;
  };

  const profileText = `Olen ohjelmistokehitystä opiskeleva nuori mies Turusta, jolla on vahva motivaatio oppia ja kehittyä alalla. Minulla on myös työkokemusta metallialalta sekä kiinteistöhuollosta, jotka ovat kehittäneet käytännön ongelmanratkaisutaitojani, tarkkuutta ja vastuullisuutta työssä.

Työskentelytapani on huolellinen, oma-aloitteinen ja määrätietoinen. Minua pidetään positiivisena ja ahkerana työntekijänä – hoidan annetut tehtävät loppuun asti ja kysyn aktiivisesti uusia haasteita. Minulla on hyvä asenne työntekoon ja kyky omaksua nopeasti uusia asioita.

Suoritin varusmiespalveluksen sotilaspoliisina, mikä vahvisti kykyäni toimia paineen alla ja kehitti vastuunkantoa entisestään.`;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="section-card"
    >
      <h2 className="section-title">Profiili</h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{ color: '#cbd5e1', lineHeight: '1.8', fontSize: '1.125rem' }}
        dangerouslySetInnerHTML={{ __html: highlightKeywords(profileText) }}
      />
    </motion.section>
  );
};

export default Profile; 
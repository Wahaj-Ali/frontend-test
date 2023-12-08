import React from 'react'
import './ISI.css'

const ISI = () => {
  return (
    <div className='isi'>
      <h2>Important Safety Information</h2>

      <div className="info">
        <h3>Indications and clinical use:</h3>
        <p>TUKYSA (tucatinib) is indicated in combination with trastuzumab and capecitabine for treatment of patients with locally advanced unresectable or metastatic HER2-positive breast cancer, including patients with brain metastases, who have received prior treatment with trastuzumab, pertuzumab, and trastuzumab emtansine, separately or in combination.
        </p>
        <p>Clinical trial data supporting the effectiveness of TUKYSA in combination with trastuzumab and capecitabine are limited to patients who had received at least one prior HER2-directed therapy in the metastatic setting.</p>
      </div>

      <div className="info">
        <h3>Pediatrics:</h3>
        <p>No data are available to Health Canada; therefore, Health Canada has not authorized an indication for pediatric use.</p>
      </div>

      <div className="info">
        <h3>Geriatrics:</h3>
        <p>In the HER2CLIMB trial, 116/612 (19%) patients were 65 years or older. No overall differences in effectiveness were observed between these patients and younger patients. Differences in safety were observed between patients 65 years or older and younger patients including: higher serious adverse events, higher incidences of Grade ≥3 diarrhea and vomiting, and higher treatment discontinuation due to adverse events.</p>
      </div>

      <div className="info">
        <h3>Contraindications:</h3>
        <ul>
          <li>Patients who are hypersensitive to this drug or to any ingredient in the formulation, including any non-medicinal ingredient, or component of the container</li>
          <li>Refer to the Product Monographs of capecitabine and trastuzumab for further information on the contraindications of these drugs</li>
        </ul>
      </div>

      <div className="info">
        <h3>Most serious warnings and precautions:</h3>
        <p><span>Diarrhea:</span>TUKYSA can cause severe diarrhea leading to dehydration, acute kidney injury, and death. If diarrhea occurs, administer antidiarrheal treatment as clinically indicated. Based on the severity of diarrhea, interrupt dose, then dose reduce or permanently discontinue TUKYSA. Refer to the trastuzumab and capecitabine Product Monographs for relevant safety information and dose modifications. Perform diagnostic tests as clinically indicated to exclude other causes of diarrhea.</p>

        <p><span>Hepatotoxicity:</span>TUKYSA can cause severe hepatotoxicity. Monitor ALT, AST, and bilirubin before starting TUKYSA, every 3 weeks during treatment, and as clinically indicated. If hepatotoxicity occurs, based on the severity of hepatotoxicity, interrupt dose, then dose reduce or permanently discontinue TUKYSA.</p>

        <p><span>Fetal Harm:</span>TUKYSA may cause fetal harm and developmental malformation when administered to a pregnant woman. Verify the pregnancy status of female patients of reproductive potential before starting TUKYSA. Advise females of reproductive potential and male patients with female partners of reproductive potential of the potential risk to a fetus and advise on the use of effective contraception during TUKYSA treatment and for at least 1 week after the last dose.</p>
      </div>

      <div className="info">
        <h3>Other relevant warnings and precautions:</h3>
        <ul>
          <li>Brain Metastases: Patients with brain metastases requiring immediate local therapy were excluded from the pivotal HER2CLIMB study. These patients should undergo local CNS directed therapy prior to being treated with TUKYSA, if appropriate.</li>
          <li>Driving and Operating Machinery: Due caution should be exercised when driving or operating a vehicle or potentially dangerous machinery</li>
          <li>Fertility: No fertility studies in women or men have been conducted. Based on findings from animal studies, TUKYSA may impair male and female fertility.</li>
          <li>Breast Feeding: No data are available regarding the presence of TUKYSA or its metabolites in human or animal milk or its effects on the breastfed child or on milk production. Because many drugs are excreted into human milk and because of the potential for serious adverse reactions in a breastfed child from TUKYSA advise lactating women not to breastfeed while taking TUKYSA and for at least 1 week after the last dose.</li>
          <li>Stomatitis</li>
          <li>Liver function monitoring</li>
          <li>Creatinine increased</li>
          <li>Palmar-plantar erythrodysesthesia syndrome</li>
        </ul>
      </div>

      <div className="info">
        <h3>Dosing and administration:</h3>
        <p>For patients with baseline severe hepatic impairment (Child-Pugh C), reduce the starting dose of TUKYSA to 200 mg orally twice daily.</p>
        <p>Do not use TUKYSA in combination with capecitabine and trastuzumab in patients with severe renal impairment (creatinine clearance [CrCI] &lt;30 mL/min)</p>
        <p>Avoid concomitant use of strong CYP2C8 inhibitors with TUKYSA.</p>
      </div>

      <div className="info">
        <h3>For more information:</h3>
        <p>FPlease consult the Product Monograph at <a id='mail' href="https://seagen.ca/TukysaPM" target="_blank" rel="noopener noreferrer">https://seagen.ca/TukysaPM</a> for important information relating to adverse reactions, drug interactions, and dosing information. The Product Monograph is also available by calling Seagen Inc. at 1-833-4SEAGEN <a id='phone' href="tel:1-833-473-2436">(1-833-473-2436)</a>.</p>
        <p>This website is intended only for Canadian HCPs.</p>
      </div>
    </div>
  )
}

export default ISI
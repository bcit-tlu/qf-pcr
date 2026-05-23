import React from "react";
import PopOver from '../components/General/PopOver';
import PCRPhoto from '../assets/pcr_photo.png';

import trisomy13 from '../assets/tri13_circled.png';
import trisomy18 from '../assets/tri18_circled.png';
import trisomy21 from '../assets/tri21_circled.png';
import klinefelter_47XXY from '../assets/XXY_circled.png';
import turner from '../assets/Turner_circled.png';

import { Figure, Image, Table } from 'react-bootstrap';

export default [
    {
        id:"what-is-pcr",
        title:"What is QF-PCR?",
        content:
        <div>
            <p>
                Quantitative fluorescence PCR (QF-PCR) is a diagnostic tool that can be used to rapidly identify chromosome numerical abnormalities. It is used in clinical laboratories to detect aneuploidy involving chromosomes 13, 18, 21, X and Y in prenatal samples.  This test is called prenatal rapid aneuploidy detection (RAD). 
            </p>
            <p>
                QF-PCR can also be used to assess for specific chromosomal abnormalities involving chromosomes 13, 15, 16, 18, 21, 22, X and Y in spontaneous pregnancy loss samples.
            </p>
            <p>
                The basis of this diagnostic tool is the molecular genetic technique known as the polymerase chain reaction (PCR), a method for selective amplification of a portion of the genome. The exponential phase of PCR is key to the success of QF-PCR as a method for aneuploidy detection. During the exponential stage of PCR, the number of copies of a target are equal to 2&#8319;, where n is the number of PCR cycles. QF-PCR allows for the amount of fluorescent signal produced in PCR to be proportional to the amount of starting material by performing polymerase chain reaction (PCR) with limited cycle numbers and fluorescent label on PCR primers. 
            </p>
            <br></br>
            <p>
                Commercial kits are available for QF-PCR that contain all the components needed for PCR amplification of DNA from patient specimens. These components include fluorescently labelled PCR primers designed to amplify chromosome specific DNA sequences called short tandem repeats (STR)
                <br></br>
                <br></br>

                eg: GTCAG<u>ATCATCATCATCATCATC</u>TTA

            </p>
            <p>
                Note that the above example has a repeating sequence of ATC, repeated six times. Due to the repetitive nature of STRs, errors can occur during DNA replication that change the number of repeats, resulting in {<PopOver text={'polymorphism'}/>}. 
            </p>
            <p>
                Since fluorescent primers are used, the amount of PCR product can be detected and quantified, based on the area under the fluorescent “peak” generated for each PCR product (peak areas are noted below each peak, as seen below):
            </p>
            <img src={"https://qf-pcr-bucket.s3.ca-central-1.amazonaws.com/images/bg_1.png"}></img>
            <p>
                Note that this example shows one of the two results expected from a normal individual: 2 peaks with a peak ratio (i.e the ratio obtained by dividing the first peak area by the second) between 0.8 and 1.4 (called a 1:1 ratio). This individual is heterozygous for this marker and this is why 2 peaks are seen.
            </p>
            <p>
                The other expected result for a normal individual is only one peak: 
                <br></br>
                <br></br>

                <img src={"https://qf-pcr-bucket.s3.ca-central-1.amazonaws.com/images/bg_3.png"}></img>
            </p>
            <p>
                Unfortunately, this is also the result seen for failure to successfully amplify PCR products. For this reason, a single peak is considered uninformative.
            </p>
            <p>
                Trisomies (3 copies) are seen as either an extra peak, or a peak area ratio of 1:2 (if the second peak has the larger peak area) or 2:1. Note that if trisomy is detected, it should be seen for all of the informative markers on that chromosome.
                    <br></br>
                    <br></br>

                    <img src={"https://qf-pcr-bucket.s3.ca-central-1.amazonaws.com/images/bg_2.png"}></img>
                    <img className={"ml-4"} src={"https://qf-pcr-bucket.s3.ca-central-1.amazonaws.com/images/bg_4.png"}></img>

            </p>
            <h5>Challenging Cases</h5>
            <p>
            Two issues that can complicate the diagnosis of QF-PCR data are mosaicism (patient has cells that do not all have the same genetic composition, therefore more than one karyotype is present) or non-fetal cell contamination (often referred to as maternal cell contamination (MCC)). Non-fetal cell contamination can occur if some non-fetal cells were also collected during specimen collection). Both of these conditions can result in peaks with unusually small peak areas or unusual peak heights.</p>
                <br></br>
            <h5>Example of QF-PCR results with mosaicism:</h5>
            <p>
                The effect of mosaicism can vary depending on the percentage of cells in the patient that have the alternate karyotype. For this example, note the marked extra peak for the marker on Chromosome 21: this suggests mosaicism.
            </p>
            <img src={"https://qf-pcr-bucket.s3.ca-central-1.amazonaws.com/images/bg_5.png"}></img>
            <br></br>
            <br></br>

            <h5>Example of QF-PCR results with Non-fetal cell contamination:</h5>
            <p>
            Non-fetal cell contamination is always a possibility when collecting fetal cells. These contaminant cells can potentially cause difficulties in results interpretation as it can be difficult to determine which results were generated from the fetal cells. The amount of contamination can vary, but notice in the example below that all informative markers have either a short extra peak, or the peak ratios are unusual (compare to the mosaic case, where only one chromosome had unusual results).
            </p>
            <img src={"https://qf-pcr-bucket.s3.ca-central-1.amazonaws.com/images/bg_6.png"}></img>
        </div>
    },
    {
        id:"pcr-overview",
        title:"PCR overview",content:<div>In 1983 Dr. Kary Mullis was inspired to develop a method for in vitro (“in glass” i.e. outside of the living cell) DNA amplification, when he realized that short oligonucleotide “primers” could be designed to target specific sequences. PCR is an amplification method where the amount of target DNA is doubled at each step during the early, exponential phase of the reaction (replication slows during later stages as reagents run out and become rate-limiting). Two years later the first paper describing the practical application of PCR, as a method to amplify the gene for betaglobin as a diagnosis method for sickle cell anemia, was published. Mullis called this technique a polymerase-catalyzed chain reaction because the key enzyme is DNA {<PopOver text={'polymerase'}/>}  and the copies of the template that are created act as more targets for the polymerase, causing exponential amplification.
        <br></br>                                                
        <br></br>
        This technique uses the same components and enzyme from DNA replication within cells, but it has been adapted for lab use. Over the years the original PCR protocol has been optimized by utilizing a temperature-resistant polymerase (so the polymerase does not need to be replaced each cycle) and fluorescent labels (allowing for automated product detection). In summary, PCR is a method to target a specific portion of the genome in order to increase its abundance. Key components in the PCR reaction include (in addition to the previously mentioned polymerase), 2 short oligonucleotide “primers” to initiate the amplification at a specific location and all four nucleotide building blocks for DNA. The PCR reaction occurs in a device called a thermocycler, which allows for precise temperature and reaction length control. Each PCR cycle consists of 3 reactions, illustrated below:
        <br></br>
        <br></br>

        <Figure>

                <Figure.Image
                    fluid
                    alt="What is QF PCR"
                    src={"https://qf-pcr-bucket.s3.ca-central-1.amazonaws.com/images/what_is_pcr_img.png"}
                />

            </Figure>
        <br></br>
        <br></br>
        <p>
            <strong>Denaturation</strong> (94-95C): the first step in PCR: where double stranded DNA become single stranded when the high temperature breaks the hydrogen bonds between the 2 strands.        
        </p>
        <p>
            <strong>Annealing</strong> (50-70C: a critical step for reaction specificity, dependent on the GC content of the primers), to allow the primers to find the complementary sequence in the genome and hybridize to form a double stranded region. The primer sequences need to be carefully designed to only match the region surrounding the area of interest (one primer on each side) in the genome to ensure that only the region of interest is amplified. The annealing temperature setting on the thermocycler is based on the melting temperature (the temperature at which 1/2 of the primers have dissociated from the template) of the primers.
        </p>
        <p>
            <strong>Extension</strong> (68-75C: dependent on the polymerase): DNA synthesis, where new nucleotides are added to the 3’ end of the primers via hydrogen bonding, creating a new DNA strand complementary to one of the template strands.
        </p>
        <p>
            This method allows lab workers to generate millions of copies of a relevant region of the genome to be used for analyses. The early cycles feature exponential amplification: every cycle doubles the amount of DNA, with the rate of amplification eventually decreasing in later stages as reagent are exhausted. 
        </p>
        <p>
            The key to QF-PCR detection of chromosome numbers is to stop the PCR reaction while it is still in the exponential phase: during this phase the amount of product is an accurate representation of the amount of starting material.
        </p>
        </div>
    },
    {
        id:"what-is-aneuploidy",
        title:"What is aneuploidy?",content: 
        <div>
            <p>What is {<PopOver text={'aneuploidy'}/>}, and why is it important in laboratory diagnosis of genetic disorders? </p>
            <p>
                The normal number of {<PopOver text={'chromosomes'}/>} in human cells is 46, grouped as 23 pairs. Since these chromosomes are paired, this means that the number of chromosomes in one complete set is 23, and human cells are {<PopOver text={'diploid'}/>}
            </p>
            <p>
                In practical terms, aneuploidy usually refers to a gain or loss of one chromosome. Most types of aneuploidy are not compatible with life, as the gain or loss of genomic material creates an imbalance in the genome. Aneuploidy is most commonly caused by chromosome {<PopOver text={'nondisjunction'}/>} during gamete formation.        <br></br>                                                
            </p>
            <p>
                In the diagnostic laboratory, aneuploidy is observed at a frequency of 0.5% in live births and ~50% in spontaneous pregnancy losses. In humans, the most common type of aneuploidy is {<PopOver text={'trisomy'}/>}.  Trisomies are a frequent finding in spontaneous pregnancy loss since most chromosomal trisomies are not compatible with life.  In live births, the most common human trisomy is trisomy 21.  Monosomy is less common and the only viable {<PopOver text={'monosomy'}/>} in humans involves the {<PopOver text={'sex chromosomes'}/>}.
            </p>
            <p>
            Examples of livebirth aneuploidy:
            <Table striped bordered className={"mt-3"}>
                <thead>
                    <tr>
                        <th>Condition</th><th>Frequency</th><th>Characteristics</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Down syndrome: <br></br>trisomy 21<br></br><img src={"https://qf-pcr-bucket.s3.ca-central-1.amazonaws.com/images/aneuploidy_trisomy_21.png"}></img></td><td>1/700 live births</td><td>flat facial profile, mental retardation, cardiac issues, abnormal immune system, eventual neuropathological disorder; increased risk of acute leukemia</td>
                    </tr>
                    <tr>
                        <td>Edwards syndrome: <br></br>trisomy 18<br></br><img src={"https://qf-pcr-bucket.s3.ca-central-1.amazonaws.com/images/aneuploidy_trisomy_18.png"}></img></td><td>1/3000 live births</td><td>intrauterine growth restriction, micrognathia (small lower jaw), horseshoe kidney, clenched fist, survival &lt;1 yr</td>
                    </tr>
                    <tr>
                        <td>Patau syndrome: <br></br>trisomy 13<br></br><img src={"https://qf-pcr-bucket.s3.ca-central-1.amazonaws.com/images/aneuploidy_trisomy_13.png"}></img></td><td>1/21700 live births</td><td>cleft palate, heart damage, mental retardation, survival &lt;6 mon</td>
                    </tr>
                    <tr>
                        <td>Klinefelter syndrome: <br></br>varies, but most often 47,XXY<br></br><img src={"https://qf-pcr-bucket.s3.ca-central-1.amazonaws.com/images/aneuploidy_klinefelter.png"}></img></td><td>1/500-650 live births</td><td>male hypogonadism, long legs, gynecomastia, low testosterone</td>
                    </tr>
                    <tr>
                        <td>XYY syndrome: 47,XYY </td><td>1/1000 live births</td><td>excessive height, acne 1%-2% behavioral disorders</td>
                    </tr>
                    <tr>
                        <td>Multi X: 47,XXX or 48,XXXX</td><td>1/1200 live births</td><td>Mental retardation increases with increasing X</td>
                    </tr>
                    <tr>
                        <td>Turner syndrome: <br></br>varies but most often 45,X (monosomy X)<br></br><img src={"https://qf-pcr-bucket.s3.ca-central-1.amazonaws.com/images/aneuploidy_monosomy_x.png"}></img></td><td>1/2000 – 1/5000 live births</td><td>bilateral neck webbing, heart disease, failure to develop secondary sex characteristics hypothyroidism</td>
                    </tr>
                </tbody>
            </Table>
            <span className="text-secondary">© 2007 Buckingham and Flaws © 2019 Delta Diagnostics (UK) ltd.</span>
            </p>
        </div>
    },
    {
        id:"why-test-aneuploidy",
        title:"Why test for aneuploidy?",content: <div>Two main indications for aneuploidy testing in the diagnostic laboratory:
            <br></br>
            <br></br>
            <ul>
                <li>
                    Follow up to prenatal genetic screening, non-invasive prenatal testing (NIPT) or other risk factors
                    <ul>
                        <li>test needs to be rapid so results can be used for pregnancy management, in consultation with health care provider</li>

                    </ul>
                </li>
                <li>
                    Assessment of pregnancy loss (PL)
                    <ul>
                        <li>10-15% clinically recognized pregnancies end in spontaneous miscarriage (PL)</li>
                        <li>86% of first trimester pregnancy losses with a genetic cause are due to a chromosome numerical abnormality, such as aneuploidy or {<PopOver text={'polyploidy'}/>}</li>
                        <li>testing can identify both the cause of pregnancy loss and provide information about recurrence risk in future pregnancies </li>
                    </ul>
                </li>
            </ul>
            
            This online module will provide practice for both prenatal and pregnancy loss cases.

        </div>
    },
    {
        id:"prenatal-pcr",
        title:"Prenatal QF-PCR",content: <div>
           These are the conditions that are assessed when performing prenatal QF-PCR:
           <Table striped bordered className={"mt-3"}>
                <thead>
                    <tr>
                        <th>Condition</th><th>Frequency</th><th>Characteristics</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Down syndrome: extra Chr 21</th><td>1/700 live births</td><td>flat facial profile, mental retardation, cardiac issues, abnormal immune system, eventual neuropathological disorder; increased risk of acute leukemia</td>
                    </tr>
                    <tr>
                        <th>Edwards syndrome: extra Chr 18</th><td>1/3000 live births</td><td>Intrauterine growth restriction, micrognathia (small lower jaw), horse shoe kidney, clenched fist, survival &lt;1 yr</td>
                    </tr>
                    <tr>
                        <th>Patau syndrome: extra chr 13</th><td>1/21700 live births</td><td>cleft palate, heart damage, mental retardation, survival &lt;6 mon</td>
                    </tr>
                    <tr>
                        <th>Klinefelter syndrome: varies, but most often 47,XXY</th><td>1/500-650 live births</td><td>male hypogonadism, long legs, gynecomastia, low testosterone</td>
                    </tr>
                    <tr>
                        <th>XYY syndrome: 47,XYY </th><td>1/1000 live births</td><td>excessive height, acne 1%-2% behavioral disorders</td>
                    </tr>
                    <tr>
                        <th>Multi X: 47,XXX or 48,XXXX</th><td>1/1200 live births</td><td>Mental retardation increases with increasing X</td>
                    </tr>
                    <tr>
                        <th>Turner syndrome: varies but most often 45,X</th><td>1/2000 – 1/5000 live births</td><td>bilateral neck webbing, heart disease, failure to develop secondary sex characteristics hypothyroidism</td>
                    </tr>
                </tbody>
           </Table>
           Some of these conditions are present as {<PopOver text={'mosaics'}/>}, which can make diagnosis more challenging (see example in Background QF-PCR section).
           <br></br>
           <br></br>
           Prenatal QF-PCR is ordered as a reflex test in response to prenatal {<PopOver text={'screens'}/>} such as: {<PopOver text={'integrated prenatal screen'}/>} (IPS), {<PopOver text={'serum integrated prenatal screen'}/>} (SIPS), {<PopOver text={'QUAD screen'}/>}, {<PopOver text={'first-trimester screening'}/>} (FTS) and {<PopOver text={'non-invasive prenatal screening'}/>} (NIPS). Other factors such as the person giving birth being &gt;40yrs at time of delivery, or family history may prompt QF-PCR to assess for trisomies. 
           <br></br>
           <br></br>
        <h5>Limitations of test:</h5>

Note that for followup diagnostic testing, such as QF-PCR, a positive result does not confirm that the fetus is affected, just as a negative result does not eliminate the possibility the fetus is affected. However, a negative result can exclude the tested aneuploidies as a diagnosis.
            <br></br>
            <br></br>
QF-PCR will detect whole chromosomal aneuploidy, but not balanced structural rearrangements, such as translocations or inversions. The underlying cause of the aneuploidy (i.e. nondisjunction or unbalanced structural rearrangement) is also not determined. Complications such as non-fetal cell contamination and confined placental mosaicism (CPM) may result in discrepancies between QF-PCR and karyotype results.
            <br></br>
            <br></br>
QF-PCR can be performed on DNA extracted from amniotic fluid cells, chorionic villus sampling (CVS) or fetal blood. 
            <br></br>
            <br></br>
           Examples of karyotypes showing chromosomal aneuploidy:
           <br></br>
           <br></br>
           <Figure>
                <Figure.Caption>
                    Trisomy 21
                </Figure.Caption>
                <Figure.Image
                    alt="Trisomy 21"
                    src={trisomy21}
                />
            </Figure>
            <Figure>
                <Figure.Caption>
                    Trisomy 18
                </Figure.Caption>
                <Figure.Image
                    alt="Trisomy 18"
                    src={trisomy18}
                />
            </Figure>
            <Figure>
                <Figure.Caption>
                    Trisomy 13
                </Figure.Caption>
                <Figure.Image
                    alt="Trisomy 13"
                    src={trisomy13}
                />
            </Figure>
            <Figure>
                <Figure.Caption>
                Klinefelter (47,XXY)
                </Figure.Caption>
                <Figure.Image
                    alt="Klinefelter (47,XXY)"
                    src={klinefelter_47XXY}
                />
            </Figure>
            <Figure>
                <Figure.Caption>
                Turner
                </Figure.Caption>
                <Figure.Image
                    alt="Turner"
                    src={turner}
                />
            </Figure>
        </div>
    },
    {
        id:"pcr-pregnancy-loss",
        title:"QF-PCR for Pregnancy Loss",content: <div>
            <p>
                Spontaneous pregnancy loss occurs in 10-15% of all clinically recognized pregnancies.   50-70% of all pregnancy losses are caused chromosomal abnormalities. There are many possible chromosomal abnormalities that can be detected in pregnancy loss samples.  The most common include: trisomy 16 , monosomy X, trisomy 22 and trisomy 21.  Other common findings are trisomies for chromosome 13, 15, and 18. The most common cause of this type of chromosomal abnormality is chromosome non-disjunction during meiosis.
            </p>
            <p>
                QF-PCR for PL is designed to assess copy number chromosomes 13, 15, 16, 18, 21, 22, X and Y.
            </p>
            <p>
                Common indications for testing pregnancy loss samples include: 
                <ul>
                    <li>unexplained spontaneous fetal loss</li>
                    <li>assessment after elected termination due to abnormal prenatal screen</li>
                    <li>stillbirth</li>
                    <li>recurrent pregnancy loss</li>
                </ul>
            </p>
            <br></br>
            <h5>Why use QF-PCR for PL cases?</h5>
            <p>
                Conventional assessment of pregnancy loss samples required culturing of cells which was associated with a 10-40% culture failure rate.  By combining QF-PCR with microarray testing, >98% of PL samples can be assessed for chromosome imbalances.
            </p>
            <br></br>

            <h5>Interpretation</h5>
            <ul>
                <li>normal: one peak or 2 peaks with similar peak areas</li>
                <img src={"https://qf-pcr-bucket.s3.ca-central-1.amazonaws.com/images/bg_1.png"}></img>
                <li>abnormal: 2 peaks with 1:2 or 2:1 ratio, or 2 peaks (with 1:1:1) ratio</li>
                <img src={"https://qf-pcr-bucket.s3.ca-central-1.amazonaws.com/images/bg_2.png"}></img>

            </ul>
            <h5>Limitations</h5>
            <p>
                <ul>
                    <li>as seen for prenatal RAD, only informative markers (must have at least 2 peaks) can be analyzed</li>
                    <li>Non-fetal cell contamination or mosaicism can complicate diagnosis as these situations can result in extra (often very short) peaks or unexpected peak area ratios</li>
                    <li>not all chromosomal numerical abnormalities can be detected by this method. The typical testing algorithm involves assessment for aneuploidy using the PL QF-PCR chromosome panel. For those with a normal QF-PCR results, the samples are then submitted for microarray testing to assess for imbalances not detectable by QF-PCR.  This approach is cost effective and provides a high detection rate.</li>
                </ul>
            </p>
        </div>
    }
];
import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import "../../styles/solutions.css";

const COMPARISON_DATA = [
    {
        id: "p1",
        barrier: { title: "Manual Process Fatigue", desc: "Valuable teams are slowed down by repetitive data entry, manual routing, and routine approvals." },
        solution: { title: "Intelligent Automation", desc: "We deploy AI-driven workflows to automate operational tasks, reducing manual effort and costs." },
    },
    {
        id: "p2",
        barrier: { title: "Unstructured Data", desc: "Critical business insights are trapped in PDFs, emails, and invoices, requiring manual extraction." },
        solution: { title: "Automated Processing", desc: "Our systems automatically extract and structure data from documents for instant availability." },
    },
    {
        id: "p3",
        barrier: { title: "Rigid Legacy Systems", desc: "Outdated software infrastructure limits agility and fails to integrate with modern tools." },
        solution: { title: "AI-Led Modernization", desc: "We refactor legacy systems into scalable, cloud-native architectures with embedded AI capabilities." },
    },
    {
        id: "p4",
        barrier: { title: "Fragmented Tech Stack", desc: "CRMs, ERPs, and internal tools operate in silos, creating visibility gaps and data errors." },
        solution: { title: "Seamless Orchestration", desc: "We integrate automation across your existing tools to ensure unified data flow and consistency." },
    },
    {
        id: "p5",
        barrier: { title: "Slow Time-to-Market", desc: "Traditional development cycles are too sluggish to keep up with evolving business demands." },
        solution: { title: "Accelerated Development", desc: "Custom software built with AI-assisted testing and quality assurance for faster, reliable deployment." },
    },
];

const rowVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
};

const barrierVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const solutionVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const connectorVariants = {
    hidden: { opacity: 0, scale: 0.6 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: "backOut", delay: 0.1 } },
};

export default function ComparisonSection()
{
    return (
        <section className="comparison-container">
            <div className="comparison-header">
                <h1>
                    <span className="highlight-left">Your Problem</span>
                    {" · "}
                    <span className="highlight-right">Our Solution</span>
                </h1>
                <p>Moving from barriers to breakthroughs.</p>
            </div>

            <div className="comparison-grid">
                <div className="grid-headers">
                    <span className="text-barrier">Barriers</span>
                    <span />
                    <span className="text-solution">Solutions</span>
                </div>

                {COMPARISON_DATA.map((item, index) => (
                    <motion.div
                        key={item.id}
                        className="comparison-row"
                        variants={rowVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-40px" }}
                    >
                        {/* BARRIER */}
                        <motion.div className="comp-side barrier-side" variants={barrierVariants}>
                            <div className="comp-icon">
                                <XCircle size={18} />
                            </div>
                            <div className="comp-text">
                                <h4>{item.barrier.title}</h4>
                                <p>{item.barrier.desc}</p>
                            </div>
                        </motion.div>

                        {/* CONNECTOR */}
                        <motion.div className="comp-connector" variants={connectorVariants}>
                            <div className="arrow-indicator">→</div>
                        </motion.div>

                        {/* SOLUTION */}
                        <motion.div className="comp-side solution-side" variants={solutionVariants}>
                            <div className="comp-icon">
                                <CheckCircle2 size={18} />
                            </div>
                            <div className="comp-text">
                                <h4>{item.solution.title}</h4>
                                <p>{item.solution.desc}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

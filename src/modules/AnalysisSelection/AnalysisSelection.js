
import Container from 'modules/Core/Container';
import Button from 'modules/Core/Button';
import Card from 'modules/Core/Card'
import { useNavigate } from "react-router-dom";
import IMG_CALOGO from 'images/CALOGO.svg';
import IMG_CSLOGO from 'images/CSLOGO.svg';
import IMG_WO from 'images/Wo.svg'
export default function AnalysisSelection() {
    const history = useNavigate();
    const handleBackButtonClicked = () => {
        console.log("Test");
        history("/", { replace: false });
    }
    const analysisOptions = [
        { icon: IMG_CALOGO, isActive: true, iconSize: "small", title: "Competitor Analysis", content: "Compare a set of companies across their products, customers, business models etc" },
        { icon: IMG_WO, iconSize: "small", title: "Interview Summaries", content: "Summarize interview transcripts across pre-defined parameters." },
        { icon: IMG_WO, iconSize: "small", title: "Value Chain Analysis", content: "For a selected industry, identify what are the key player archetypes and roles." },
        { icon: IMG_WO, iconSize: "small", title: "Due Diligence", content: "Quick extract of market and company insights from primary and secondary sources." },
        { icon: IMG_WO, iconSize: "small", title: "Business Model Attractiveness", content: "For a selected sector, identify key business models & compare across pre-defined parameters." },
        { icon: IMG_WO, iconSize: "small", title: "Cost Optimization Templates", content: "Summarize and compare cost heads and identify potential levers to optimize." },
    ]
    return (
        <Container>
            <div className="p-4"><Button onClick={handleBackButtonClicked}>Back</Button></div>

            <div className="flex pt-16 px-8 justify-center gap-12">
                <div className="w-1/4 flex flex-col items-center">
                    <h2 className="text-center text-2xl mb-8 font-bold text-slate-500"> Custom Search Tool</h2>
                    <Card orientation="vertical" isActive icon={IMG_CSLOGO} iconSize="large" content="Summarized results across multiple articles, across pre-generated and user-input questions"/>
                </div>

                <div className="w-2/4">
                    <h2 className="text-center text-2xl mb-8 font-bold text-slate-500">Templatized search</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {analysisOptions.map(card => {
                            return <Card key={card.title} {...card} />
                        })}
                    </div>
                </div>
            </div>

        </Container >
    )
}
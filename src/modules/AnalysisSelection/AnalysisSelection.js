
import Container from 'modules/Core/Container';
import Button from 'modules/Core/Button';
import Card from 'modules/Core/Card'
import { useNavigate } from "react-router-dom";
export default function AnalysisSelection() {
    const history = useNavigate();

    const handleBackButtonClicked = () => {
        console.log("Test");
        history("/", { replace: false });
    }
    return (
        <Container>
            <div className="p-4"><Button onClick={handleBackButtonClicked}>Back</Button></div>

            <div className="flex pt-16 px-8 justify-center gap-12">
                <div className="w-1/4 flex flex-col items-center">
                    <h2 className="text-center text-2xl mb-8"> Custom Search Tool</h2>
                    <Card>
                        <span className="text-slate-500 text-lg mb-12 text-justify">Summarized results across multiple articles, across pre-generated and user-input questions</span>
                    </Card>
                </div>

                <div className="w-2/4">
                    <h2 className="text-center text-2xl mb-8">Templatized search</h2>
                    <div className="grid grid-cols-2 gap-4">
                    <Card>
                        <span className="text-slate-500 text-lg mb-12 text-justify">Summarized results across multiple articles, across pre-generated and user-input questions</span>
                    </Card>
                    <Card>
                        <span className="text-slate-500 text-lg mb-12 text-justify">Summarized results across multiple articles, across pre-generated and user-input questions</span>
                    </Card>
                    <Card>
                        <span className="text-slate-500 text-lg mb-12 text-justify">Summarized results across multiple articles, across pre-generated and user-input questions</span>
                    </Card>
                    <Card>
                        <span className="text-slate-500 text-lg mb-12 text-justify">Summarized results across multiple articles, across pre-generated and user-input questions</span>
                    </Card>
                    <Card>
                        <span className="text-slate-500 text-lg mb-12 text-justify">Summarized results across multiple articles, across pre-generated and user-input questions</span>
                    </Card>
                    <Card>
                        <span className="text-slate-500 text-lg mb-12 text-justify">Summarized results across multiple articles, across pre-generated and user-input questions</span>
                    </Card>

                    </div>
                </div>
            </div>

        </Container >
    )
}
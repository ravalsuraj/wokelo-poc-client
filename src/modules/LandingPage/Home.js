import LandingPageIllustration from 'images/LandingPageIllustration1.svg';
import { useNavigate } from "react-router-dom";
import Container from 'modules/Core/Container'


export default function Home() {

    const history = useNavigate();

    function handleCreateNoteBookButtonClicked() {

        history("../analysis_selection", { replace: false });
    }

    return (
        <Container>
            <div className="h-full flex items-stretch justify-around">
                <section className="flex flex-col flex-1 px-12 mb-8 self-center">
                    <h1 className="headline text-6xl mb-8">
                        Welcome to <span className="text-blue-500">Wokelo</span>
                    </h1>
                    <p className="description text-slate-500 text-2xl mb-12 text-justify">
                        Wokelo is your personal AI research assistant. It enables you to do a custom search or a templatized search based on your requirements in a matter of minutes.
                    </p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded text-2xl" onClick={handleCreateNoteBookButtonClicked}>+ Create Notebook</button>
                </section>
                <section className="flex-1 self-center p-8">
                    <img src={LandingPageIllustration} alt="landingpageimage"></img>
                </section>
            </div>
        </Container>

    )
}
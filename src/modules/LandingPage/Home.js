import LandingPageIllustration from 'images/LandingPageIllustration1.svg';
import { useNavigate } from "react-router-dom";
import Container from 'modules/Core/Container';
import Button from 'modules/Core/Button';


export default function Home() {

    const history = useNavigate();

    function handleCreateNoteBookButtonClicked() {

        history("../analysis_selection", { replace: false });
    }

    return (
        <Container>
            <div className="h-full flex flex-col items-stretch justify-around md:flex-row pt-8">
                <section className="flex flex-col flex-1 px-4 lg:px-12 mb-8 self-center basis-full">
                    <h1 className="headline text-lg md:text-5xl mb-8">
                        Welcome to <span className="text-blue-500">Wokelo</span>
                    </h1>
                    <p className="description text-slate-500 text-sm md:text-md lg:text-2xl xl:text-3xl mb-12 text-justify">
                        Wokelo is your personal AI research assistant. It enables you to do a custom search or a templatized search based on your requirements in a matter of minutes.
                    </p>
                    <Button onClick={handleCreateNoteBookButtonClicked}>+ Create Notebook</Button>
                </section>
                <section className="flex-1 self-center p-8 basis-full">
                    <img className="w-full" src={LandingPageIllustration} alt="landingpageimage"></img>
                </section>
            </div>
        </Container>

    )
}
import { useDispatch, useSelector } from "react-redux";
import Backlog from "./Backlog";
import Done from "./Done";
import Evaluation from "./Evaluation";
import Progress from "./Progress";
import { checkInputContent, toBacklog } from "../store/actions/contentActions"

function Home () {

    const dispatch = useDispatch();
    const content = useSelector(({ content }) => content);

    return (
        <div className="container">
            <div className="row mb-3">
                {JSON.stringify(content)}
                <form className="mb-4">
                    {/* <input type="text" placeholder="New Task" className="col mx-2" />
                    <button className="btn btn-primary btn-sm col">Save to Backlog</button> */}
                    <input type="text" value={content.inputContent} onChange={(e) => dispatch(checkInputContent(e.target.value))} placeholder="New Task" className="col mx-2" />
                    <button onClick={ () => dispatch(toBacklog(content.inputContent)) } className="btn btn-primary btn-sm col">Save to Backlog</button>
                </form>
                <Backlog contentProps={[...content.backlogContent]} />
                <Progress contentProps={[...content.inProgressContent]} />
                <Evaluation contentProps={[...content.evaluationContent]} />
                <Done contentProps={[...content.doneContent]} />
            </div>
        </div>
    )
}
export default Home
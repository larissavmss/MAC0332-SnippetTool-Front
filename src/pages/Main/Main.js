import Header from "../../components/Header/Header";
import './Main.css'

const Main = () => {
    return (
        <div className="mainPage">
            <Header/>
            

            <button className="inputCreator">Criar novo snippet</button>


            <div className="snippetContainer">


                <div className="snippet">
                    <p className="snippetContent">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras faucibus arcu dolor, id tempus nisl varius sit amet. Nulla vitae interdum erat. Fusce vitae interdum sapien, nec pharetra urna. Ut non augue sit amet tellus efficitur suscipit. Maecenas sed scelerisque ante, cursus accumsan turpis. Duis lobortis tortor sed mi mollis sollicitudin. Donec eu quam est. Aenean mollis congue odio, vitae porta turpis finibus sed. Curabitur ullamcorper dapibus fermentum. Proin at mi at erat euismod convallis sed quis magna. Ut eu elit dui. Sed consequat pretium molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec elementum diam sapien, ut sagittis quam pretium id.
                    </p>
                    <h2 className="snippetTitle">Title of the first snippet</h2>
                    <div className="tagContainer">
                        <div className="snippetTag">Tag 1</div>
                        <div className="snippetTag">Tag 2</div>
                        <div className="snippetTag">Tag 3</div>
                        <div className="snippetTag">Tag 4</div>
                    </div>
                </div>


                <div className="snippet">
                    <p className="snippetContent">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras faucibus arcu dolor, id tempus nisl varius sit amet. Nulla vitae interdum erat. Fusce vitae interdum sapien, nec pharetra urna. Ut non augue sit amet tellus efficitur suscipit. Maecenas sed scelerisque ante, cursus accumsan turpis. 
                    </p>
                    <h2 className="snippetTitle">Title of the second snippet</h2>
                    <div className="tagContainer">
                        <div className="snippetTag">Tag 1</div>
                        <div className="snippetTag">Tag 2</div>
                    </div>
                </div>

                <div className="snippet">
                    <p className="snippetContent">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras faucibus arcu turpis. 
                    </p>
                    <h2 className="snippetTitle">Title</h2>
                    <div className="tagContainer">
                        <div className="snippetTag">Tag 1</div>
                    </div>
                </div>
    
                <div className="snippet">
                    <p className="snippetContent">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras faucibus arcu turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras faucibus arcu turpis. 
                    </p>
                    <h2 className="snippetTitle">Title</h2>
                    <div className="tagContainer">
                        <div className="snippetTag">Tag 1</div>
                        <div className="snippetTag">Tag 2</div>
                        <div className="snippetTag">Tag 3</div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Main;
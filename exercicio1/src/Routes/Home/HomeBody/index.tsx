import Button from "../../../components/Button";
import Card from "../../../components/Card";
import Header from "../../../components/Header";

export default function HomeBody() {

    return (
        <>
            <main>
                <section>
                    <div className='container'>
                        <div className="mt30 mb30">
                            <Card text="Página inicial!!!"/>
                        </div>
                        <div className="dflex">
                            <Button text="Ver promoção!!"/> 
                        </div>
                    </div>
                </section>
            </main>
        </>

    );
}
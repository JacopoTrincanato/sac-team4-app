import { Link, useParams } from "react-router"
import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";
import { useState } from "react";
import Searchbar from "../components/Searchbar";
export default function Contacts() {

    const { filteredParticipants, travels, setTravels } = useContext(GlobalContext)

    const { id } = useParams()
    const [travel, setTravel] = useState(travels[id])
    console.log(travel);
    return (
        <>
            <div className="container text-center">

                <Searchbar />

                <h1 className="mb-4">{travel.destinazione}</h1>
                {filteredParticipants.map((single, index) =>
                    <div className="card w-50 m-auto mb-3" key={index}>
                        <div className="card-body">
                            <span>{single.nome} </span>
                            <span>{single.cognome}</span>
                        </div>
                    </div>
                )}
                <Link className="btn btn-primary" to={'/'}>Home</Link>
            </div>
        </>
    )
}
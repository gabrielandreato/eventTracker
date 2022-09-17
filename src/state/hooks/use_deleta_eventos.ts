import {useSetRecoilState} from "recoil";
import {listaDeEventosState} from "../atom";
import {IEvento} from "../../interfaces/IEvento";


const useDeletaEventos = () => {

    const setListaDeEventos = useSetRecoilState(listaDeEventosState)

    return (evento: IEvento) => {
        return setListaDeEventos(listaAntiga => [...listaAntiga.filter(evt => evt.id !== evento.id)])
    }
}

export default useDeletaEventos
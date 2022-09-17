import {useRecoilValue} from "recoil";
import {listaDeEventosState} from "../atom";
import {IEvento} from "../../interfaces/IEvento";


const useListaEventos = () => {

    return useRecoilValue<IEvento[]>(listaDeEventosState);

}

export default useListaEventos

import React from 'react';
import {IEvento} from '../../../interfaces/IEvento';
import useAtualizarEventos from "../../../state/hooks/use_atualizar_evento";

const EventoCheckbox: React.FC<{ evento: IEvento}> = ({ evento }) => {
  
  const estilos = [
    'far',
    'fa-2x',
    evento.completo ? 'fa-check-square' : 'fa-square'
  ]

  const atualizarEvento = useAtualizarEventos()

  const alterarStatus = () => {
    const eventoAlterado = {
      ...evento
    }

    eventoAlterado.completo = !eventoAlterado.completo
    atualizarEvento(eventoAlterado)

  }

  return (<i className={estilos.join(' ')} onClick={alterarStatus}/>)
}

export default EventoCheckbox
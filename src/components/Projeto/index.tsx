import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'

import { Card, LinkBotao } from './styles'

type Props = {
  titulo: string
  descricao: string
  link: string
}

const Projeto = (props: Props) => (
  <Card>
    <Titulo>{props.titulo}</Titulo>
    <Paragrafo>{props.descricao}</Paragrafo>
    <LinkBotao href={props.link} target="_blank">
      Visualizar
    </LinkBotao>
  </Card>
)

export default Projeto

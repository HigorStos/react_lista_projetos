import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'

import {
  Nome,
  Descricao,
  SkillsIcons,
  Linkedin,
  BotaoTema,
  SidebarContainer
} from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Nome fontSize={20}>Higor Santos</Nome>
      <a href="https://github.com/higorstos" target="_blank" rel="noreferrer">
        <Paragrafo tipo="secundario" fontSize={16}>
          HigorStos
        </Paragrafo>
      </a>
      <Descricao tipo="principal" fontSize={12}>
        Desenvolvedor Front-End
      </Descricao>
      <SkillsIcons src="https://skillicons.dev/icons?i=react,ts,js" />
      <Paragrafo tipo="principal" fontSize={12}>
        Contato:
      </Paragrafo>
      <a href="mailto:higor.stos@outlook.com">
        <Paragrafo tipo="principal" fontSize={12}>
          higor.stos@outlook.com
        </Paragrafo>
      </a>
      <a
        href="https://www.linkedin.com/in/higorstos/"
        target="_blank"
        rel="noreferrer"
      >
        <Linkedin src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
      </a>
      <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar

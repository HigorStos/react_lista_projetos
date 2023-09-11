import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import {
  Nome,
  GithubUser,
  Descricao,
  BotaoTema,
  SkillsIcons,
  Contato,
  Linkedin,
  SidebarContainer
} from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Nome fontSize={20}>Higor Santos</Nome>
      <GithubUser href="https://github.com/higorstos" target="_blank">
        <Paragrafo tipo="secundario" fontSize={16}>
          HigorStos
        </Paragrafo>
      </GithubUser>
      <Descricao tipo="principal" fontSize={12}>
        Desenvolvedor Front-End
      </Descricao>
      <SkillsIcons src="https://skillicons.dev/icons?i=react,ts,js" />
      <Contato tipo="principal" fontSize={12}>
        Contato: higor.stos@outlook.com
      </Contato>
      <a
        href="https://www.linkedin.com/in/higorstos/"
        target="_blank"
        rel="noreferrer"
      >
        <Linkedin src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
      </a>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar

import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles'
import { Titulo } from '../../components/Titulo/styles'

export const Nome = styled(Titulo)`
  margin-bottom: 8px;
`

export const GithubUser = styled.a`
  text-decoration: none;
`

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 8px;
`

export const BotaoTema = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: #eee;
  font-size: 10px;
  font-weight: bold;
  background-color: #282a35;
  border: none;
  cursor: pointer;
`

export const SkillsIcons = styled.img`
  height: 32px;
  margin-bottom: 24px;
`

export const Contato = styled(P)`
  margin-bottom: 8px;
`

export const Linkedin = styled.img`
  margin-bottom: 40px;
  border-radius: 8px;
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
`
